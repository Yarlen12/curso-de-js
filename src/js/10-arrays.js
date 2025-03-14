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
myArray.push("Almogabar");
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
