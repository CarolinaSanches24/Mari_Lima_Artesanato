const swiper = new Swiper(".swiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

document.getElementById("btn_cadastrar").addEventListener("click", function () {
  const containerLogin = document.querySelector(".container_login");
  containerLogin.style.display = "none";
  const containerCadastro = document.querySelector(".container_cadastro");
  containerCadastro.style.display = "block";
});
document.getElementById("btn_logar").addEventListener("click", function () {
  const containerCadastro = document.querySelector(".container_cadastro");
  containerCadastro.style.display = "none";
});
const containerLogin = document.querySelector(".container_login");
containerCadastro.style.display = "block";
