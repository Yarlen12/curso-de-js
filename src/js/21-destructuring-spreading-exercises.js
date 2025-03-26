// 1. Usa desestructuracion para extraer los dos primeros elementos de un array

let myArray = [1, 2, 3, 4];

let [element1, element2, , ,] = myArray;
console.log(element1);
console.log(element2);

// 2. Usa desestructuracion en un array y asigna un valor predeterminado a una variable

let [element3, element4, element5 = 0] = myArray;
console.log(element3);
console.log(element4);
console.log(element5);

// 3. Usa desestructuracion para extraer dos propiedades de un objeto
let objeto = {
  nombre: "Yarlen",
  edad: 22,
  apellido: "Almogabar",
};

let { nombre, edad } = objeto;
console.log(nombre);
console.log(edad);

// 4. Usa desestructuracion para extraer dos propiedades de un objeto y asignalas a nuevas variables con nombres diferentes

let { nombre: name, edad: age } = objeto;
console.log(age);
console.log(name);

// 5. Usa desestructuracion para extraer dos propiedades de un objeto anidado
let objeto2 = {
  nombre: "Yarlen",
  edad: 22,
  alias: "Yar",
  mensaje: function () {
    console.log("Hola, como estas?");
  },
  job: {
    nombre: "Programadora",
    exp: 1,
    saludo: function () {
      console.log(`Hola, ${this.nombre}, que tenga un excelente dia!`);
    },
  },
};

let {
  alias: NA,
  job: { saludo: jobSaludo },
} = objeto2;
console.log(NA);
console.log(jobSaludo);
// 6. Usa propagacion para combinar dos arrays en uno nuevo

let myArray1 = [1, 2, 3, 4, 5];
let myArray2 = [6, 7, 8, 9, 10];

let myArray0 = [...myArray1, ...myArray2];
console.log(myArray0);

// 7. Usa propagacion para crear una copia de un array

let myArray3 = [...myArray];
console.log(myArray3);

// 8. Usa propagacion para combinar dos objetos en uno nuevo

let objeto1 = {
  nombre: "Yarlen",
};

let objeto01 = {
  apellido: "Almogabar",
};

let objetos = { ...objeto1, ...objeto01 };
console.log(objetos);

// 9. Usa propagacion para crear una copia de un objeto

let prop = {
  saludo: "Hola como estas",
};

let copia = { ...prop };
console.log(copia);
// 10. Combina desestructuracion y propagacion

let des = {
  name: "Yarlen",
  age: 22,
  alias: "Yar",
};

let { name: nomb, age: ed } = des;
let propa = { email: "yarlen.alm@gmail.com" };

let comb = { ...des, ...propa };
console.log(comb);
