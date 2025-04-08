// Exportacion de modulos: Es una forma de dividir nuestro codigo en piezas que nos permite organizar nuestro codigo en archivos separados

export function add(a, b) {
  return a + b;
}

console.log(add(5, 10));

// Propiedades

export const PI = 3.1416;
export let name = "Yarlen";

// Clases

export class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  perimetro() {
    return 2 * Math.PI * this.radius;
  }
}

// Exportacion por defecto

// El default es cuando solo tenemos una propiedad, una funcion a exportar, debe ser unica, es por eso que si agregamos un error este marcara un error
export default function substract(a, b) {
  return a - b;
}

// export default class Myclass {
//   func() {
//     console.log("Mi clase");
//   }
// }

// export default function substract2(a,b){
//   return a -b
// }
