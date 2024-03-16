
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

persona1.nacionalidad = 'huasteco' //darle una nueva propiedad. 

const persona2 = new nombre_dela_funcion_constructora_de_objeto ('Melisa', 'Yaiden', 34) 

console.log(persona2) // no se imprime la nacionalidad.

//persona1.nacionalidad: solo existe para persona1, y no persona2.


//generar una nueva propiead en la funcion constructora: 

nombre_dela_funcion_constructora_de_objeto.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

persona1.saludar()
persona2.saludar()