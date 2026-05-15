const btnSearch = document.getElementById("search");
const btnReset = document.getElementById("reset");

// Search =====================================================================
function search() {
    const input = document.getElementById("input").value.toLowerCase().trim();

    fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        let dest = input.toLowerCase();

        switch (true) {
            case dest.includes("beach"):
                console.log("beaches");
                break;
            
            case dest.includes("temple"):
                console.log("temples");
                break;

            case dest.includes("countr"):
                console.log("countries");
                break;
            
            default:
                console.log("nope");
        }
    })
}

// Reset ======================================================================
function reset() {document.getElementById("input").value = "";}

btnSearch.addEventListener("click", search);
btnReset.addEventListener("click", reset);