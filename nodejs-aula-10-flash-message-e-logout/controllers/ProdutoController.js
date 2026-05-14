import express from "express";
// Método do Express usado para criar as rotas da aplicação
//IMPORTANDO O MIDDLEWARE DE AUTENTICAÇÃO
import Auth from "../middlewares/Auth.js";
const router = express.Router();

// ROTA PRODUTOS
router.get("/produtos", Auth, function (req, res) {
  const produtos = [
    { nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis" },
    { nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos" },
    { nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores" },
    { nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos" },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});

export default router;
