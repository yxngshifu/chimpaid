const firstnameFn = document.querySelector('#firstname');
const lastnameLn = document.querySelector('#lastname');
const emailEl = document.querySelector('#email');
const passwordPd = document.querySelector('#password');
const confirmPasswordcp = document.querySelector('#confirm-password');
const form =document.querySelector('#signup');




const checkFirstname = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const firstname = firstnameFn.value.trim();

    if (!isRequired(firstname)) {
        showError(firstnameFn, 'first name cannot be blank.');
    } else if (!isBetween(firstname.length, min, max)) {
        showError(firstnameFn, `first name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(firstnameFn);
        valid = true;
    }
    return valid;
}

const checkLastname = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const lastname =lastnameLn.value.trim();

    if (!isRequired(lastname)) {
        showError(lastnameLn, 'last name cannot be blank.');
    } else if (!isBetween(lastname.length, min, max)) {
        showError(lastnameLn, `last must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(lastnameLn);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

const checkPassword = () => {

    let valid = false;

    const password = passwordPd.value.trim();

    if (!isRequired(password)) {
        showError(passwordPd, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordPd, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordPd);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
   
    const confirmPassword = confirmPasswordcp.value.trim();
    const password = passwordPd.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordcp, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordcp, 'Confirm password does not match');
    } else {
        showSuccess(confirmPasswordcp);
        valid = true;
    }

    return valid;
};

    const isEmailValid = (email) => {
    const re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

      const isPasswordSecure = (password) =>{
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
     
     const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

    const showError = (input, message) => {

    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};



const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}
form.addEventListener('submit', function (e) {

    e.preventDefault();

    
    let isFirstnameValid = checkFirstname(),
        isLastnameValid = checkLastname(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isFirstnameValid &&
        isLastnameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    if (isFormValid) {

    }
});

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'firstname':
            checkFirstname();
            break;
        case 'lastname':
              checkLastname();
              break;
                 
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'firstname':
            checkFirstname();
            break;
        case 'lastname':
            checkLastname();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));





