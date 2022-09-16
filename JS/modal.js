const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close")
const modalbg = document.querySelector(".bground");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction pour fermer le modale

function closeModal() {
  modalbg.style.display = "none";
}

closeBtn.addEventListener("click", closeModal)


