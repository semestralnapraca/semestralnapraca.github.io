'use strict'
let burgerBtn = document.getElementById('burger_btn');
let burgerMenu = document.getElementById('burger_menu');
let burgerNav = document.getElementById('burger_nav');
let closeBurger = document.getElementById('close_burger')
let demosVideo = document.getElementById('video_open');
let videoPlay = document.getElementById('video_play');
let closeVideo = document.querySelector('.close_video');
let burgerLinks = document.querySelectorAll('.burger_links');
const body = document.body;

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
  videoId: 'CND5kBKOXmw',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}

function close(){
    burgerBtn.classList.remove('open');
    burgerMenu.classList.remove('open');
    burgerNav.classList.remove('play');
    body.style.overflow = 'auto';
    body.style.height = "auto";
}

videoPlay.addEventListener('click', () => {
    demosVideo.classList.toggle('play');
    videoPlay.classList.toggle('play');
})

closeVideo.addEventListener('click', ()=>{
    demosVideo.classList.remove('play');
    videoPlay.classList.remove('play');
    stopVideo()
})

burgerBtn.addEventListener('click', () =>{
    burgerBtn.classList.toggle('open');
    burgerMenu.classList.toggle('open');
    if(burgerBtn.classList.contains('open')){
        setTimeout(()=>{burgerNav.classList.add('play')}, 200)
        body.style.overflow = 'hidden';
        body.style.height = "100vh";
    } else {
        body.style.overflow = 'auto';
        body.style.height = "auto";
        burgerNav.classList.remove('play')
    }
})

closeBurger.addEventListener("click", close)

burgerLinks.forEach((item) => {
    item.addEventListener('click', () => {
        close()
    })
})
