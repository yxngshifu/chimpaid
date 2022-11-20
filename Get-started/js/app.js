const firstnameF1 = document.querySelector('#firstname');
const lastnameL1 = document.querySelector('#lastname');
const emailE1 = document.querySelector('#email');
const passwordP1 = document.querySelector('#password');
const confirmPasswordP2 = document.querySelector('#confirm-password');
const form =document.querySelector('#signup');


form.addEventListener('submit', function (e) {

    e.preventDefault();


});

const isEmailValid = (email) => {
    const re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};



const isPasswordSecure = (password) =>{
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};





