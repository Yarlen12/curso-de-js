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
