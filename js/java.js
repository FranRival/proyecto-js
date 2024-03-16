
//objetos. 
//

let perspna = {
    nombre: 'Emily',
    apellido: 'Lujuriosa',
    edad: 35
}


//creando 150 personas. 
//funcion constructora.

function nombre_dela_funcion_constructora_de_objeto (nombre, apellido,edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

const persona1 = new nombre_dela_funcion_constructora_de_objeto('Alison', 'Rios', 25)

console.log(persona1)

persona1.nacionalidad = 'huasteco' //darle una nueva propiedad