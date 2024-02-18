console.log("hello world")



const personalizedMessage = () => 'la gorda esta en el tobogan!'

//funciones constructoras
function Rocket (name, ownedMessage){// crear un objeto a partir de una funcion. y creamos sus priedades.
    this.name = name
    this.launchMessage = ownedMessage 
}

const falcon9Rocket = new Rocket('Falcon9', personalizedMessage) //una instancia de ese objeto
const falcon10Rocket = new Rocket('Falcon10', 'a ver si no se estrella')


console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())

//crear funciones constructrasa partir de arrow functions. no se puede utilizar new.

const RocketWithArrowFunction = (name, ownedMessage) => ({ //objeto a apartir de un arrow function
    name: name,
    launchMessage: ownedMessage
})

const personalizedMessageForArrowFunction = () => 'xxxxxxxxx!'
const falcon9Rocket1 = RocketWithArrowFunction('Falcon99', personalizedMessageForArrowFunction)

console.log(falcon9Rocket1.name)
console.log(falcon9Rocket1.launchMessage) //aparece la funcion, 
console.log(falcon9Rocket1.launchMessage())//aparece ejecutada la funcion 