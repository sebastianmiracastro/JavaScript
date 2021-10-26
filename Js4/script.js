const NameUser = document.querySelector('#Name');
const PrintedNameUser = document.querySelector('#PrintedNameUser');
const Button = document.querySelector('#Button');
const Validate = document.querySelector('#Validate');

Button.addEventListener('click', SeeName);

function SeeName(){
    PrintedNameUser.textContent=NameUser.value.repeat(1);
}
