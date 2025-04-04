// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los numeros del 1 al 20

for (let i = 1; i < 21; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado
let suma = 0;
for (let i = 0; i <= 100; i++) {
  suma += i;
}
console.log(`La suma de los numeros del 1 al 100 es ${suma}`);

// 3. Crea un bucle que imprima todos los numeros pares entre 1 y 50

for (let i = 0; i < 51; i += 2) {
  console.log(i);
}

// 4. Dado un Array de nombres, usa un bucle para imprimir cada nombre en la consola

const nombres = ["Yarlen", "Alvaro", "Mario", "Maria", "Estrella"];

for (let valor of nombres) {
  console.log(valor);
}

// 5. Escribe un bucle que cuente el numeros de vocales en una cadena de texto

let cadena = "Hola, como estan?";

const vocales = ["a", "e", "i", "o", "u", 1, 2];
let contador = 0;

// for (let i = 0; i < cadena.length; i++) {
//   if (vocales.includes(cadena[i].toLowerCase())) {
//     contador++;
//   }
// }

for (const letra of cadena) {
  if (vocales.includes(letra.toLocaleLowerCase())) {
    contador++;
  }
}
console.log(`Numero de vocales: ${contador}`);

// 6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto

let numeros = [1, 2, 3, 4, 5];
let producto = 1; // debe inicializarse con el valor 1 porque estás calculando el producto de los elementos en el array numeros. Si inicializas producto con 0, cualquier número multiplicado por 0 dará como resultado 0, lo cual no es el comportamiento deseado.

for (let i = 0; i < numeros.length; i++) {
  producto *= numeros[i];
}
console.log(`El producto final es: ${producto}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i < 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto

const texto = "Hola que tal, estas? ";
let invertir = "";

for (let i = texto.length - 1; i >= 0; i--) {
  invertir += texto[i];
}
console.log(`De reverso la palabra queda asi: ${invertir}`);

// 9. Usa un bucle para generar los primeros 10 numeros de la secuencia de Fibonacci
let Fibonacci = [0, 1, 1, 2];
let num1 = Fibonacci[Fibonacci.length - 2];
let num2 = Fibonacci[Fibonacci.length - 1];

for (let i = Fibonacci.length; i < 10; i++) {
  const suma = num1 + num2;
  num1 = num2;
  num2 = suma;

  Fibonacci[i] = suma;

  //  num2 += num1
  //   num2 = Fibonacci[i]
}
console.log(Fibonacci);
// 10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10

let myArray = [1, 2, 3, 10, 11];
let nArray = [];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] <= 9) {
    continue;
  }
  nArray.push(myArray[i]);
  console.log(nArray);
}
