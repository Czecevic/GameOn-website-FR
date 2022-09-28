// boutton permettant la validation des information 
const btnSubmit = document.querySelector(".btn-submit");
// modal après avoir réussi l'inscription
const modalConfirmation = document.querySelector(".formConfirmation");
// message contenu dans la modale
const spanValidModal = document.querySelector(".formConfirmation > span");
// boutton permettant la fermeture du modale
const btnSubmitConfirm = document.querySelector(".btn-submit-confirm");
// gérer l'affichage du modale
const closeBtn2 = document.querySelector(".bground")

//Fonction pour ouvrir la modale de confirmation d'inscription
function launchModalConfirmation() {
  modalConfirmation.style.display = "block";
  spanValidModal.innerHTML = "Merci pour <br> votre inscription";
}

btnSubmit.addEventListener("click", launchModalConfirmation);

//Fonction pour fermer la modale de confirmation d'inscription
function closeModalConfirmation() {
  modalConfirmation.style.display = "none";
  closeBtn2.style.display = "none"
}

btnSubmitConfirm.addEventListener("click", closeModalConfirmation);