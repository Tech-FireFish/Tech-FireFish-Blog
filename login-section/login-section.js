const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");
const mainContentWrapper = document.querySelector(".main-content-wrapper");
// TEMP
// const loginForm = document.querySelector(".login-form");
// const registerForm = document.querySelector(".register-form");
registerLink.addEventListener('click',()=>{
    mainContentWrapper.classList.add('none');
});
loginLink.addEventListener('click',()=>{
    mainContentWrapper.classList.remove('none');
});
