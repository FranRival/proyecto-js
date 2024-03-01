
//encontrar al ganador de una rifa: el error persiste. y no lo he arreglado en 5 dias. uwu

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
  //hay que verificar si en esta lista de listaParticipantesGanadores, existe el nombre
  const winner = listaParticipantesGanadores.find(participants => participants.nombre === name)
  return winner || 'No hay un ganador.' //y este nueva linea alv?
}

function findWinnerIndexByTicket (ticketNumber){

  const index = listaParticipantesGanadores.findIndex(participants => participants.ticketNumber === ticketNumber)

  return index !== -1 ? index: "No hay ganador con ese ticket" //diferente menos uno, arroja el index. sino, nos arroja el otro valor. 
}


function displayWinnerInformation (Ganaodres){
  if (Ganaodres !== undefined && Ganaodres != null && Ganaodres !== "No hay un ganador.") {
    console.log("Winner informations: " + Ganaodres)
  }else {
    console.log('No se encontro ganandor ');
  }
}

const ganandorPorNombre = findWinnerByName('Emily') //aqui hay un error. deberia aparecer la informacion. 
const indexWinnerByTicket = findWinnerIndexByTicket(011)


displayWinnerInformation(ganandorPorNombre)
console.log('Index of winner by ticet number: ', indexWinnerByTicket);
