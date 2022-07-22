const array = [1, 2, 3];
array.push(4);
array[0] = "Teste";
// array = "Outra";
console.log(array);
// const pessoa1 = {
//   // objeto literal
//   nome: "Gabi",
//   sobrenome: "Lima",
//   idade: 21,
// };
// console.log(pessoa1.nome);
// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade,
//   };
// }
// const pessoa1 = criaPessoa("TESTE", "ABC", 21); // argumento é o valor passado para o parâmetro

const pessoa1 = {
  nome: "Saul",
  sobrenome: "Goodman",
  idade: 45,
  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
  },
};
pessoa1.fala();
