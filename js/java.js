
//spread operator
const originalArray = [1,2,3,4,5]

const copiaDelArray = [...originalArray]

console.log(originalArray)
console.log(copiaDelArray)

//esto se utiliza para no modificar el array, y trabajar en ese mismo array.
//spread para combinar array.

//2. 

const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9,10]
const arrayCombinado = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(arrayCombinado)

//3. crear array con elementos adicionales. 

const arrayBase = [1,2,3]
const arrayConAdicionales = [...arrayBase, 4, 5, 6]

console.log(arrayBase)
console.log(arrayConAdicionales)

//4. parametros a una funcion. 

function sumar (a, b, c){
    return a + b + c
}

const numeros = [1, 2, 3]
const resultados = sumar(...numeros)

console.log(resultados)

