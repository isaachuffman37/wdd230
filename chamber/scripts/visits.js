const visitsElement = document.querySelector(".visits");
let beforeDate = Number(window.localStorage.getItem("visitDate-ls")) || 0;
let todayDate = Date.now();
const msToDays = 84600000;
let daysBetween;


if (beforeDate == 0) {
	visitsElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
	daysBetween = Math.floor((todayDate - beforeDate)/msToDays)
}

if(daysBetween && daysBetween != 0) {
    if(daysBetween > 1){
        visitsElement.textContent = `You last visited ${daysBetween} days ago.`;
    } else {
        visitsElement.textContent = `You last visited ${daysBetween} day ago.`;
    }
} else if (daysBetween == 0){
    visitsElement.textContent = "Back so soon! Awesome!"
}


localStorage.setItem("visitDate-ls", todayDate);