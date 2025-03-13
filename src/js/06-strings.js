// Strings

// Concatenacion
let myName = "Yarlen";
let greeting = "Hola, mi nombre es" + " " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud
console.log(greeting.length); //Para obtener la medida de caracteres de un string.

// Acceso a caracteres
console.log(greeting[25]); // !, para acceder a un caracter especifico, se pone entre corchete la posicion del caracter
console.log(greeting[0]); // H
console.log(greeting[1]); // o
console.log(greeting[greeting.length - 1]); // Para acceder al ultimo caracter

// Metodos comunes
console.log(greeting.toUpperCase()); // Convierte todo el string en mayusculas
console.log(greeting.toLowerCase()); // Convierte todo el string en minusculas
console.log(greeting.indexOf("!")); // Esto nos da la posicion del caracter que pusimos en las comillas
console.log(greeting.indexOf("Almogabar")); // Si no encuentra el caracter nos da un -1
console.log(greeting.includes("Almogabar")); // Nos da false porque no existe la palabra Almogabar en la variable greeting, nos dara respuestas booleanas.
console.log(greeting.includes("Yarlen"));
console.log(greeting.slice(0, 10)); // Nos da los caracteres que estan en la posicion 0 hasta el 10
console.log(greeting.replace("Yarlen", "Almogabar")); // Reemplazara la palab ra Yarlen por Almogabar, replaceAll es para reemplazar todas las palabras
console.log(greeting.length === greeting.length); // Para verificar que las dos strings tienen la misma longitud
console.log(greeting === greeting); // Para verificar o comprobar que los dos strings son iguales

// Template literals (plantillas literales)
let message = `Hola, este es mi
curso de Javascript`; // Con estas comillas invertidas podemos hacer saltos de linea.
console.log(message); // Nos dara el mensaje en dos lineas.

let email = "yarlen.alm@gmail.com";
console.log(`Hola, ${myName}! Tu email es ${email}`); // Para que funcione tiene que llevar comillas invertidas y el signo de dolar y llaves para que se pueda interpretar la variable myName a esto se le llama interpolacion de variables
