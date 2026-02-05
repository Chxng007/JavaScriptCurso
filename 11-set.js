//Declaracion

let set = new Set()

console.log(set)

//icializacion

set = new Set(["Chang", "Yannior", "Mc", "Channior", 20, true])

console.log(set)

//metodos comunes 

//add y delete

set.add("salsa")
console.log(set)

set.delete(20)
console.log(set)

//has ( sirve para verificar si un elemento existe en el set)

console.log(set.has("Chang"))

//size (propiedad que indica el numero de elementos en el set)

console.log(set.size)

//convertir un set en un array

let array = Array.from(set)
console.log(array)

//convertir un array en un set
set = new Set(array)
console.log(set)

//set no permite elementos duplicados
//pero si de un elemento cambia algo minimo si se agrega
set.add("Chang")
console.log(set)

set.add("chang")//cambio de mayuscula a minuscula
console.log(set)