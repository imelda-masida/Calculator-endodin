let var1 = "";
let var2 = "";
let operationsign = "";
let resultat = 0;




const info = document.getElementById("infos");



const allbouttons = document.querySelectorAll("input[type=button]");


function addfenetre(resultat){
    form.fenetre.value = form.fenetre.value + resultat;
}


const add = function(nb1, nb2){
    return nb1 + nb2;
};
console.log(add);



const soustra = function(nb1, nb2){
    return nb1 - nb2;
};
console.log(soustra);



const multi = function(nb1, nb2){
    return nb1 * nb2;
};
console.log(multi);



const division = function(nb1, nb2){
    return nb1 / nb2;
};
console.log(division);

let nb1 = 7;
let nb2 = 2;
let operateur = `-+/*`;

function operation(op, nb1, nb2) {
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    switch (op) {
        case "+": return add(nb1, nb2);
        case "-": return soustra(nb1, nb2);
        case "*": return multi(nb1, nb2);
        case "/": return division(nb1, nb2);
    }
}


let nbActuel = "0";

function metterAJourNbActuel(){
    const ecran = document.getElementById("fenetre");
    ecran.value = nbActuel;
}

function ajouterAuNbActuel(nb){
    if (nbActuel === "0") {
        nbActuel = nb;
    } else {
        nbActuel += nb;
    }
    
}

function cliquerBouton(nb){
    ajouterAuNbActuel(nb);
    metterAJourNbActuel();
}


