// Destructuracion y propagacion

// Como asignamos variables por defecto
let myArray = [1, 2, 3, 4];

let person = {
  name: "Yarlen",
  age: 22,
  alias: "Yarlen Almogabar",
};
// myArray.push(5);
// console.log(myArray);

let myValue = myArray[1];
console.log(myValue);

let myName = person.name;
console.log(myName);
// Como asignamos variables por defecto

// Destructuracion: es una sintaxis que nos permite extraer valores de arrays o objetos y asignarlos a variables de manera concisa

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray; // A cada uno se le otorgo una posicion del array, como llega hasta el 4 en myvalue4 saldra indefinido ya que no hay posicion 5 en myarray
console.log(myValue0);
console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);
// Destructuramos el array en diferente variables en una unica vez

// Sintaxis arrays con valores predeterminados

[myValue0, myValue1, myValue2, myValue3, myValue4 = 0] = myArray; // por defecto si no tienes valor va a valer 0 en myvalue4
console.log(myValue0);
console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4); // Ya se mostro en consola el valor cero de myvalue4 ya que tiene por defecto un cero en caso de no tener un valor

// Otro ejemplo igual, pero con todos con un predeterminado de 0 en caso de que no tener un valor
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] =
  myArray;
console.log(myValue5);
console.log(myValue6);
console.log(myValue7);
console.log(myValue8);
console.log(myValue9);

// Ignorar elementos array

let [myValue10, , , myValue13 = 0] = myArray;
console.log(myValue10);
console.log(myValue13);

// Sintaxis objects

let { name, age, alias } = person; // tenemos que destructurarlos con su formato que es con sus llaves en este caso ya que es un objeto
console.log(name);
console.log(age);
console.log(alias);

// Sintaxis objects con valores predeterminados

let person1 = {
  name1: "Yarlen",
  age1: 22,
  alias1: "Yarlen Almogabar",
};

let { name1, age1, alias1, email = "yarlen.alm@gmail.com" } = person1; // Como esto no existia, tuvimos que hacer otro objeto y cambiarle el nombre de las variables o propiedades
console.log(name1);
console.log(age1);
console.log(alias1);
console.log(email);
console.log(person1);

// Esto es mio no pertenece al curso
person1.email = "yarlena.alm@gmail.com";
console.log(person1);

// Ejemplo del curso
let { name2, age2, alias2, email2 = "email@email.com" } = person;

console.log(name2); // No existe
console.log(age2); // No existe
console.log(alias2); // No existe
console.log(email2); // Si que existe porque lo hicimos en el let

// Sintaxis objects con nuevos nombres de variables

let { name: name3, age: age3, alias: alias3 } = person; // De esta manera podemos asignar nuevos nombres a las variabnles del objeto

console.log(name3);
console.log(age3);
console.log(alias3);

// Objetos anidados

let person3 = {
  name: "Yarlen",
  age: 22,
  alias: "Yarlen Almogabar",
  walk: function () {
    console.log("La persona camina");
  },
  job: {
    name: "Programador",
    exp: 15,
    work: function () {
      console.log(`La persona de ${name} años de experencia trabaja`);
    },
  },
};

// Esto no esta en el curso, solo estaba comprobando que funcionaba correctamente
// console.log(person3);
// console.log(person3.job);
// person3.job.work();

let {
  name: name4,
  job: { name: jobName }, // Podemos destructurar en diferentes niveles de esta forma
} = person3;
console.log(name4);
console.log(jobName);

// Propagacion (...) expandir elementos de un array o un objeto, a otro array o objeto

// Sintaxis array

let myArray2 = [...myArray, 5, 6];

console.log(myArray2);

// Copia de arrays
let myArray3 = [...myArray]; // copia
console.log(myArray3);

// Combinacion de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3];
console.log(myArray4);

// Sintaxis objects

let person4 = { ...person, email: "yarlen.alm@gmail.com" };
console.log(person4);

// Copia de objects

let person5 = { ...person };
console.log(person5);
