// Operadores

// Operadores Aritmeticos

let a = 5;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a % b);
console.log(a ** b);
console.log(a > b);
console.log(a < b);

a++; //incremento
console.log(a);

b--; // Decremento
console.log(b);

// Operadores de asignacion

let myVariable = 2;
console.log(myVariable);

myVariable += 2;
console.log(myVariable);

myVariable -= 2;
myVariable *= 2;
myVariable /= 2;
myVariable %= 2;
myVariable **= 2;

// Operadores de comparacion

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a == 6); // Igualdad por valor
console.log(a == "6"); // Igualdad por valor
console.log(a == a);
console.log(a === a); // Igualdad por identidad valor y tipo
console.log(a === 6);
console.log(a === "6");
console.log(a != 6); // operador de desigualdad (Si es distinto)
console.log(a !== "6"); // desigualdad por identidad valor y tipo
console.log(0 == false);
console.log(1 == false);
console.log(2 == false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 == "Hola");
console.log(0 === "");
console.log(undefined == null); // true porque los dos estan vacios
console.log(undefined === null); // obvio da false porque son de distinto tipo

// Truthy values (valores verdaderos)

// Todos los numero positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolean true

// Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// Nan
// El boolean false
// Cadenas de texto vacias

// Operadores logicos

// and (&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 > 10 && 15 < 20); // como es una linea si uno es falso todo es falso, es todo o nada, solo con tener un falso y lo demas verdadero ya todo sera falso
console.log(5 < 10 && 15 > 20); // todo da falso aunque la primera condicion sea verdadera porque la segunda es falsa
console.log(5 < 10 && 15 < 20 && 20 < 30);

// or (||)
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20); // en or si tienes una condicion verdadera ya toda la linea sera true porque es 5 < 10 0 15 > 20 el primero es verdadero, es uno o otro, si los dos estan mal seria falso
console.log(5 > 10 || 15 > 20 || 30 > 40);

console.log((5 > 10 && 15 > 20) || 30 < 40); // se pueden usar combinados

// not (!)
console.log(!true);
console.log(!false);
console.log(!(5 > 10 && 15 > 20)); // si niego el valor, invierto su valor por lo cual me dara true
console.log(!(5 > 10 || 15 > 20));

// Operadores ternarios
const isRaining = true;

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo"); // El signo de interrogacion es si se cumple la condicion y los dos puntos es por si no se cumple

const isRaining2 = false;
isRaining2
  ? console.log("Esta lloviendo")
  : console.log("No esta lloviendo jaja");
