// 1. Exporta una funcion

export function suma(a, b) {
  return a + b;
}

console.log(suma(5, 10));

// 2. Exportan una constante

export const name = "Yarlen";

// 3. Exporta una clase

export class Nombres {
  constructor(name1, name2) {
    this.name1 = name1;
    this.name2 = name2;
  }

  saludo() {
    console.log(`Hola ${this.name1} y ${this.name2} mucho gusto en conocerlos`);
  }
}

// 4. Importa una funcion

export function resta(a, b) {
  return a - b;
}

// 5. Importa una constante

export const edad = "Tienes 22 años";

// 6. Importa una clase

export class Animales {
  constructor(perro, gato) {
    this.perro = perro;
    this.gato = gato;
  }

  ladrido() {
    return `El ${this.perro} esta ladrando`;
  }

  maullido() {
    return `El ${this.gato} esta maullando`;
  }

  razon() {
    console.log(`${this.ladrido()} y ${this.maullido()} porque tienen hambre`);
  }
}

// 7. Exporta una funcion, una constante y una clase por defecto

// export default function defaultFunction() {
//   const nombre1 = "Yarlen";
//   class edades {
//     constructor(edad1, edad2) {
//       this.edad1 = edad1;
//       this.edad2 = edad2;
//     }

//     greeting() {
//       console.log(
//         `Hola, la edad de la primera persona es ${this.edad1} y el de la segunda persona es ${this.edad2}`
//       );
//     }
//   }

//   return { nombre1, edades };
// }

// const { edades } = defaultFunction();
// let edadd = new edades(22, 23);
// edadd.greeting();

// 8. Importa una funcion, una constante y una clase por defecto

export default function defaultFunction() {
  const nameAnimal = "Sandy";

  class Data {
    constructor(namep, apellido, edadp) {
      this.namep = namep;
      this.apellido = apellido;
      this.edadp = edadp;
    }

    datosre() {
      console.log(
        `Hola! tu nombre y apellido es ${this.namep} ${this.apellido} y edad es ${this.edadp} años `
      );
    }
  }

  return { nameAnimal, Data };
}

// 9. Exporta una funcion, una constante y una clase desde una carpeta

// 10. Importa una funcion, una constante y una clase desde un directorio diferente al anterior
