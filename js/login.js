const containerLogin = document.querySelector(".login");
const containerCadastro = document.querySelector(".cadastrar");

document.getElementById("btn_cadastrar").addEventListener("click", function () {
  containerLogin.style.display = "none";
  document.querySelector(".btn_selecionado").style.display = "none";
  containerCadastro.style.display = "block";
  document.querySelector(".btn_selecionado_cad").style.display = "block";
});

document.getElementById("btn_logar").addEventListener("click", function () {
  document.querySelector(".btn_selecionado").style.display = "block";
  containerLogin.style.display = "block";

  containerCadastro.style.display = "none";
  document.querySelector(".btn_selecionado_cad").style.display = "none";
});

document.querySelector(".link_entrar").addEventListener("click", function () {
  containerLogin.style.display = "block";
  containerCadastro.style.display = "none";
});
