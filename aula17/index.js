// head
function saudacao(nome) {
  // corpo da função
  return `Bom dia ${nome}!`;
}
const variavel = saudacao("Gabizinha");
console.log(variavel);
function soma(x = 1, y = 1) {
  const resultado = x + y;
  return resultado; // final da função, nada abaixo disso será executado
}
// console.log(soma(2, 2));
// console.log(soma(3, 1));
// console.log(soma(5, 10));
// fora da função não tem problema declarar a variável com o mesmo nome, pois possuem diferença de escopo
const resultado = soma(4); // o valor passado no parâmetro substitui o valor colocado na função, y continua 1
console.log(resultado);
const raiz = function (n) {
  return n ** 0.5;
}; // função anônima
console.log(raiz(9));
const raizQuadrada = (n) => {}; // arrow function
