const myName = document.getElementById('name');
const myEmail = document.getElementById('email');
const myForm = document.querySelector('form');

//add msg to html
var msg = document.createElement('div');
var div = document.querySelector('.form-group');
msg.id = 'message';
myForm.insertBefore(msg, div);
//form action
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (myName.value === '' || myEmail.value === '') {

        msg.classList.add('error');
        msg.innerHTML = "Please enter your name and email"
        returnTop();
        setTimeout(() => msg.remove(), 2500);
        myForm.reset();
    }
    else {
        myName.value = '';
        myEmail.value = '';
    }
}
// function to return to top of page 
function returnTop() {
    document.documentElement.scrollTop = 0;
}