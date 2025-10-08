let numSecreto = gerarNumeroAleatorio();
let numChute = 1;

inicioJogo();

function inicioJogo(){
    exibirTextonaTela("h1", "Jogo do Número secreto");
    exibirTextonaTela("p", "Escolha um numero entre 1 e 10");
}

function clickChute() {
    let chute = document.querySelector("input").value;
    if (chute == numSecreto) {
        exibirTextonaTela("h1", "Você acertou!");
        exibirTextonaTela("p", `Foram usadas ${numChute} tentativas`);
        botaoNovoJogo();
    } else{
        numChute++;
        if (chute > numSecreto) {
            exibirTextonaTela("p", "O número secreto é menor");
        } else {
            exibirTextonaTela("p", "O número secreto é maior");
        }
        limparCampo();
    }
}

function clickReiniciar() {
    numSecreto = gerarNumeroAleatorio();
    limparCampo();
    numChute = 1;
    inicioJogo();
    botaoNovoJogo();
}

function botaoNovoJogo(){
    let btnNovoJogo = document.getElementById("reiniciar").disabled 
    if (btnNovoJogo == true){
        document.getElementById("reiniciar").disabled = false;
    } else  {
        document.getElementById("reiniciar").disabled = true;
    }
}

function gerarNumeroAleatorio() {
    return(parseInt(Math.random() * 10 +1));
}

function exibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}