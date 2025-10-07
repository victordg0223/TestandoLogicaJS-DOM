let numSecreto = gerarNumeroAleatorio();

function exibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextonaTela("h1", "Jogo do Número secreto");
exibirTextonaTela("p", "Escolha um numero entre 1 e 10");

function gerarNumeroAleatorio() {
    return(parseInt(Math.random() * 10 +1));
}

function clickChute() {
    let chute = document.querySelector("input").value;
    console.log(chute == numSecreto);
    console.log(numSecreto);
}