let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

let primeiraTroca = varB;
let segundaTroca = varA;
varA = primeiraTroca;
varB = varC;
varC = segundaTroca;
console.log(varA);
console.log(varB);
console.log(varC);
