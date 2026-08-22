let var1 = "";
let var2 = "";
let operationsign = "";
let resultat = 0;
let devraisReinitialiserAffichage = false;

const add = (nb1, nb2) => nb1 + nb2;
const soustra = (nb1, nb2) => nb1 - nb2;
const multi = (nb1, nb2) => nb1 * nb2;
const division = (nb1, nb2) => {
    if (nb2 === 0) return "Oups ! /0 impossible";
    return nb1 / nb2;
};

function operation(op, nb1, nb2) {
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    let res;
    switch (op) {
        case "+": res = add(nb1, nb2); break;
        case "-": res = soustra(nb1, nb2); break;
        case "*": res = multi(nb1, nb2); break;
        case "/": res = division(nb1, nb2); break;
        default: return nb2;
    }

    if (typeof res === "number") {
        return Math.round(res * 10000) / 10000;
    }
    return res;
}

document.addEventListener("DOMContentLoaded", () => {
    const fenetre = document.getElementById("fenetre");
    const infos = document.querySelector(".infos");
    const btnsChiffres = document.querySelectorAll(".btn-chiffre");
    const btnsOps = document.querySelectorAll(".btn-op");
    const btnEgale = document.getElementById("btn-egale");
    const btnClear = document.getElementById("btn-clear");

    function ajouterChiffre(valeur) {
        if (valeur === "." && fenetre.value.includes(".")) return;

        if (fenetre.value === "0" || devraisReinitialiserAffichage) {
            fenetre.value = valeur;
            devraisReinitialiserAffichage = false;
        } else {
            fenetre.value += valeur;
        }
    }

    function choisirOperateur(op) {
        
        if (fenetre.value === "") return;

        
        
        if (operationsign !== "" && devraisReinitialiserAffichage) {
            operationsign = op;
            if (infos) infos.textContent = `${var1} ${operationsign}`;
            return;
        }

    
        if (operationsign !== "" && !devraisReinitialiserAffichage) {
            calculer();
        }

        var1 = fenetre.value;
        operationsign = op;
        devraisReinitialiserAffichage = true;

        
        if (infos) infos.textContent = `${var1} ${operationsign}`;
    }

    function calculer() {
        if (operationsign === "" || devraisReinitialiserAffichage || fenetre.value === "") return;

        var2 = fenetre.value;
        resultat = operation(operationsign, var1, var2);

        
        fenetre.value = resultat;
        if (infos) infos.textContent = `${var1} ${operationsign} ${var2} =`;

        var1 = resultat;
        devraisReinitialiserAffichage = true;
        operationsign = "";
    }

    function reinitialiser() {
        var1 = "";
        var2 = "";
        operationsign = "";
        resultat = 0;
        fenetre.value = "";
        if (infos) infos.textContent = "";
        devraisReinitialiserAffichage = false;
    }

    function effacerDernierCaractere() {
        if (devraisReinitialiserAffichage) return;
        fenetre.value = fenetre.value.slice(0, -1);
    }

    
    btnsChiffres.forEach(btn => {
        btn.addEventListener("click", () => ajouterChiffre(btn.value));
    });

    btnsOps.forEach(btn => {
        btn.addEventListener("click", () => choisirOperateur(btn.value));
    });

    btnEgale.addEventListener("click", calculer);
    btnClear.addEventListener("click", reinitialiser);

    // Écouteur Clavier
    document.addEventListener("keydown", (e) => {
        if (["/", "*", "+", "-", "Enter", "Backspace", "Escape"].includes(e.key)) {
            e.preventDefault();
        }

        if ((e.key >= "0" && e.key <= "9") || e.key === "." || e.key === ",") {
            ajouterChiffre(e.key === "," ? "." : e.key);
        } else if (["+", "-", "*", "/"].includes(e.key)) {
            choisirOperateur(e.key);
        } else if (e.key === "Enter" || e.key === "=") {
            calculer();
        } else if (e.key === "Backspace") {
            effacerDernierCaractere();
        } else if (e.key === "Escape") {
            reinitialiser();
        }
    });
});