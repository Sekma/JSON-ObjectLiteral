
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
var arr = Object.entries(gobelins);

// affichage
// ligne 1
document.querySelector(".case1-1").innerHTML = arr[0][0];
document.querySelector(".case1-2").innerHTML = arr[0][1].sexe;
document.querySelector(".case1-3").innerHTML = arr[0][1].age;
document.querySelector(".case1-4").innerHTML = arr[0][1].dents;

// ligne 2
document.querySelector(".case2-1").innerHTML = arr[1][0];
document.querySelector(".case2-2").innerHTML = arr[1][1].sexe;
document.querySelector(".case2-3").innerHTML = arr[1][1].age;
document.querySelector(".case2-4").innerHTML = arr[1][1].dents;

// ligne 3
document.querySelector(".case3-1").innerHTML = arr[2][0];
document.querySelector(".case3-2").innerHTML = arr[2][1].sexe;
document.querySelector(".case3-3").innerHTML = arr[2][1].age;
document.querySelector(".case3-4").innerHTML = arr[2][1].dents;

// ligne 4
document.querySelector(".case4-1").innerHTML = arr[3][0];
document.querySelector(".case4-2").innerHTML = arr[3][1].sexe;
document.querySelector(".case4-3").innerHTML = arr[3][1].age;
document.querySelector(".case4-4").innerHTML = arr[3][1].dents;

// ligne 5
document.querySelector(".case5-1").innerHTML = arr[4][0];
document.querySelector(".case5-2").innerHTML = arr[4][1].sexe;
document.querySelector(".case5-3").innerHTML = arr[4][1].age;
document.querySelector(".case5-4").innerHTML = arr[4][1].dents;

// ligne 6
document.querySelector(".case6-1").innerHTML = arr[5][0];
document.querySelector(".case6-2").innerHTML = arr[5][1].sexe;
document.querySelector(".case6-3").innerHTML = arr[5][1].age;
document.querySelector(".case6-4").innerHTML = arr[5][1].dents;

// ligne 7
document.querySelector(".case7-1").innerHTML = arr[6][0];
document.querySelector(".case7-2").innerHTML = arr[6][1].sexe;
document.querySelector(".case7-3").innerHTML = arr[6][1].age;
document.querySelector(".case7-4").innerHTML = arr[6][1].dents;

// ligne 8
document.querySelector(".case8-1").innerHTML = arr[7][0];
document.querySelector(".case8-2").innerHTML = arr[7][1].sexe;
document.querySelector(".case8-3").innerHTML = arr[7][1].age;
document.querySelector(".case8-4").innerHTML = arr[7][1].dents;

// ligne 9
document.querySelector(".case9-1").innerHTML = arr[8][0];
document.querySelector(".case9-2").innerHTML = arr[8][1].sexe;
document.querySelector(".case9-3").innerHTML = arr[8][1].age;
document.querySelector(".case9-4").innerHTML = arr[8][1].dents;

// ligne 10
document.querySelector(".case10-1").innerHTML = arr[9][0];
document.querySelector(".case10-2").innerHTML = arr[9][1].sexe;
document.querySelector(".case10-3").innerHTML = arr[9][1].age;
document.querySelector(".case10-4").innerHTML = arr[9][1].dents;

function actualiser(){
    location.reload();

}