function main() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    let imc = peso / (altura * altura).toFixed(2);

    if (isNaN(peso) || isNaN(altura)) {
      resultado.innerHTML = `<span style="background-color:#B22222">Peso inválido</span>`;
    } else if (imc < 18.5) {
      resultado.innerHTML += `<span style="background-color:#7FFFD4	">Seu IMC é ${imc} (Abaixo do peso)</span>`;
    } else if (imc >= 18.5 && imc < 24.9) {
      resultado.innerHTML += `<span style="background-color:#7FFFD4;  display: block;
      width: 100%;
      margin-bottom: 10px;font-size: 18px;
      height: 50px;">Seu IMC é ${imc}  (Peso normal)</span>`;
    } else if (imc >= 25 && imc < 29.9) {
      resultado.innerHTML += `<span style="background-color:#7FFFD4	">Seu IMC é ${imc} (Sobrepeso)</span>`;
    } else if (imc >= 30 && imc < 34.9) {
      resultado.innerHTML += `<span style="background-color:#7FFFD4	">Seu IMC é ${imc} (Obesidade grau I)</span>`;
    } else if (imc >= 35 && imc < 39.9) {
      resultado.innerHTML += `<span style="background-color:#7FFFD4; width: 400px;">Seu IMC é ${imc} (Obesidade grau II)</span>`;
    } else if (imc > 40) {
      resultado.innerHTML += `<span style="background-color:#7FFFD4	">Seu IMC é ${imc}  (Obesidade grau III)</span>`;
    }
  });
}
main();
