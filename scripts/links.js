const baseURL = "https://isaachuffman37.github.io/wdd230/";
const linksURL = "https://isaachuffman37.github.io/wdd230/data/links.json";
let unorderedList = document.querySelector("#section-activities"); 
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data.lessons[0].links)
    displayLinks(data.lessons);
}

function displayLinks(lessons) {
    lessons.forEach((lesson) => {
        let listElement = document.createElement('li');
        let weekHeader = document.createElement('p');
        weekHeader.textContent = `Week ${lesson.lesson}: `
        listElement.appendChild(weekHeader)
        let linksList = lesson.links
        let linksListLength = lesson.links.length;
        // console.log(linksList.length)
        for (i = 0; i < linksListLength; i++){
            let link = linksList[i]
            if(i < linksListLength - 1){
                let aTag = document.createElement('a');
                aTag.href = `${link.url}`;
                aTag.textContent = ` ${link.title} |`
                listElement.appendChild(aTag);
            } else if (i = linksListLength){
                let aTag = document.createElement('a');
                aTag.href = `${link.url}`;
                aTag.textContent = ` ${link.title}`
                listElement.appendChild(aTag);
            }
        }
        unorderedList.appendChild(listElement);
        
    });
    
}
  
getLinks();