import express from "express"
const router = express.Router();

//IMPORTANDO O MODEL
import Usuario from "../models/Usuario.js"
//IMPORTANDO BCRYPT (hash de senha)
import bcrypt from "bcrypt";

// ROTA DE LOGIN
router.get("/login", (req,res) =>{
  res.render("login");
});

//ROTA DO FORMULÁRIO DE CADSTRO DO USUÁRIO
router.get("/cadastro", (req, res) =>{
    res.render("cadastro");
});

//ROTA DE CRIAÇÃO DO USUÁRIO NO BANCO 
router.post("/caduser", (req,res)=>{
    //COLETANDO AS INFORÇÕES DO FORMULÁRIO
    const email = req.body.email
    const senha = req.body.senha

    //verificando se o usuario ja existe
    Usuario.findOne({where: {email:email}}).then(usuario =>{
        //SE NÂO HOUVER UM USUÁRIO IGUAL
        if (usuario == undefined) {
            //AQUI SERA FEITO O HASH DE SENHA
    //Criando o "sal" do hash
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(senha,salt) 
    //ENVIANDO PARA O BANCO
    Usuario.create({
        email: email,
        senha: hash,
    }).then(() =>{
        res.redirect("/login")
    }).catch(error => {
        console.log("Não foi possivel cadastrar o usuário." + error);
    });
    // SE JA HOUVER UM USUÁRIO COM O MESMO EMAIL
        }else{
            res.send(`Usuário já cadastrado! <br><a href="/login">Faça o login.</a>`)

        }
    })
});

// ROTA DE AUTENTICAÇÃO (LOGIN)
router.post("/autenticacao",(req,res) =>{
    //CAPTURANDO OS DADOS DO FORMULÁRIO DE LOGIN
    const email = req.body.email
    const senha = req.body.senha
    //buscando o usuário no banco
    Usuario.findOne({where: {email:email}}).then(usuario =>{
        //SE O USUARIO EXISTIR
        if (usuario != undefined){
            //VALIDA A SENHA
            const correct = bcrypt.compareSync(senha, usuario.senha);
            //SE A SENHA FOR VÁLIDA
            if(correct){
                // AUTORIZA O LOGIN
                //CRIA SESSÃO PARA O USUARIO
                req.session.usuario ={
                    //INSERINDO AS INFORMAÇÕES DO USUÁRIO NA SESSÃO
                    id: usuario.id,
                    email: usuario.email
                }
                res.send(`Sessão do usuário criada com sucesso!<br>
                    ID do usuário logado: ${req.session.usuario['id']}<br>
                    E-mail do usuário logado: ${req.session.usuario['email']} `) 
               // res.redirect("/");
            }else{ 
            res.send(`Senha inválida!
                <br><a href="/login">Tente novamente.</a>`)
            }
            //SE O USUARIO NAO EXISTIR
        }else{
        res.send(`O Usuário informado não existe!
            <br><a href="/login">Tente novamente.</a>`)
        }
    })
})

//EXPORTANDO O MÓDULO
export default router;
