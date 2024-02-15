console.log("hello world")


//dato primitivo, number 
//1. tipo entero y decimal


const entero = 32
const decimal = 3.14

console.log(typeof decimal, typeof entero) //no hay distincion

//2. notacion cientifica 
const cientifico = 5e3

//3. numero infinitos y no numeros 
const inifinito = Infinity
const noEsUnNumero = NaN

//4.operaciones aritmeticas.
//--suma, resta, mutiplicacion y division 

const suma = 3 + 4
const resta = 7 - 4
const multiplicacion = 5 * 4
const division = 7 / 4

//--modulo y exponenciacion 
const modulo = 14 % 4 //saber si un numero es multiplo de otro numero
const exponenciacion = 2 ** 3 //potencia

//--precisiion
const resultado = 0.1 + 0.2
console.log(resultado) //dilema de preicision
console.log(resultado.toFixed(1)) //error de precision arreglado
console.log(resultado === 0.3)//para comprobar a nivel de typo. javascript no es precisio a este nivel. 

//math operaciones avanzadas
const raizCuadrada =  Math.sqrt(8)
const valorAbsoluto = Math.abs(9)
const numeroRandom = Math.random()

console.log("los resultados de las operaciones" + raizCuadrada)
console.log(valorAbsoluto)
console.log(numeroRandom)

