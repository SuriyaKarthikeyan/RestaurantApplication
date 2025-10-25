export const validateStatus = (email,password,fullname=null) => {

    if(fullname) {
    const regexFullName =  /^[a-zA-Z][a-zA-Z]{2,15}$/; //only letters are allowed. must be between 3 and 16 chars long.
    const fullNameValidation = regexFullName.test(fullname);
    
    if(!fullNameValidation) return "Full Name not valid. Only letters are allowed and must be between 3 and 16 chars long";
    }

    const regexEmailAddress = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValidation = regexEmailAddress.test(email);

    if(!emailValidation) return "Email Address not valid";

    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const pwdValidation = regexPassword.test(password);

    if(!pwdValidation) return "Password must be atleast 8 chars long; must have 1 uppercase, 1 lowercase, 1 digit and 1 Special Char";
    
    return null;
}