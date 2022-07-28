function main() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    //  console.log(peso);
    // console.log(altura);
    let imc = (peso / altura) * altura;
    console.log(imc);
    if (imc < 18.5) {
      resultado.innerHTML += `Seu IMC é ${imc} (Abaixo do peso)`;
    } else if (imc >= 18.5 && imc < 24.9) {
      resultado.innerHTML += `Seu IMC é ${imc}  (Peso normal)`;
    } else if (imc >= 25 && imc < 29.9) {
      resultado.innerHTML += `Seu IMC é ${imc} (Sobrepeso)`;
    } else if (imc >= 30 && imc < 34.9) {
      resultado.innerHTML += `Seu IMC é ${imc} (Obesidade grau I)`;
    } else if (imc >= 35 && imc < 39.9) {
      resultado.innerHTML += `Seu IMC é ${imc} (Obesidade grau II)`;
    } else if (imc > 40) {
      resultado.innerHTML += `Seu IMC é ${imc}  (Obesidade grau III)`;
    }
  });
  // function receiveInfo(event) {}
  //form.addEventListener("submit", receiveInfo);
}
main();
