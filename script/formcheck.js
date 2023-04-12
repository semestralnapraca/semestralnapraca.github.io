'use strict';
AOS.init()

let form = document.querySelector('#create-request');
let usernameInput = document.querySelector('#username');
let emailInput = document.querySelector('#email');
let secondName = document.querySelector('#Second_name')
let reload = document.getElementById('reload')
let form_block = document.querySelector('.form_block')
let loader = document.querySelector('.loader')
let sentMessage = document.getElementById('sent')
let signUp = document.getElementById('sign_up')
let btnStart = document.querySelectorAll('.start');
let registation = document.getElementById('reg');
let closeReg = document.getElementById('close_reg');
let closeForm = document.querySelectorAll('.close');
// const passwordInput = document.querySelector('#password');
// const confirmPasswordInput = document.querySelector('#confirm-password');

btnStart.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('open')
        if(item.classList.contains('open')){
            registation.classList.add('open');
            closeForm.forEach((item) =>{
                item.addEventListener('click', () => {
                    registation.classList.remove('open');
                })
            })
        }
    })
})


function loaderPlay() {
        loader.classList.add('play')
        setTimeout(()=>{loader.classList.remove('play')}, 3000);
        setTimeout(() => {sentMessage.classList.add('open')}, 3001)
        setTimeout(() => {
            registation.style.display = 'none'
            btnStart.forEach((item) => {
                item.removeAttribute("href");
                item.classList.add('visited')
            })
            sentMessage.classList.remove('open');
            closeForm.forEach((item) => {
                item.classList.display = 'none'
                })
        }, 4500)
}

form.addEventListener('click', (event) => { 
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        (function () {
            form_block.style.display = 'none';
            loaderPlay()
        }());
        // window.location.reload();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //USERNAME
    if(usernameInput.value.trim() == ''){
        setError(usernameInput, 'Name can not be empty');
    }else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length > 15){
        setError(usernameInput, 'Name must be min 5 and max 15 charecters');
    }else {
        setSuccess(usernameInput);
    }

    //SEcondName

    if(secondName.value.trim() == ''){
        setError(secondName, 'Second Name can not be empty');
    }else if(secondName.value.trim().length <5 || secondName.value.trim().length > 15){
        setError(secondName, 'Must be min 5 and max 15 charecters');
    }else {
        setSuccess(secondName);
    }

    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Provide valid email address');
    }

    // //PASSWORD
    // if(passwordInput.value.trim()==''){
    //     setError(passwordInput, 'Password can not be empty');
    // }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
    //     setError(passwordInput, 'Password min 6 max 20 charecters');
    // }else {
    //     setSuccess(passwordInput);
    // }
    // //CONFIRM PASSWORD
    // if(confirmPasswordInput.value.trim()==''){
    //     setError(confirmPasswordInput, 'Password can not be empty');
    // }else if(confirmPasswordInput.value !== passwordInput.value){
    //     setError(confirmPasswordInput, 'Password does not match');
    // }else {
    //     setSuccess(confirmPasswordInput);
    // }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email);
}
