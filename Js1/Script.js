const user = document.querySelector('#user')

//const age = document.querySelector('#age')//

const btn_verificate = document.querySelector('#btn_verificate')

const date_birthday = document.querySelector('#date')

const text = document.querySelector('#text')

//btn_verificate.addEventListener('click', AgeMove)

//function AgeMove(){
    //if(parseInt(age.value) < 0) {
        //text.textContent = (user.value) + ' Aún No Existe En El Mundo!'
    //}
    //else if (parseInt(age.value) >= 18) {
        //text.textContent = (user.value) + ' Es mayor de Edad, Puede Votar!'
    //}
    //else if(parseInt(age.value) < 17) {
        //text.textContent = (user.value) + ' No Es Mayor De Edad, No Puede Votar!'
    //}
//}//

btn_verificate.addEventListener('click', calculate_age);

function calculate_age() {

    let current_date = new Date()

    let birth = date_birthday.value.split('-');
    console.log(birth);

    RestYear = birth[0] - current_date.getFullYear();
    RestMonth = birth[1] - (current_date.getMonth()+1); 
    RestDay = birth[2] - current_date.getDate();
    if (RestYear <=0 && RestMonth <= 0 && RestDay <=0){
        text.textContent = (user.value) + ' Es mayor de edad!'
    }
    else {
        text.textContent = (user.value) + ' No  es mayor de edad!'
    }
}

//const msj = 'Hola bien o que'
//const array = msj.split(' ')
//console.log(array);

//let birthday = date_birthday.value.split('-'); 'Es separada por Guiones'