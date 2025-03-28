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

// 8. Modifica la clase que getters y setters para que use propiedades privados

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobreescribe un metodo de una clase que utilice herencia
