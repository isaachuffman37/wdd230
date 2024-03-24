function populateDivOnSpecificDays() {
    var currentDate = new Date();
    var dayOfWeek = currentDate.getDay();
    var allowedDays = [1, 2, 3]; // Monday, Tuesday, Wednesday
    if (allowedDays.includes(dayOfWeek)) {
        const sectionElement = document.querySelector(".banner-section");
        sectionElement.innerHTML = "Attend the chamber of commerce meet and greet on Wednesday at 7:00 p.m!";
        sectionElement.style.border = "1px solid black";
        var clearButton = document.createElement("button");
        clearButton.textContent = "❌";
        clearButton.classList.add("clearButton");
        clearButton.addEventListener("click", clearContent);
        sectionElement.appendChild(clearButton);
    }
}

populateDivOnSpecificDays();

function clearContent() {
    var sectionElement = document.querySelector(".banner-section");
    sectionElement.remove();
}
