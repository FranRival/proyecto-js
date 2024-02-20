console.log("hello world")

//switch: muy similar a switch.

//si se va cumpliendo. la diferencia: validamos diferentes cosas. 



/* switch (expresion) { //la condicion que se va a evaluar 
    case value1:
        //codigo a ejecutar
        
        break;

     case value2: 
     //codigo a ejecutar

    default:

    //codigo a ejecutar
        break;
} */


let expresion = "Papayas"

switch (expresion) {
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo.");
        break;

    case "Manzanas":
        console.log("Las manzanas cuestan $43 el kilo"); 

    case "Platanos":
        console.log("Los platanos cuestan $50 el kilo");

    case "Mangos":

    case "Papayas":
        console.log("Las papayas cuestan $35 el kilo");

        break;

    default:
        console.log(`Lo sentimos, no contamos con ${expresion}`);
        break;
}

console.log("Hay algo mas que desees?");

//swithc es diferente a if porque no esta utilizando opciones de comparacion. para ver si lo que queremos evaluar existe. 

//switch hace un operador escrito. evaluara si el valor es igual al que teneos ahi. si es igual, estrictamente igual, se ejecutara. 
//es como utilizar ===