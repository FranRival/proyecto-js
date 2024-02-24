
//array:4 metodos de array que modifican el array original.

//splice: elimina o agrega espacios de informacion en el array 

const vegetales = ['peras', 'gitomates', 'brocoli', 'potato']

//decirle cual eliminar y cual agregar

const removeVegetales = vegetales.splice(2, 1, 'cucumber', 'onion') //pocision. luego, la cantidad de elementos. . y la nueva informacion.
console.log(vegetales)
console.log(removeVegetales) //me imprime solo lo que eleimine 

//reverse
//organizar array a la inversa. atras hacia adelante.

const numbers = [1,2,3,4,5]
const reverseNumber = numbers.reverse()

console.log(numbers)
console.log(reverseNumber)

//modifican el array. original y nuevo. sin distingos 

//sort. el array ordenado. with numbers.

const unsortedNumbers = [1,4,18,1,62,34]
const unicodeSortedNumbers = unsortedNumbers.sort()

console.log(unsortedNumbers)
console.log(unicodeSortedNumbers)
//los convierte en strings.revisa el unicode. y los ordena. 


//organizar numeros 
const unsortedNumbers1 = [1,4,18,1,62,34]
const sortedNumbers = unsortedNumbers1.sort((a,b)=>a - b) //el primer numero, y el segundo. 1 y 4. 
//arrow function: 1 menos 4. es igual a -3. al encontrar el numero negativo: lo que hace, ordena. 
//1 es menor de 4. 
//y lo hace con los siguientes numeros. 
//4 - 18: -17. 
console.log(sortedNumbers)
console.log(unsortedNumbers1);


//sort con string: por utf-16

const cities = ['Nueva york', 'tokio', 'londres']
const sortedCities = cities.sort()
console.log(cities)
console.log(sortedCities)


//fill: cambia los elementos por un valor estatico. 

const ages = [21,23, 35, 45]
console.log(ages.fill('🎁', 2, 4));