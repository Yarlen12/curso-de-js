// Importacion de modulos

import substract, { add, PI, name, Circle } from "./28-export-modules.mjs";

// import resta from "./28-export-modules.mjs";
import defaultImport from "./28-export-modules.mjs";

// funciones
// Solo se agrega poniendo el numbre de la funcion
// Se importo poniendo mjs al import y al export
console.log(add(5, 10));

// Propiedades

console.log(PI);
console.log(name);

// Clases

let circle = new Circle(5);

console.log(circle.radius);
console.log(circle.area().toFixed(1)); // El toFixed es para no mostrar los decimales o para mostrar dependiendo el numero que pongas dentro de los parentesis
console.log(circle.perimetro().toFixed(2));

// Exportacion por defecto

console.log(defaultImport(5, 10)); //No importa el nombre lo puedes importar con cualquier nombre y va a funcionar
// console.log(substract(10, 20));

// let Myclass = new defaultImport();
// Myclass.func();

// Proyecto modular

// import { MyImport } from "./directory/file.js"
