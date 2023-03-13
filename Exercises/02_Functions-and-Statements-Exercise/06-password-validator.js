function passwordValidator(pass) {
    let passOnlyLettersAndDigits = /^[A-Za-z0-9]+$/g;   // /^[a-zA-Z0-9]+$/;
    let passMustHaveAtLeast = /^(.*\d){2}/g;            // /\d{2,}$/g;

    if (pass.length < 6 || pass.length > 10) {
        console.log('Password must be between 6 and 10 characters');
    } if (!pass.match(passOnlyLettersAndDigits)) {
        console.log('Password must consist only of letters and digits');
    } if (!pass.match(passMustHaveAtLeast)) {
        console.log('Password must have at least 2 digits');
    } else {
        console.log('Password is valid');
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s1');


