const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.getElementById("wind-speed");
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.47&lon=-110.76&units=imperial&appid=c7325e2828cc4975f54dc646010a14b2';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.47&lon=-110.76&units=imperial&appid=c7325e2828cc4975f54dc646010a14b2';
const weatherIcon1 = document.querySelector('#icon1');
const weatherIcon2 = document.querySelector('#icon2');
const weatherIcon3 = document.querySelector('#icon3');
const temp1 = document.querySelector('#day1-temp');
const temp2 = document.querySelector('#day2-temp');
const temp3 = document.querySelector('#day3-temp');
const description1 = document.querySelector('.desc-1');
const description2 = document.querySelector('.desc-2');
const description3 = document.querySelector('.desc-3');

//6,
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
        const response2 = await fetch(forecastUrl);
        if (response2.ok) {
            const data2 = await response2.json();
            displayForcast(data2);
        } else {
            throw Error(await response2.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    windSpeed.textContent = `${data.wind.speed}`
}

function displayForcast(data2) {
    const day1 = data2.list[6];
    const day2 = data2.list[14];
    const day3 = data2.list[22];
    let desc1 = day1.weather[0].description;
    let desc2 = day2.weather[0].description;
    let desc3 = day3.weather[0].description;
    const icon1src = `https://openweathermap.org/img/w/${day1.weather[0].icon}.png`;
    const icon2src = `https://openweathermap.org/img/w/${day2.weather[0].icon}.png`;
    const icon3src = `https://openweathermap.org/img/w/${day3.weather[0].icon}.png`;
    weatherIcon1.setAttribute('src', icon1src);
    weatherIcon1.setAttribute('alt', desc1);
    weatherIcon2.setAttribute('src', icon2src);
    weatherIcon2.setAttribute('alt', desc2);
    weatherIcon3.setAttribute('src', icon3src);
    weatherIcon3.setAttribute('alt', desc3);
    temp1.innerHTML = `${day1.main.temp}&deg;F`; 
    temp2.innerHTML = `${day2.main.temp}&deg;F`;
    temp3.innerHTML = `${day3.main.temp}&deg;F`;
    description1.textContent = `${desc1}`;
    description2.textContent = `${desc2}`;
    description3.textContent = `${desc3}`;

}
