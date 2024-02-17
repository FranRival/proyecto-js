console.log("hello world")


//anatomia de una funcion. la funcion se utiliza una y otra vez. 


//BLACK FRIDAY 
//que quiero? - obtener un descuento 

//que datos tengo - precio, $100, y descuento del 20%

//output: salida

// input: entrada, valores. 

function suma (a, b){
    return a + b
}

suma(3,2) //valores reales, los que hace para que el programa funcione 
console.log(suma) //sale algo diferente?....


/* --------------------------------- */

function calculateDIscountedPrice (price, discountPercentage){
    const discount = (price*discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDIscountedPrice(originalPrice,discountPercentage)


console.log('Original Price: $' + originalPrice)
console.log('Discount: ' + discountPercentage + '$')
console.log('Price with discount: '+ finalPrice)




console.log('--------------------------');


function suma1 (a, b){
    return a + b
}

const sumadosAntesDe = 84
const sumadosDespuesDe = 483

console.log(sumadosAntesDe*sumadosDespuesDe)





/* --------------------------------- */