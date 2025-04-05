// 1. Crea una funcion que utilice error correctamente

function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Ambos tienen que ser numeros");
  }
  return a + b;
}

try {
  console.log(suma(5, "b"));
} catch (error) {
  console.error(error.message);
}

// 2. Crea una funcion que utilice warn correctamente

// 3. Crea una funcion que utilice info correctamente

// 4. Utiliza table

// 5. Utiliza group

// 6. Utiliza time

// 7. Valida con assert si un numero es positivo

// 8. Utiliza count

// 9. Utiliza trace

// 10. Utiliza clear
