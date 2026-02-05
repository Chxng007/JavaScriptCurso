//Funciones

//simple 

function miFuncion() {
    console.log("Hola, funcion")
}

for (let i = 0; i < 5; i++){
    miFuncion()
}

// Con parametros

function saludar(nombre) {
    console.log(`Hola ${nombre} `)
}

saludar("Chang")

// Funciones anonimas

const saludarr = function (nombre) {
    console.log(`Hola ${nombre} `)
}

saludarr("Chang")
// funciones flechas

const saludar2 = (nombre) => {
    console.log(`Hola ${nombre} `)
}
saludar2("Chang")

const saludar3 = (nombre) => console.log(`Hola ${nombre} `)
saludar3("Chang")

// parametros

function sumar(a, b) {
    console.log(a + b)
}
sumar(2, 3) 

function defaultSumar(a = 0, b = 0) {
    console.log(a + b)
}
// por defecto
defaultSumar()  //0
defaultSumar(2) //2
defaultSumar(2, 3) //5
defaultSumar(b=3) //3

// retornar valores

function multiplicar(a, b) {
    return a * b
}

let resultado = multiplicar(4, 5)
console.log(resultado)

// funciones anidadas

function externa() {
    console.log("Soy la funcion externa")
    function interna() {
        console.log("Soy la funcion interna")
    }
    interna()   
}

externa()

// funciones de orden superior 

function aplicarFuncion(funcion, param) {
    funcion(param)
}
aplicarFuncion(saludar3, "Chang")

// forEach

Array = [1, 2, 3, 4, 5]

Array.forEach((valor) => console.log(valor))