const passwordInput = document.querySelector("#password");
const passwordRepeatInput = document.querySelector("#password-repeat");

passwordInput.addEventListener("input", CheckPasswords);
passwordRepeatInput.addEventListener("input", CheckPasswords);


function CheckPasswords() {
    console.log("type");
    if(passwordInput.value === passwordRepeatInput.value){
        passwordInput.classList.remove("error");
        passwordRepeatInput.classList.remove("error");
        console.log("yay");
        return;
    }
    passwordInput.classList.add("error");
    passwordRepeatInput.classList.add("error");
}

