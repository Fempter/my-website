let submitButton = document.querySelector('#submit-button');

function emailValidate(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

function clickListener(event) {
    event.preventDefault();
    let emailInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');

    let emailText = emailInput.value;
    let messageText = messageInput.value;

    if (emailValidate(emailText) !== true) {
        window.alert("You have entered an invalid email address!")
        return;
    }
    let alert = "Hey " + emailText + ". Thanks for your message: \"" + messageText + "\"\n\n"
        + "Email send function is not implemented yet, therefore it will be not sent."

    window.alert(alert);
}

window.onload = function () {
    document.getElementById("currentYear").innerHTML = new Date().getFullYear();
}


submitButton.addEventListener('click', clickListener);