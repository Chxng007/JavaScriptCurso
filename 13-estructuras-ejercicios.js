/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = ["perro", "gato", "elefante", "tigre", "leon"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final
console.log(animales.unshift("jirafa"))
console.log(animales.push("mono"))
console.log(animales)
//aiwe changsito 
// 3. Elimina el que se encuentra en tercera posición
console.log(animales.splice(2, 1))
console.log(animales)
// 4. Crea un set que almacene cinco libros
let set = new Set()
set = new Set(["El principito", "Cien años de soledad", "Don Quijote", "1984", "La Odisea"])
console.log(set)

// 5. Añade dos más. Uno de ellos repetido
set.add("El libro mio de Chang")
set.add("EL Principito")
console.log(set)
// 6. Elimina uno concreto a tu elección
set.delete("El principito")
console.log(set)
// 7. Crea un mapa que asocie el número del mes a su nombre


let map = new Map ([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"],
    [6,"Junio"],
    [7,"Julio"],
    [8,"Agosto"],
    [9,"Septiembre"],
    [10,"octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"]
])
console.log(map)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(map.has(5))
console.log(`El mes es: ${map.get(5)}`)
// 9. Añade al mapa una clave con un array que almacene los meses de verano
map.set("mesesVerano", ["Junio", "Julio", "Agosto"])
console.log(map)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array = ["Chang", "yannior", "Jugo", "Pizza", "Mc"]
console.log(array)
let setDesdeArray = new Set(array)
console.log(setDesdeArray)
let mapDesdeSet = new Map()
mapDesdeSet.set("miSet", setDesdeArray)
console.log(mapDesdeSet)    