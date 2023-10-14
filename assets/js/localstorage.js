

document.getElementById("criarconta").addEventListener("click", function (e) {
    e.preventDefault(); 

    var nomeInput = document.getElementById("usuario");
    var emailInput = document.getElementById("emailCriar");
    var senhaInput = document.getElementById("senhaCriar");

    var nome = nomeInput.value;
    var email = emailInput.value;
    var senha = senhaInput.value;

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    window.location.href = "login.html";
});



document.getElementById("loginbnt").addEventListener("click", function (e) {
    e.preventDefault();


    var emailLoginInput = document.getElementById("emailLogar");
    var senhaLoginInput = document.getElementById("senhaLogar");

    var emailLogin = emailLoginInput.value;
    var senhaLogin = senhaLoginInput.value;

    var storedEmail = localStorage.getItem("email");
    var storedSenha = localStorage.getItem("senha");

    if (emailLogin === storedEmail && senhaLogin === storedSenha) {
        window.location.href = "index.html";


    } else {
        alert("Email ou senha incorretos. Tente novamente.");
    }
});






