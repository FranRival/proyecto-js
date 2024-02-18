console.log("hello world")



////metodos bind, call y apply

const owned = 'Lucy'
const adress = '123 Avenue'


function dogGreeding(owned,adress){
    console.log(`Hi,m ${this.name} and i live with ${owned} on ${adress}`)
}

const newHouse ={
    dogName: "Coconut"
}


dogGreeding.call(newHouse, owned, adress) //llamamos a la funcion, pasamos los parametros ya dicional, un nuevo contexto de ejecucion

const necesaryValues = [owned,adress]

/* aqui es donde comienza el nuevo desmadre */

dogGreeding.apply(newHouse,necesaryValues)//recibe 2 valores

//misma funcion de proveer y manipular

const bidingWithBind = dogGreeding.bind(newHouse, owned, adress) //ya no ejecuta la funcion, sino da otra funcion
console.log(bidingWithBind) //devuelve una funcion, 

//aqui la forma como se escribe y no devuelva una funcion en consola

bidingWithBind() //

//3 metodos que permiten cambiar el contexto de ejecucion. colocarle otros metodos y parametros.

//call, bind, apply.
//si son un monton de parametros, se organizan en un array + apply
//si son pocos parametros, se utiliza call si tenemos uno o 2
//bind si se necesite una funcion y que esa funcion sea ejecutada para obtener otra funcion con un contexto de ejecucion diferente 