console.log("hello world")

//array: push y pop
//ejercicio:

let librosCarrito = []

const ADD_TO_CART_ACTION = 'Agregar al carrito'
const DELETE_FROM_CART_ACTION = "Eliminado del carrito"
const VIEW_FROM_CART_ACTION = "Ver el carrito"



function verCarrito (){
    console.log('El carro de libros ', librosCarrito);
}

function performCartActions(action, nuevoLibro){
    switch (action) {
        case ADD_TO_CART_ACTION:
            librosCarrito.push(nuevoLibro)
            break;

        case DELETE_FROM_CART_ACTION:
            if (librosCarrito.length === 0) {
                console.log("El carrito vacio. No hay libros para quitar.");
            }else{
                const removeLibro = librosCarrito.pop()
                console.log(`Quitamos el libro del carro ${removeLibro}`)
            }
            break;

         case VIEW_FROM_CART_ACTION:
            verCarrito()
            break;
    
        default:
            console.log("Elige una opcion valida.");
    }
}

performCartActions(ADD_TO_CART_ACTION, 'Kamasutra')//no muestra nada
performCartActions(VIEW_FROM_CART_ACTION)//muestra algo
performCartActions(ADD_TO_CART_ACTION, 'Kamasutra Vol. 2')
performCartActions(VIEW_FROM_CART_ACTION)
performCartActions(DELETE_FROM_CART_ACTION)

