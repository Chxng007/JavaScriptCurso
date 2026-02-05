// objetos 

// Sintaxis

let persona = {
    nombre: "Chang",
    edad: 30,
    ciudad: "Madrid"
}

// Acceder a las propiedades}

//notación punto

console.log(persona.nombre)

//notación corchetes
console.log(persona["nombre"])

// Modificación de propiedades

persona.edad = 18
console.log(persona.edad)

persona.ciudad = "Barcelona"
console.log(persona.ciudad)

// eliminación de propiedades

delete persona.edad
console.log(persona)

// Añadir nuevas propiedades

persona.email = "jchangmoreno5@gmail.com"
console.log(persona)

persona.age = 18
console.log(persona)

// metodos (funciones)

let persona2 = {
    nombre: "Jaime",
    edad: 20,
    alias: "animal",
    walk: function () {
        console.log("El personaje camina")
    }
}
persona2.walk()

// Anidación de objetos

let persona3 = {
    nombre: "Jaime",
    edad: 20,
    alias: "animal",
    walk: function () {
        console.log("El personaje camina")
    },
    trabajo: {
        nombre: "Desarrollador",
        empresa: "Google",
        work: function () {
            console.log("El personaje trabaja")// con un this llamamos a una propiedad del mismo objeto en la interpolacion
        }
    }
}

console.log(persona3)

console.log(persona3.nombre)
console.log(persona3.trabajo)
console.log(persona3.trabajo.nombre)
persona3.trabajo.work()

// igualdad de objetos

let persona4 = {
    nombre: "Chang",
    edad: 30,
    ciudad: "Madrid"
}

console.log(persona)
console.log(persona4)

console.log(persona == persona4)
console.log(persona === persona4) // false porque son referencias diferentes en memoria

console.log(persona.nombre == persona4.nombre)

// iteracion 

for (let valor in persona4) {
    console.log(valor + ": " + persona4[valor])
}

//Funciones como objetos

function person(nombre, edad) { // deberia ser una clase
    this.nombre = nombre
    this.edad = edad
}

let persona5 = new person("Chang", 30)
console.log(persona5)

console.log(typeof persona5)
console.log(typeof persona4)