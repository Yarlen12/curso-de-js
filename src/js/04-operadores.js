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
console.log(a != 6); // operador de desigualdad
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
