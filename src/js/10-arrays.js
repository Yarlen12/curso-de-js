// arrays

// Declaracion

let myArray = []; // estructura de datos que nos permite almacenar un listado de datos, es mejor la primera porque no da lugar a errores, es mas rapida de hacer, es mas simple
let myArray2 = new Array(); // otra forma de declarar un array

console.log(myArray);
console.log(myArray2);

// Inicializacion

myArray = [3];
myArray2 = new Array(3); //Reserva un espacio, si son 2 serian dos espacios y asi sucesivamente

console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4); // Ahora de esta manera las dos funcionan exactamente igual

console.log(myArray);
console.log(myArray2);

myArray = ["Yarlen", "Almogabar", "Yar", 22, true];
myArray2 = new Array("Yarlen", "Almogabar", "Yar", 22, true); // Siguen funcionando ambos de la misma forma, estas estructuras nos permiten almacenar lo que se nos de la gana

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3);
myArray2[0] = "Yarlen"; // El listado es ordenado asi que mediante pongamos el espacio o posicion es como se van a estar ordenando
myArray2[2] = "Yar";
myArray2[1] = "Almogabar";

console.log(myArray2);

myArray = [];
myArray[1] = "Yarlen";
myArray[2] = "Almogabar";

console.log(myArray);

// Metodos comunes

myArray = [];

// push y pop

myArray.push("Yarlen"); // Es la operacion que sirve para introducir elementos en el array
myArray.push("Almogabar"); // se agregaran al final
myArray.push("Yar");
myArray.push(22);

console.log(myArray); // En consola se vera en una sola linea, como si fuera uno mismo

console.log(myArray.pop()); // Elimina el ultimo elemento y lo devuelve de esta forma
myArray.pop(); // El pop elimina el ultimo elemento del array, es por eso que el 22 no esta en consola, porque fue eliminado por el pop
// Si lo ponia aqui me borraba y devolvia el Yar ya que el ultimo anteriormente ya habia sido borrado
console.log(myArray);

// Shift y Unshift

console.log(myArray.shift()); // Lo que hace shift es que te borra el primero, de esta forma lo elimina y lo devuelve
console.log(myArray);

myArray.unshift("Yarlen", "almogabar"); // Para agregar uno o mas elementos al principio del array
console.log(myArray); // Como teniamos Almogabar solo, se agregaron los nuevos dos elementos que pusimos en el unshift que son Yarlen y almogabar

// Length

console.log(myArray.length);

// clear

// myArray = []; // para que se limpie o se borre es solo llamarlo de nuevo y poner un valor vacio
myArray.length = 0; // Tambien se puede de esta forma, pero la mejor opcion es la de arriba
console.log(myArray);

// slice

myArray.push("Yarlen", "Almogabar", "Yar", 22, true);
let myNewArray = myArray.slice(1, 3); // devolver una copia superficial de una porcion, no se toma en cuenta el ultimo indice

console.log(myArray);
console.log(myNewArray); // solo se imprimira el 1 que es Almogabar, ya que la segunda opcion no la toma en cuenta. Recuerda que 0 es el primero que es Yarlen

// Splice

myArray.splice(2, 3); //Tomara el primero en este caso tomara el primero y el segundo y borrara dependiendo del segundo numero que pongas, en este caso borrara las 3 restantes
console.log(myArray);

myArray = ["Yarlen", "Almogabar", "Yar", 22, true];
myArray.splice(1, 2, "Holllaalalalalalla"); // El uno lo agrega, el segundo lo elimina y el tercero lo elimina y lo reemplaza
console.log(myArray);
