//document.querySelector returns the first matched element from css
//if not match, return null.
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Checks if css element was caught.
// if(typeof wrapper !== 'underfined'){
//     console.log(0);
// }else{console.log(1);}

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
loginPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});
