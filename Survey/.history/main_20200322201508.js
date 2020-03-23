const myName = document.getElementById('name');
const myEmail = document.getElementById('email');
const myForm = document.getElementById('survey-form');
const msg = document.querySelector('.msg')
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    if (myName.value === '' || myEmail.value === '') {
        msg.classList.add('.error');
        msg.innerHTML = "Please enter your name and email"


    }
}