//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let texto = document.querySelector('h1');
texto.innerHTML = "Hora do Desafio";
//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function clicaConsole() {
    console.log('O botão foi clicado');
}
//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function clicaAlert() {
    alert('Eu amo JS');
}
//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade 
//do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o 
// texto: Estive em {cidade} e lembrei de você.
function clicaPrompt() {
    let cidade = prompt('Me fala o nome de uma Cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você.`);
}
//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function clicaSoma() {
    let num1 = parseInt(prompt('Me fala um número inteiro:'));
    let num2 = parseInt(prompt('Me fala outro número inteiro:'));
    alert(`A soma dos números é: ${num1 + num2}`);
}