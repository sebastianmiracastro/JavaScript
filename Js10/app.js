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

    CardContainer.style.color = "#1C1C1C"
    CardContainer.style.width = "17rem"
    CardContainer.style.height = "26rem"
    CardContainer.style.borderRadius = "15px"
    CardContainer.style.display = "flex"
    CardContainer.style.flexDirection = "column"
    CardContainer.style.alignItems = "center"
    CardContainer.style.margin = "0.5rem"
    CardContainer.style.background = "#9B9B9B"
    CardContainer.style.boxShadow = "0 0 20px #F4F4F4"

    ImgCard.style.width = "90%"
    ImgCard.style.height = "50%"
    ImgCard.style.boxShadow = "0 0 20px #9B9B9B"
    ImgCard.style.marginTop = "2rem"

    CardContainer.appendChild(NameCard)
    CardContainer.appendChild(ImgCard)
    CardContainer.appendChild(Gender)

    MainContainer.appendChild(CardContainer)
}