const btnSearch = document.getElementById("search");
const btnReset = document.getElementById("reset");
const msgW = document.getElementById("msgWelcome");
const grid = document.getElementById("grid");
grid.innerHTML = "";

// ================================= Search ===================================
function search() {
    const dest = document.getElementById("input").value.toLowerCase().trim();
    
    fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        switch (true) {
            case dest.includes("beach"):
                const beaches = data.beaches
                msgW.hidden = true;
                grid.hidden = false;
                for (const beach of beaches) {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    card.innerHTML += `<img src="${beach.imageUrl}" height="405" width="720" style="justify-self: center">`;
                    card.innerHTML += `<h3>${beach.name}</h3>`;
                    card.innerHTML += `<p>${beach.description}</p>`;
                    grid.appendChild(card);
                };
                break;
            
            case dest.includes("temple"):
                const temples = data.temples
                msgW.hidden = true;
                grid.hidden = false;
                for (const temple of temples) {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    card.innerHTML += `<img src="${temple.imageUrl}" height="405" width="720" style="justify-self: center">`;
                    card.innerHTML += `<h3>${temple.name}</h3>`;
                    card.innerHTML += `<p>${temple.description}</p>`;
                    grid.appendChild(card);
                };
                break;

            case dest.includes("countr"):
                const countries = data.countries
                msgW.hidden = true;
                grid.hidden = false;
                for (const country of countries) {
                    const cities = country.cities;
                    for (const city of cities) {
                        const card = document.createElement("div");
                        card.classList.add("card");
                        card.innerHTML += `<img src="${city.imageUrl}" height="405" width="720" style="justify-self: center">`;
                        card.innerHTML += `<h3>${city.name}</h3>`;
                        card.innerHTML += `<p>${city.description}</p>`;
                        grid.appendChild(card);
                    }
                };
                break;
            
            default:
                msgW.hidden = true;
                grid.hidden = true;
        }
    })
}

// ================================== Reset ===================================
function reset() {
    document.getElementById("input").value = "";
    msgW.hidden = false;
    grid.hidden = true;
}

btnSearch.addEventListener("click", search);
btnReset.addEventListener("click", reset);