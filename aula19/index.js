/*
Primitivos - String, number, boolean, undefined, null(bigint, symbol) // imutáveis //valores copiados
Referência (mutável) - Arrays, objetos, function - Passados por referência
*/
let nome = "Luiz";
nome[0] = "R";
// console.log(nome[0], nome);
// let a = "A";
// let b = a; // cópia
// console.log(a, b);
// a = "Outra coisa";
// console.log(a, b); // b manteve o valor antigo de A
let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);
a.push(4);
console.log(a);
b.pop();
console.log(a, b);
a.push("Luiz");
console.log(c);
