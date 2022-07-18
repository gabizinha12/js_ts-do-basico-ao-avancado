let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

let primeiraTroca = varB;
let segundaTroca = varA;
//varA = primeiraTroca;
//varB = varC;
//varC = segundaTroca;
//console.log(varA, varB, varC);
// solução do professor
//const varAtemp = varA;
//varA = varB;
//varB = varC;
//varC = varAtemp;
// BCA
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
