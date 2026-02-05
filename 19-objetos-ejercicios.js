/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let moto = {
    marca: "renault",
    color: "rojo",
    cilindraje: 600
}
console.log(moto)
// 2. Accede y muestra su valor

console.log( moto.marca)

// 3. Agrega una nueva propiedad

moto.precio = 20000

// 4. Elimina una de las 3 primeras propiedades

delete moto.color
console.log(moto)

// 5. Agrega una función e invócala

moto.arrancar = function() {
    console.log("la moto ha arrancado")
}
moto.arrancar()


// 6. Itera las propiedades del objeto

for ( let valor in moto){
    console.log(valor + ": " + moto[valor])
}

// 7. Crea un objeto anidado
let moto2 = {
    marca: "yamaha",
    especificaciones: {
        cilindraje: 600,
        color: "rojo"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(moto2.especificaciones.cilindraje)
console.log(moto2.especificaciones.color)

// 9. Comprueba si los dos objetos creados son iguales

console.log(moto == moto2)
console.log(moto === moto2)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(moto.color == moto2.color)
