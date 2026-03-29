const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const usernameError = document.getElementById("usernameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const confirmPassword = document.getElementById("confirmPassword");
const confirmPasswordError = document.getElementById("confirmPasswordError");

//load saved username when page opens
const storedUsername = localStorage.getItem("username");
console.log("username" + storedUsername);
if (storedUsername) {
    username.value = storedUsername;
}

//validate username
username.addEventListener('input', function () {
    if (username.validity.valueMissing) {
        username.setCustomValidity("Please enter username");
    } else if (username.validity.tooShort) {
        username.setCustomValidity("username must be at least 3 characters");
    } else if (username.validity.tooLong) {
        username.setCustomValidity("username must be max 20 characters")
    } else {
        username.setCustomValidity("");
    }
    //show the current validation message of username in the error span
    usernameError.textContent = username.validationMessage;
});

//validate email
email.addEventListener('input', function () {
    if (email.validity.valueMissing) {
        email.setCustomValidity("Please enter Email");
    } else if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter valid Email address");
    } else if (email.validity.tooShort) {
        email.setCustomValidity("Email is too short")
    } else if (email.validity.tooLong) {
        email.setCustomValidity("Email is too long");
    } else {
        email.setCustomValidity("")
    }
    ////show the current validation of message of email in the error span
    emailError.textContent = email.validationMessage
});

//validate password
password.addEventListener('input', () => {
    if (password.validity.valueMissing) {
        password.setCustomValidity("Please enter Password")
    } else if (password.validity.tooShort) {
        password.setCustomValidity("Password is too short");

    } else if (password.validity.tooLong) {
        password.setCustomValidity("Password is too long");
    } else if (password.validity.patternMismatch) {
        password.setCustomValidity(
            "Password must include at least one Uppercase letter, one lowercase letter, and one number");
    } else {
        password.setCustomValidity("");
    }
    //show the current validation message of password in the error span
    passwordError.textContent = password.validationMessage;
    //if confirm password already has a value, re-check it when password changes
    if (confirmPassword.value !== "") {
        if (confirmPassword.value !== password.value) {
            confirmPassword.setCustomValidity("Passwords do not match");
        } else {
            confirmPassword.setCustomValidity("");
        }
        //show the current validation message of confirm password in the error span
        confirmPasswordError.textContent = confirmPassword.validationMessage;
    }
});

//validate confirm password
confirmPassword.addEventListener('input', function () {
    if (confirmPassword.validity.valueMissing) {
        confirmPassword.setCustomValidity("Please confirm your password");
    } else if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    } else {
        confirmPassword.setCustomValidity("");
    }
    //show the current validation message of confirm password in the error span
    confirmPasswordError.textContent = confirmPassword.validationMessage;
});

//Final check when the form is submitted
form.addEventListener('submit', function (event) {
    event.preventDefault();

    //show validation messages for all fields if the user submits the form directly 
    usernameError.textContent = username.validationMessage;
    emailError.textContent = email.validationMessage;
    passwordError.textContent = password.validationMessage;
    confirmPasswordError.textContent = confirmPassword.validationMessage;

    if (
        username.validity.valid &&
        email.validity.valid &&
        password.validity.valid &&
        confirmPassword.validity.valid &&
        password.value === confirmPassword.value
    ) {
        //save username in localstorage
        localStorage.setItem("username", username.value);

        alert('Registration successfull');

        form.reset();
        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

    }
});
