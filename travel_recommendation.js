const btnSearch = document.getElementById("search");
const btnReset = document.getElementById("reset");
const msgW = document.getElementById("msgWelcome");

// ================================= Search ===================================
function search() {
    fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        const dest = document.getElementById("input").value.toLowerCase().trim();
        const grid = document.getElementById("grid");
        const card = document.createElement("div");

        switch (true) {
            case dest.includes("beach"):
                msgW.hidden = true;

                const beaches = data.beaches
                for (const beach of beaches) {
                    card.classList.add("card");
                    card.innerHTML += `<img src="${beaches.imageUrl}">`;
                    card.innerHTML += `<h3>${beaches.name}</h3>`;
                    card.innerHTML += `<p>${beaches.description}</p>`;
                    grid.appendChild(card);
                };
                break;
            
            case dest.includes("temple"):
                msgW.hidden = true;
                break;

            case dest.includes("countr"):
                msgW.hidden = true;
                break;
            
            default:
                msgW.hidden = true;
        }
    })
}

// ================================== Reset ===================================
function reset() {
    document.getElementById("input").value = "";
    msgW.hidden = false;
}

btnSearch.addEventListener("click", search);
btnReset.addEventListener("click", reset);