const membersURL = "https://isaachuffman37.github.io/wdd230/chamber/data/members.json";
const mainGridContainer = document.querySelector(".directory-container");
async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    //console.log(data.companies)
    displayMembers(data.companies)
}

function displayMembers (members) {
    members.forEach((member)=>{
        let sectionElement = document.createElement('section');
        let memberName = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membershipLevel = document.createElement('p');
        let companyImage = document.createElement('img');
        
        memberName.textContent = `${member.name}`
        address.textContent = `${member.address}`
        phone.textContent = `${member.phone}`
        website.textContent = `${member.website}`
        membershipLevel.textContent = `${member.membership_level}`


        companyImage.setAttribute('src', `${member.image}`);
        sectionElement.setAttribute('class', "member");
        website.setAttribute('href', `${member.website}`);

        sectionElement.appendChild(companyImage);
        sectionElement.appendChild(memberName);
        sectionElement.appendChild(address);
        sectionElement.appendChild(phone);
        sectionElement.appendChild(website);
        sectionElement.appendChild(membershipLevel);
        mainGridContainer.appendChild(sectionElement)

    })
}

getMembers()