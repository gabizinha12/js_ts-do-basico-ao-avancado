/* 
Luiz Otávio Miranda tem 30 anos, pesa 84 kg 
tem 1.8 de altura e seu IMC é de 25.925925925925924
*/
const nome = "Gabrielle Cristine";
const sobrenome = "de Lima Pereira";
const peso = 58;
const idade = 21;
const altura = 1.5;
let IMC = peso / (altura * altura); // peso / (altura * altura)
let anoNascimento = 2022 - idade;
console.log(anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${IMC}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
