const NameUser = document.querySelector('#Name');
const PrintedNameUser = document.querySelector('#PrintedNameUser');
const Button = document.querySelector('#Button');
const Validate = document.querySelector('#Validate');

Button.addEventListener('click', SeeName);

function SeeName(){
    PrintedNameUser.textContent=NameUser.value.repeat(1);
}

const Signs = NameUser.value.includes('+', '-', '*', '/', '_', ',', '.', ':', '?', '¿', '<', '>', '=');

NameUser.addEventListener('keyup', function(){

    if (NameUser.value.includes('+') || NameUser.value.includes('-') || NameUser.value.includes('/') || NameUser.value.includes('*') || NameUser.value.includes('_')  || NameUser.value.includes(':') || NameUser.value.includes('.') || NameUser.value.includes(',')  || NameUser.value.includes('?') || NameUser.value.includes('¿') || NameUser.value.includes('<') || NameUser.value.includes('>') || NameUser.value.includes('=')){
        Validate.textContent = 'No Se Admite Signos: +, -, /, *, _.';
        Validate.style.color = 'red';
        Button.disabled = true;
    }
    else{
        Validate.textContent = 'Usuario Valido'; 
        Validate.style.color = 'green';
        Button.disabled = false
    }
})