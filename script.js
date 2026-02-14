// Fecha inicial: 10 octubre 2025
const inicio = new Date(2025, 9, 10);

function actualizarContador() {

let ahora = new Date();
let diff = ahora - inicio;

let dias = Math.floor(diff / (1000 * 60 * 60 * 24));
let horas = Math.floor(diff / (1000 * 60 * 60) % 24);
let minutos = Math.floor(diff / (1000 * 60) % 60);
let segundos = Math.floor(diff / 1000 % 60);

document.getElementById("contador").innerHTML =
dias + " días 💞 " +
horas + "h " +
minutos + "m " +
segundos + "s";

}

setInterval(actualizarContador, 1000);

// Mensajes

const mensajes = [
"Cada recuerdo contigo es magia pura.",
"Momentos que quiero repetir siempre.",
"Tu sonrisa mejora cualquier día.",
"Esta foto guarda algo especial.",
"Tiempo contigo = felicidad.",
"Recuerdos que valen oro.",
"Momentos simples, amor grande.",
"Mirarte siempre alegra mi alma.",
"Historias que quiero seguir escribiendo.",
"Nuestro tiempo juntos es único."
];

// Crear álbum

const album = document.getElementById("album");

for (let i = 1; i <= 10; i++) {

let polaroid = document.createElement("div");
polaroid.className = "polaroid";

polaroid.innerHTML =
'<img src="fotos/foto' + i + '.jpg">' +
'<p>' + mensajes[i - 1] + '</p>';

album.appendChild(polaroid);

}
