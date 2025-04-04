// console

// log

console.log("Hola, Javascript!");

// error

console.error("Este es un mensaje de error");
console.error(
  "Error al conectarse a la base de datos:",
  new Error("Conexion fallida")
);

// warn

console.warn("Este es un mensaje de emergencia");

// info

console.info("Este es un mensaje de informacion adicional");

// table: muestra en consola una tabla

let data = [
  ["Yarlen", 22],
  ["Alvaro", 22],
  ["Maria", 58],
];
console.table(data);

data = [
  { name: "Maria", age: 58 },
  { name: "Yarlen", age: 23 },
  { name: "Alvaro", age: 22 },
];

console.table(data);

// group, hace que se agrupen los console log, con el usuario en este caso se puede ocultar o mostrar, ya que estan agrupadas con usuarios

console.group("Usuarios:");
console.log("Nombre: Yarlen");
console.log("Edad: 23");
console.groupEnd(); // para cerrar el grupo

// time: para medir el tiempo en el que tarda en ejecutarse un bloque de codigo

console.time("Tiempo de ejecucion");

for (let i = 0; i < 10000; i++) {}

console.timeEnd("Tiempo de ejecucion");

console.time("Tiempo de ejecucion 2");

for (let i = 0; i < 10000; i++) {}
console.timeEnd("Tiempo de ejecucion 2");

console.time("Tiempo de ejecucion 3");

for (let i = 0; i < 10000; i++) {}
console.timeEnd("Tiempo de ejecucion 3"); // Siempre tienen que coincidir con el mismo texto que le diste en console.time

// assert

let age = 19;
console.assert(age >= 18, "El usuario debe ser mayor de edad."); // como se cumple no marcara nada en consola, si no cumple saldra un error diciendo que no es mayor de edad

// count

console.count("Click");
console.count("Click");
console.count("Clicks");
console.countReset("Click"); // Es un identificador, como uno es diferente contara uno, como los otros dos son iguales contara hasta 2, en esta linea ya lo reseteamos asi que si lo volvemos a llamar volvera a contar desde el uno
console.count("Click");

// trace: El seguimiento de la pila de ejecucion

function funcA() {
  funcB();
}
function funcB() {
  console.trace("Seguimiento de ejecucion");
}

funcA(); // Hemos descargado la pila de ejecucion

// clear

// console.clear(); // No va a mostrar nada ya que lo limpio
