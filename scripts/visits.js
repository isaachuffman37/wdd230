const visitsElement = document.querySelector(".visits");
let visitsCount = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (visitsCount !== 0) {
	visitsElement.textContent = visitsCount;
} else {
	visitsElement.textContent = `First time visit!`;
}

visitsCount++;

localStorage.setItem("numVisits-ls", visitsCount);
