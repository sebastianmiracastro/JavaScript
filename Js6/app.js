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
  btn_card.addEventListener('click', AddProducts)
  
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

/* Shopping Cart */

const Container_Products = document.getElementById('main');
const Btn_ShoppingCart = document.querySelector('.btn-marketcart')
const ShppingCart = document.querySelector('.Shopping-cart ocult')

ListSelectShoppingCart = []

const SeeShoppingCart = () =>{
    let  List = [... new Set(ListSelectShoppingCart)];

    List.forEach(item => {
        const All_Products = products.filter(ElementsProducts => {
            return ElementsProducts.id === parseInt(item)
        })
        let counter = 0;

        for(let id of ListSelectShoppingCart){
            if(id === item) {
                counter++;
            }
        }

        const CardProductCart = document.createElement('div')
        const Name = document.createElement('p');
        const Price = document.createElement('p')
        const Counters = document.createElement('p')
        const BTN_Sum = document.createElement('button')
        const BTN_Subtract = document.createElement('button')
        const BTN_Eliminate = document.createElement('button')
        
        BTN_Sum.setAttribute('id_product', All_Products[0].id);
        BTN_Subtract.setAttribute('id_product', All_Products[0].id);
        BTN_Eliminate.setAttribute('id_product', All_Products[0].id);

        Name.textContent = All_Products[0].name;
        Price.textContent = All_Products[0].price;
        BTN_Sum.textContent = '+';
        BTN_Subtract = '-';
        BTN_Eliminate.textContent = 'X';
        Counters.textContent = counter;

        CardProductCart.classList.add('card_render')
        CardProductCart.appendChild(Name);
        CardProductCart.appendChild(Price)
        CardProductCart.appendChild(Counters)
        CardProductCart.appendChild(BTN_Sum)
        CardProductCart.appendChild(BTN_Subtract)
        CardProductCart.appendChild(BTN_Eliminate)

        BTN_Sum.addEventListener('click', AddProducts)
        BTN_Subtract.addEventListener('click', SubtractProducts)
        BTN_Eliminate.addEventListener('click', EliminateProducts)
        ShppingCart.appendChild(CardProductCart)
    })
}

function AddProducts(e) {
    ListSelectShoppingCart.push(e.target.getAttribute('id'));
    SeeShoppingCart();
}