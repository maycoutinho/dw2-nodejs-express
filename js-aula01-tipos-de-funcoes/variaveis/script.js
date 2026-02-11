// Comentário de linhas

/* Comentário de bloco*/

// VARIÁVEIS PODEM SER DECLARADAS DE 3 FORMAS:
//VAR, LET E CONST

// VAR: No geral evite o seu uso, pode não ser muito seguro
// LET: Utilize quando for necessário reatribuir o valor da variável.
// CONST: Utilize quando NÂO precisar reatribuir o valor da variável.

var cidade = "Registro";
var cidade = "Sete Barras";
document.write(cidade);

let nome = "Diego";
nome = "Maria";
document.write("<br>");
document.write(nome);

const pais = "Brasil";
pais = "Argentina";
// O valor de uma constante não pode ser alterado
document.write("<br>");
document.write(pais);
