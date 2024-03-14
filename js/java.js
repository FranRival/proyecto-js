
//arrays bidimensionales - 67

//el ganador del torneo. 

const competidores = [
    ['Java', 'C#'],
    ['C#', 'Python'],
    ['Python', 'Java']
]

const resultados = [0,0,1]


function ganadorTorneo (competidores, resultados){

    const calificaciones = {}
    let ganadores = ''

    for (let i = 0; i < competidores.length; i++) {
     //   const home = competidores[i][0]
        const [home, away] = competidores[i]//creando 2 variables. en la primera pocsion, se toma home, y la segunda away     
        //home y way signifca, equipo del pueblo , y equipo extrangero alv

        const equipoGanador = resultados[i] === 0 ? away : home
        calificaciones[equipoGanador] = (calificaciones[equipoGanador] || 0) + 3 
        //si el valor no existe, asigna un valor 0. 

   
        if (!ganadores || calificaciones[equipoGanador] > calificaciones[ganadores]) {
            ganadores = equipoGanador 
        }
    }
    return ganadores
}

ganadorTorneo (competidores, resultados)

console.log(ganadorTorneo (competidores, resultados))