/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 0; i < 11; i++){
    console.log(`Nunmero: ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0

for(let i = 1; i <= 100; i++){
    suma += i
    
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let i = 0; i<=50; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let set = new Set()

set = new Set(["Jaime", "Andres", "Chang"])

for(let valor of set){
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "Hola Mundo"
let vocales = "aeiouAEIOU"

let contadorVocales = 0
for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
        contadorVocales++
    }
}console.log(contadorVocales)


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4, 5]
let producto = 1
for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i]
}console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for(let i = 0; i<=10; i++){
    console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto

let texto = "Hola Mundo"
let textoInvertido = ""

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i]
}
console.log(textoInvertido)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0, b = 1, siguienteNumero;
console.log(a);
console.log(b);
for (let i = 2; i < 10; i++) {
    siguienteNumero = a + b;
    console.log(siguienteNumero);
    a = b;
    b = siguienteNumero;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numerosArray = [5, 12, 8, 20, 3, 15, 7]
let mayoresA10 = []
for (let i = 0; i < numerosArray.length; i++) {
    if (numerosArray[i] > 10) {
        mayoresA10.push(numerosArray[i])
    }
}
console.log(mayoresA10)