let select = document.querySelector('select')
let country = document.querySelector(`[value="${select.value}"]`).innerHTML
let result = document.querySelector('.result')

//console.log(select.value);
//console.log(country);



function generate() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${select.value},${country}&units=metric&lang=fr&appid=c65b019fe59221617776cb635070de57`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            result.innerHTML = `<h2>${data.name}</h2><p>La situation météo à ${data.name} est : ${data.weather[0].description}</p><p>🌡️ La température actuelle est de ${parseInt(data.main.temp)}°C</p><p>💧 Le taux d'humidité est de ${data.main.humidity}%</p><div class="image"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" class="ico-weather" alt="${data.weather[0].description}">`
        })
        .catch(error => {console.log("Erreur lors de la récup des données :", error);
        })
}


select.addEventListener('change', function(){
    generate()
})