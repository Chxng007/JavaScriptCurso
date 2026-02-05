
// 1. Crea una variable para cada operación aritmética
let suma = 5 + 2
let resta = 5 - 2
let division = 5 / 2
let Multiplicación = 5 * 2
let potenciacion = 5 ** 2
let residuo = 5 % 2
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
suma -= 2
resta += 2
division /= 2
Multiplicación *= 2
potenciacion **= 2
residuo %= 2
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("5" >= 5)
console.log(0 == false)
console.log(1 == 1)
console.log("Hola" === "Hola")
console.log(5 * 2 == 10)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("5" === 5)
console.log(1 === true)
console.log(1 === 2)
console.log("Hola"=== 0)
console.log(5**2 == 10)
// 5. Utiliza el operador lógico and
console.log(10 >= 10 && 20 == 10)
// 6. Utiliza el operador lógico or
console.log(20 == 10 || 10 >= 10)
// 7. Combina ambos operadores lógicos
console.log(10 == 10 || 20 == 20 && 10 <= 10)
// 8. Añade alguna negación
console.log(!(10 == 40) && (20 == 38 || 10 <= 12))
// 9. Utiliza el operador ternario
let verificar = resta == 5 ? true : false
console.log(verificar)

let aprendiendo = true
aprendiendo ? console.log("Estoy aprendiendo") : console.log("No estoy aprendiendo")
// 10. Combina operadores aritméticos, de comparáción y lógicas