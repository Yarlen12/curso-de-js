// 1. Crea una clase que reciba dos propiedades

class Prop {
  constructor(name, alias) {
    this.name = name;
    this.alias = alias;
  }
}
let prop = new Prop("Yarlen", "Yar");
console.log(prop);

// 2. Añade un metodo a la clase que utilice las propiedades

class propWithMethod {
  constructor(name, alias) {
    this.name = name;
    this.alias = alias;
  }
  presentation() {
    console.log(
      `La persona se presenta con su nombre y su alias ${this.name}, ${this.alias}`
    );
  }
}

// 3. Muestra los valores de las propiedades e invoca a la funcion

let persona = new propWithMethod("Yarlen", "Yar");
console.log(persona.name);
console.log(persona.alias);
persona.presentation();

// 4. Añade un  metodo estatico a la primera clase

class metodoE {
  constructor(name) {
    this.name = name;
  }
  static saludo(name) {
    console.log(`Hola! mi nombre es ${name}, mucho gusto en conocerte`);
  }
}

let persona2 = new metodoE("Yarlen");
metodoE.saludo(persona2.name);

// 5. Haz uso del metodo estatico

class methodE {
  constructor(name, alias) {
    this.name = name;
    this.alias = alias;
  }
  greeting() {
    console.log(`Hola mucho gusto, mi nombre es ${this.name}`);
  }
  static saludo(alias) {
    console.log(`Mi apodo es ${alias} pero puedes llamarme como tu gustes`);
  }
}
let persona3 = new methodE("Yarlen", "Yar");
persona3.greeting();
methodE.saludo(persona3.alias);

// 6. Crea una clase que haga uso de herencia

class herencia {
  constructor(celular) {
    this.celular = celular;
  }

  sound() {
    console.log(
      `Acaba de llegar una notificacion a tu celular ${this.celular}`
    );
  }
}
class whatsapp extends herencia {
  sound() {
    console.log(
      `Acabas de recibir un mensaje de whatsapp a tu ${this.celular}`
    );
  }
}
let myHerencia = new herencia("Iphone");
let myWhats = new whatsapp("Iphone");

console.log(myHerencia);
console.log(myWhats);

myHerencia.sound();
myWhats.sound();

// 7. Crea una clase que haga uso de getters y setters

class veterinaria {
  #name;
  #age;
  #size;
  constructor(name, size, age) {
    this.#name = name;
    this.#size = size;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  get size() {
    return this.#size;
  }

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }
  set size(size) {
    this.#size = size;
  }
  informacion() {
    console.log(
      `Informacion veterinaria: el nombre de la mascota es ${
        this.#name
      }, su edad es de ${this.#age} años, su peso es de ${this.#size} kilos`
    );
  }
}

let HistorialM = new veterinaria("Sandy", 4, 12);
HistorialM.age = 5;
console.log(HistorialM);
console.log(HistorialM.name);
HistorialM.informacion();

// 8. Modifica la clase que getters y setters para que use propiedades privados

class veterinaria1 {
  #name;
  #age;
  #size;
  constructor(name, size, age) {
    this.#name = name;
    this.#size = size;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  get size() {
    return this.#size;
  }

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }
  set size(size) {
    this.#size = size;
  }
  informacion() {
    console.log(
      `Informacion veterinaria: el nombre de la mascota es ${
        this.#name
      }, su edad es de ${this.#age} años, su peso es de ${this.#size} kilos`
    );
  }
}

let HistorialM1 = new veterinaria1("Sandy", 4, 12);

// 9. Utiliza los get y set y muestra sus valores

class editorial {
  #name;
  #age;
  #author;

  constructor(name, age, author) {
    this.#name = name;
    this.#age = age;
    this.#author = author;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  get author() {
    return this.#author;
  }

  set age(age) {
    this.#age = age;
  }

  informacion() {
    console.log(
      `El nombre del libro es ${this.#name}, el año en el que se lanzo es ${
        this.#age
      }, el nombre del autor u autora es ${this.#author}`
    );
  }
}

let libro = new editorial(
  "El arte de ser nosotros",
  "22 de enero del 2023",
  "Inma Rubiales"
);

console.log(libro);
libro.informacion();
console.log(libro.name);
console.log(libro.age);
console.log(libro.author);

// 10. Sobreescribe un metodo de una clase que utilice herencia

class alarma {
  constructor(hora, dia, mensajeT) {
    this.hora = hora;
    this.dia = dia;
    this.mensajeT = mensajeT;
  }

  mensaje() {
    console.log(`WAKEEEEEEEEEEEEEEEEEEEEEEEEEEE UPPPPPPPPPP`);
  }
}
class newMensaje extends alarma {
  mensaje() {
    console.log(
      `Despierta son las ${this.hora}, del dia ${this.dia} se hara tarde`
    );
  }
}

let nAlarm = new newMensaje("12:30am", "3/28/2025", "Despiertaaa");

console.log(nAlarm);
nAlarm.mensaje();
// newMensaje.mensaje();
