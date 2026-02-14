// 📅 Fecha inicial — 10 octubre 2025
const fechaInicio = new Date("2025-10-10T00:00:00");

function actualizarContador(){
const ahora = new Date();
const diferencia = ahora - fechaInicio;

const dias = Math.floor(diferencia/(1000*60*60*24));
const horas = Math.floor((diferencia/(1000*60*60))%24);
const minutos = Math.floor((diferencia/(1000*60))%60);
const segundos = Math.floor((diferencia/1000)%60);

document.getElementById("contador").innerHTML =
`✨ Llevamos juntos:<br>
<strong>${dias}</strong> días,
<strong>${horas}</strong> horas,
<strong>${minutos}</strong> minutos,
<strong>${segundos}</strong> segundos 💞`;
}

setInterval(actualizarContador,1000);



// 💌 Mensajes románticos largos
const mensajes = [

`Cada recuerdo contigo es una pequeña obra de arte que guardo en el corazón. No importa el lugar ni el momento… cuando estoy contigo, todo parece más brillante, más cálido, más vivo. Gracias por convertir lo cotidiano en algo mágico simplemente con tu presencia.`,

`Mirarte es recordar que existen cosas hermosas que no se pueden explicar con palabras. Tu sonrisa tiene ese poder extraño de calmarme, alegrarme y hacerme sentir que estoy exactamente donde debo estar.`,

`A tu lado el tiempo no corre… vuela. Y aun así, cada segundo queda grabado en mi memoria como si el universo quisiera asegurarse de que nunca olvide lo que se siente ser tan feliz contigo.`,

`No eres solo parte de mis días… eres el detalle que los hace especiales. Cada risa compartida, cada mirada, cada silencio cómodo contigo es un recordatorio de lo afortunado que soy.`,

`Contigo aprendí que el amor no siempre hace ruido… a veces se siente como paz, como hogar, como esa sensación de saber que todo está bien mientras estés cerca.`,

`Cada foto nuestra es más que una imagen… es un pedacito de historia, de emociones y de momentos que jamás quiero olvidar. Son pruebas de lo bonito que es caminar juntos.`,

`Si pudiera elegir un lugar favorito en el mundo, sería cualquier sitio donde estés tú. Porque no se trata del lugar… se trata de la compañía que hace que todo cobre sentido.`,

`Tu presencia ilumina incluso mis días más grises. Eres esa chispa que transforma lo simple en extraordinario, y lo ordinario en inolvidable.`,

`A veces pienso en lo increíble que es coincidir contigo en este universo tan grande. Y entre millones de caminos… el nuestro se cruzó para crear algo hermoso.`,

`Más que momentos, contigo construyo recuerdos que quiero conservar toda la vida. Porque lo que vivimos juntos no es casualidad… es algo que vale la pena atesorar siempre.`

];



function mostrarMensaje(i){
const caja = document.getElementById("mensaje");
caja.style.display="block";
caja.innerText = mensajes[i];
}
