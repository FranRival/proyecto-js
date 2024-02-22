console.log("hello world")

//array: mutabilidad e inmutabildad

//array: guardar muchos valores en una sola variable. y son objetos. 

//2 maneras de crearlo

new Array()

const frutas = Array("Apple", "platano", "naranja")

console.log(frutas)


const justOneNumber = Array(12)
console.log(justOneNumber)


const numbers = Array(1,2,3,4,5,6,7)
console.log(numbers)


//2: array literal sintax

const oneNumer = [4]
console.log(oneNumer)

const emptyArray = []
console.log(emptyArray) //vacios, cuando lo iremos llenando

const recipesIngredientes = [ //array mixto
    'Four',
    true,
    2,{
        Ingredientes: 'Milk', quantity: '1 cup'
    },
    false
]

console.log(recipesIngredientes)


//accesing array elements

const firstFruit = frutas[0]
console.log(firstFruit) 

//lengt de un array
const numberOfFruits = frutas.length
console.log(numberOfFruits)


//mutabilidad
frutas.push('Melon') //inyectar informacion
console.log(frutas)


//inmutabilidad
const newFrutas = frutas.concat(['Peras', 'Kiwi'])
console.log(newFrutas) //nuevo array 
console.log(frutas) //array sin modificar

//no todos los metodos modifican el array original 

//verificar si un array es un array

const isArray = Array.isArray(frutas)
console.log(isArray) //saber si es un array. arroja un boleano. true o false. 

