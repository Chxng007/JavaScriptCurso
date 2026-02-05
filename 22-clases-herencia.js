//clases

class Persona {


    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//sintaxis 

let persona1 = new Persona("Chang", "Moreno")
let persona2 = new Persona("Jaime", "andrs")
console.log(persona1)
console.log(persona2)

console.log(typeof persona)

// valores por defecto 

class DefaultPersona {
    constructor(nombre = "Sin nombre", apellido = "Sin apellido") {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona3 = new DefaultPersona()
console.log(persona3)

let persona4 = new DefaultPersona("jaime", "chang")
console.log(persona4)

// acceso a propiedades 

console.log(persona3.nombre)
console.log(persona3["apellido"])

// añadir nuevas propiedades

persona3.nombre = "Nuevo nombre"
console.log(persona3.nombre)

// funciones en clases

class PersonaConMetodo {

    constructor(nombre, apellido,alias){
        this.nombre = nombre;
        this.apellido = apellido;
        this.alias = alias;
    }

    walk(){
        console.log(`${this.nombre} está caminando`)
    }

}

let persona5 = new PersonaConMetodo("Jaime", "Moreno","animal")
persona5.walk()

// propiedades privadas

class PersonaConPrivado {

    #bank

    constructor(nombre, apellido, bank){
        this.nombre = nombre;
        this.apellido = apellido;
        this.#bank = bank;
    }
    pay(){
        this.#bank
    }
}

let persona6 = new PersonaConPrivado("Jaime", "Moreno", 1000)

// no podemos acceder ni mostrar la propiedad privada desde fuera de la clase

//console.log(persona6.bank)// no podemos acceder a la propiedad privada

persona6.bank= "jjjajaajk"// creamos una nueva propiedad publica, no accedemos a la propiedad bank


// getters y setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"

// herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("MoureDog")
myDog.run()
myDog.sound()

let myFish = new Fish("MoureFish", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos

class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))

