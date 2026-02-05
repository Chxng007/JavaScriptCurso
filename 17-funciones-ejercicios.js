/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a,b){
    return a + b
}
let resultado = suma(5,5)
console.log(resultado)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function numeroMayor(array){
    let mayor = array[0]
    for(let i = 1; i < array.length; i++){
        if(array[i] > mayor){
            mayor = array[i]
        }
    }
    return mayor
}
let numeros = [3, 7, 2, 9, 4]
let mayorNumero = numeroMayor(numeros)
console.log(mayorNumero)


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(cadena){
    let contador = 0
    let vocales = "aeiouAEIOU"
    for(let i = 0; i < cadena.length; i++){
        if(vocales.includes(cadena[i])){
            contador++
        }
    }
    return contador
}
let texto = "Hola Mundo"
let numeroVocales = contarVocales(texto)
console.log(numeroVocales)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function convertirMayusculas(array){
    let mayusculas = []
    for(let i = 0; i < array.length; i++){
        mayusculas.push(array[i].toUpperCase())
    }
    return mayusculas
}
let palabras = ["hola", "mundo", "javascript"]
let palabrasMayusculas = convertirMayusculas(palabras)
console.log(palabrasMayusculas)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(num){
    if(num <= 1) return false
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false
    }
    return true
}
let numero = 7
let resultadoPrimo = esPrimo(numero)
console.log(resultadoPrimo)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(array1, array2){
    let comunes = []    
    for(let i = 0; i < array1.length; i++){
        if(array2.includes(array1[i])){
            comunes.push(array1[i])
        }
    }
    return comunes
}
let arrayA = [1, 2, 3, 4, 5]
let arrayB = [4, 5, 6, 7, 8]
let comunesArray = elementosComunes(arrayA, arrayB)
console.log(comunesArray)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(array){
    let suma = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            suma += array[i]
        }
    }
    return suma
}
let numerosPares = [1, 2, 3, 4, 5, 6]
let resultadoSumaPares = sumaPares(numerosPares)
console.log(resultadoSumaPares)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function elevarAlCuadrado(array){   
    let cuadrados = []
    for(let i = 0; i < array.length; i++){
        cuadrados.push(array[i] ** 2)
    }
    return cuadrados
}
let numerosCuadrados = [1, 2, 3, 4, 5]
let resultadoCuadrados = elevarAlCuadrado(numerosCuadrados)
console.log(resultadoCuadrados)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirPalabras(cadena){
    let palabras = cadena.split(" ")
    let palabrasInvertidas = palabras.reverse()
    return palabrasInvertidas.join(" ")
}
let frase = "Hola mundo desde JavaScript"
let fraseInvertida = invertirPalabras(frase)
console.log(fraseInvertida)

// 10. Crea una función que calcule el factorial de un número dado
function factorial(num){
    if(num < 0) return null
    if(num === 0) return 1
    let resultado = 1   
    for(let i = 1; i <= num; i++){
        resultado *= i
    }
    return resultado
}
let numeroFactorial = 5
let resultadoFactorial = factorial(numeroFactorial)
console.log(resultadoFactorial)