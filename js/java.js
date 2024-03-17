
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
        this.nombre = nombre
        this.tipo = tipo
    }
}//esta clase utilizara de base la clase animal. 
//es la palabra extends. 