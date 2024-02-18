console.log("hello world")

//funciones de flecha y enlace lexico

//funcion tradicional

function almuerzo (proteina,verdura){
    return `${proteina}, ${verdura}`
}

almuerzo ('🥩','🌵')



//arrow function

const almuerzo1 = (proteina,verdura)=>{
    return `${proteina}, ${verdura}`
}


//ejemplo vivo de un arrow functiom

const greeting = function (nombre){
    return`Hello,, ${nombre}`
}


//arrow function - explicit return
const newGreeting = (nombre) => { //misma expresionde funcion pero sin function y con flecha
    return`Hello,, ${nombre}`
}

//arrow function - implicit return
const newGreetingImplicit = nombre => `Hello,, ${nombre}`

//necesitamos colocar los parentesis cuando hay mas de un parametro

const newGreetingImplicitWithTwoParameters = (nombre, lastName) => `Hello,, ${nombre}, ${lastName}`



//lexical binding
const ficcionalCaraceter = { //tenemos un objeto
    name: 'Uncle jack', //nombre
    messageWithTradicionalFunction: function (message){//metodo
        console.log(`${this.name} say: ${message}`)
    },
    messageWithArrowfunction: (message)=> {
        console.log(`${this.name} say: ${message}`)
    },
}


ficcionalCaraceter.messageWithTradicionalFunction('El tio ben se le dispararon alv') //aqui toma el nombre
ficcionalCaraceter.messageWithArrowfunction('ya esta tieso y spiderman los see') //aqui no toma nada del nombre. this para arrow, no existe. 

