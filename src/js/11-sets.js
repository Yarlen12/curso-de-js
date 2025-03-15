// Sets

// Declaracion

let mySet = new Set();
let mySet2 = {};

console.log(mySet);
console.log(mySet2);

// Inicializacion

mySet = new Set([
  "Yarlen",
  "Almogabar",
  "Yar",
  22,
  true,
  "yarlen.alm@gmail.com",
]); // Para que esto funcione tiene que llevar corchetes ya que solo con parentesis solo agarrara el primer valor y lo que contara son las letras
console.log(mySet);

// Metodos comunes

// add y delete

mySet.add("https://yarlen.dev");
console.log(mySet);
