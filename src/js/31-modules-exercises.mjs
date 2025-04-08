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

// 5. Importa una constante

// 6. Importa una clase

// 7. Exporta una funcion, una constante y una clase por defecto

// 8. Importa una funcion, una constante y una clase por defecto

// 9. Exporta una funcion, una constante y una clase desde una carpeta

// 10. Importa una funcion, una constante y una clase desde un directorio diferente al anterior
