// const URLCharacterEvilMory =  'https://rickandmortyapi.com/api/character/118'
// const URLCharacterRandyDicknose = 'https://rickandmortyapi.com/api/character/275'
// const URLCharacterRatBoss = 'https://rickandmortyapi.com/api/character/276'
// const URLCharacterDoubleMicrowawe = 'https://rickandmortyapi.com/api/character/550'
// const URLCharacterTooCuteToMurder = 'https://rickandmortyapi.com/api/character/715'
// const URlCharacterGobo = 'https://rickandmortyapi.com/api/character/147'
// const URLCharacterDuckWithMuscles = 'https://rickandmortyapi.com/api/character/109'
const URLAll = 'https://rickandmortyapi.com/api/character/'

const Name = document.getElementById('Name')
const Img = document.getElementById('Img')


function Fetch_characte() {
    fetch(URLAll)
    .then(response => response.json())
    .then(data => {
        create_cards(data)
    }).catch(error => console.log(error))
}

