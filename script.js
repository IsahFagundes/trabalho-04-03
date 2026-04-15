function abrirCadastro() {
    document.getElementById("popup").style.display = "block";
}

function fecharCadastro() {
    document.getElementById("popup").style.display = "none";
}

function cadastrar() {
    let nome = document.getElementById("nome").value;

    if(nome === "") {
        document.getElementById("mensagem").innerText = "Digite seu nome!";
    } else {
        document.getElementById("mensagem").innerText = 
            "Seja bem-vindo, " + nome + "!";
    }
}
