let submitButton = document.querySelector('#submit-button');

function emailValidate(email) {
    return email.includes('@');
}

function clickListener(event) {
    console.log('Email send function is not implemented yet')

    event.preventDefault();
    let emailInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');

    let emailText = emailInput.value;
    let messageText = messageInput.value;

    if (emailValidate(emailText) !== true) {
        console.log('The email address must contain @');
        return false;
    }
    let alert = "Hey " + emailText + ". Thanks for your message: \"" + messageText + "\"\n\n"
        + "Email send function is not implemented yet, therefore it will be not sent."

    window.alert(alert);
    console.log('Thanks for your message:', messageText);
}

submitButton.addEventListener('click', clickListener);