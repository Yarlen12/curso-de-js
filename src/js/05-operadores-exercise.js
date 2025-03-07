// 1. Crea una variable para cada operacion aritmetica
let y = 12;

console.log(y + y);
console.log(y - y);
console.log(y / y);
console.log(y * y);
console.log(y ** y);
console.log(y % y);
console.log(y > y);
console.log(y < y);

y++;
console.log(y);

y--;
console.log(y);

// 2. Crea una variable para cada tipo de operacion de asignacion que haga uso de las variables utilizadas para las operaciones aritmeticas
let a = 10;
console.log(a);
a += 10;
console.log(a);
a -= 10;
console.log(a);
a *= 10;
console.log(a);
a /= 10;
console.log(a);
a %= 10;
console.log(a);
a **= 10;
console.log(a);

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparacion

console.log(y > a);
console.log(y < a);
console.log(y >= "10");
console.log(true == 12);
console.log(y === y);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion

console.log(0 == false);
console.log(0 === "");
console.log(0 > " ");
console.log(false >= 0);
console.log(undefined <= null);

// 5. Utiliza el operador logico and

console.log(12 > 10 && 3 < 10);

// 6. Utiliza el operador logico or

console.log(12 < 5 || 9 > 7);

// 7. Combina ambos operadores logicos

console.log((12 > 6 && 6 < 9) || 3 > 5);

// 8. Añade alguna negacion

console.log((8 > 9 && 4 > 5) || !(5 > 7));

// 9. Utiliza el operador ternario

const isLove = true;

isLove ? console.log("I love you") : console.log("Im not love you");

// 10. Combina operadores aritmeticos, de comparacion y logicos.
