function _0x4830(_0x278e4a,_0x5d0601){const _0x2f2e18=_0x2f2e();return _0x4830=function(_0x4830fc,_0x31ade2){_0x4830fc=_0x4830fc-0x7b;let _0xd68b=_0x2f2e18[_0x4830fc];return _0xd68b;},_0x4830(_0x278e4a,_0x5d0601);}const _0xa6c42a=_0x4830;(function(_0x366d0c,_0x56f327){const _0x220280=_0x4830,_0x4611ea=_0x366d0c();while(!![]){try{const _0xa8c6d1=-parseInt(_0x220280(0x7d))/0x1+-parseInt(_0x220280(0x87))/0x2+parseInt(_0x220280(0x86))/0x3+parseInt(_0x220280(0x7b))/0x4+-parseInt(_0x220280(0x83))/0x5*(parseInt(_0x220280(0x7f))/0x6)+parseInt(_0x220280(0x80))/0x7+-parseInt(_0x220280(0x81))/0x8*(-parseInt(_0x220280(0x85))/0x9);if(_0xa8c6d1===_0x56f327)break;else _0x4611ea['push'](_0x4611ea['shift']());}catch(_0x1e3477){_0x4611ea['push'](_0x4611ea['shift']());}}}(_0x2f2e,0xc0736));let chars=_0xa6c42a(0x82),emptyChars='';for(let i=0x0;i<chars[_0xa6c42a(0x7c)];i++){let charCode=chars[_0xa6c42a(0x84)](i);if(charCode>=0x41&&charCode<=0x5a)emptyChars+=String['fromCharCode']((charCode-0x41-0x3+0x1a)%0x1a+0x41);else charCode>=0x61&&charCode<=0x7a?emptyChars+=String[_0xa6c42a(0x7e)]((charCode-0x61-0x3+0x1a)%0x1a+0x61):emptyChars+=chars[i];}function _0x2f2e(){const _0x44460=['2076098ZdfzQE','log','345524BPGGUn','length','774714QoJXBW','fromCharCode','174SBJCwp','2951627FyIyYX','2344QYbaYc','Dxwru\x20vwurqb:\x20Ilols\x20Srgjruvnl','177435KPDUnH','charCodeAt','69408wsINAr','2587518fdZdWD'];_0x2f2e=function(){return _0x44460;};return _0x2f2e();}console[_0xa6c42a(0x88)](emptyChars);
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const searchButton = document.querySelector('.search-button');
const apiKey = "b2cbe267c4846b4053f2c825d9173374";
const base = "https://api.openweathermap.org/data/2.5/";
const locationEl = document.querySelector('.location');
const currentWeatherEl = document.querySelector('.current-weather-location');
const tempEl = document.querySelector('.temp');
const forecastEl = document.querySelector('.forecast');

const days = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
const months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    
    timeEl.innerHTML = (hour < 10 ? '0' + hour : hour) + ':' + (minutes < 10 ? '0' + minutes : minutes);
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];
}, 100);

let searchValue = '';
let url = '';
let forecastUrl = '';
searchButton.addEventListener('click', function() {
    const searchInput = document.querySelector('.search');
    searchValue = searchInput.value;
    console.log(searchValue);
    url = base+'weather?q='+searchValue+'&appid='+apiKey+'&units=metric';
    forecastUrl = base+'forecast?q='+searchValue+'&appid='+apiKey+'&units=metric';
    console.log(url);
});

searchButton.addEventListener('click', function getCurrentWeather() {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data);
        const comma = ', ';
        let icon = data.weather['0'].icon;
        let temperature = data.main.temp;
        locationEl.innerHTML = `<i class='fas fa-location-arrow'></i> ${data.name}${comma}${data.sys.country}`;
        currentWeatherEl.innerHTML = `Pogoda dla: ${data.name}${comma}${data.sys.country}<img class="weather-img" src="https://openweathermap.org/img/wn/${icon}@4x.png">`;
        tempEl.innerHTML = `${Math.round(temperature)} °C`;
    });
});

function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    return formattedDate;
}

searchButton.addEventListener('click', function getForecast() {
    fetch(forecastUrl).then(resForecast => resForecast.json()).then(data =>{
        let forecastFirst = data.list['8'];
        let forecastSecond = data.list['16'];
        let forecastThird = data.list['24'];
        let forecastFourth = data.list['32'];
        let dateFirst = formatDate(forecastFirst.dt_txt)
        let dateSecond = formatDate(forecastSecond.dt_txt)
        let dateThird = formatDate(forecastThird.dt_txt)
        let dateFourth = formatDate(forecastFourth.dt_txt)
        let iconFirst = forecastFirst.weather['0'].icon;
        let iconSecond = forecastSecond.weather['0'].icon;
        let iconThird = forecastThird.weather['0'].icon;
        let iconFourth = forecastFourth.weather['0'].icon;
        let tempFirst = Math.round(forecastFirst.main.temp)
        let tempSecond = Math.round(forecastSecond.main.temp)
        let tempThird = Math.round(forecastThird.main.temp)
        let tempFourth = Math.round(forecastFourth.main.temp)
        console.log(data);
        console.log(forecastFirst);
        console.log(forecastSecond);
        console.log(forecastThird);
        console.log(forecastFourth);
        console.log(dateFirst);
        console.log(dateSecond);
        console.log(dateThird);
        console.log(dateFourth);
        forecastEl.innerHTML = `            
        <div class="forecast1">
            <p>${dateFirst}</p>
            <img class="weather-img" src="https://openweathermap.org/img/wn/${iconFirst}@2x.png">
            <p class="forecast-temp">${tempFirst} °C</p>
        </div>
        <div class="forecast2">
            <p>${dateSecond}</p>
            <img class="weather-img" src="https://openweathermap.org/img/wn/${iconSecond}@2x.png">
            <p class="forecast-temp">${tempSecond} °C</p>
        </div>
        <div class="forecast3">
            <p>${dateThird}</p>
            <img class="weather-img" src="https://openweathermap.org/img/wn/${iconThird}@2x.png">
            <p class="forecast-temp">${tempThird} °C</p>
        </div>
        <div class="forecast4">
            <p>${dateFourth}</p>
            <img class="weather-img" src="https://openweathermap.org/img/wn/${iconFourth}@2x.png">
            <p class="forecast-temp">${tempFourth} °C</p>
        </div>`
    });
});
