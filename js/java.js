
//clases.

//crear nuevos objetos.

class Persona {
    //metodo constructor.
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    //metodo
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} edad`)
    }
}//esto es un molde.

const persona1 = new Persona('Yanira', 24)

persona1.saludar()