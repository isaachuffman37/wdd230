const baseURL = "https://isaachuffman37.github.io/wdd230/";
const linksURL = "https://isaachuffman37.github.io/wdd230/data/links.json";
let unorderedList = document.querySelector("#section-activities"); 
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}
  
getLinks();