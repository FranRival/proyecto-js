
//map() y foreach()

// Convert Fahrenheit to Celsius

const fahrenheit = [120, 50, 25, 34]

const celsius = fahrenheit.map(item => parseFloat((5/9*(item-32)).toFixed(1)))

console.log('Temperatures in Fahrenheit: ',fahrenheit);
console.log('Temperatures in Celsius: ',celsius);

// Sum all the elements of an array

const numbers = [1, 2, 3, 4, 5]

let sumOfNumbers = 0

numbers.forEach(num => sumOfNumbers += num)

console.log('Array of Numbers: ', numbers);
console.log('The sum of the numbers is: ', sumOfNumbers);