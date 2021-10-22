const button = document.getElementById("button");
const body = document.querySelector("body");
const colorNumber = document.querySelector("#color-number");
const Tittle = document.querySelector("#title")
const container = document.querySelector(".container")

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rbgColor = `rgb(${r},${g},${b})`;
  return rbgColor;
};

const setBackgrount = () => {
  const newColor = generateRandomColor();
  colorNumber.innerHTML = newColor;
  //colorNumber.style.color= newColor;
  //body.style.backgroundColor = newColor;
  //button.style.background = newColor;
  //Tittle.style.color = newColor;
  container.style.backgroundColor = newColor;

};

button.addEventListener("click", setBackgrount);

    //Usamos el metodo Math.Floor para retornear un numero entero
    //Con el Math.random() * 256 ( Este genera Numeros redondeados entre 0 y 256 )


    // =>
    //Ese es el llamado arrow function o función flecha, 
    //sirve como nueva sintaxis para especificar un nuevo tipo de funciones 
    //muy parecidas a las tradicionales excepto en algunas diferencias.

    // innerHTML
    //innerHTML devuelve o establece la sintaxis HTML describiendo los 
    //descendientes del elemento. Al establecerse se reemplaza la sintaxis 
    //HTML del elemento por la nueva.