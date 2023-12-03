document.querySelector("#form_login").addEventListener("submit", (e) => {
  e.preventDefault();

  const { email, senha } = document.form_login;

  fetch("https://combative-cow-underwear.cyclic.app/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      senha: senha.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

document.querySelector("#form_cadastrar").addEventListener("submit", (e) => {
  e.preventDefault();

  const { nome, email, senha } = document.form_cadastrar;

  fetch("https://combative-cow-underwear.cyclic.app/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome.value,
      email: email.value,
      senha: senha.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
