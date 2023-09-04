const nb_gobelin = 10;
let gobelins = {};

const premiere_lettre=["G","B"];
const voyelles=["a","e","i","o","u"];
const consonnes=["g","b","l","n"];


for(let i=0; i<nb_gobelin; i++){
  let nom=premiere_lettre[Math.floor(Math.random()*premiere_lettre.length)]+voyelles[Math.floor(Math.random()*voyelles.length)];
  let nbr_syllabe=Math.floor(Math.random()*3)+1;
  while(nbr_syllabe>0){
    nbr_syllabe--;
    nom=nom+consonnes[Math.floor(Math.random()*consonnes.length)]+voyelles[Math.floor(Math.random()*voyelles.length)];
}
let gobelin={sexe:1,
age:2,
dents:3}


gobelins[nom]=gobelin;
}

console.log(gobelins);