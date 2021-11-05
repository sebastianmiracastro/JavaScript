Shoppingcart = []

const Container_Products = document.querySelector('Container_All_Products');
const Btn_ShoppingCart = document.querySelector('.btn-marketcart')
const ShppingCart = document.querySelector('.Shopping-cart-ocult')

const SeeShoppingCart = () =>{
    ShppingCart.innerHTML = ''

    let  List = [... new Set(Shoppingcart)];

    List.forEach(item => {
        const All_Products = products.filter(products => {
            return products.id === parseInt(item)
        })
        let counter = 0;

        for(let id of Shoppingcart){
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

        CardProductCart.classList.add('product_card')
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


const SeeProducts = () => {
    products.forEach(items => {
        const product_card = document.createElement('div')
        const name_product = document.createElement('p')
        const price_product = document.createElement('p')
        const Btn_addToCart = document.createElement('button')

        name_product.textContent = items.name
        price_product.textContent = items.price
        Btn_addToCart.setAttribute('id_product', items.id)
        Btn_addToCart.textContent = 'Agregar al carrito'
        product_card.classList.add('card')
        Btn_addToCart.classList.add('button')
        Btn_addToCart.addEventListener('click', addToCart)

        product_card.appendChild(name_product)
        product_card.appendChild(price_product)
        product_card.appendChild(Btn_addToCart)

        Container_Products.appendChild(product_card)
    })
}

const SubtractProducts = (e) => {
    let item = e.target.getAttribute('id_product')
    Shoppingcart.splice(parseInt(Shoppingcart.indexOf(item)), 1)

}

const AddProducts = (e) => {
    
}