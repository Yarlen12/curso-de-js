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

class Libro extends Error {
  constructor(message, name, editorial) {
    super(message);
    this.name = name;
    this.editorial = editorial;
  }

  datos() {
    console.log(
      `El nombre del libro es ${this.name} y el nombre de la editorial donde se publicara es ${this.editorial}`
    );
  }
}

function func(data) {
  if (data === "libro") {
    throw new Libro(
      "Libro nuevo en la editorial",
      "Las marcas de sara",
      "Planeta"
    );
  } else {
    console.error("Este libro no existe");
  }
}

try {
  func("libro");
} catch (error) {
  console.log(error.message);
  if (error instanceof Libro) {
    error.datos();
  } else {
    console.warn("Advertencia: Error desconocido");
  }
}

try {
  func("libreria");
} catch (error) {
  console.log(error.message);
  if (error instanceof Libro) {
    error.datos();
  } else {
    console.warn("Advertencia: Error desconocido");
  }
}
// 3. Crea una funcion que utilice info correctamente

// 4. Utiliza table

// 5. Utiliza group

// 6. Utiliza time

// 7. Valida con assert si un numero es positivo

// 8. Utiliza count

// 9. Utiliza trace

// 10. Utiliza clear
