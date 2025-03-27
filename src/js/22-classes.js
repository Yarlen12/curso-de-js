// Clases: Es un objeto complejo, nos sirve para crear plantillas de objetos

class Person {
  constructor(name, age, alias) {
    // es una especie de funcion especial, que nos permite definir cual es la estructura de propiedades inicial de la persona
    this.name = name; // se les pone el mismo nombre para que no haya errores
    this.age = age;
    this.alias = alias;
  }
}

// Sintaxis

let person = new Person("Yarlen", 22, "Yar");
let person2 = new Person("Yarlen", 22, "Yar");
console.log(person);
console.log(person2);

console.log(typeof person); // dara un objeto en consola

// Valores por defecto

class DefaultPerson {
  constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

let person3 = new DefaultPerson("Yarlen", 22);

console.log(person3);

// Acceso a propiedades

console.log(person3.alias);
console.log(person3["alias"]); // De las dos formas se puede acceder ya que son objetos

person3.alias = "Yar"; // aqui ya le asignamos el valor, se asigna igual ya que como mencione anteriormente es un objeto

console.log(person3.alias);

// Funciones en clase

class PersonWithMethod {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
  walk() {
    // Asi se realiza una funcion
    console.log("La persona camina");
  }
}

let person4 = new PersonWithMethod("Yarlen", 22, "Yar");
person4.walk();

// Propiedades privadas

class PrivatePerson {
  #bank; // Para que sea privada solo se necesita la almohadilla y que sea definida antes
  constructor(name, age, alias, bank) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank;
  }
  pay() {
    this.#bank;
  }
}

let person5 = new PrivatePerson("Yarlen", 22, "Yar", "IBAN8736388200");
// console.log(person5.bank); // Saldra undefined ya que es una propiedad privada

person5.bank = "rftewygbuhndmask"; // Lo que hace es que hara que creara una propiedad banco que es publica, pero la que creamos privada sigue siendo privada

console.log(person5);

// Getters y Setters

class GetSetPerson {
  #alias;
  #age;
  #name;
  #bank;
  constructor(name, age, alias, bank) {
    this.#name = name;
    this.#age = age;
    this.#alias = alias;
    this.#bank = bank;
  }

  get name() {
    // Para acceder al name
    return this.#name; // Solo te permite leerla, es solo de lectura no de escritura
  }
  //   Funcion especial para acceder y dar un nuevo valor
  set bank(bank) {
    this.#bank = bank; // tambien funcionaria de esta manera, para cambiar el nombre es en dentro de () y en el igual
  }
  //   Para acceder al bank
  //   get bank() {
  //     return this.#bank;
  //   }
}

let person6 = new GetSetPerson("Yarlen", 22, "Yar", "IBAN12345678");

console.log(person6);
console.log(person6.name);

// Cambiar el valor, es igual que siempre
person6.bank = "new IBAN45678987";
console.log(person6.bank);

// Herencia:  Nos sirve para heredar las propiedades y el comportamiento de una clase

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("El animal emite un sonido generico");
  }
}
class Dog extends Animal {
  sound() {
    // super.sound();
    console.log("Guaaaaaau"); // Ahora solo a este le hara caso ya que lo sobreescribimos, pero solamente en dog funciona ya que esta en su clase (PARA QUE NO TE CONFUNDAS)
  }

  run() {
    console.log("El perro corre");
  }
}

class Fish extends Animal {
  constructor(name, size) {
    super(name); // super hace una llamada a su super clase, entonces cuando lo llamamos a super del constructor, porque recordar animal la clase de la que extiende ya tiene un constructor super nos dice que recibe un nombre, entonces nosotros podemos seguir heredando el comportamiento del padre
    this.size = size;
  }
  swim() {
    console.log("El pez nada");
  }
}

let myDog = new Dog("Sandy");
let myFish = new Fish("Pancho", 10);

console.log(myDog);
myDog.run();
myDog.sound();

myFish.swim();
myFish.sound();
console.log(myFish.name, myFish.size);
