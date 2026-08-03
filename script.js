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

const operation = function(operateur, nb1, nb2){
    
    let operation = soustra;
    console.log("la somme de"+ nb1 +"et"+ nb2 +"est"+operation);
    
};
operation(`-`, 5, 7);

let nbActuel = "0";

function metterAJourNbActuel(){
    const ecran = document.getElementById("ecran");
    ecran.textContent = nbActuel;
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