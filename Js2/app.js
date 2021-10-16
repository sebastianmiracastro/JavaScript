console.log('Holap :p');

const Name = document.querySelector('#NameUser')
const Commentt = document.querySelector('#Comment')
const accountant = document.querySelector('#accountant')
const button = document.querySelector('#button')
const Initial = document.querySelector('#Initial')
const TextArea_Printed = document.querySelector('#TextArea_Printed')

button.addEventListener('click', IniTialName_and_PrintedText)

function IniTialName_and_PrintedText() {
    Initial_Name_User = Name.value.charAt(0).toUpperCase(0);
    Initial.textContent = Initial_Name_User;
    TextArea_Printed.textContent = Commentt.value;
}

Commentt.addEventListener('keydown', function(lockWrite) {
    const BtLenght = Commentt.value.length
    const MaxCharacters = 200;
    const SubtractingCounter = MaxCharacters - BtLenght;

    if (BtLenght >= MaxCharacters){
        lockWrite.preventDefault();
    }
    accountant.innerHTML = SubtractingCounter;

    if (SubtractingCounter <= 50){
        accountant.style.color='red' ;
        console.log('Sisas pa');
        
    }
    else if (SubtractingCounter <= 100){
        accountant.style.color='yellow';
    }
    else if (SubtractingCounter <= 200) {
        accountant.style.color='green';
    }
    else {
        accountant.style.color='black'
    }
});

