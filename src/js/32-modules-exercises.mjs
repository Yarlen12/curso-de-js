import defaultFunction, {
  suma,
  name,
  Nombres,
  resta,
  edad,
  Animales,
} from "./31-modules-exercises.mjs";

console.log(suma(5, 10));

// 2.
console.log(name);

// 3.

let nombres = new Nombres("Yarlen", "Alvaro");

nombres.saludo();

// 4.
console.log(resta(10, 5));

// 5.
console.log(edad);

// 6.
let animal = new Animales("perro", "gato");

animal.razon();

// 7.

const { edades } = defaultFunction();
let edadd = new edades(22, 23);
edadd.greeting();
