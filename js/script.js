
const nb_gobelin = 10;
let gobelins = {};

const premiere_lettre=["G","B"];
const voyelles=["a","e","i","o","u"];
const consonnes=["g","b","l","n"];


for(let i=0; i<nb_gobelin; i++){

// nom 

  let nom=premiere_lettre[Math.floor(Math.random()*premiere_lettre.length)]+voyelles[Math.floor(Math.random()*voyelles.length)];
  let nbr_syllabe=Math.floor(Math.random()*3)+1;
  while(nbr_syllabe>0){
    nbr_syllabe--;
    nom=nom+consonnes[Math.floor(Math.random()*consonnes.length)]+voyelles[Math.floor(Math.random()*voyelles.length)];
}

// clé: valeur
let gobelin={sexe:(Math.floor(Math.random() * (100)) + 1 <= 58) ? "male" : "femelle",
             age:Math.floor(Math.random()*31)+5,
             dents:Math.floor(Math.random()*12)+17}

gobelins[nom]=gobelin;
}
console.log(gobelins);

// affichage
// ligne 1
document.querySelector(".case1-1").innerHTML ="11";
document.querySelector(".case1-2").innerHTML = "12";
document.querySelector(".case1-3").innerHTML = "13";
document.querySelector(".case1-4").innerHTML = "14";