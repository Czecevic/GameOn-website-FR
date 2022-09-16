const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const spanValidModal = document.querySelector(".formConfirmation > span");
const btnSubmitConfirm = document.querySelector(".btn-submit-confirm");
const closeBtn2 = document.querySelector(".bground")

/**
 * Fonction pour ouvrir la modale de confirmation d'inscription
 */
function launchModalConfirmation() {
  modalConfirmation.style.display = "block";
  spanValidModal.innerHTML = "Merci pour <br> votre inscription";
}

btnSubmit.addEventListener("click", launchModalConfirmation);

/**
 * Fonction pour fermer la modale de confirmation d'inscription
 */
function closeModalConfirmation() {
  modalConfirmation.style.display = "none";
  closeBtn2.style.display = "none"
}

btnSubmitConfirm.addEventListener("click", closeModalConfirmation);