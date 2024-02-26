
//find y findIndex. 

//no modifican el array, ayudan a encontrar indices y elementos. 

//find: devuelve el primer elemento que cumple con una funcion. 
const multipleOfFive = [5, 10, 15, 20]
const firstNumberGreaterThan110 = multipleOfFive.find(number => number => 10)

console.log(multipleOfFive) // el array no ha sido mutado. 
console.log(firstNumberGreaterThan110)


//find index: devuelve el primer elemento del array, que cumpla la condicion

const randomNumbers = [6, 14, 27, 56, 40]
const indexOfRandomNumber = randomNumbers.findIndex(number => number > 50)

console.log(randomNumbers)
console.log(indexOfRandomNumber)