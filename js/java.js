
//encontrar al ganador de una rifa 

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
  const winner = listaParticipantesGanadores.find(participants => participants.name === name)
  return winner || 'No hay un ganador.' //y este nueva linea alv?
}
