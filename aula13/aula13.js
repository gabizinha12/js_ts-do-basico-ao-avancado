let umaString = "O rato roeu a roupa do rei de roma.";
// os caracteres são indexados portanto o numero 0 é o primeiro caractere
console.log(umaString[4]);
console.log(umaString.length);
console.log(umaString.lastIndexOf("m", 3));
//console.log(umaString.match(/[a-z]/g));

console.log(umaString.slice(-5, -1));
console.log(umaString.length - 3);
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
