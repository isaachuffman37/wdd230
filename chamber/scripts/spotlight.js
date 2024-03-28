const membersURL = "https://isaachuffman37.github.io/wdd230/chamber/data/members.json";
const spotlightDiv = document.querySelector(".spotlight-company");
var highMembers = [];
async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data.companies)
    displayMember(data.companies)
}

function displayMember (members) {
    members.forEach((member)=>{
        if(member.membership_level == 'Silver Membership' || member.membership_level == 'Gold Membership'){
            highMembers.push(member);
        }
    });

    let index;

    for(i = 0; i < 2; i++)
    {
        let randomIndex = Math.floor(Math.random() * highMembers.length);
        while (index == randomIndex){
            randomIndex = Math.floor(Math.random() * highMembers.length);
        }
        index = randomIndex;
        let member = highMembers[index];
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
        sectionElement.setAttribute('class', "member-grid");
        website.setAttribute('href', `${member.website}`);

        sectionElement.appendChild(companyImage);
        sectionElement.appendChild(memberName);
        sectionElement.appendChild(address);
        sectionElement.appendChild(phone);
        sectionElement.appendChild(website);
        sectionElement.appendChild(membershipLevel);
        spotlightDiv.appendChild(sectionElement)
    }
    
}

getMembers()