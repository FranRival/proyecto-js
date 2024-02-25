
//map() y foreach()

// no modifican el array original.

//permite colocar una funcion en cada elemento del array. 

const numbers = [1,2,3,4,5]
const squareNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squareNumbers)


//foreach: 

const colors = ['red', 'pink', 'blue']
//const iteratedColors = colors.forEach() //recorre cada una de las pocisiones 
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)