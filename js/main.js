//fetch pollen count forecast with BreezoMeter API intaking latitude & longitude, day count, and api key.

//Do: Find three APIs and build three simple apps using those APIs (Not all of these work, but it is a start: https://github.com/public-apis/public-apis)



document.querySelector('button').addEventListener('click', getLatLon)

function getLatLon() {
    let lat = document.querySelector('.lat').value
    let lon = document.querySelector('.lon').value

    fetch(`https://api.breezometer.com/pollen/v2/forecast/daily?lat=${lat}&lon=${lon}&key=34f470133dd84be7a0e67ff4ded7773a&features=types_information,plants_information&days=3&metadata=true`)
        .then(res => res.json())
        .then(data => {
            console.log(data.getLatLon)
            document.querySelector('h3').innerText = data.getLatLon

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}