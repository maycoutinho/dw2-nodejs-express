//DECLARANDO E EXIBINDO ITENS DE UM ARRAY

let produtos = [];
document.write(typeof produtos);

let products = ["Computador", "Notebook", "Celular", "Tablet"];
document.write(`<p> ${products}</p>`);

document.write("<p> Exibindo os elementos do vetor através do Índice: </p> ");
document.write(`<p>${products[0]}</p>`);
document.write(`<p>${products[1]}</p>`);
document.write(`<p>${products[2]}</p>`);
document.write(`<p>${products[3]}</p>`);

document.write("<p>Exibindo elementos do vetor através do forEach</p>");
products.forEach((product) => {
  document.write(`<p>${product}</p>`);
});

document.write(
  "<p>Exibindo elementos do vetor através do forEach Com os Índices</p>",
);
products.forEach((product, i) => {
  document.write(`<p>${i + 1} - ${product}</p>`);
});

// MÉTODOS DE MANIPULAÇÃO DE VETORES
let frutas = ["Laranja", "Maçã", "Banana"];
document.write(`<p>Nossa lista de frutas é: ${frutas}</p>`);
frutas[3] = "Morango";
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`);

document.write(`<h4>O método push insere um novo elemento no FINAL do vetor</h4>`,);
frutas.push("Abacaxi");
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`);

document.write(`<h4>O método UNSHIFT insere um novo elemento no INICIO do vetor</h4>`,);
frutas.unshift("Pera");
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`);

// COMO CONTAR OS ELEMENTOS DE UM VETOR - método LENGHT
const itens = frutas.length;
document.write(`<p>Na nossa lista temos ${itens} frutas.</p>`);
