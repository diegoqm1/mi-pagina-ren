// 📅 Fecha inicial
const inicio = new Date(2025, 9, 10);

function actualizarContador(){

const ahora = new Date();
let diff = ahora - inicio;

let dias = Math.floor(diff / (1000*60*60*24));
let horas = Math.floor(diff/(1000*60*60)%24);
let minutos = Math.floor(diff/(1000*60)%60);
let segundos = Math.floor(diff/1000%60);

document.getElementById("contador").innerHTML =
`${dias} días 💕 ${horas}h ${minutos}m ${segundos}s`;

}

setInterval(actualizarContador,1000);

// 💖 Mensajes largos románticos
const mensajes = [

`Desde que compartimos este momento, cada día contigo se volvió una historia que quiero recordar. No importa lo que pase afuera, contigo todo se siente más bonito, más tranquilo… como si el mundo se alineara para regalarnos instantes que guardo con cariño infinito.`,

`Mirar estas fotos me recuerda que el amor no siempre son palabras grandes… a veces es una risa compartida, una mirada cómplice o un abrazo que lo dice todo. Cada recuerdo contigo es una promesa silenciosa de que lo nuestro vale cada segundo.`,

`Hay algo mágico en cada instante que vivimos. No son solo momentos… son recuerdos que laten fuerte, que me hacen sonreír cuando los pienso y que me recuerdan lo especial que es caminar contigo.`,

`Contigo aprendí que el tiempo no se mide en horas, sino en emociones. Cada día que pasa suma recuerdos, risas y pequeñas historias que construyen algo que quiero seguir viviendo.`,

`Estas imágenes son más que fotos… son fragmentos de felicidad que siempre quiero volver a mirar. Porque cuando pienso en nosotros, pienso en calma, alegría y en un cariño que crece sin prisa.`,

`A veces basta recordar uno de estos momentos para sentir que todo vale la pena. Porque compartir la vida contigo convierte lo simple en algo extraordinario.`,

`Cada instante contigo tiene su propio brillo. Son recuerdos que me acompañan, que me inspiran y que me hacen valorar lo bonito que es coincidir en este tiempo.`,

`Lo que más me gusta de estos recuerdos es que todos tienen algo en común: tu presencia. Y eso convierte cualquier momento en algo especial.`,

`Cuando miro atrás, veo una colección de instantes que me llenan el corazón. Porque lo que vivimos no es casualidad… es una historia que seguimos escribiendo.`,

`Nuestro tiempo juntos es una suma de emociones, sonrisas y recuerdos que quiero conservar siempre. Porque contigo, cada día tiene un significado distinto y hermoso.`

];

function mostrarMensaje(i){
document.getElementById("mensaje").innerText = mensajes[i];
}
