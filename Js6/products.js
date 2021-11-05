const products = [
    {id:2,name:'A Dos Metros De Ti',src:'Images/De Amor/ADosMetrosDeTi.jpg',price:'$30.000',category:'Terror'},
    {id:3,name:'Del Amor Y Otros Demonios',src:'Images/De Amor/DelAmorYOtrosDemonios.jpg',price:'$15.000',category:'Comedia'},
    {id:4,name:'Entre Dos Universos',src:'Images/De Amor/EntreDosUniversos.jpg',price:'$9.000',category:'Terror'},
    {id:5,name:'Don Quijote De La Mancha',src:'Images/De Amor/FuimosCancion.jpg',price:'$16.000',category:'Terror'},
    {id:6,name:'Lo Que El Viento Se LLevo',src:'Images/De Amor/LoQueElVientoSeLLevo.jpg',price:'$20.000',category:'Terror'},
    {id:7,name:'Orgullo Y Prejuicio',src:'Images/De Amor/OrgulloYPrejuicio.jpg',price:'$10.000',category:'Terror'},
    {id:8,name:'Un Beso En Paris',src:'Images/De Amor/UnBesoEnParis.jpg',price:'$23.000',category:'Terror'},
    {id:9,name:'Yo Antes De Ti',src:'Images/De Amor/YoAntesDeTi.jpg',price:'$15.000',category:'Terror'},
    {id:10,name:'¿Y Si Quedamos Como Amigos?',src:'Images/De Amor/YSiQuedamosComoAmigos.jpg',price:'$25.000',category:'Comedia'},
];

function filtrarPorCategory(category) {
    products.forEach(element => {
        if(element.category == category) {
            console.log(element);
        }
    });
}

// filtrarPorCategory('Terror');
// filtrarPorCategory('Comedia');