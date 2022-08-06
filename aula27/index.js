const pontuacaoUsuario = 999;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuario Vip" : "Usuario Normal";
if (pontuacaoUsuario >= 1000) {
  console.log("Usuario vip");
} else {
  console.log("Usuario normal");
}
