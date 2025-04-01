// Manejo de errores

// Excepcion

// Produce una excepcion
let myObject;
// console.log(myObject.email);

// captura de errores

// try-catch

// El programa no se rompe y nos permite ejecutarlo
try {
  // Codigo que intenta ejecutar
  console.log(myObject.email);
  console.log("Finaliza la ejecucion si errores");
} catch {
  // Bloque de error
  console.log("Se ha producido un error");
}

// Captura el error

try {
  // Para acceder al error
  console.log(myObject.email);
} catch (error) {
  console.log("Se ha producido un error", error.message); // nos dice el mensaje del error
}

// Finally

try {
  console.log(myObject); // .email);
} catch (error) {
  console.log("Se ha producido un error", error.message);
} finally {
  console.log("Este codigo se ejecuta siempre"); // Aunque no tenga un error siempre se va a ejecutar
}

// Si le quitamos el catch lo que pasara es que brincara un error
// No esta soportando

// try {
//   console.log(myObject.email);
// } finally {
//   console.log("Este codigo se ejecuta siempre");
// }

// Lanzar errores

// throw

// function sum(a, b) {
//   if (typeof a === "number") {
//     console.log("Es instancia de numero");
//   } // El isInteger es para determinar si un valor es un entero
//
// if (Number.isInteger(a)) {
//     console.log("Es instancia de numero");
//   }

// // El instanceof se utiliza para verificar si un objeto pertenece a una clase determinada
//   if (!(a instanceof Number) && !(b instanceof Number)) {
//     console.log("No se pueden sumar estas propiedades");
//   }

//   if (!Number.isInteger(a) || !Number.isInteger(b)) {
//     // Si el numero a es entero o si el numero b es entero
//     throw new Error("Esta operacion solo suma numeros enteros");
//   }
//   return a + b;
// }

// try {
//   console.log(sum(5, 10));
//   console.log(sum("5", 10));
//   console.log(sum("5", "10"));
//   console.log(sum(5, "10"));
//   // throw new Error("Se ha producido un error"); // Nos mostrara ese mensaje en el error en consola
// } catch (error) {
//   console.log("Se ha producido un error:", error.message); // Hemos lanzado un error, lo hemos capturado y lo hemos imprimido
// }

function sumIntegers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Esta operacion solo suma numeros");
  }

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    // Si el numero a es entero o si el numero b es entero
    throw new Error("Esta operacion solo suma numeros enteros");
  }
  if (a == 0 || b == 0) {
    throw new SumZeroIntegerError("Se esta intentando sumar cero", a, b);
  }
  return a + b;
}

try {
  console.log(sumIntegers(5, 10));
  console.log(sumIntegers(10, 9));
  console.log(sumIntegers(5.5, 10));
  console.log(sumIntegers("5", 10));

  //   console.log(sum("5", "10"));
  //   console.log(sum(5, "10"));
  // throw new Error("Se ha producido un error"); // Nos mostrara ese mensaje en el error en consola
} catch (error) {
  console.log("Se ha producido un error:", error.message); // Hemos lanzado un error, lo hemos capturado y lo hemos imprimido
}

// Capturar varios tipos de errores

try {
  //   console.log(sumIntegers(5.5, 10));
  console.log(sumIntegers("5", 10));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se ha producido un error de tipo:", error.message);
  } else if (error instanceof Error) {
    console.log("Se ha producido un error:", error.message);
  }
}

// Crear excepciones personalizadas
// Mi error personalizado es capaz de almacenar los datos con los que trabaja y acabar imprimiendo los datos que son
class SumZeroIntegerError extends Error {
  constructor(message, a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }
  printNumbers() {
    console.log(this.a, " + ", this.b);
  }
}

// Vamos a intentar capturar esto  throw new SumZeroIntegerError

try {
  console.log(sumIntegers(0, 10));
} catch (error) {
  console.log("Se ha producido un personalizado:", error.message);
  error.printNumbers();
}
