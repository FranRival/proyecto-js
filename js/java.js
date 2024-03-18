
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


perro1.nuevoMetodo = function(){
    console.log("Este es un metodo")
}//esta linea de codigo estamos agregando un nuevo metodo solo a la instancia. 
//necesitamos agregar ese metodo a la clase constructora o la clase padre (perro)


//hay que inyectar la infroamcion sin afectar la clase perro.



perro.prototype.segundoMetodo = function (){
    console.log('Es otro nuevo metodo');
} 


///lo que son las estancias a la dickenson:
//perro1.prototype es indefinido.
//perro.prototype

perro1.prototype.segundoMetodo = function(){
    console.log()
}//no funciona. 
//agrgando un prootupo a una instancia. pero solo se crea con las clases y funciones constructoras. 

//gerarquia:

//cadena de prototypo:

//perro analiza el "SegundoMetodo"
//y se da cuenta que no lo tiene en su constructor. 
//pero si lo tiene en su prototipo. por lo tanto se puede acceder a ello.