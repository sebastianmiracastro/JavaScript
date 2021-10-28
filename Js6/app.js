const main = document.getElementById('main');

function create_cards(count_card) {
  for (let i = 0; i < count_card; i++) {
    const card_render = document.createElement('div');
    const header_card = document.createElement('div');
    const h2_title = document.createElement('h2');
    const card_main = document.createElement('div');
    const div_image = document.createElement('div');
    const image_card = document.createElement('img');
    const btn_card = document.createElement('button');

    card_render.classList.add('card');
    header_card.classList.add('header-card');
    h2_title.setAttribute('id', 'h2');
    h2_title.textContent = 'Card Example';
    card_main.classList.add('card-main');
    div_image.classList.add('card-image');
    image_card.setAttribute('src','Images/img_Card.jpg'); 
    image_card.setAttribute('alt','Image Card');
    image_card.classList.add('img'); 

    btn_card.setAttribute('id','btn-card');
    btn_card.textContent = 'More...';
    

    div_image.appendChild(image_card);
    header_card.appendChild(h2_title);
    card_render.appendChild(header_card);
    card_render.appendChild(card_main);
    card_render.appendChild(div_image);
    card_render.appendChild(btn_card);
    main.appendChild(card_render);
  }
}

create_cards(40);

