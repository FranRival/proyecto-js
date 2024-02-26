
//filter() y reduce()

//filter crea un nuevo array con elementos que cumplen con una condicion dada por una funcion 

const numeros = [1,2,34,54,10,29,91,73,32,8]
const evenNumbers = numeros.filter(numbers => numbers % 2 === 0) //el filter pide una funcion dentro de los parentesis


//un modulo = % ---- 4|2

console.log(numeros)
console.log(evenNumbers)


//reduce.
//reduce un array a un solo valor. suma todos los valores obteniendo un solo valor. 


const numbersReduce = [1,2,3,4,5]
const sumar = numbersReduce.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)//agregar valor por dentro. 2 parametros. 

console.log('Este es el array de numeros: ', numbersReduce)
console.log(sumar)

//encontrar cuanto se repite una palabra en un array. 

//reduce . caso 2


const words = ['Apple', 'Banana', 'Barbie', 'Barbie', 'Apple']
const reduceCaso2 = words.reduce((accumulator, currentValue)=> {
  if (accumulator[currentValue]){
    accumulator[currentValue]++
  }else{
    accumulator[currentValue] = 1

  }
  return accumulator
}, {})

console.log(reduceCaso2);

