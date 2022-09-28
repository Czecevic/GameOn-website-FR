// fait apparaitre la modale
const modalBtn = document.querySelectorAll(".modal-btn");
// ferme la modale
const closeBtn = document.querySelector(".close");
// 
const modalbg = document.querySelector(".bground");

// lance la fonction launchModal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// affiche la fenêtre modale
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction pour fermer la fenêtre modale
function closeModal() {
  modalbg.style.display = "none";
}

closeBtn.addEventListener("click", closeModal)


