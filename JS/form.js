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

const inputs = document.querySelectorAll("#first, #last, #email, #birthdate, #quantity, input[name=location], #checkbox1")


inputs.forEach((input) => {
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
    const quantityContainer = document.querySelector(".quantity-container");
    const errorDisplay = document.querySelector(".quantity-container > span");
    let isValid = false;

    if (!value) {
        console.log(quantityContainer.classList.add("error"))
        quantityContainer.classList.add("error")
        errorDisplay.textContent = "Veuillez entrer un chiffre."
    } else {
        errorDisplay.textContent = ""
        isValid = true
    }
    return isValid
} 

const checkboxContainer = () => {
    const errorDisplay = document.querySelector(".formData > small")
    const first_check = document.querySelectorAll("input[name = 'location']");
    let isValid = false;

    for (let i = 0; i < first_check.length; i++) {
        if(first_check[i].checked) {
            isValid = true
            errorDisplay.textContent = "";
            return
        } 
        else {
            errorDisplay.textContent = "Veuillez selectionner un choix";
            errorDisplay.style.color = "red";
            errorDisplay.style.fontSize = "0.6em";
        }
    }
    return isValid;
}


const checkboxChecker = () => {
    const errorDisplay = document.querySelector(".formData > small")
    const check = document.querySelector(".checkbox1");
    const checkbox1 = document.querySelector("#checkbox1")
    let isValid = false;
    
    if (!checkbox1.checked) {
        check.classList.add("error");
        errorDisplay.textContent = 
        "Vous devez vérifier que vous acceptez les termes et conditions."
    } else {
        errorDisplay.textContent = ""
        isValid = true
    }
    return isValid;
}

//vérifier les input du formulaire avant sa soumission

const onSubmit = (e) => {
    e.preventDefault();
}

//récupérer les valeurs des inputs du formulaire

const formValues = (inputs) => {
    let data = []

    for(let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "text" ||
            inputs[i].type === "email" ||
            inputs[i].type === "date" ||
            inputs[i].type === "number") {
                data.push(inputs[i].value);
        }
        if (inputs[i].type === "checkbox") {
            let currentValue = "";
    
            if (inputs[i].checked) {
                currentValue = inputs[i].value;
            }
            data.push(currentValue)
        }
    }
    return data
}


const formIsValid = (values) => {
    let validInputs = []
    //a tester avec un consol.log()
    validInputs.push(firstChecker(values[0]));
    validInputs.push(lastChecker(values[1]));
    validInputs.push(emailChecker(values[2]));
    validInputs.push(birthdateChecker(values[3]));
    validInputs.push(quantityChecker(values[4]));
    validInputs.push(checkboxChecker(values[5]));
    validInputs.push(checkboxContainer());

    let isValid = true;

    for (let i = 0; i < validInputs.length; i++) {
        if (validInputs[i] === false) {
            isValid = false;
            return;
        }
    }
    return isValid
}

// si Valid
if (formIsValid(formValues(inputs))) {
    document.querySelector(".modal-body").style.display = "none"
    document.querySelector(".formConfirmation").style.display = "block"
} else {
    document.querySelector(".modal-body").style.display = "block"
    document.querySelector(".formConfirmation").style.display = "none"
}

submitInput.addEventListener('click', (e) => onSubmit(e))