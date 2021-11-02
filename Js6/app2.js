const main2 = document.getElementById('main2');

const Shop2 = (name2, src2, price2) => {
    const card_render2 = document.createElement('div');
    const header_card2 = document.createElement('div');
    const h2_title2 = document.createElement('h2');
    const card_main2 = document.createElement('div');
    const div_image2 = document.createElement('div');
    const image_card2 = document.createElement('img');
    const btn_card2 = document.createElement('button');
    const price_p2 = document.createElement('p');

    card_render2.classList.add('card2');
    header_card2.classList.add('header-card2');
    h2_title2.setAttribute('id', 'h2-card2');
    h2_title2.textContent = name2;
    card_main2.classList.add('card-main2')
    div_image2.classList.add('card-image2')
    image_card2.setAttribute('src', src2);
    image_card2.setAttribute('alt', 'Image Card2');
    image_card2.classList.add('img2');
    price_p2.classList.add('price_p2');
    price_p2.textContent = price2;

    btn_card2.setAttribute('id', 'btn-card2');
    btn_card2.textContent = 'Order. . .';

    div_image2.appendChild(image_card2);
    header_card2.appendChild(h2_title2);
    card_render2.appendChild(header_card2);
    card_render2.appendChild(card_main2);
    card_render2.appendChild(div_image2);
    card_render2.appendChild(price_p2);
    card_render2.appendChild(btn_card2);
    main2.appendChild(card_render2);
}

function create_cards2() {
    products2.forEach(Shopping2 => {
        Shop2(Shopping2.name2, Shopping2.src2, Shopping2.price2)
        console.log(products2);
    })
}
