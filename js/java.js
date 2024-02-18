console.log("hello world")


//funciones constructoras
function Rocket (name, ownedMessage){// crear un objeto a partir de una funcion. y creamos sus priedades.
    this.name = name
    this.launchMessage = function (){
        console.log(ownedMessage)
    }
}

const falcon9Rocket = new Rocket('Falcon9', 'la gorda esta en el tobogan') //una instancia de ese objeto
const falcon10Rocket = new Rocket('Falcon10', 'a ver si no se estrella')


console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())


