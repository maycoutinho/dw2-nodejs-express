//FUNÇÃO SIMPLES
function showPersonalData() {
  const name = "<p>Mayra<p>";
  document.write(name);
  const age = "<p>19<p>";
  document.write(age);
  const city = "<p>Juquiá<p>";
  document.write(city);
}
showPersonalData();

//FUNÇÃO COM PARÂMETROS

const n1 = 2;
const n2 = 4;
function num(n1, n2) {
  let result = n1 / n2;
  document.write(`<p>O resultado da divisão foi ${result}.</p>`);
}
num(n1, n2);

//FUNÇÃO COM RETORNO
const num1 = 10;
const num2 = 20;
const num3 = 30;

function mult(num1, num2, num3) {
  return num1 * num2 * num3;
}
document.write(`O Resultado da multiplicação é${mult(num1, num2, num3)}.`);

//FUNÇÃO COM MAIS UM RETORNO
const age = 17;

function maiorIdade(age) {
  if (age >= 18) {
    return "maior idade";
  } else {
    return "menor idade";
  }
}
document.write(`<p>Voce tem ${age} então voce é ${maiorIdade(age)}</p>`);

//FUNÇÃO ANÔNIMA

const media = function (nota1, nota2) {
  if (nota1 + nota2 / 2 >= 5) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
};
let nota1 = 5;
let nota2 = 6;
document.write(`<p>Você foi ${media(nota1, nota2)}</p>`);

//ARROW FUNCTION COM PARÂMETRO UNICO

const dobro = (x) => {
  return x * 3;
};
const x = 400;
document.write(`<p>O triplo de ${x} é ${dobro(x)}.</p>`);

//ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const operacao = (a,b,c,d) => a + b + c + d;

let a = 10;
let b= 20;
let c = 30;
let d = 40;

document.write(`<p>A soma de ${a}, ${b}, ${c} e ${d} é ${operacao(a, b, c, d)}.</p>`);


