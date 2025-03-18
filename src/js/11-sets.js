// Sets

// Declaracion

let mySet = new Set();
let mySet2 = {}; // no es una forma de hacer un set vacio X

console.log(mySet);
console.log(mySet2);

// Inicializacion

mySet = new Set(["Yarlen", "Almogabar", "Yar", 22]); // Para que esto funcione tiene que llevar corchetes ya que solo con parentesis solo agarrara el primer valor y lo que contara son las letras
console.log(mySet);

// Metodos comunes

// add y delete

mySet.add("https://yarlen.dev"); // La palabra set y add, agrega el dato al final
console.log(mySet);

mySet.delete("Yarlen"); // Tenemos que pones en comillas el valor que queremos borrar
console.log(mySet);

console.log(mySet.delete("Yar")); // Nos dara true, debido a que se borro y el valor que manda es true al ser borrado correctamente
console.log(mySet.delete("bla")); // Saldra false porque ese valor no existe, asi que no se puede borrar
console.log(mySet.delete("Yar")); // Dara false ya que como este valor ya fue borrado anteriormente ya no existe asi que no se puede borrar.
console.log(mySet.add("Yar"));
console.log(mySet.add("Yarlen"));
console.log(mySet.delete("Yar"));
console.log(mySet.delete(22));
console.log(mySet.delete(3));
console.log(mySet);

// has

console.log(mySet.has("Almogabar")); // Esto es para ver si existe, si existe dara un true, si no dara un false
console.log(mySet.has("Yar"));

// Size

console.log(mySet.size); // En consola se vera el valor que tiene la variable, en este caso solo tengo 3 valores que son Yarlen, Almogabar, https://yarlen.dev
console.log(mySet);

// Convertir un set a array

let myArray = Array.from(mySet); // Con esto ya se convirtio el set en un Array
console.log(myArray);

mySet = new Set(myArray);
console.log(mySet);

// No admite duplicados

mySet.add("Almogabar");
console.log(mySet);
