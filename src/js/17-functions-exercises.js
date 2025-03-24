// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una funcion que reciba dos numeros y devuelva su suma

function suma(a, b) {
  console.log(a + b);
}
suma(5, 5);

// 2. Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos

let myArray = [1, 2, 3, 4];

function mayor(myArray) {
  let mayor = myArray[0];

  for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] > mayor) {
      // Si el valor de myArray[i] es mayor que el valor actual de mayor, significa que hemos encontrado un número más grande, y debemos actualizar el valor de mayor.
      mayor = myArray[i]; // Aqui actualizamos su valor, solo si la condicion se cumple
    }
  }
  return mayor;
}
console.log(mayor(myArray));

// 3. Crea una funcion que reciba un string y devuelva el numero de vocales que contiene

let saludo = "Hola como estas";
const vocales = ["a", "e", "i", "o", "u"];

function contarvocales(saludo) {
  let cont = 0;
  for (let i = 0; i < saludo.length; i++) {
    if (vocales.includes(saludo[i].toLocaleLowerCase())) {
      cont++;
    }
    return cont;
  }
  console.log(`Numero de vocales: ${cont}`);
}

// 4. Crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas
let newArray = ["hola como estas"];

function mayusculas(newArray) {
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = newArray[i].toUpperCase();
  }
  return newArray;
}
console.log(mayusculas(newArray)); // NO LO OLVIDEEEES

// 5. Crea una funcion que reciba un numero y devuelva true si es primo, y false en caso contrario

function Primo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      // Aquí se está utilizando el operador de módulo (%). Este operador devuelve el residuo de la división de num entre i. Por ejemplo, 10 % 3 devolvería 1 porque 10 dividido por 3 es 3 con un residuo de 1. === 0: Esta parte del código está comprobando si el residuo de la operación anterior es igual a 0
      return false;
    }
  }
  return true;
}
console.log(Primo(5));

// 6. Crea una funcion que reciba dos arryas y devuelva un nuevo array que contenga los elementos comunes entre ambos

let primerArray = ["Hola", "como", "estas"];
let segundoArray = ["Hola", "como", "has", "estado"];

function comunes(primerArray, segundoArray) {
  return primerArray.filter((elemento) => segundoArray.includes(elemento));
}
console.log(comunes(primerArray, segundoArray));

// 7. Crea una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares
let numeros = [1, 2, 3, 4, 5, 6];

function sumaPares(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      suma += numeros[i];
    }
  }
  return suma;
}
console.log(sumaPares(numeros));

// 8. Crea una funcion que reciba un array de numeros y devuekva un nuevo array con cada numero elevado al cuadrado
let numeroCd = [1, 2, 3, 4];

function elevado(numeroCd) {
  let numele = [];
  for (let i = 0; i < numeroCd.length; i++) {
    numele.push(numeroCd[i] ** 2);
  }
  return numele;
}
console.log(elevado(numeroCd));

// 9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden
let cadena = "hola, mi nombre es Yarlen";

function orden(cadena) {
  let palabras = cadena.split(" ");

  palabras.reverse();

  return palabras.join(" ");
}

/*
cadena.split(" "): Esto convierte la cadena "Hola, mi nombre es Yarlen" en un array de palabras ["Hola,", "mi", "nombre", "es", "Yarlen"].

palabras.reverse(): Esto invierte el orden del array, obteniendo ["Yarlen", "es", "nombre", "mi", "Hola,"].

palabras.join(" "): Esto convierte el array de nuevo en una cadena, separando las palabras por un espacio, produciendo "Yarlen es nombre mi Hola,".

*/
console.log(orden(cadena));
// 10. Crea una funcion que calcule el factorial de un numero dados

function factorial(n) {
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
console.log(factorial(5));
