// if, else if, else

// if (si)
let age = 22;

if (age == 22) {
  // Bloque
  console.log("La edad es 22");
}
// else (si no)
// else if (si no, si)

if (age == 22) {
  // Bloque
  console.log("La edad es 22");
} else if (age < 18) {
  console.log("Tienes menos de 18 anios");
} else {
  console.log("La edad no es de 22, ni es menor de edad");
}

// Operador ternario

// age == 22 ? console.log("Tiene 22 anios") : console.log("No tienes 22 anios"); es un ejemplo con console.log

const message =
  age == 22 ? "La edad es 22" : "La edad no es de 22, ni es menor de edad";
console.log(message);

// Switch

let day = 0;
let dayName;

// Forma optima
switch (day) {
  case 0: // es donde va a estar la condicion
    dayName = "Lunes";
    break;
  case 1:
    dayName = "Martes";
    break;
  case 2:
    dayName = "Miercoles";
    break;
  case 3:
    dayName = "Jueves";
    break;
  case 4:
    dayName = "Viernes";
    break;
  case 5:
    dayName = "Sabado";
    break;
  case 6:
    dayName = "Domingo";
    break;

  default: // es como un else
    dayName = "Numero de dia incorrecto";
}
console.log(dayName);

// Forma en la que no deberia de hacerse ya que se podria confundir porque no es optimo
// if (day == 0) {
//   dayName = "Lunes";
// } else if (day == 1) {
//   dayName = "Martes";
// } else if (day == 2) {
//   dayName = "Miercoles";
// } else if (day == 3) {
//   dayName = "Jueves";
// } else if (day == 4) {
//   dayName = "Viernes";
// } else if (day == 5) {
//   dayName = "Sabado";
// } else if (day == 6) {
//   dayName = "Domingo";
// }
