const URLCharacter = 'https://thesimpsonsquoteapi.glitch.me/quotes'
const Btn_Change = document.getElementById('Change')
const Tittle = document.getElementById('h2')
const Txt = document.getElementById('h5')
const ImgCard = document.querySelector('.Img')
const Direction = document.querySelector('#Direction')

function Fetch_Characters() {
    fetch(URLCharacter)
    .then(response => response.json())
    .then(data => {
        createCar(data)
    }).catch(error => console.log(error))
}

Btn_Change.addEventListener('click', Fetch_Characters)

const data = [
]

Fetch_Characters();

function createCar(data) {
    Tittle.textContent = data[0].character;
    Txt.textContent = data[0].quote;
    ImgCard.setAttribute('src', data[0].image)
    Direction.textContent = data[0].characterDirection;
}