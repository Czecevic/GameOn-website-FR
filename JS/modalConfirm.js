const button_Submit = document.querySelector(".button-submit");
const Form_Confirmation = document.querySelector(".Form_Confirmation");
const Valid_Form = document.querySelector(".Valid_Form")
const button_Submit_Confirm = document.querySelector(".button_Submit_Confirm")

// Fonction permettant d'ouvrir le formulaire de confirmation d'inscription

function launchModalConfirmation() {
    Form_Confirmation.style.display = "block";
    Valid_Form.innerHTML = "Merci pour \n votre inscription";
}

button_Submit.addEventListener("click", launchModalConfirmation)

// Fonction permettant de fermer le formulaire de confirmation d'inscription

function closeModalConfirmation() {
    Form_Confirmation.style.display = "none";
    window.location.reload();
}

button_Submit_Confirm.addEventListener("click", closeModalConfirmation)