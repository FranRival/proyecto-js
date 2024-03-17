
//prototipos y herencias.

//prototype. mismos metodos y rpopiedades. es algo que sucede automaticamente sin necesidad de programar.

//funciona con funciones y clases. pero no las instancias. 

class Animal {
    constructor(nombre,tipos){
        this.nombre = nombre
        this.tipos = tipos
    }
    //metodo
    emitirSonido(){
        console.log('El animal emite un sonido. ')
    }
}

class perro extends Animal{
    constructor(nombre,tipo,raza){
        super(nombre, tipo)
        this.raza = raza
    }
    emitirSonido(){
        console.log("El perro ladra");
    }
    correr(){
        console.log(`${this.nombre} corre alegremente.`)
    }
}


const perro1 = new perro('Alexa', 'Perro', 'Siberiano')

console.log(perro1)

perro1.correr()
perro1.emitirSonido()
//estamos rescribiendo el metodo de emitirSOnido(). por eso no aparece el emitirSonido de la clase animal.