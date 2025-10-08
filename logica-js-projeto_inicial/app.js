//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(altura1, peso) {
    let imc = peso / (altura1 * altura1);
    return imc.toFixed(2);
}
console.log(calcularIMC(1.75, 70));
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    for (let i = numero - 1; i >= 1; i--) {
        numero *= i;
        // nessa logica numero é utilizado tanto como acumulador quanto como o valor inicial
    }
    return numero;
}
//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function dolarParaReal(valorDolar) {
    let cotacaoDolar = 4.80;
    let valorReal = valorDolar * cotacaoDolar;
    return valorReal.toFixed(2);
}
//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetroRetangulo(altura2, largura) {
    let area1 = altura2 * largura;
    let perimetro1 = 2 * (altura2 + largura);
    alert(`A área do retângulo é ${area1} e o perímetro é ${perimetro1}`);
}
console.log(areaPerimetroRetangulo(5, 10));
//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaPerimetroCirculo(raio) {
    let area2 = 3.14 * (raio * raio);
    let perimetro2 = 2 * 3.14 * raio;
    alert(`A área do círculo é ${area2.toFixed(2)} e o perímetro é ${perimetro2.toFixed(2)}`);
}
console.log(areaPerimetroCirculo(10));
//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(tab){
    for(let i = 1; i <= 10; i++){
        console.log(`${tab} x ${i} = ${tab * i}`);
    }
}
tabuada(5);