const URLCharacter = 'https://thesimpsonsquoteapi.glitch.me/quotes'
const Btn_Change = document.getElementById('Change')

function Fetch_Characters() {
    fetch(URLCharacter)
    .then(response => response.json())
    .then(data => {





           
    })
}

Btn_Change.addEventListener('click', Fetch_Characters)