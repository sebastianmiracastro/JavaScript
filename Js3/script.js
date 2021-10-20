const button = document.getElementById("button");
const body = document.querySelector("body");
const colorNumber = document.querySelector(".color-number");
const colorCard = document.querySelector(".color-card");

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rbgColor = `rgb(${r},${g},${b})`;
  return rbgColor;
};

const setBackgrount = () => {
  const newColor = generateRandomColor();
  console.log(newColor);
  colorNumber.innerHTML = newColor;
  body.style.backgroundColor = newColor;
};

button.addEventListener("click", setBackgrount);

    //Usamos el metodo Math.Floor para retornear un numero entero
    //Con el Math.random() * 256 ( Este genera Numeros redondeados entre 0 y 256 )


    // =>
    //Ese es el llamado arrow function o función flecha, 
    //sirve como nueva sintaxis para especificar un nuevo tipo de funciones 
    //muy parecidas a las tradicionales excepto en algunas diferencias.