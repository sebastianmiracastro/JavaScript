const main = document.querySelector('#principal-container');
const carrito = document.querySelector('#carrito')

const cart_colors = [];

create_Cards();
function create_Cards() {
  colors.forEach((color) => {
    const card = document.createElement('div');
    const title_card = document.createElement('h2');
    const button_card = document.createElement('button');
    const image_color = document.createElement('img');

    button_card.style.outline = '2px solid green';
    button_card.style.outlineOffset = '2px';

    button_card.addEventListener('click', agregarCarrito)
    button_card.setAttribute('id', color.id);

    button_card.textContent = 'Add';
    title_card.textContent = color.name.toUpperCase();
    image_color.src = color.img;    
    card.classList.add('card');
    card.style.backgroundColor = color.hex;

    if (color.hex === "#000000") {
      title_card.style.color = 'white';
    }

    card.appendChild(title_card);
    card.appendChild(image_color);
    card.appendChild(button_card);
    main.appendChild(card);    
  }); 
}


function agregarCarrito(event) {
  cart_colors.push(event.target.getAttribute('id'));
  console.log(cart_colors);
  pintarCarrito();
}

function pintarCarrito(){

  const index_unico = new Set(cart_colors)

  carrito.innerHTML = '';

  index_unico.forEach((element) => {
    const colors1 = colors.filter(item =>{
      return parseInt(element) === item.id;
    })
    
    const container_colors = document.createElement('div');
    container_colors.textContent = colors1[0].name;
    container_colors.textContent = colors1[0].hex;

    const nombre = document.createElement('p');
    const colors_text = document.createElement('p');

    container_colors.appendChild(nombre);
    container_colors.appendChild(colors_text)
    carrito.appendChild(container_colors)
  })
}