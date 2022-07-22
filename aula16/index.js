const nome = "Gabrielle Lima";
//console.log(nome[0]);
// 0123
//                0        1        2
const alunos = ["Luiz", "Maria", "Joao"];
//alunos[0] = "Eduardo"; // altera
//alunos[3] = "Luiza"; // adiciona
//alunos[alunos.length] = "Luiza";
alunos.push("Teste"); // adiciona no fim
console.log(alunos);
alunos.unshift("ABCD"); // adiciona antes do fim
//const removido = alunos.pop(); // remove do final
//const removido = alunos.shift();
// remove do começo
//console.log(removido);
//console.log(alunos);
console.log(alunos.slice(0, -2)); // por elemento
console.log(typeof alunos);
console.log(alunos instanceof Array);
