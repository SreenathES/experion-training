function handleSubmit(e) {
    e.preventDefault();
    // const email = document.forms.login.email.value;
    const email = document.forms['login']['email'];
    const password = document.forms['login']['password'];
    const age = document.forms['login']['age'];

    const ageValue = age.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    
    // Validate password.
    const passwordErrorDisplay = password.nextElementSibling;
    if (passwordValue.length < 6) {
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li>Password must be at least 6 character.</li>';
    }
    if(passwordValue.includes(' ')){
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li>Password must not contain spaces.</li>';
    }

    // Validate age.
    const ageErrorDisplay = age.nextElementSibling;
    if (ageValue <= 18 || ageValue >= 100) {
        age.style.border = '1px solid red';
        ageErrorDisplay.classList.remove('d-none');
        ageErrorDisplay.innerHTML += '<li>Age between 18 and 100.</li>';
    }

    // if (emailValue.length < 10) {
    //     alert('invalid email');
    //     email.style.border = '1px solid red';
    //     email.nextElementSibling.classList.remove('d-none');
    // }
}