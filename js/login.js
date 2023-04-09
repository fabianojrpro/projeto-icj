const loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Evita o envio do formulário
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  // Verifica se o nome de usuário e a senha são válidos
  if (username === "admin" && password === "adminFabiano21") {
    // Redireciona para a página desejada
    window.location.href = "cadastro.html";
  } else {
    alert("Nome de usuário ou senha incorretos!");
  }
});
