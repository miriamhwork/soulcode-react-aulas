// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático


import Rodape from "./components/Rodape";
import Blog from "./components/Blog";
import Mensagem from "./components/Mensagem";
import Navbar from "./components/Navbar";
import CardAluno from "./components/CardAluno";

// Componente principal da aplicação
function App() {
    return (
        <>
            {/* Aula do dia 03/07 */}
            {/* <Mensagem 
            titulo="TIPOS DE GRÃOS DE CAFÉ: 4 PRINCIPAIS TIPOS!" 
            linkImagem="https://picsum.photos/200" 
            legenda="Imagem aleatória" 
            paragrafo="Neste artigo, guiaremos você através dos quatro principais tipos, destacando suas características distintas e revelando os segredos por trás de cada xícara perfeita." 
            nomeAutor="Baggio Cafe" 
            /> */}
            {/* <Navbar logado={true} nomeUsuario="Batata"/>
            <Blog />
            <Rodape /> */}
            {/* Correção abaixo do exercício 2 dia 04/07 */}
            <CardAluno nome="José" serie="7º" media={8.5}/>
            <CardAluno nome="Igor" serie="9º" media={5.5}/>
            <CardAluno nome="Victor" serie="6º" media={7.0}/>
            <CardProduto nome="Celular" precoUnitario={2000} desconto={10}/>
            <CardProduto nome="Fone Wireless" precoUnitario={100} desconto={15}/>
            <CardProduto nome="Carro" precoUnitario={90000} desconto={0}/>
        </>
    );
}

export default App;