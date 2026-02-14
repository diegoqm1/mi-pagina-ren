// 📅 Contador desde 10 octubre 2025
const inicio = new Date(2025,9,10);

function contador(){

let ahora = new Date();
let diff = ahora - inicio;

let dias = Math.floor(diff/(1000*60*60*24));
let horas = Math.floor(diff/(1000*60*60)%24);
let minutos = Math.floor(diff/(1000*60)%60);
let segundos = Math.floor(diff/1000%60);

document.getElementById("contador").innerHTML =
`${dias} días 💞 ${horas}h ${minutos}m ${segundos}s`;

}

setInterval(contador,1000);


// 💖 Mensajes románticos

const mensajes=[

"Desde este día entendí que contigo cualquier momento se vuelve especial. Esta foto guarda una sonrisa que todavía me ilumina.",

"Cada recuerdo contigo tiene su propia magia… como si el tiempo se detuviera solo para nosotros.",

"Mirarte en este instante me recuerda lo afortunado que soy de compartir mi historia contigo.",

"Esta foto captura algo que no se ve… pero se siente: cariño, calma y conexión.",

"Cada momento contigo se convierte en un recuerdo que quiero guardar para siempre.",

"Lo bonito de esta imagen no es solo la foto… es todo lo que vivimos antes y después de ella.",

"Contigo aprendí que los recuerdos más simples pueden ser los más valiosos.",

"Esta sonrisa dice más que mil palabras… y todas me llevan a ti.",

"Cada instante juntos se convierte en una pequeña eternidad que guardo en mi corazón.",

"Nuestro tiempo juntos se ve así… lleno de momentos que quiero repetir infinitamente."

];


// 📸 Crear álbum

const album=document.getElementById("album");

for(let i=1;i<=10;i++){

let polaroid=document.createElement("div");
polaroid.className="polaroid";

polaroid.innerHTML=`
<img src="fotos/foto${i}.jpg">
<p>${mensajes[i-1]}</p>
`;

album.appendChild(polaroid);

}
