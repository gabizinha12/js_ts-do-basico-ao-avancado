const num1 = Number(prompt("Escolha um número"));
const num2 = Number(prompt("Escolha outro numero"));
let operacao = prompt("Qual operação deseja fazer");
let result;
switch (operacao) {
  case "+":
    result = num1 + num2;
    alert(`A soma de ${num1} e ${num2} é igual a ${result}`);
    break;
  case "-":
    result = num1 - num2;
    alert(`A subtração de ${num1} e ${num2} é igual a ${result}`);
    break;
  case "*":
    result = num1 * num2;
    alert(`A multiplicação de ${num1} e ${num2} é igual a ${result}`);
    break;
  case "/":
    result = num1 / num2;
    alert(`A divisão de ${num1} e ${num2} é igual a ${result}`);
    break;
}
//alert(`A soma de ${num1} e ${num2} é igual a ${result}`);
