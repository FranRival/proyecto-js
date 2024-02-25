
//map() y foreach()

//excersice: farenheit y celcius 

const temperaturasFarenheit = [32,87,44, 104,223]
const temperaturasCelsius = temperaturasFarenheit.map(Farenheit => (5/9) * (Farenheit - 32))

console.log('Temperaturas en farenheit: ', temperaturasFarenheit)
console.log('Temperaturas en grados celcius: ', temperaturasCelsius)