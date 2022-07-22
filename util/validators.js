module.exports.validateRergisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors ={};
    if(username.trim() === ''){
        errors.username = 'Username cant be empty';
    }
    if(email.trim() === ''){
        errors.email = 'Email cant be empty';
    } else {
        const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email.match(regEx)){
            errors.email = 'Enter a Valid Email';
        }
    }
    if(password.trim() === ''){
        errors.password = 'Password cant be empty';
    } else if(password !== confirmPassword){
        errors.confirmPassword = 'Passwords must match';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.validateLoginInput =( username, password) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'Username cant be empty';
    }
    if(password.trim() === ''){
        errors.password = 'Password cant be empty';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}