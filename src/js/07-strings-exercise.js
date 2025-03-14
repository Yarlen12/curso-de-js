// 1. Concatena dos cadenas de texto

let myPhone = "66-77-25-49-40";
let Saludo = "Hola, tu numero de telefono es" + " " + myPhone;
console.log(Saludo);

// 2. Muestra la longitud de una cadena de texto

console.log(Saludo.length);

// 3. Muestra el primer y el utlimo caracter de un string

console.log(Saludo[0]);
console.log(Saludo[Saludo.length - 1]); // Para acceder al ultimo caracter de un string

// 4. Convierte a mayusculas y minusculas un string

console.log(Saludo.toUpperCase());
console.log(Saludo.toLowerCase());

// 5. Crea una cadena de texto en varias lineas

let ejercicio = `Hola, esta es mi
cadena de texto de varias lineas `;
console.log(ejercicio);

// 6. Interpola el valor de una variable en un string

let yourName = "Yarlen";
console.log(`Hola, ${yourName}! que gusto verte por aqui`);

// 7. Reempleza todos los espacion en blanco de un string por guiones
console.log(ejercicio.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(ejercicio.includes("lineas"));

// 9. Comprueba si dos strings son iguales

console.log(ejercicio === Saludo);

// 10. comprueba si dos strings tienen la misma longitud

console.log(ejercicio.length === Saludo.length);
