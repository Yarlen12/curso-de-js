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

// 5. Crea una funcion que reciba un numero y devuelva true si es prime, y false en caso contrario

// 6. Crea una funcion que reciba dos arryas y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares

// 8. Crea una funcion que reciba un array de numeros y devuekva un nuevo array con cada numero elevado al cuadrado

// 9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden

// 10. Crea una funcion que calcule el factorial de un numero dados
