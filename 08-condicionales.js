// if, else if, else

//if (si)

let edad = 18;

if (edad == 18){
    //bloque de código que se ejecuta si la condición es verdadera
    console.log("Tienes 18 años, eres mayor de edad");
}

// else(si no) 
if (edad == 18){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// else if (si no, si)
if (edad == 18){
    console.log("Tienes 18 años");
} else if (edad >= 19){
    console.log("Tienes permiso para entrar");
} else if (edad < 18){
    console.log("No tienes permiso para entrar");
}else {
    console.log("No tienes edad, quedate quieto");
}

// Operador ternario
// condicion ? codigo si es true : codigo si es false
let acceso = edad >= 18 ? "Tienes permiso para entrar" : "No tienes permiso para entrar";
console.log(acceso)

// switch

let dia = 3
let diaSemana

switch (dia){
    case 0:
        diaSemana = "Lunes"
        break;
    case 1:
        diaSemana = "Martes"
        break;
    case 2:
        diaSemana = "Miercoles"
        break;
    case 3:
        diaSemana = "Jueves"
        break;
    case 4:
        diaSemana = "Viernes"
        break;
    case 5:
        diaSemana = "Sabado"
        break;
    case 6:
        diaSemana = "Domingo"
        break;
    default:
        diaSemana = "Dia no valido"
        break;
}

console.log(`Hoy es ${diaSemana}`)