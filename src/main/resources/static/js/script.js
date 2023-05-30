let submitButton = document.querySelector('#submit-button-wrapper');

function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

function validateName(name) {
    return name && String(name).trim() !== "";
}

function validateMessage(message) {
    return message && String(message).trim() !== "";
}

function clickListener(event) {
    let emailInput = document.querySelector('#email')?.value;
    let nameInput = document.querySelector('#name')?.value;
    let messageInput = document.querySelector('#message')?.value;

    if (!validateEmail(emailInput)) {
        window.alert("You have entered an invalid email address")
        event.preventDefault();
        return;
    }
    if (!validateName(nameInput)) {
        window.alert("Your name is blank")
        event.preventDefault();
        return;
    }
    if (!validateMessage(messageInput)) {
        window.alert("Your message is blank")
        event.preventDefault();
        return;
    }

    if (true) {
        event.preventDefault();
        let alert = "Email send function is not implemented yet, therefore it will be not sent."
        window.alert(alert);
        return
    }

    window.alert("Your message have been successfully sent")
}

window.onload = function () {
    document.getElementById("currentYear").innerHTML = String(new Date().getFullYear());
}

submitButton.addEventListener('click', clickListener);