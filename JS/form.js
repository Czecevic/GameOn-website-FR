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
                emailChecker(e.target.value)
                return
            case "birthdate":
                birthdateChecker(e.target.value)
                return
            case "quantity":
                quantityChecker(e.target.value)
                return
            case "checkbox1":
                checkboxChecker(e.target.value)
                return
            default:
                null;
        }
    });
});

const firstChecker = (value) => {
    const firstContainer = document.querySelector(".first-container");
    const errorDisplay = document.querySelector(".first-container > span");
    let isValid = false;

    if (value.length < 2) {
        firstContainer.classList.add("error")
        errorDisplay.textContent = "Veuillez saisir plus de 2 charactères dans le champ prénom"
    } else {
        errorDisplay.textContent = ""
        isValid = true
    }
    return isValid
}

const lastChecker = (value) => {
    const lastContainer = document.querySelector(".last-container");
    const errorDisplay = document.querySelector(".last-container > span");
    let isValid = false;

    if (value.length < 2) {
        lastContainer.classList.add("error")
        errorDisplay.textContent = "Veuillez saisir plus de 2 charactères dans le champ nom"
    } else {
        errorDisplay.textContent = ""
        isValid = true
    }
    return isValid
} 

const emailChecker = (value) => {
    const emailContainer = document.querySelector(".email-container");
    const errorDisplay = document.querySelector(".email-container > span");
    let isValid = false;

    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        emailContainer.classList.add("error")
        errorDisplay.textContent = "Veuillez verifier votre email"
    } else {
        errorDisplay.textContent = ""
        isValid = true
    }
    return isValid
}

const birthdateChecker = (value) => {
    const birthdateContainer = document.querySelector(".birthdate-container");
    const errorDisplay = document.querySelector(".birthdate-container > span");
    let isValid = false;

    if (!value) {
        birthdateContainer.classList.add("error")
        errorDisplay.textContent = "Veuillez entrer votre date de naissance"
    } else {
        errorDisplay.textContent = ""
        isValid = true
    }
    return isValid
} 

const quantityChecker = (value) => {
    const birthdateContainer = document.querySelector(".quantity-container");
    const errorDisplay = document.querySelector(".quantity-container > span");
    let isValid = false;

    if (!value) {
        birthdateContainer.classList.add("error")
        errorDisplay.textContent = "Veuillez entrer un chiffre"
    } else {
        errorDisplay.textContent = ""
        isValid = true
    }
    return isValid
} 

const checkboxContainer = () => {
    const errorDisplay = document.querySelector(".formData > small")
}