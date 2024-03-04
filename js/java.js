

const listaParticipantesGanadores = [
  {
    id: 1,
    nombre: 'Jennifer',
    ticketNumber: 001,
  },
  {
    id: 2,
    nombre: 'Michael',
    ticketNumber: 015,
  },
  {
    id: 3,
    nombre: 'Emily',
    ticketNumber: 011, 
  },
  {
    id: 4,
    nombre: 'Charly',
    ticketNumber: 111,
  }
]

function findWinnerByName (name){

  const winner = listaParticipantesGanadores.find(participants => participants.nombre === name) //el nombre del "participants.name" es igual al name que le estamos pasando por parametro....
  //creo que la primero mierda de participants, es para que detecte que es una funcion 
  return winner || 'No hay un ganad' 
}

function findWinnerIndexByTicket (ticketNumber){

  const index = listaParticipantesGanadores.findIndex(participants => participants.ticketNumber === ticketNumber)

  return index !== -1 ? index: "No hay ganador con ese ticket" //diferente menos uno, arroja el index. sino, nos arroja el otro valor. 
}

//desplega la informacion. 
function displayWinnerInformation (Ganaodres){
  if (Ganaodres !== undefined && Ganaodres != null && Ganaodres !== "No hay un ganador.") {
    console.log("Winner informations: ", Ganaodres)
  }else {
    console.log('No se encontro ganandor ');
  }
}

const ganandorPorNombre = findWinnerByName('Emily') //aqui hay un error. deberia aparecer la informacion. 
const indexWinnerByTicket = findWinnerIndexByTicket(015)


displayWinnerInformation(ganandorPorNombre)
console.log('Index of winner by ticet number: ', indexWinnerByTicket);
