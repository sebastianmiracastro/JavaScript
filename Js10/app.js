const URLAll = 'https://rickandmortyapi.com/api/character/'
const SelectContainer = document.getElementById('SelectContainer')
const SeeCharacter = document.getElementById('AllCharacters')
const character = document.getElementById('Character')

function Character() {
    fetch(URLAll).then(response => response.json()).then(data => {

        data.results.map((Element) => {
            const Name = document.createElement('option');
            Name.value = Element.name;
            Name.textContent = Element.name;

            SelectContainer.appendChild(Name)
        })
    })
    .catch(error => console.log(error));
}

Character();

SelectContainer.addEventListener('click', OptionCharacters)

function OptionCharacters() {
    const ContainerSelect1 = SelectContainer.value;
    fetch(URLAll).then((response) => response.json()).then((data) => {
        if (ContainerSelect1 === SeeCharacter.value) {
            character.innerHTML= '';
            data.results.map(element => {CreateCart(element)})
        }
        else {
            data.results.map(element => {
                if(element.name === ContainerSelect1){
                    character.innerHTML = ''; CreateCart(element)
                }
            })
        }
    })
}

