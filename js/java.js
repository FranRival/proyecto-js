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
    console.log(`Hellooo iam ${this.dogName}`)
} 

const house1 = {
    dogName: 'Fido',
    Age: 3
     
}

house1.dogGreeting() // sale un error. porque el this ya no apunta

//anclar o vincular con ese objeto. en el siguiente commit
