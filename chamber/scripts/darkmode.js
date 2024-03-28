const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
const navigationLinks = document.querySelectorAll("nav a");
const cta = document.querySelectorAll(".dark-text");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("Dark")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        footer.style.background = "#000";
        footer.style.color = "#fff";
        header.style.background = "#000";
        header.style.color = "#fff";
        navigationLinks.forEach(link => {
            link.style.background = "#000"
            link.style.color = "#fff"
        });
        cta.forEach(dark => {
            dark.style.color = "#000";
        });
		modeButton.textContent = "Light";
	} else {
		main.style.background = "#ebf2fa";
		main.style.color = "#000";
        footer.style.background = "#013a63";
        footer.style.color = "#fff";
        header.style.background = "#013a63";
        header.style.color = "#fff";
        navigationLinks.forEach(link => {
            link.style.background = "#ebf2fa"
            link.style.color = "#013a63"
        });
		modeButton.textContent = "Dark";
	}
});