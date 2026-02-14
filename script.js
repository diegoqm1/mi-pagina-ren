// 💗 Fecha de inicio: 10 de octubre de 2025
const inicio = new Date("2025-10-10T00:00:00");

function actualizarContador() {
const ahora = new Date();
const diferencia = ahora - inicio;

if (diferencia < 0) {
document.getElementById("contador").innerHTML =
"Nuestro tiempo comienza pronto 💕";
return;
}

const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
const segundos = Math.floor((diferencia / 1000) % 60);

document.getElementById("contador").innerHTML =
`${dias} días 💕 ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(actualizarContador, 1000);

// 💌 Mensajes románticos
const mensajes = [

"Desde este día entendí que contigo cualquier momento se vuelve mágico 💕",

"Tu sonrisa es mi lugar favorito en el mundo ✨",

"No importa dónde estemos… contigo siempre es perfecto ❤️",

"Este recuerdo me recuerda lo afortunado que soy 🫶",

"Cada foto contigo es una historia hermosa 💗",

"Contigo el amor se siente tranquilo y real 🌸",

"A tu lado siempre quiero estar 💞",

"Gracias por llenar mis días de felicidad ✨",

"No es solo una foto… es felicidad contigo 💕",

"Ojalá todos mis días sean siempre contigo ❤️"

];

function mostrarMensaje(i) {
const caja = document.getElementById("mensaje");
const texto = document.getElementById("textoMensaje");

texto.innerHTML = mensajes[i];

caja.style.opacity = 0;
setTimeout(() => {
caja.style.opacity = 1;
}, 200);
}
