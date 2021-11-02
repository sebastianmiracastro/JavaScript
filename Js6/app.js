const main = document.getElementById('main');

const Shop = (name,src, price) => { 
  const card_render = document.createElement('div');
  const header_card = document.createElement('div');
  const h2_title = document.createElement('h2');
  const card_main = document.createElement('div');
  const div_image = document.createElement('div');
  const image_card = document.createElement('img');
  const btn_card = document.createElement('button');
  const price_p = document.createElement('p');
  
  card_render.classList.add('card');
  header_card.classList.add('header-card');
  h2_title.setAttribute('id', 'h2-card1');
  h2_title.textContent = name;
  card_main.classList.add('card-main');
  div_image.classList.add('card-image');
  image_card.setAttribute('src',src); 
  image_card.setAttribute('alt','Image Card');
  image_card.classList.add('img'); 
  price_p.classList.add('price_p');
  price_p.textContent = price
  
  btn_card.setAttribute('id','btn-card');
  btn_card.textContent = 'Order. . .';
  
  div_image.appendChild(image_card);
  header_card.appendChild(h2_title);
  card_render.appendChild(header_card);
  card_render.appendChild(card_main);
  card_render.appendChild(div_image);
  card_render.appendChild(price_p)
  card_render.appendChild(btn_card);
  main.appendChild(card_render);
}
function create_cards() {
  products.forEach(Shopping => {
    Shop(Shopping.name, Shopping.src, Shopping.price)
    console.log(products);
  })
}
create_cards();

