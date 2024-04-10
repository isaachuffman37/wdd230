const url = "https://isaachuffman37.github.io/wdd230/scoots/data/prices.json";
var tableBody = document.querySelector(".table-body");
async function getPricesData () {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            buildTable(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getPricesData()

function buildTable(data) {
    var rentals = data.rentals;
    for (var vehicle in rentals) {
        if (rentals.hasOwnProperty(vehicle)) {
            var row = document.createElement("tr");
            row.innerHTML = "<td>" + rentals[vehicle]['name'] + "</td>" +
                            "<td>" + rentals[vehicle]['reserve-half'] + "</td>" +
                            "<td>" + rentals[vehicle]['reserve-full'] + "</td>" +
                            "<td>" + rentals[vehicle]['walk-half'] + "</td>" +
                            "<td>" + rentals[vehicle]['walk-full'] + "</td>";
            tableBody.appendChild(row);
        }
    }
}