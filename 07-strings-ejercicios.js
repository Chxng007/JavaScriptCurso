
// 1. Concatena dos cadenas de texto
let lenguaje = "JavaScript"
let tiempo = 2

console.log("Aprendo " + lenguaje + " y llevo estudiandolo " + tiempo + " dias.")
// 2. Muestra la longitud de una cadena de texto
console.log(lenguaje.length)
// 3. Muestra el primer y último carácter de un string
console.log(lenguaje[0] + lenguaje[lenguaje.length - 1])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(lenguaje.toUpperCase())
console.log(lenguaje.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let variasl = `Hola esto
es un texto en varias lineas`
// 6. Interpola el valor de una variable en un string
console.log(`Estoy aprendiendo ${lenguaje}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let texto = "Esto es un texto con espacios"

console.log(texto.replaceAll(" ", "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(texto.includes("Esto"))
// 9. Comprueba si dos strings son iguales
console.log(texto == "Esto es un texto con espacios")
// 10. Comprueba si dos strings tienen la misma longitud
console.log(texto.length == texto.length)