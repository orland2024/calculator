const info = document.querySelector(".infos");
const allBtns = document.querySelectorAll('input[type="button"]');

//RECUPERER LE BOUTON

let monBouton = document.getElementById("monBouton");

function val(resultat) {
  Form.fenetre.value = Form.fenetre.value + resultat;
}

function calcule() {
  if (Form.fenetre.value == "") {
    info.innerText = "Veuillez saisir des chiffres";
    allBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        info.innerText = "";
      });
    });
  } else {
    Form.fenetre.value = eval(Form.fenetre.value);
  }
}
function supp() {
  Form.fenetre.value == "";
}

// DECLARER LA FONCTION

function backgroundColor() {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
}

monBouton.addEventListener("click", backgroundColor);
