const btnSearch = document.getElementById("search");
const btnReset = document.getElementById("reset");
const msgW = document.getElementById("msgWelcome");

// ================================= Search ===================================
function search() {
    fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        const dest = document.getElementById("input").value.toLowerCase().trim();
        const rec = document.createElement("div");
        
        switch (true) {
            case dest.includes("beach"):
                msgW.hidden = true;
                break;
            
            case dest.includes("temple"):
                console.log("temples");
                msgW.hidden = true;
                break;

            case dest.includes("countr"):
                console.log("countries");
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