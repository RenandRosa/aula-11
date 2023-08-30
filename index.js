/*
function imprimirOlaMundo(){
    console.log('Ola mundo');
};
imprimirOlaMundo
*/

//Exercício 2
/*
function escreveNome(nome){
    console.log(nome);
}
escreveNome("Renan");

function escreveNome(nome){
    console.log(nome);
}
let meuNome = 'Renan'
escreveNome(meuNome);
*/

//Escopo
/*
const a = 1

function imprimirVariavel(){
    const b = 2
    console.log('Variavel a', a)
    console.log('Variavel b', b)
}

imprimirVariavel()

console.log('Variavel a', a);
console.log('Variavel b', b);
*/

//Retorno
/*
function calculaArea(altura, largura){
    const area = altura * largura
    return area
}
const areaCalculada = calculaArea(5, 8);

console.log('Variável areaCalculada: ' + areaCalculada);
console.log('Chamada da função crua: ' + calculaArea(5, 8));
*/

//Exercício 3
/*
function somaValores(a, b){
    return Number(a)+Number(b);
}
const resultadoDaSoma = somaValores(1, 2);

console.log('O resultado da soma é: '+ resultadoDaSoma);
*/

//Exercício 4
/*
function divideArray(meuArray){
    let b = [(meuArray[0] /2), (meuArray[meuArray.length-1] /2)];
    
    return b;
}
let a = [1,2,3,4,5,6,7,8,910,11,12,13,14,15,16,17,18,19,20,21,22,23,23,24];

const resultado = divideArray(a);

console.log(resultado);
*/

//Exercício 5
//1
let escreveNome = function(nome){
    console.log(nome);
}
escreveNome("Renan");

//2

let somaValores = function(a, b){
    return Number(a)+Number(b);
}
const resultadoDaSoma = somaValores(1, 2);

console.log('O resultado da soma é: '+ resultadoDaSoma);
