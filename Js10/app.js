const URL = 'https://rickandmortyapi.com/api/character/'
const SelectContainer = document.getElementById('SelectContainer')
const SeeCharacter = document.getElementById('AllCharacters')
const MainContainer = document.getElementById('MainContainer')

SelectContainer.addEventListener('click', OptionCharacters)

Character();

function Character() {
    fetch(URL).then(response => response.json()).then(data => {

        data.results.map((Element) => {
            const Name = document.createElement('option');
            Name.value = Element.name;
            Name.textContent = Element.name;

            SelectContainer.appendChild(Name)
        })
    })
    .catch(error => console.log(error));
}

function OptionCharacters() {
    const ContainerSelect1 = SelectContainer.value;
    fetch(URL).then((response) => response.json()).then((data) => {
        if (ContainerSelect1 === SeeCharacter.value) {
            MainContainer.innerHTML= '';
            data.results.map(e => {CreateCard(e)})
        }
        else {
            data.results.map(e => {
                if(e.name === ContainerSelect1){
                    MainContainer.innerHTML = ''; CreateCard(e)
                }
            })
        }
    })
}

const data = []

function CreateCard(data) {
    const CardContainer = document.createElement('div')
    const NameCard = document.createElement('h2')
    const ImgCard = document.createElement('img')
    const Gender = document.createElement('p')

    Gender.textContent = data.gender;
    NameCard.textContent = data.name;
    ImgCard.setAttribute('id', data.id)
    ImgCard.setAttribute('src', data.image)
    ImgCard.setAttribute('alt', data.name)

    CardContainer.appendChild(NameCard)
    CardContainer.appendChild(ImgCard)
    CardContainer.appendChild(Gender)

    MainContainer.appendChild(CardContainer)
}