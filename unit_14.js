const cities = {
    2950158 : 'Berlin',
    703448 : 'Kiev',
    1705545 : 'Los Angeles',
    1816670 : 'Beijing',
    2147714 : 'Sydney',
    709930 : "Dnipro"
};

const selectElem = document.createElement('select');
selectElem.id = 'cities';
let label = document.querySelector('label');

for (const key in cities) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = cities[key];
    selectElem.append(option);
}
// for (const key of Object.keys(cities)) {
//     const option = document.createElement('option');
//     option.value = key;
//     option.textContent = cities[key];
//     selectElem.append(option);
// }

label.append(selectElem);



const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "d23f036bc127b61632defd1ab89580a1"
}

function getWeather() {
    const cityId = document.querySelector('#cities').value;

    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
		return weather.json();
	}).then(showWeather);
    
}

function showWeather(data) {
   console.log(data);
   document.querySelector('.icon-weather').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

   document.querySelector('.city-name').innerHTML = data.name; 
   document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '&deg;'; 
   document.querySelector('.precipitation').innerHTML = data.weather[0]['description'];
   document.querySelector('.wind').innerHTML = `wind speed ${data.wind['speed']}m/s <br> wind direction ${data.wind['deg']}deg <br> pressure ${Math.round(data.main['pressure']/1.33)}mm Hg`;

}

getWeather();
document.querySelector('#cities').onchange = getWeather;









   