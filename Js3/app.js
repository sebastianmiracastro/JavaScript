const Button = document.querySelector("#Button");
const body = document.querySelector("#body");
const colorNumber = document.querySelector("#color-number");
const colorCard = document.querySelector("#color_card")


//Ese es el llamado arrow function o función flecha, 
//sirve como nueva sintaxis para especificar un nuevo tipo de funciones 
//muy parecidas a las tradicionales excepto en algunas diferencias.
const GenerateRandomColor = () => {
    //Usamos el metodo Math.Floor para retornear un numero entero
    //Con el Math.random() * 256 ( Este genera Numeros redondeados entre 0 y 256 )
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const RgbColors = `rgb(${r},${g},${b})`;
    return RgbColors;
}

function ColorRandom() {
    const OtherColor = GenerateRandomColor();
    colorNumber.innerHTML = OtherColor;
    document.querySelector("#body").style.backgroundColor = OtherColor;
}

Button.addEventListener('click', ColorRandom);

