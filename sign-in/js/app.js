const emailEl = document.querySelector('#email');
const passwordPd = document.querySelector('#password');
const form =document.querySelector('#signin');

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