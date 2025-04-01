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

function sum(a, b) {
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

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    // Si el numero a es entero o si el numero b es entero
    throw new Error("Esta operacion solo suma numeros enteros");
  }
  return a + b;
}
console.log(sum(5, 10));
console.log(sum("5", 10));
console.log(sum("5", "10"));
console.log(sum(5, "10"));
// throw new Error("Se ha producido un error"); // Nos mostrara ese mensaje en el error en consola
