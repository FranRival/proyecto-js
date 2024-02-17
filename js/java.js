console.log("hello world")

//identificador this. contexto de ejcucion. 

//casa = objeto
//letero = this
//perro = funcion

const house = {
    dogName: 'Fido',
    dogGreeting: function (){
        console.log(`Hellooo iam ${this.dogName}`)
    } 
}

house.dogGreeting()

//objeto: house, ese objeto tiene caracteristicas, nombre y saludo 
//queremos acceder a propiedade de ese mismo objeto.
//ese this es alusivo al objeto al que esta vinculado.
//se le conoce como enlace implicite - implicit binding


function dogGreeting(){
    console.log(`Hellooo iam -> ${this.dogName}`)
} 

dogGreeting.call() //pasarle el nuevo objeto y vinculancion y pueda tomarlo

const newHouse = {
    dogName: 'COconut',
}

dogGreeting.call(newHouse) //se le vincula: enlace explicito 



function newDogGreeting(owner,address){
    console.log(`Hellooo iam -> ${this.dogName}, and l live whit ${owner}, on ${address}`)
} 

const owner = 'Lucy'
const address = '123 Always live'
newDogGreeting.call(newHouse, owner,address)//funciono this shit. 

//metodo call, una funcion con un objeto y a su vez diferentes parametros.

//enlace explicito

