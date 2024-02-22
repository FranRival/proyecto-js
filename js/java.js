console.log("hello world")

//array: push y pop

//push: anadir mas informacion al final del array. y devuelve la longitud del array.

//metodos que modifican el array original (mutabilidad)

const paises = ['Usa', 'Canada', 'Uk']
const newPaises = paises.push("Alemania", "Australia")

console.log(paises) //arroja la lista
console.log(newPaises) //arroja numeros

//pop: elimina el ultimo elemento del array. y devuelve ese valor.

const removedPais = paises.pop()
console.log(paises)
console.log(removedPais)