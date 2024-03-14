
//objetos. 
//estructura de datos. 
//key / value. 
//propiedad = valor de la propiedad. 

/* 
objeto NOMBRE {
    propiedad: valor de la propiedad,
    propiedad: otro valor, 
    propiedad: mas valores,
} 
*/

//abstraer la informacion. para llevarlas a la programacion. 


const persona = {
    nombre: '',
    edad: 1,
    genero: 'M',
    direccion: {
        calle: 'AV. insurg. 187.',
        ciudad: 'Mexico'
    }
}


//METODOS: funciones adentro de objetos, que ayudan a generar interaccion.


const personaMetodos = {
    nombre: 'Ariela',
    edad: 1,
    genero: 'M',
    direccion: {
        calle: 'AV. insurg. 187.',
        ciudad: 'Mexico'
    },

    saludar (){ //construccion de metodo.
        console.log(`Hello, my nombre es ${personaMetodos.nombre}`)
    }
}

console.log(personaMetodos.saludar())//mi logica me dijo this shit.


//trabajando con objetos. consumo de objetos. 

console.log(personaMetodos.nombre)


//para agregar un dato sin afectar al array.

personaMetodos.telefono = '555-555-555' //propiedad
console.log(personaMetodos)

personaMetodos.despedir = () => { //metodo.
    console.log('Adios.')
}
console.log(personaMetodos.despedir())