function clickListener(event) {
    event.preventDefault()
    const alertMessage = getAlertMessage()
    window.alert(alertMessage)
}

function getAlertMessage() {
    if (!validateEmail()) {
        return "You have entered an invalid email address"
    } else if (!validateName()) {
        return "Your name is blank"
    } else if (!validateMessage()) {
        return "Your message is blank"
    }

    return "Email send function is not implemented yet, therefore it will be not sent."
}

function validateEmail() {
    //source https://www.w3resource.com/javascript/form/email-validation.php
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector('#email')?.value)
}

function validateName() {
    const name = document.querySelector('#name')?.value
    return typeof name === "string" && name.trim() !== ""
}

function validateMessage() {
    const message = document.querySelector('#message')?.value
    return typeof message === "string" && message.trim() !== ""
}

document.querySelector('#submit-button-wrapper').addEventListener('click', clickListener)

window.onload = function () {
    document.getElementById("currentYear").innerHTML = String(new Date().getFullYear())
}