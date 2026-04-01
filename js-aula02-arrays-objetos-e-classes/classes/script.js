// CLASSES NO JAVASCRIPT
    //Nome de classes devem iniciar com a primeira letra maíuscula

class Carro{
    //DEFININDO OS ATRIBUTOS
    constructor(marca,modelo,ano){
        //this é uma referência as instâncias que serão criadas através dessa classe
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
        //DEFINIR OS MÉTODOS
        buzinar(){
            return "Beep!, Beep!";
        }
    
}

//INSTÂNCIANDO OBJETOS
const carroPopular = new Carro("Fiat", "Uno", "2012");

document.write(`<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando buzina faz ${carroPopular.buzinar()}</p>`);






class Esportivo{
    //DEFININDO OS ATRIBUTOS
    constructor(marca,modelo,ano){
        //this é uma referência as instâncias que serão criadas através dessa classe
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
        //DEFINIR OS MÉTODOS
        buzinar(){
            return "Vrummmm";
        }
    
}

const CarroEsportivo = new Esportivo("Chevrolet", "camaro", "2020");
document.write(`<p>O carro ${CarroEsportivo.marca} modelo ${CarroEsportivo.modelo} é do ano ${CarroEsportivo.ano} e quando buzina faz ${CarroEsportivo.buzinar()}</p>`); 