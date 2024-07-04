import CardAluno from "./CardAluno";

const compras = [
    "Batata palha", "Batata frita pronta", "Batata doce", "Batata Chips", "Batata Inglesa", "Batata Rústica"
];

const produtos = [
    {cod: 1, nome: "Batata palha", quantidade: 300, precoUnitario: 5},
    {cod: 2, nome: "Batata frita pronta", quantidade: 100, precoUnitario: 10},
    {cod: 3, nome: "Batata doce", quantidade: 3, precoUnitario: 10},
    {cod: 4, nome: "Batata Chips", quantidade: 20, precoUnitario: 4},
]; 

// Exercício: Listar os cards de aluno a partir de um array de alunos;
// - criar um array de objetos (matricula, nome, serie e media)
const alunos = [
    {matricula: 1, nome: "José", serie:"7º", media: 8.5},
    {matricula: 2, nome: "Igor", serie: "9º", media: 5.5},
    {matricula: 3, nome: "Victor", serie:"6º", media: 7.0},
];

// Gerar componentes/elementos a partir de dados (array)
function Listagem () {
    const itensCompra = compras.map((compra, index) => { 
        // compra = cada item do array compras 
        // precisamos colocar o index aqui para referenciar a key
        return <li key={index}>{compra}</li> 
        // cada string no array de compras está sendo transformada em um arry de <li>
        // colocamos a key como o valor da index, pois nesse array não tem uma ID ou cod para cada item
    });
 
    const cardsProduto = produtos.map((produto) => { 
        // produto = cada item do array produtos*/
        return (
            <article key={produto.cod}>
            {/* colocamos a key como o valor do cod do produto */}
                <h3>{produto.nome}</h3>
                <p>QUANTIDADE: {produto.quantidade}</p>
                <p>SUBTOTAL: {produto.quantidade * produto.precoUnitario}</p>
            </article>
        );
    });

// gerar uma lista reutilizar=ndo o CardAluno
    const cardAluno = alunos.map((aluno) => {
        return <CardAluno key={aluno.matricula} nome={aluno.nome} serie={aluno.serie} media={aluno.media}/>
    });

    return (
        <>
            <h2>Lista de Compras</h2>
            <ul>{itensCompra}</ul>
            {/*Vamos chamar a const da ul, aqui ele vai montar tudo que estiver na const itensCompra e exibir no console. */}
            <hr />
            <h2>Lista de Produtos</h2>
            <section>{cardsProduto}</section>
            {/*Vamos chamar a const dentro da section, aqui ele vai montar tudo que estiver na const cardsProduto  e exibir no console. */}
            <h2>Lista de Alunos</h2>
            <section>{cardAluno}</section> 
            {/* chamamos a lista de CardAluno aqui */}
        </>
    )
}

export default Listagem;

