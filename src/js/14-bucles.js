// Loops o blucles = Se asocia a com si fuera una estructura de control

// for, ejecutarse segun lo lanzamos, tiene una condicion qure se va a avaluar cada vez que se recorre ese bucle, mientras siga en true seguira ejecutandose, al llegar a false se detendra la ejecucion

for (let i = 0; i < 5; i++) {
  // La i es indice no sabia JAJA, el codigo dice que indice vale 0 y que su primer valor es 0, indice es menor que 5 y incrementamos indice con ++ y i empieza a valer 1
  console.log(`Hola ${i}`); // Nos esta dando el valor del indice
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  // nos dara los numeros que estan en const, ya que se puso que el indice es menor que la variable.longitud
  console.log(`Elemento: ${numbers[i]}`); // En consola dira Elemento: y el numero, en este caso empezara en 1
}

// while

let i = 0; // La condicion en este caso que es while va desde afuera
while (i < 5) {
  console.log(`Hola ${i}`);
  i++;
}

// Bucle infinito
// while (true) {
//   console.log(`Hellooooooo ${i}`);
//   i++;
// } // Se va a ejecutar hasta que explote el programa JAJA o se quede sin memoria

// do while, te aseguras de que minimo una vez va a ser ejecutada

i = 5; // Para que se reinicie el valor y siga siendo 0, este caso si pones un numero mas alto o igual que 5, solo se pondra un valor en consola, ya que abajo esta como indice es menor a 5
do {
  console.log(`Holaa ${i}`);
  i++; // NO OLVIDES QUE AQUI VA EL POTENCIADOOOOOOOR
} while (i < 5);

// for of

// Como los agarramos de otro documento, en este documento estas variables no estan declaradas asi que es importante que no olvides poner el let
let myArray = [1, 2, 3, 4];

let mySet = new Set([
  "Yarlen",
  "Almogabar",
  "Yar",
  22,
  true,
  "yarlen.alm@gmail.com",
]);

let myMap = new Map([
  ["name", "Yarlen"],
  ["email", "yarlen.alm@gmail.com"],
  ["age", 22],
]);

let myString = "Hola, javascript!";

for (let valor of myArray) {
  // Para que funcione y se refleje en consola el myArray
  console.log(valor);
}

for (let valor of mySet) {
  console.log(valor);
} // En consola se desglosaran los valores en cada linea, con un total de 6 lineas en consola

for (let valor of myMap) {
  console.log(valor);
} // Los valores en consola estaran por separados, como en este caso map son 3 claves y 3 valores, se distribuira en consola clave y valor, clave y valor, etc

for (let valor of myString) {
  console.log(valor);
} // Se desglosara cada palabra en cada linea de la consola

// Buenas practicas

// Break y continue

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue; // continua ya en la siguiente ejecucion, por lo cual en consola no se vera el 5, no lo tomara en cuenta
  } else if (i == 7) {
    // como el 5 no lo tenia en cuenta, y al 6 tiene un break, en consola solo llegara al 4, si ponemos un 7 en el break, se brincara el 5 y estara el 6 y hasta ahi se ejecutara ya que el 7 tiene un break
    break;
  }
  console.log(`Hola ${i}`);
}
