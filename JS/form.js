// Fonction de la bar de navigation

function edit_nav() {
    var x = document.getElementById("myTopnav")
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

const form = document.querySelector("form")

// Bouton de soumission du formulaire 

const submitInput = form[form.length - 1];

// selection des elements présent dans le formulaire

const input = document.querySelectorAll("#first, #last, #email, #birthdate, #quantity, input[name=location], #checkbox1")


input.forEach((input) => {
    input.addEventListener("input", (e) => {
        switch (e.target.id) {
            case "first":
                firstChecker(e.target.value)
                return
            case "last":
                lastChecker(e.target.value)
                return
            case "email":
                
        }
    })
})