/* 
Entre 0 e 11 - Bom dia
Entre 12 e 17 - Boa tarde
Entre 18 e 23 - Boa noite
*/

const hora = 50;
if (hora >= 0 && hora <= 11) {
  console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite");
} else {
  console.log("Olá");
}
// if pode ser usado sozinho
// sempre que utilizo a palavra else, preciso de um if antes
// eu posso ter vários else if na checagem
// Só posso ter um else na checagem
// podemos usar condições sem else if, utilizando apenas if e else
const tenhoGrana = true;
if (tenhoGrana) {
  console.log("Vou sair de casa");
} else {
  console.log("Não vou sair de casa");
}
const numero = 10;
if (numero >= 0 && numero <= 5) {
  console.log("O número está entre zero e cinco");
} else if (numero >= 6 && numero <= 8) {
  console.log("O número está entre 6 e 8");
} else if (numero >= 9 && numero <= 11) {
  console.log("o número está entre 9 e 11");
} else {
  console.log("O número não está entre zero e 11");
}
