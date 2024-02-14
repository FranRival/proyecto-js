console.log("hello world")


//creacion de string

const primeraOpcion = 'llaves'
const segundaOpcion = "llaves"
const terceraOpcion = `llaves` //templates literarios


//concatenar

const direccion = "calle falsa 1, 2, 3"
const ciudad = "springfield"
const direccionCompleta = "mi direccion complta es " + direccion + " " + ciudad

console.log(direccionCompleta)


//concatenacion templates literarios 

const nombre = "Homero"
const pais = "🏴‍☠️"
const presentacion = `Hola, soy ${nombre}, vengo de ${pais}`
console.log(presentacion);

//3era concatenacion. join()

const primeraParte = 'Me gusta'
const segundaParte = 'la gente de '
const terceraParte = '🛸'

const pensamiento = [primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' ')) //el join se puede personalizar

console.log(pensamiento.join(' 🌧 ')) //el join se puede personalizar


//cuarta forma de concatenar string. concat

const hobbit1 = '🧺'
const hobbit2 = '♨'
const hobbit3 = '🛵'

const hobbies = 'Mis hobbies son: '.concat(hobbit1,', ',hobbit2, ', ', hobbit3, '. ')

console.log(hobbies);
