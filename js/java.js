console.log("hello world")

//conversion de tipos explicita e implicita 

//explicita type casting

const stringNumero = '42'
const integer = parseInt(stringNumero)
console.log(integer);
console.log(typeof integer) //convirtio a tipo de dato numero

//conversion a flotante

const stringDecimal = '3.14'
const float = parseFloat (stringDecimal)
console.log(float)
console.log(typeof float)

//conversion a binario

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)//solo toma 2 numeros. 
console.log(typeof decimal)

//implicit type casting
const sum = '5' + 3
console.log(sum) //una concatenacion, convierte el 3 en string


const sumWithBoolean = '3' + true
console.log(sumWithBoolean) //vio el string, lo conviertio en string, e hizo la concatenacion 

//en que caso suma y concatena
const sumWithNumber = 2 + true 
console.log(sumWithNumber)



const stringValue = '10'
const numberValue = 10
const booleanValue = true


console.log('----------');
console.log(stringValue+stringValue) //concaenar 
console.log(numberValue+numberValue) // sumar
console.log(booleanValue+booleanValue) // sumar
console.log(numberValue+stringValue)//concatenar
console.log(numberValue+booleanValue) //sumar
console.log(booleanValue+stringValue)//concatenar
console.log(booleanValue+numberValue)//sumar 
console.log(booleanValue+booleanValue)//sumar 


//si ecuentra un string, concatena
//cuando es sin string, suma 
