// MIDDLEWARE DE AUTENTICAÇÃO

function Auth(req, res, next) {
  // Verificar se existe uma sessão para o usuário
  if (req.session.usuario != undefined) {
    //Permite prosseguimento
    next();
    // Se não existir função
  } else {
    //Exibe  apágina de login para o usuário
    res.redirect("/login");
  }
}
export default Auth;