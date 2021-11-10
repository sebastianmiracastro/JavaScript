const URLCharacter = 'https://thesimpsonsquoteapi.glitch.me/quotes'
const Btn_Change = document.getElementById('Change')

function Fetch_Characters() {
    fetch(URLCharacter)
    .then(response => response.json())
    .then(data => {
        const container = document.createElement('div')
        const message = document.createElement('p')
        const characters = document.createElement('p')
        const img = document.createElement('img')
        const position = document.createElement('p')
        
        container.appendChild(message)
        container.appendChild(characters)
        container.appendChild(img)
        container.appendChild(position)
    })
}

Btn_Change.addEventListener('click', Fetch_Characters)

const data = [
]

