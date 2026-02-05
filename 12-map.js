//Map

// Declaracion

let map = new Map()
console.log(map) 

// Inicializacion

map = new Map([
    ["nombre", "Jaime"],
    ["apellido", "Chang"],
    ["edad", 19] 
])
console.log(map)

// Metodos y propiedades

//set (sirve para agregar una nueva clave-valor al map, pero si ya existe una clave, actualiza el valor)

map.set("alias", "Chango")
map.set("edad", 20)
console.log(map)

//get (sirve para obtener el valor de una clave)

console.log(map.get("nombre"))
console.log(map.get("pais"))

//has (sirve para verificar si una clave existe en el map)

console.log(map.has("apellido"))
console.log(map.has("ciudad"))

// delete (sirve para eliminar una clave-valor del map)

map.delete("alias")
console.log(map)

// keys (sirve para obtener todas las claves del map)
console.log(map.keys())

// values (sirve para obtener todos los valores del map)
console.log(map.values())

//entries (sirve para obtener todas las entradas del map)
console.log(map.entries())

// size (propiedad que indica el numero de elementos en el map)
console.log(map.size)

//clear 

map.clear()
console.log(map)