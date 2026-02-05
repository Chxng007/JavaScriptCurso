//Array

//Declaracion 

let array = []
let array2 = new Array()

console.log(array)
console.log(array2)

// Inicializacion

array = [3]

array2 = new Array(3)//lo que reserva es un espacio, lo que espera ser rellando por un elemento

console.log(array)
console.log(array2)

array = [1,2,3,4]
array2 = new Array(1,2,3,4)

console.log(array)
console.log(array2)

array = ["Chang","Yannior","Mc","Channior", 5, true]
array2 = new Array("Chang","Yannior","Mc","Channior", 5, true)

console.log(array)
console.log(array2)

array2 = new Array(3)
array2[0] = "Chang"
array2[1] = "Yannior"
array2[2] = "Mc"
console.log(array2)

array=[]
array[0]="Chang"
array[1]="Yannior"
//array[2]="Mc"
array[3]=true
console.log(array)

//metodos comunes

array = []

//push (agrega elementos al final de la array) y 
// pop( elimina el ultimo elemento de la array)
array.push("Chang")
array.push("Yannior")
array.push("Mc")
array.push(20)

console.log(array)

console.log(array.pop())//elimina el ultimo elemento y lo muestra por consola
array.pop()

console.log(array)


//shift (elimina el primer elemento de la array) y
// unshift (agrega elementos al inicio de la array, ya sea uno o mas)

console.log(array.shift())// lo mismo que el pop pero con el primer elemento
console.log(array)

array.unshift("Channior")
console.log(array)

//length (muestra la cantidad de elementos en la array)
console.log(array.length)

//clear (elimina todos los elementos de la array)

array = []
console.log(array)

//slice
array = ["Chang","Yannior","Mc","Channior"]

let nuevoArray = array.slice(1,3)//corta la array desde el indice 1 hasta el 3 pero sin incluirlo

console.log(array)
console.log(nuevoArray)

//splice

array.splice(1,2)//elimina desde el indice 1,2 elementos

console.log(array)

array = ["Chang","Yannior","Mc","Channior", 38,true]

array.splice(1,2, "Nueva entrada")
console.log(array)