let ValidationNumber = document.getElementById('Validation');
const InputNumber = document.getElementById('InputNumber')

const NumberRam =  Math.floor(Math.random() * 20);

console.log(NumberRam);

InputNumber.addEventListener('keyup', Validate)

function Validate(event){
    if (event.keyCode == 13){
        if (NumberRam == InputNumber.value)
        {
            ValidationNumber.innerHTML = 'Has Adivinado El Numero'
            ValidationNumber.style.color = 'green'
        }
        else if (NumberRam > InputNumber.value){
            ValidationNumber.innerHTML = 'El Numero Es Mayor'
            ValidationNumber.style.color = 'red' 
        }
        else if (NumberRam < InputNumber.value){
            ValidationNumber.innerHTML = 'El Numero Es Menor'
            ValidationNumber.style.color = 'red'
        }    
    }
};

