const currentTemp = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.getElementById("wind-speed"); 20.53376490246128, -86.96561702471104
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.53&lon=-86.96&units=imperial&appid=c7325e2828cc4975f54dc646010a14b2';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.53&lon=-86.96&units=imperial&appid=c7325e2828cc4975f54dc646010a14b2';
const forecastWeatherIcon = document.querySelector('.forecast-icon');
const forecastTemp = document.querySelector('.forecast-temp');
const forecastDescription = document.querySelector('.forecast-desc');
const mainIconDiv = document.querySelector('.main-icon-div');
const maxTemp = document.querySelector('.max-temp-value');

//6,
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            displayMaxTemp(data);
        } else {
            throw Error(await response.text());
        }
        const response2 = await fetch(forecastUrl);
        if (response2.ok) {
            const data2 = await response2.json();
            displayForcast(data2.list);
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
    let mainIcon = document.createElement('img');
    mainIcon.setAttribute('src', iconsrc);
    mainIcon.setAttribute('alt', desc);
    mainIcon.classList.add("weather-icon")
    mainIconDiv.appendChild(mainIcon)
    captionDesc.textContent = `${desc}`;
}

function displayForcast(data2) {
    var pm_list = [];
    for (let obj of data2){
        if (obj.dt_txt.includes("15:00:00")){
            pm_list.push(obj)
        } 
    }

    if(pm_list.length > 0){
        var weatherObj = pm_list[0];
        let desc = weatherObj.weather[0].description;
        const iconSrc = `https://openweathermap.org/img/w/${weatherObj.weather[0].icon}.png`;
        let icon = document.createElement('img');
        icon.setAttribute('src', iconSrc);
        icon.setAttribute('alt', desc);
        icon.classList.add("weather-icon");
        forecastWeatherIcon.appendChild(icon);
        forecastTemp.innerHTML = `${weatherObj.main.temp}&deg;F`;
        forecastDescription.textContent = `${desc}`;
    }
}

function displayMaxTemp(data){
    const sectionElement = document.querySelector(".max-temp");
    sectionElement.innerHTML = ` Today's Max Temp: ${data.main.temp_max}&deg;F`;
    sectionElement.style.border = "3px solid #a7c957";
    var clearButton = document.createElement("button");
    clearButton.textContent = "❌";
    clearButton.classList.add("clear-button");
    clearButton.addEventListener("click", clearContent);
    sectionElement.appendChild(clearButton);
}

function clearContent() {
    var sectionElement = document.querySelector(".max-temp");
    sectionElement.remove();
}

    
