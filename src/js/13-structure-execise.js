// 1. Crea un array que almacena cinco animales

let myArray = [];
myArray = ["perro", "gato", "perico", "paloma", "tigre"];

console.log(myArray);

// 2. Añade dos mas, uno al principio y otro al final

myArray.unshift("leon");
myArray.push("raton");

console.log(myArray);

// 3. Elimina el que se encuentra en tercera posicion

myArray.splice(2, 1);
console.log(myArray);

// 4. Crea un set que almacene cinco libros

let mySet = new Set();
mySet = new Set(["Hush Hush", "Boulevard", "Alex", "Dark", "El hilo"]);

console.log(mySet);

// 5. Añade dos mas, uno de ellos repetido

mySet.add("Heist");
mySet.add("Boulevard");

console.log(mySet);

// 6. Elimina uno cocreto a tu eleccion
mySet.delete("Boulevard");

console.log(mySet);

// 7. Crea un mapa que asocie el numero del mes a su nombre

let myMap = new Map();

myMap = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
]);

console.log(myMap);

// 8. Comprueba si el mes numero 5 existe en el map e imprime su valor

console.log(myMap.get(5));

// 9. Añade al mapa una clave con un array como que almacene los meses de verano

myMap = new Map([["Meses del verano", ["Junio", "Julio", "Agosto"]]]);

console.log(myMap);
// 10. Crea un Array, transformalo a un set y almacenalo en un Map

mySet = new Set(myArray);
console.log(mySet);

let Mymap2 = new Map([["Animales", mySet]]);

console.log(Mymap2);
