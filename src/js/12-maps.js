// Maps = Una coleccion de elementos, aqui cada elemento esta formado por un par uno esta compuesto por una clave y otro un valor

// Declaracion

let myMap = new Map();
console.log(myMap);

// Inicializacion

myMap = new Map([
  // Asi es como se guardan los valores
  // Con la coma le asociamos el valor
  ["name", "Yarlen"],
  ["email", "yarlen.alm@gmail.com"],
  ["age", 22],
  ["phone", "66-77-25-49-40"],
]);
console.log(myMap); // Nos dara cuatro valores

// Metodos y propiedades

// set

myMap.set("alias", "Yar"); // Aqui agregamos un valor del modo set
myMap.set("name", "Yarlen Almogabar"); // Se actualiza o modifica
myMap.set("name", "Yarlen Almogabar"); // No se pueden duplicar, a menos que sea un nombre o un digito diferente
console.log(myMap);

// get

console.log(myMap.get("name")); // nos mostrara el valor de name
console.log(myMap.get("Hola")); // No existe asi que nos saldra

// has

console.log(myMap.has("Hola")); // Dara false porque my map no contiene un  valor con el nombre de hola
console.log(myMap.has("name")); // Dara true porque si existe este valor

// delete

myMap.delete("email");
myMap.delete("phone");

console.log(myMap);

// keys y values

console.log(myMap.keys()); // Solo nos esta retornando una listo con las claves
console.log(myMap.values()); // Nos retorna los valores de las claves

// entries

console.log(myMap.entries()); // Nos retorna todos los valores y las claves

// size

console.log(myMap.size); // Nos dice mediante un numero el tamaño de este mapa

// Clear (para eliminar todo o limpiar)

myMap.clear(); // Con esto es suficiente

console.log(myMap);
