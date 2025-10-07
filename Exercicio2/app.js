//Criar uma função que exibe "Olá, mundo!" no console.
function boasVindas() {
    console.log("Olá, mundo!");
}
boasVindas();
//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacao(nome) {
    console.log(`Olá, ${nome}!`)
}
saudacao("João");
//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(num){
    return num * 2;
}
console.log(dobro(5));
//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaTres(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
console.log(mediaTres(4, 6, 8));
//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior(x,y){
    return x > y ? x : y;
}
console.log(maior(10, 20));
//Criar uma função que recebe um número como parâmetro e retorna o resultado da 
// multiplicação desse número por ele mesmo
function quadrado(numero){
    return numero * numero;
}
console.log(quadrado(6));