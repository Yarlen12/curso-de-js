// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let name = "Yarlen";

if (name == "Yarlen") {
  console.log(name);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña conside con unos establecidos

let usuario = "Yarlen.Vazz";
let contraseña = "Yarlen";

if (usuario == "Yarlen.Vazz") {
  console.log("Hola, usuario Yarlen.Vazz!");
} else if (contraseña == "Yarlen") {
  console.log("Contraseña correcta, bienvenido!");
} else {
  console.log("Usuario o contraseña incorrectos intente de nuevo");
}

// 3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje

let positivo = 1;
let negativo = -1;
let cero = 0;

if (positivo >= 1) {
  console.log("Tu numero es positivo");
} else if (negativo >= -9) {
  console.log("Tu numero es negativo");
} else if (cero == 0) {
  console.log("Tu numero es cero!");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan

let age = 10;
let noVotar;

if (age >= 18) {
  console.log("Felicidades, ya puedes votar!");
} else if (age == 17) {
  noVotar = console.log("Lo siento, te falta un año para poder votar");
} else if (age == 16) {
  noVotar = console.log("Lo siento, te faltan 2 años para poder votar");
} else if (age == 15) {
  noVotar = console.log("Lo siento, te faltan 3 años para poder votar");
} else if (age == 14) {
  noVotar = console.log("Lo siento, te faltan 4 años para poder votar");
} else if (age == 13) {
  noVotar = console.log("Lo siento, te faltan 5 años para poder votar");
} else if (age == 12) {
  noVotar = console.log("Lo siento, te faltan 6 años para poder votar");
} else if (age == 11) {
  noVotar = console.log("Lo siento, te faltan 7 años para poder votar");
} else if (age == 10) {
  noVotar = console.log("Lo siento, te faltan 8 años para poder votar");
} else if (age == 9) {
  noVotar = console.log("Lo siento, te faltan 9 años para poder votar");
} else if (age == 8) {
  noVotar = console.log("Lo siento, te faltan 10 años para poder votar");
} else if (age == 7) {
  noVotar = console.log("Lo siento, te faltan 11 años para poder votar");
} else if (age == 6) {
  noVotar = console.log("Lo siento, te faltan 12 años para poder votar");
} else if (age == 5) {
  noVotar = console.log("Lo siento, te faltan 13 años para poder votar");
} else if (age == 4) {
  noVotar = console.log("Lo siento, te faltan 14 años para poder votar");
} else if (age == 3) {
  noVotar = console.log("Lo siento, te faltan 15 años para poder votar");
} else if (age == 2) {
  noVotar = console.log("Lo siento, te faltan 16 años para poder votar");
} else if (age == 1) {
  noVotar = console.log("Lo siento, te faltan 17 años para poder votar");
} else {
  console.log("Lo siento, numero no encontrado :C");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let edad = 22;
const mensaje =
  edad >= 18 ? "Actualmente eres un adulto" : "Actualmente eres menor de edad";

console.log(mensaje);

// 6. Muestra en que estacion del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "abril";
let estacion;

if (mes == "enero") {
  estacion = console.log("Es invierno! 🥶❄️");
} else if (mes == "febrero") {
  estacion = console.log("Es invierno! 🥶❄️");
} else if (mes == "marzo") {
  estacion = console.log("Es invierno! 🥶❄️");
} else if (mes == "abril") {
  estacion = console.log("Es primavera! 🌻");
} else if (mes == "mayo") {
  estacion == console.log("Es primavera! 🌻");
} else if (mes == "junio") {
  estacion == console.log("Es primavera! 🌻");
} else if (mes == "julio") {
  estacion == console.log("Es verano! 🏖️");
} else if (mes == "agosto") {
  estacion == console.log("Es verano! 🏖️");
} else if (mes == "septiembre") {
  estacion == console.log("Es verano! 🏖️");
} else if (mes == "octubre") {
  estacion == console.log("Es otoño! 🍂🍁");
} else if (mes == "noviembre") {
  estacion == console.log("Es otoño! 🍂🍁");
} else if (mes == "diciembre") {
  estacion == console.log("Es otoño! 🍂🍁");
} else {
  console.log("Lo siento, no existe esa estacion, intentalo en minusculas 🥲");
}

// 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior

let month = "diciembre";
let dias;

if (month == "enero") {
  dias = console.log("Enero tiene 31 dias! ");
} else if (month == "febrero") {
  dias = console.log("Febrero tiene 28 dias!");
} else if (month == "marzo") {
  dias = console.log("Marzo tiene 31 dias!");
} else if (month == "abril") {
  dias = console.log("Abril tiene 30 dias!");
} else if (month == "mayo") {
  dias == console.log("Mayo tiene 31 dias!");
} else if (month == "junio") {
  dias == console.log("Junio tiene 30 dias!");
} else if (month == "julio") {
  dias == console.log("Julio tiene 31 dias!");
} else if (month == "agosto") {
  dias == console.log("Agosto tiene 31 dias!");
} else if (month == "septiembre") {
  dias == console.log("Septiembre tiene 30 dias!");
} else if (month == "octubre") {
  dias == console.log("Octubre tiene 31 dias!");
} else if (month == "noviembre") {
  dias == console.log("Noviembre tiene 30 dias!");
} else if (month == "diciembre") {
  dias == console.log("Diciembre tiene 31 dias!");
} else {
  console.log("Lo siento, no existe ese mes, intentalo en minusculas 🥲");
}

// Switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
