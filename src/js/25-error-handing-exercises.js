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

class Phone extends Error {
  constructor(message, marca, age) {
    super(message);
    this.marca = marca;
    this.age = age;
  }
  especificaciones() {
    console.log(
      `La marca del celular es ${this.marca} y el año en que salio es ${this.age}`
    );
  }
}

try {
  throw new Phone("Lanzamos una excepcion personalizada", "Iphone", "2025");
} catch (error) {
  console.log(error.message);
  error.especificaciones();
}

// 6. Lanza varias excepciones segun una logica definida

class Tv extends Error {
  constructor(message, marca, age) {
    super(message);
    this.marca = marca;
    this.age = age;
  }
  esp() {
    console.log(
      `La marca del televisor es ${this.marca} y el año en el que se lanzo es ${this.age}`
    );
  }
}

class Computadora extends Error {
  constructor(message, marca, age) {
    super(message);
    this.marca = marca;
    this.age = age;
  }
  esp() {
    console.log(
      `La marca de la computadora es ${this.marca} y el año en el que se lanzo es ${this.age}`
    );
  }
}

function excepciones(tipo) {
  if (tipo === "tv") {
    throw new Tv("Este es un tipo de error", "Samsung", "2025");
  } else if (tipo === "computadora") {
    throw new Computadora("Este es un tipo de error en comp", "Dell", "2025");
  } else {
    throw new Error("Este dispositivo no existe");
  }
}

try {
  excepciones("tv");
} catch (error) {
  console.log(error.message);
  if (error instanceof Tv) {
    error.esp();
  } else if (error instanceof Computadora) {
    error.esp();
  } else {
    console.log("Error desconocido");
  }
}

try {
  excepciones("computadora");
} catch (error) {
  console.log(error.message);
  if (error instanceof Tv) {
    error.esp();
  } else if (error instanceof Computadora) {
    error.esp();
  } else {
    console.log("Error desconocido");
  }
}

try {
  excepciones("celular");
} catch (error) {
  console.log(error.message);
  if (error instanceof Tv) {
    error.esp();
  } else if (error instanceof Computadora) {
    error.esp();
  } else {
    console.log("Error desconocido");
  }
}

// 7. Captura varias excepciones en un mismo try-catch

class Xbox extends Error {
  constructor(message, name, age) {
    super(message);
    this.name = name;
    this.age = age;
  }
  especificaciones() {
    console.log(
      `El nombre de la nueva consola es ${this.name}, y el año de lanzamiento sera en ${this.age}`
    );
  }
}

class Playstation extends Error {
  constructor(message, name, age) {
    super(message);
    this.name = name;
    this.age = age;
  }
  especificaciones() {
    console.log(
      `El nombre de la nueva consola es ${this.name}, y el año de lanzamiento sera en ${this.age}`
    );
  }
}

function exp(type) {
  if (type === "xbox") {
    throw new Xbox("Este es un tipo de error", "Xbox Series X", "2024");
  } else if (type === "playstation") {
    throw new Playstation("Este es un tipo de error", "PlayStation 5", "2024");
  } else {
    console.log("Consola desconocida");
  }
}
try {
  exp("xbox");
} catch (error) {
  console.log(error.message);
  if (error instanceof Xbox) {
    error.especificaciones();
  } else if (error instanceof Playstation) {
    error.especificaciones();
  } else {
    console.log("Error desconocido");
  }
}

try {
  exp("playstation");
} catch (error) {
  console.log(error.message);
  if (error instanceof Xbox) {
    error.especificaciones();
  } else if (error instanceof Playstation) {
    error.especificaciones();
  } else {
    console.log("Error desconocido");
  }
}

try {
  exp("nintendo");
} catch (error) {
  console.log(error.message);
  if (error instanceof Xbox) {
    error.especificaciones();
  } else if (error instanceof Playstation) {
    error.especificaciones();
  } else {
    console.log("Error desconocido");
  }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const Valores = ["2.4", "Hola", "5", "yarlen", "Alvaro", "3.5"];

for (let Valor of Valores) {
  try {
    let num = parseFloat(Valor); // El parsefloat es una función de JavaScript que convierte un texto (string) en un número decimal (float)
    if (isNaN(num)) {
      // Se usa isNaN() para comprobar si algo es un NaN, Nan es Not A Number( no es un numero)
      throw new Error(`No se puede convertir ${Valor} a un numero`);
    } else {
      console.log(`Se ha convertido a numero ${Valor}`);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// 9. Crea una funcion que verifique si un objeto tiene una propiedad especifica y lanza una excepcion personal

class PropNE extends Error {
  constructor(message, propiedad) {
    super(message);
    this.propiedad = propiedad;
  }
  mensajeprop() {
    console.log(`La propiedad ${this.propiedad} no se encontro en el objeto`);
  }
}

const datos = {
  nombre: "Yarlen",
  edad: "22",
  alias: "Yar",
};

function Vpropiedad(objeto, propiedad) {
  if (!(propiedad in objeto)) {
    throw new PropNE(`Propiedad no encontrada`, propiedad);
  }
  console.log(
    `La propiedad ${propiedad} existe y su valor es ${objeto[propiedad]} `
  );
}
try {
  Vpropiedad(datos, "nombre");
  Vpropiedad(datos, "ciudad");
} catch (error) {
  if (error instanceof PropNE) {
    error.mensajeprop();
  } else {
    console.log(`Error desconocido:`, error.message);
  }
}

// 10. Crea una funcion que realice reintentos en caso de error hasta un maximo de 10
