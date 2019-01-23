
var fecha = new Date();
var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDay();
var hora = fecha.getHours();

var textoHora =`

El año es: ${year}
El mes es: ${month}
El dia es: ${day}
La hora es: ${hora}
`;

console.log(fecha);
console.log(textoHora);
