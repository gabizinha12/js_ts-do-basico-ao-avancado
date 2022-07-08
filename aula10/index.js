/* 
Operadores aritméticos
+ -> soma / concatenação
- -> subtração
/ -> divisão
* -> multiplicação
% -> módulo ou resto
** -> potenciação
Precedência de operadores
() 
**
* 
/ 
%
+
-
Incremento = ++ 
Decremento = --
*/
//const num1 = 5;
//const num2 = 10;
//let contador = 1;
//contador++; // 2 -> adiciona mais 1 e atribui
//console.log(contador);
//console.log(++contador);
// Operadores de atribuição
let contador = 0;
contador += 2;
contador += 2;
contador += 2;
contador += 2;
contador += 2;
contador += 2;
console.log(contador);
// parseInt = inteiro, parseFloat = converter para ponto flutuante
// NaN
const num1 = 4;
const num2 = Number("Luiz"); // converter string de texto para numero
console.log(num1 + num2);
const num3 = parseInt("5");
const num4 = parseInt("5.2"); // o parseint remove o segundo digito, o parsefloat deve ser usado
console.log(num3);
console.log(num4);
const num5 = "3";
const num6 = 5;
console.log(num5 + num6);
