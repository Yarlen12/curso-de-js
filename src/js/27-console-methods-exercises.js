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

class Celular extends Error {
  constructor(message, name) {
    super(message);
    this.name = name;
  }

  informacion() {
    console.info(
      `Hola!, tu celular ${this.name} ya esta listo para su entrega`
    );
  }
}

function cel(tipo) {
  if (tipo === "celular") {
    throw new Celular("Mensaje de entrega de celular enviado ✅", "Iphone");
  } else {
    console.error("Mensaje no enviado, ocurrio un error ❌");
  }
}

try {
  cel("celular");
} catch (error) {
  console.log(error.message);
  if (error instanceof Celular) {
    error.informacion();
  } else {
    console.error("Error desconocido");
  }
}

// 4. Utiliza table

let data = [
  { Animales: "Conejo", Color: "Cafe" },
  { Animales: "Cuyo", Color: "Blanco" },
  { Animales: "Hamster", Color: "Beige" },
];
console.table(data);

// 5. Utiliza group

console.group("Datos veterinaria:");
console.log("Nombre: Yarlen's Veterinary");
console.log("Direccion: Boulevard 18128");
console.log("Telefono: #777-879-00");
console.groupEnd();

// 6. Utiliza time

console.time("Tiempo");

for (let i = 0; i < 400000; i++) {}

console.timeEnd("Tiempo");

// 7. Valida con assert si un numero es positivo

let positivo = 2;
let negativo = 2;

console.assert(positivo >= 0, "El numero que proporcionaste es Negativo.");
console.assert(negativo < 0, "El numero que proporcionaste es positivo");

// 8. Utiliza count

console.count("Hola");
console.count("Yarlen");
console.count("Hola");
console.count("Adios");
console.count("Adios");
// 9. Utiliza trace

// 10. Utiliza clear
