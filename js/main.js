//fetch using BreezoMeter using latitude, longitude, day count, and api key.

//Do: Find three APIs and build three simple apps using those APIs (Not all of these work, but it is a start: https://github.com/public-apis/public-apis)

document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value
    const url = 'https://pokeapi.co/api/v2/pokemon/' + choice

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}


document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) //saying:parse response as json
        .then(data => {
            console.log(data.drinks[0])
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions

        })

    .catch(err => {
        console.log(`error ${err}`)
    })
}