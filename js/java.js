console.log("hello world")

//loop: 
//for in: los objetos es una estructura de datos diferente a los arrays. los onbjetos tienen propiedades y las proiedades, un valor. 
//si queremos iterar sobre estas propeidades, necesitmoas el for in

// for in, objetos enumurables. 

//objetos: propiedades = valor

//arrays y string: elementos adentro que generan una lista. tiene una propiedad, y la proeidad un valor. 

for (const variable in object) {
    if (Object.hasOwnProperty.call(object, variable)) {
        const element = object[variable];
        
    }
}

//por cada elemento y propiedad en este objeto, ejecutame este codigo, y regresame algo