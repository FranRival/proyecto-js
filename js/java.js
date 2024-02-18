console.log("hello world")


//funciones constructoras
function Rocket (name){// crear un objeto a partir de una funcion. y creamos sus priedades.
    this.name = name
    this.launchMessage = function (){
        console.log('🌅')
    }
}

const falcon9Rocket = new Rocket('Falcon9') //una instancia de ese objeto
const falcon10Rocket = new Rocket('Falcon10')


console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())


