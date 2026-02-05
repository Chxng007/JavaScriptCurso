//Bucles

//for

for (let i = 0; i < 5; i++) {
    console.log(`hola ${i}`);
}

const numeros = [10, 20, 30, 40, 50, 60, 70,80];

for (let i = 0; i < numeros.length; i++) {
    console.log(`Elementos :${numeros[i]}`);
}

//while

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

//do while

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

//for...of (sirve para recorrer elementos iterables como arrays, strings, maps, sets)   

array = [1,2,3,4]

set = new Set(["Chang", "Yannior", "Mc", "Channior", 20, true])

map = new Map([
    ["nombre", "Jaime"],
    ["apellido", "Chang"],
    ["edad", 19] 
])

mySring = "Hola Mundo"

for (let valor of mySring) {
    console.log(valor)
}

for (let valor of array) {
    console.log(valor)
}

for (let valor of set) {
    console.log(valor)
}

for (let valor of map) {
    console.log(valor)
}

//Buenas practicas 

// break y continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola ${i}`)
}