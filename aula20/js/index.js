function main() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  // form.onsubmit = function (event) {
  //   event.preventDefault();
  //   alert(1);
  //   console.log("Foi enviado");
  // };

  const pessoas = [];

  function recebeEventoForm(event) {
    event.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    const pessoa = createPerson(
      nome.value,
      sobrenome.value,
      peso.value,
      altura.value
    );

    pessoas.push(pessoa);
    resultado.innerHTML += `${pessoa.nome} ${pessoa.sobrenome} ${pessoa.altura} ${pessoa.peso}`;
  }
  function createPerson(nome, sobrenome, peso, altura) {
    return {
      nome: nome,
      sobrenome: sobrenome,
      peso: peso,
      altura: altura,
    };
  }
  form.addEventListener("submit", recebeEventoForm);
}

main();
