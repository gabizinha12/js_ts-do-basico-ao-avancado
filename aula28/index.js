const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); // 1/1/1970 Unix Epoch
const data = new Date("2019-04-20 20:15:59.100");
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth() + 1); // mes inicia no 0, no caso abril, 3 + 1
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Seg", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log("Dia semana", data.getDay()); // 0-domingo,6-sabado

console.log(data.toString());
console.log(Date.now());
