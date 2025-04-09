// 10. Importa una funcion, una constante y una clase desde un directorio diferente al anterior

export function division(a, b) {
  return a / b;
}

export const year = 2025;

export class Carrito {
  constructor(agregar, precio) {
    this.agregar = agregar;
    this.precio = precio;
  }
  agregado() {
    return `El producto ${this.agregar} fue agregado al carrito`;
  }
  precios() {
    return `Precio total del producto ${this.precio}`;
  }
  mensaje() {
    console.log(`${this.agregado()}, ${this.precios()}`);
  }
}
