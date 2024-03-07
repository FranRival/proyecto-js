
//includes
//indexof
//lastindexof

const numeros = [1, 2, 3, 4, 5]

const resultado1 = numeros.includes(3)
console.log(resultado1) 
//hay un numero que tenga este del parentesis. resultado, true o false. 

//index of. retorna -1 si el resultado es negativo. no true.

const frutas = ['manzana', 'cereza', 'uvas', 'mango']
const index1 = frutas.indexOf('uvas')

console.log(index1)

//un elemento que no existe:
const index2 = frutas.indexOf('peras')
console.log(index2)

//3. Lasindexof

const numerosDeNuevo = [2,4,6,8,10,6]
const ultimoIndice = numerosDeNuevo.lastIndexOf(8)
console.log(ultimoIndice)

const ultimoIndice1 = numerosDeNuevo.lastIndexOf(292)
console.log(ultimoIndice1)//tambien sale -1
