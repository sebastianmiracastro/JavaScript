const URLAll = 'https://rickandmortyapi.com/api/character/'

const Name = document.getElementById('Name')
const Img = document.getElementById('Img')
const SelectionCharacter = document.getElementById('SelectionCharacter')
const Options = document.getElementById('Options') 
const SexType = document.getElementById('SexType')
const container = document.getElementById('container')

function Fetch_characte() {
    fetch(URLAll)
    .then(response => response.json())
    .then(data => console.log(data.results[0].name, data.results[0].gender, data.results[0].image))
}
const data = []
 
Fetch_characte();


function Create_Card(data) {
    const cards1 = document.createElement('div');
    const CardsOption = document.createElement('select')
    const name_card = document.createElement('option');
    const image_card = document.createElement('img');
    const gender_card = document.createElement('p');

    name_card.textContent = data.results[0].name;
    gender_card.textContent = data.results[0].gender;
    image_card.setAttribute('src', data.results[0].image);

    cards1.appendChild(CardsOption)
    cards1.appendChild(name_card)
    cards1.appendChild(gender_card)
    cards1.appendChild(image_card)
    container.appendChild(cards1)
}