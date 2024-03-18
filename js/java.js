
//this. palabra reservada. se trabaja con clases. hace referencia al objeto o l aclase. 

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}


const persona1 = new Persona("Alison", 25)

console.log(persona1)

persona1.nuevoMetodo = function (){
    console.log(`Mi nombre es ${this.nombre}`)
}