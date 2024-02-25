
//map() y foreach()

//excersice: farenheit y celcius 

const temperaturasFarenheit = [32,87,44, 104,223]
const temperaturasCelsius = temperaturasFarenheit.map(Farenheit => (5/9) * (Farenheit - 32))

console.log('Temperaturas en farenheit: ', temperaturasFarenheit)
console.log('Temperaturas en grados celcius: ', temperaturasCelsius)

//sum of elements array - EJEMPLO

const numbers = [1,2,3,4,5]
let suma = 0

numbers.forEach(number => {
  //  suma = suma + number
    suma += number
})

console.log('array of numbers', numbers)
console.log('Suma de los numeros ', suma);