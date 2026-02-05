let array = [1,2,3,4]

let persona = {
    nombre: "Chang",
    edad: 30,
    ciudad: "Madrid"
}

let miValor = array[0]
console.log(miValor)

let miNombre = persona.nombre
console.log(miNombre)

// Desestructuracion

// sintaxis en arrays
let [miValor1, miValor2, miValor3, miValor4] = array
console.log(miValor1)
console.log(miValor1)
console.log(miValor2)
console.log(miValor3)
console.log(miValor4)

// sintaxis arrays con valores predeterminados

let [valor1, valor2, valor3, valor4, valor5 = 5] = array
console.log(valor1)
console.log(valor2)
console.log(valor3)
console.log(valor4)
console.log(valor5)

// ignorar elementos array

let [valor6, , valor7] = array
console.log(valor6)
console.log(valor7)

// sintaxis en objetos

let {nombre, edad, ciudad} = persona
console.log(nombre)
console.log(edad)
console.log(ciudad)

// sintaxis objetos con valores predeterminados

let {nombre2, edad2, ciudad2, email = "Jchangmoreno5@gmail.com"} = persona
console.log(nombre2)//no existe en el objeto persona, por lo que sale undefined
console.log(edad2)// igual este
console.log(ciudad2)// y este
console.log(email)

// sintaxis objetos con nuevos nombres de variables

let {nombre: nuevoNombre, edad: nuevaEdad, ciudad: nuevaCiudad} = persona
console.log(nuevoNombre)
console.log(nuevaEdad)
console.log(nuevaCiudad)

// objeto anidado

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


let {trabajo: {nombre: trabajoNombre, empresa: trabajoEmpresa}} = persona3
console.log(trabajoNombre)
console.log(trabajoEmpresa)

// Propagación (...)

//sintaxis arrays

let array3 = [...array,5,6] // unir arrays
console.log(array3)

// copia de arrays
let array1 = [...array]// copia de array en array1
console.log(array1)

// combinacion de array

let array2 = [ ...array, ...array1]
console.log(array2)

// sintaxis objetos

let persona4 = {...persona, pais: "España"} 
console.log(persona4)

// copia de objetos
let persona5 = {...persona}
console.log(persona5)
