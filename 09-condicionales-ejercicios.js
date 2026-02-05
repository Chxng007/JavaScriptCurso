/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Chango";
if (nombre == "Chango") {
    console.log("Tu nombre es Chango");
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "Channior";
let contraseña = "1826";
if (usuario == "Channior" && contraseña == "1826") {
    console.log("Usuario y contraseña correctos");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 5;
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 10;
if (edad >= 18) {
    console.log("Puedes votar");
} else {
    console.log(`No puedes votar, te faltan ${18 - edad} años`);
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let edad2 = 20;
let verificar = edad2 >= 18 ? "adulto" : "menor";
console.log(verificar);
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
mes = 0
if (mes == 12) {
    console.log("Estamos en invierno");
} else if (mes == 5) {
    console.log("Estamos en el mes que cumple el chango");
} else {
    console.log("No es invierno ni mayo, sino el cumple del yannior");
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let dias;
if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    dias = 31;
    console.log(dias);
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    dias = 30;
    console.log(dias);
} else if (mes == 2) {
    dias = 28;
    console.log(dias);
} else if (mes == 0) {
    dias = "Mes no valido";
    console.log(dias);
} else {
    dias = "Solo meses del 1 al 12";
    console.log(dias);
}

// switch
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let saludo = 0
let idioma
switch (saludo) {
    case 0:
        idioma = "Español(hola)"
        break;
    case 1:
        idioma = "Ingles(hello)"
        break;
    case 2:
        idioma = "Frances(bonjour)"
        break;
    case 3:
        idioma = "Aleman(guten tag)"
        break;
    default:
        idioma = "Bomboclat";
        break;
}
console.log(idioma);
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let month = "Enero"

switch (month.toLowerCase()) {
    case "enero":
    case "febrero":
    case "diciembre":
        console.log("Estamos en invierno")
        break
    case "marzo":
    case "abril":
    case "mayo":
        console.log("Estamos en primavera")
        break
    case "junio":
    case "julio":
    case "agosto":
        console.log("Estamos en verano")
        break
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("Estamos en primavera")
        break
    default:
        console.log("Ingresa un mes valido")
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7

let days30 = ["abril", "junio", "septiembre", "noviembre"]
let day31 = ["enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"]

switch (true) {
    case days30.includes(month.toLowerCase()):
        console.log("El mes tiene 30 dias")
        break
    case day31.includes(month.toLowerCase()):
        console.log("El mes tiene 31 dias")
        break
    case "febrero":
        console.log("Tu mes es especial")
        break
    default:
        console.log("Mes no valido")
        break
}
