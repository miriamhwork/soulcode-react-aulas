// Desestruturação de objetos: permite extrair valores de um objeto e atribuir em variáveis

const pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
        cidade: "Ubajara",
        estado: "Ceará"
    }
}

// Dentro das chaves coloca-se as propriedades que serão extraídas
const {nome, idade, profissao} = pessoa
// poderia fazer, mas na forma acima fica mais simplificado porque já criamos uma const para as três variáveis, se ter que declarar cada um numa const diferente
// const nome = pessoa.nome

console.log(nome);
console.log(idade);
console.log(profissao);

// Podemos extrais propriedades de objetos internos
const {endereco: {estado, cidade}} = pessoa;
console.log(cidade);
console.log(estado);

//Spread (...): permite espalhar as propriedades de um objeto em um outro

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
}

// As propriedades do objeto carro serão "copiadas" para este novo objeto
const copiaCarro = {...carro};
console.log(copiaCarro);

//aqui ele atualiza o ano e adiciona uma nova propriedade
