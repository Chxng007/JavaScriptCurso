// Cadenas de texto

let nombre = "Yannior"
let edad = 19

let info = "Me llamo " + nombre + ", y tengo " + edad


console.log(info)


// Longitud 
console.log(info.length)

//Acceso a caracteres
console.log(info[1])


//Metodos comunes
console.log(info.toUpperCase())
console.log(info.toLowerCase())
console.log(info.indexOf("Yannior"))
console.log(info.includes("Me llamo"))
console.log(info.slice(0, 10))
console.log(info.replace("Me llamo", "Hola soy"))


// Template literals ( plantillas literales)

let info2 = `Me llamo ${nombre}, y tengo ${edad}`
console.log(info2)
