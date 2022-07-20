const numero = prompt("Digite um número: ");
const numeroTitulo = document.getElementById("numero-titulo");
const div = document.getElementById("text");
numeroTitulo.innerText = `${numero}`;
div.innerHTML += `Raiz quadrada: <strong>${Math.sqrt(numero)}</strong></br>`;
div.innerHTML += `${numero} é inteiro:<strong>${Number.isInteger(
  numero
)}</strong></br>`;
div.innerHTML += `É NaN: <strong>${Number.isNaN(numero)}</strong></br>`;
div.innerHTML += `Arredondando pra baixo: <strong>${Math.floor(
  numero
)}</strong></br>`;
div.innerHTML += `Arredondando pra cima: <strong>${Math.ceil(
  numero
)}</strong></br>`;
div.innerHTML += `Com duas casas decimais: <strong>${Number(numero).toFixed(
  2
)}</strong></br>`;
