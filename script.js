// Fecha de inicio (cámbiala)
const inicio = new Date("2025-01-01");

function actualizarContador() {
const ahora = new Date();
const diferencia = ahora - inicio;

const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

document.getElementById("contador").innerHTML =
`${dias} días 💕 ${horas} horas 💗 ${minutos} minutos`;
}

setInterval(actualizarContador, 1000);

// 💌 Mensajes románticos
const mensajes = [

"Desde este día entendí que contigo cualquier momento se vuelve mágico. Gracias por existir 💕",

"Tu sonrisa es mi lugar favorito. Cada recuerdo contigo lo guardo como un tesoro ✨",

"No importa dónde estemos… mientras sea contigo, siempre será perfecto ❤️",

"Este día me recordó lo afortunado que soy de tenerte en mi vida 🫶",

"Cada foto contigo es una historia que quiero repetir mil veces 💗",

"Contigo aprendí que el amor se siente tranquilo, bonito y real 🌸",

"Ese momento quedó grabado porque estaba justo donde quería estar: a tu lado 💞",

"Gracias por llenar mis días de risas, cariño y recuerdos hermosos ✨",

"No es solo una foto… es un pedacito de felicidad contigo 💕",

"Y aquí estaba pensando: ojalá todos mis días sean contigo ❤️"

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
