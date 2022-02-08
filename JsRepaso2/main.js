const counter = document.getElementById('counter')
const jsImage = document.getElementById('JsImage')
const addCount = document.getElementById('btnAdd');
const substractCount = document.getElementById('btnSubtract');
const resetCount = document.getElementById('btnReset');
const containerCount = document.getElementById('containerCount')

addCount.addEventListener('click', aCount);

function aCount() {
    counting++;
    counter.textContent = counting;
    if (counting > 0) {
        jsImage.style.filter = "brightness()"
        containerCount.style.backgroundColor = "green"
    }  
}

let counting = 0;

substractCount.addEventListener('click', sCount);

function sCount() {
    counting--;
    counter.textContent = counting;  
    if (counting < 0) {
      jsImage.style.filter = "grayscale()"
      containerCount.style.backgroundColor = "red"
  }
  }
resetCount.addEventListener('click', rCount);


function rCount() {
    counting = 0;
    counter.textContent = counting;
    if (counting = 0) {
        containerCount.style.backgroundColor = "black"
    }
}


// Explicacion para nata: Porque usar Let y NO const,
// al momento de yo definir esta variable como constante
// Esta no me permitiria cambiar su valor.

// Cuando se usa let, esta cambia su valor, SOLO en el bloque 
// donde se declaro 

// Y pues de paso el var, Esta tambien se puede cambiar 
// en scope(Osea es donde pusimos a 'Vivir' esta varibale
// en este caso, En este archivo .js) local.


// Porque cambie de logica? JAJAJAJA
// Me parecio un poco mas practico, definir una variable en
// este archivo Js, y despues reemplazarla cada que se actualize
// Alli en el DOM, con el textContent que ya teniamos anteriormente
// Ya que pensando en el dia de hoy con python, me acorde de una funcion
// de los ciclos, la cual era variable++ (Esto funciona para que se sume 1
// cada que vuelva a ejecutarse la funcion) la probe aqui, ya que nunca
// lo habia hecho y funciono, entonces eso me facilito el trabajo
// y pues temas de condicionales ya sabes, e igual lo del manejo del DOM
// desde Js. 

// ¡IMPORTANTE! estudia lo de los REGEX en Js