// 1. Crea un objeto con 3 propiedades

let objeto = {
  nombre: "Yarlen",
  Profesion: "Programadora",
  edad: 22,
};

// 2. Accede y muestra su valor

console.log(objeto.nombre);

// 3. Agrega una nueva propiedad

objeto.email = "yarlen.alm@gmail.com";
console.log(objeto);

// 4. Elimina una de las 3 primeras propiedades

delete objeto.Profesion;
console.log(objeto);

// 5. Agrega una funcion e invocala

let objeto2 = {
  nombre: "Yarlen",
  edad: 22,
  email: "yarlen.alm@gmail.com",
  cadena: function () {
    console.log(`Hola como estas`);
  },
};
objeto2.cadena();

// 6. Itera las propiedades del objeto
for (let valor in objeto2) {
  console.log(valor + ": " + objeto2[valor]);
}

// 7. Crea un objeto anidado
let objeto3 = {
  nombre: "Yarlen",
  edad: 22,
  email: "yarlen.alm@gmail.com",
  cadena: function () {
    console.log(`Hola como estas`);
  },
  trabajo: {
    nombre: "Yarlen",
    puesto: "Programadora",
    exp: 1,
  },
};

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(objeto3.trabajo);
console.log(objeto3.trabajo.nombre);
console.log(objeto3.trabajo.puesto);
console.log(objeto3.trabajo.exp);

// 9. Comprueba si los dos objetos creados son iguales

console.log(objeto == objeto2);
console.log(objeto2 == objeto3);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(objeto.nombre == objeto.puesto);
console.log(objeto3.trabajo.exp == objeto.edad);
