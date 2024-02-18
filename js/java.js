console.log("hello world")


const caricatura = {
    nombre: 'Vaca y pollito'
}

function recuerdo (personaje){
    console.log(`${this.nombre} era mi caricatura favorita. Me encanta ver las aventuras de ${personaje}`);
}

recuerdo.call(caricatura, 'vaca') //aqui da el mensaje: Vaca y pollito era mi caricatura favorita. Me encanta ver las aventuras de vaca


recuerdo.bind(caricatura, 'pollito') //aqui no devuelve nada. si queremos ver esa funcion hay que ejcutar esta nueva funcion

//asi es como hacer praa que devuelv un resultado

const impresion = recuerdo.bind(caricatura, 'pollito')
impresion()//ahora ya devuelve el mensaje