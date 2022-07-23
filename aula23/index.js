/*
&& -> AND -> false e true -> false "o valor mesmo"
||  -> E -> true || false -> vai retornar o valor verdadeiro
Falsy
*false
0
''
""
```
null / undefined
NaN
*/
function falaOi() {
  return "oi";
}
let vaiExecutar;

console.log(vaiExecutar && falaOi());
console.log(0 || false || null || "Gabrielle" || true);
const corUsuario = null;
const corPadrao = corUsuario || "preto";
console.log(corPadrao);
const a = 0;
const b = null;
const c = "false"; // aqui vai dar true
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
