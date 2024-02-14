console.log("hello world")



//anatomia de variables
let variable = "numeros"

//let es una caja, donde se almacenara. se almacena algo en la variable. la declaracion, y la asignacion, luego del =

console.log(variable);

const variableDos = 0 //el costs es para una caja que no cambiara alv. son fijas. el valor siempre sera el mismo. 

//tipos de datos; mutables e inmutables. 
//10 tipos de datos: 


/* primitivos 
String
Number
Boolean
null
undefined
Symbol
BigInt
---inmutables, se pasan por un valor.


complejos
Object
Array
function 
------mutables. se pasan por referencia. 


*/

let numero = 23
numero = numero + 10
console.log(numero);

let verdadero = true
verdadero = false
console.log(verdadero);


//tipo de dato, mutable
let usuario = {nombre: "personaje", edad:15}

usuario.edad =20
console.log(usuario)


let frutas = ['manzanas', 'pera'] 
frutas[0] = 'sandia'
console.log(frutas);



function cambiarNombre (objeto){
    objeto.nombre = 'Nuevo nombre' //ese .nombre, de donde lo toma?
}

let persona =  {nombre:'random'}

cambiarNombre(persona) //para que aparezca el resultado 'nuevo nombre, se debe invocar a la funcion, para que cambie el nombre. '


console.log(persona)