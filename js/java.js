
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

