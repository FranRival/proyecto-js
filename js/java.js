console.log("hello world")

//loop: 
//for in: los objetos es una estructura de datos diferente a los arrays. los onbjetos tienen propiedades y las proiedades, un valor. 
//si queremos iterar sobre estas propeidades, necesitmoas el for in

// for in, objetos enumurables. 

//objetos: propiedades = valor

//arrays y string: elementos adentro que generan una lista. tiene una propiedad, y la proeidad un valor. 


const listaDeCompras = {//objeto. propiedades basicas.
    manzana: 5,
    peras: 3,
    naranja: 2,
    uva: 1
}


//para iterar.

for (const frutas in listaDeCompras) {
    console.log(frutas);
}


//frutas es el indice 0 
for (frutas in listaDeCompras){
    console.log(`${frutas} : ${listaDeCompras[frutas]}`);
}

for (frutas of listaDeCompras){
    console.log(frutas);//error. listaa de compras no es iterable. 
}