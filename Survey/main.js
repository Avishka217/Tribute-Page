const myName = document.getElementById('name');
const myEmail = document.getElementById('email');
const myForm = document.querySelector('form');
const msg = document.querySelector('.msg');
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (myName.value === '' || myEmail.value === '') {
        msg.classList.add('error');
        msg.innerHTML = "Please enter your name and email"

        setTimeout(() => msg.remove(), 2500);

    }
    else {
        myName.value = '';
        myEmail.value = '';
    }
}