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
let persona = new propWithMethod("Yarlen", "Yar");
persona.presentation();

// 3. Muestra los valores de las propiedades e invoca a la funcion

// 4. Añade un  metodo estatico a la primera clase

// 5. Haz uso del metodo estatico

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase que getters y setters para que use propiedades privados

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobreescribe un metodo de una clase que utilice herencia
