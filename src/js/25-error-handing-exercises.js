// 1. Captura una excepcion utilizando try-catch

let myClass;

try {
  console.log(myClass);
  console.log("Se ejecuta sin errores");
} catch {
  console.log("Se ha producido un error");
}

// 2. Captura una excepcion utilizando try-catch y finally

let excepcion;

try {
  console.log(excepcion);
  console.log("Se ejecuto sin errores");
} catch {
  console.log("Se produjo un error");
} finally {
  console.log("Este codigo siempre se ejecuta");
}

// 3. Lanza una excepcion generica

try {
  throw new Error("Este error es generico");
} catch (error) {
  console.log(error.message);
}

// 4. Crea una excepcion personalizada

class nombres extends Error {
  constructor(message, name, alias) {
    super(message);
    this.name = name;
    this.alias = alias;
  }
  saludo() {
    console.log(
      `Hola mi nombre es ${this.name} pero puedes llamarme ${this.alias}`
    );
  }
}

try {
  throw new nombres("Este es un error personalizado", "Alvaro", "Balito");
} catch (error) {
  console.log(error.message);
  error.saludo();
}

// 5. Lanza una excepcion personalizada

// 6. Lanza varias excepciones segun una logica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una funcion que verifique si un objeto tiene una propiedad especifica y lanza una excepcion personal

// 10. Crea una funcion que realice reintentos en caso de error hasta un maximo de 10
