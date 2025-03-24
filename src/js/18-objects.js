// Objetos : todo lo que no es un dato primitivo, es una coleccion de propiedades.

// Sintaxis

let person = {
  name: "Yarlen",
  age: 22,
  alias: "Yar",
}; // Pueden contener propiedades, objetos y funciones

// Acceso a propiedades

// Notacion punto
console.log(person.name);

// Notacion de corchetes
console.log(person["name"]);

// Modificacion de propiedades

person.name = "Yarlen Almogabar";
console.log(person.name);

console.log(typeof person.age);
person.age = "22";
console.log(person.age);
console.log(typeof person.age);

// Eliminacion de propiedades

delete person.age;

console.log(person);

// Nueva propiedad

person.email = "yarlen.alm@gmail.com";
person["age"] = 22;

console.log(person);

// Metodos (funciones)

let person2 = {
  name: "Yarlen",
  age: 22,
  alias: "Yarlen Almogabar",
  walk: function () {
    console.log("La persona camina");
  },
};
person2.walk();

// Anidacion de objects

let person3 = {
  name: "Yarlen",
  age: 22,
  alias: "Yarlen Almogabar",
  walk: function () {
    console.log("La persona camina");
  }, //  Ponemos coma cada que vayamos a poner una nueva propiedad
  job: {
    name: "Programadora",
    exp: 1,
    work: function () {
      console.log(`La persona de ${this.exp} años de experiencia trabaja`); // Se usa this para hacer referencia a esta propiedad, en vez de poner person3.job.exp
      //   console.log(`La ${person3.job.name} persona trabaja`);
    },
  },
};
console.log(person3);

console.log(person3.name);
console.log(person3.job);
console.log(person3.job.name);
person3.job.work();

// Igualdad de objetos

let person4 = {
  name: "Yarlen",
  alias: "Yarlen Almogabar",
  email: "yarlen.alm@gmail.com",
  age: 22,
};

console.log(person);
console.log(person4);

console.log(person == person4);
console.log(person === person4);

person.name = "Yarlen";
person.alias = "Yarlen Almogabar";
console.log(person.name == person4.name);

// Iteracion

for (let key in person4) {
  // Sale que no es iterable por lo cual en vez de of, usamos in
  console.log(key + ": " + person4[key]); // si queremos acceder a la clave y al valor, usamos el metodo de acceso por corchetes
}

// Funciones como objectos

function Person(name, age) {
  // NO USAR, ES UNA MALA PRACTICA, da aviso de que deberia de ser una clase
  this.name = name;
  this.age = age;
} // Esta funcionando como un constructor, un objeto que puede ser util si queremos usar multiples instancias

let person5 = new Person("Yarlen", 22);
console.log(person5);
console.log(person5.name);

console.log(typeof person5);
console.log(typeof person4);
