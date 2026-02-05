/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
// y 2. Añade un método a la clase que utilice las propiedades
// 3. Muestra los valores de las propiedades e invoca a la función

class Persona{

    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    Caminar(){
        console.log(`la persona ${this.nombre} ${this.apellido} esta caminando`)
    }
}
    
    let persona = new Persona ("jaime", "Chang")
    persona.Caminar()

    
    

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 