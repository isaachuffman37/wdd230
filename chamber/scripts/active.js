var currentUrl = window.location.href;
var navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
if (link.href === currentUrl) {
    link.parentElement.classList.add('active');
}
});