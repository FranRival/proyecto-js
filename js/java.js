console.log("hello world")

//string
//primitivos y objetos

const stringPrimitivo = 'un String primitivo'
console.log(typeof stringPrimitivo)


const stringPrimitivoTambien = String('un String primitivo')
console.log(typeof stringPrimitivo)


//string primitivo - inmutables

const stringObjeto = new String('un String objeto')
console.log(typeof stringObjeto) //sale un objeto 

const saludo = 'Hola, Como estas?'
console.log(saludo[0]) //en el indice, arroja la letra
console.log(saludo.charAt(2))//acceder a los indices en el string. 
console.log(saludo.indexOf('C')) //cuando no sabemos en que ubicacion esta la letra
console.log(saludo.indexOf('estas')) //desde donde comienza la palabra
console.log(saludo.indexOf('estamos'))//acceder a una que no existe. -1. 
console.log(saludo.lastIndexOf('s')) //la ultima pocision de la ultima letra
console.log(saludo.slice(3,5)) //la ubicacion de un punto, a otro, regresa las letras dentro
console.log(saludo.length) //cantidad de caracteres
console.log(saludo.toLocaleUpperCase()) //mayusculas
console.log(saludo.toLocaleLowerCase())//minusculas

const saludoDividido = saludo.split(' ')
console.log(saludoDividido) //dividido por espacios
console.log(saludoDividido[2]) //el resultado, .estas?, porque fue divididio desde arriba

const saludoConEspacios = ' Hello ahora '
const saludosSinEspacio = saludoConEspacios.trim()
console.log(saludosSinEspacio) //quita los esapcios al principio y al final 

const saludoOriginal = 'Hellooooo world '
const nuevoSaludo = saludoOriginal.replace('world', '🌚')
console.log(nuevoSaludo) //reemplazando palabras


