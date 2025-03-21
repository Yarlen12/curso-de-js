// Funciones: Una funcion es un bloque de codigo, realizado para hacer tareas especificas

// Estructura de una funcion
// simple
function myfuncion() {
  console.log("Hola, funcionnnnn");
}

// myfuncion(); // Para llamar a la funcion ya que sin esto no se vera nada en la consola, aunque anteriormente pusimos console.log
// myfuncion();

for (let i = 0; i < 5; i++) {
  myfuncion();
} // De esta forma tenemos la capacidad de imprimirlo 5 veces

// Con parametros

function myFuncionConParametros(name) {
  console.log(`Hola, ${name}`);
}

myFuncionConParametros("Yarlen"); // Le pasamos un parametro
myFuncionConParametros("Almogabar");

// Funciones anonimas

const myFunc = function (name) {
  console.log(`Hola, ${name}`);
};

myFunc("Yarlen Almogabar"); // Tengo que aqui definirle el valor, ya que si no lo hago sale en consola "Hola, undefined"

// Arrow functions (Funciones flecha como arrow de dc jaja)

const myfunc3 = (name) => {
  console.log(`Hola, ${name}`);
};
// en esta pasara lo mismo, le tenemos que asignar una variable y pondremos el valor de name en myfunc3 porque saldra indefinded, ya que como name nunca se declaro en una variable no tiene un valor definido

const myfunc4 = (name) => console.log(`Hola!, ${name}!`); // No se necesitan los corchetes ya que se les designo una variable
myfunc4("hooaoajoajaoa");
myfunc3("Yarleeeeeeeeeeeeen");

// Parametros

function sum(a, b) {
  console.log(a + b);
}

sum(5, 3); // De esta forma le pasaremos los parametros, con comas ya que arriba ya se estan sumando, aqui nomas asignamos valor

// Asignarles un valor por default

const defaultSum = function (a = 0, b = 0) {
  // Moure no necesito declarar la variable, pero yo si lo tuve que hacer y es asi
  console.log(a + b);
};

// Por defecto

defaultSum();
defaultSum(5); // Dara 5 en consola solamente
defaultSum(5, 3); // es por default arriba pero igual se pueden seguir modificando los valores
// defaultSum((a = 5)); Esto no se puede hacer aparentemente no da error en codigo, pero en consola si

// Retorno de valores

const mult = function (a, b) {
  return a * b; // retornarle el resultado al usuario no a consolas
};

console.log(mult(5, 10));

//  es igual a

let resultado = mult(10, 10);
console.log(resultado);

// Funciones anidadas

function extern() {
  console.log("Funcion externa");
  function intern() {
    console.log("Funcion interna");
  }
  intern(); // Solo de esta manera se puede, ya que se encuentra dentro
}

extern(); // Es importante realizar este paso porque si no lo escribirmos en consola no aparecera nada
// intern(); Error: fuera del scope

// Funciones de orden superior
function applyFunc(func, param) {
  func(param);
}

applyFunc(myfunc4, "Funcion de orden superior"); // Una funcion que recibe otra funcion y tiene un parametro para ejecutarlo

// forEach: es una funcion que nos sirve para ejecutar bucles asociados a elementos iterables
// El forEach no se puede detener con el break o continue, no retornamos un nuevo array
let myArray = [1, 2, 3, 4];

let mySet = new Set([
  "Yarlen",
  "Almogabar",
  "Yar",
  22,
  true,
  "yarlen.alm@gmail.com",
]);

let myMap = new Map([
  ["name", "Yarlen"],
  ["email", "yarlen.alm@gmail.com"],
  ["age", 37],
]);
myArray.forEach(function (value) {
  // de manera mas larga, como ya tiene asignado un valor definido, ya tendra un valor en consola, sin necesidad de llamar mas abajo a la varible ()
  console.log(value);
});

myArray.forEach((value) => console.log(value)); // De manera mas rapida

mySet.forEach((value) => console.log(value));

myMap.forEach((value) => console.log(value)); // Cada calor estara en consola, cada valor sera una linea
