const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

const inconHtml = document.querySelector('.row');

icons.forEach((element) => {
    inconHtml.innerHTML += `

    <div class="col-3 mt-3 mb-3 box">
        <div class="img-thumbnail immagine">
            <i class="text-center rounded mx-auto d-block ${element.family} ${element.prefix}${element.name} ${element.color}"></i>
            <div class="text-center">${element.name}</div>
        </div>
    </div>

    `
})


//seleziono il cambio


const cambio = document.getElementById("seleziona-icona").addEventListener("change", myFunction);

//funzione per il cambio type

function myFunction() {
    const cambio = document.getElementById("seleziona-icona").value;
    const inconHtml = document.querySelector('.row');
//azzero html
    inconHtml.innerHTML = '';
//seleziona cambio
    let iconeSelezionate = icons.filter((icona) => {
        if (cambio === 'all' || icona.type === cambio) {
            return true;
        } 
        else { 
            return false 
        }
    });

    iconeSelezionate.forEach((element) => {
        inconHtml.innerHTML += `

        <div class="col-3 mt-3 mb-3 box">
            <div class="img-thumbnail immagine">
                <i class="text-center rounded mx-auto d-block ${element.family} ${element.prefix}${element.name} ${element.color}"></i>
                <div class="text-center">${element.name}</div>
            </div>
        </div>

    `
    })
}