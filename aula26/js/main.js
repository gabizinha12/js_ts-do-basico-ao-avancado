function main() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    //  console.log(peso);
    // console.log(altura);
    let imc = peso / (altura * altura);

    // if (altura == "" || altura == NaN) {
    // }

    if (imc < 18.5) {
      resultado.innerHTML += `<span>Seu IMC é ${imc.toFixed(
        2
      )} (Abaixo do peso)</span>`;
    } else if (imc >= 18.5 && imc < 24.9) {
      resultado.innerHTML += `<span>Seu IMC é ${imc.toFixed(
        2
      )}  (Peso normal)</span>`;
    } else if (imc >= 25 && imc < 29.9) {
      resultado.innerHTML += `<span>Seu IMC é ${imc.toFixed(
        2
      )} (Sobrepeso)</span>`;
    } else if (imc >= 30 && imc < 34.9) {
      resultado.innerHTML += `<span>Seu IMC é ${imc.toFixed(
        2
      )} (Obesidade grau I)</span>`;
    } else if (imc >= 35 && imc < 39.9) {
      resultado.innerHTML += `<span>Seu IMC é ${imc.toFixed(
        2
      )} (Obesidade grau II)</span>`;
    } else if (imc > 40) {
      resultado.innerHTML += `<span>Seu IMC é ${imc.toFixed(
        2
      )}  (Obesidade grau III)</span>`;
    }
  });
  resultado.innerHTML += "";
}
main();
