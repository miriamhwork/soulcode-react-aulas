// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático


import Rodape from "./components/Rodape";
import Blog from "./components/Blog";
import Mensagem from "./components/Mensagem";
import Navbar from "./components/Navbar";

// Componente principal da aplicação
function App() {
    return (
        <>
            {/* <Mensagem 
            titulo="TIPOS DE GRÃOS DE CAFÉ: 4 PRINCIPAIS TIPOS!" 
            linkImagem="https://picsum.photos/200" 
            legenda="Imagem aleatória" 
            paragrafo="Neste artigo, guiaremos você através dos quatro principais tipos, destacando suas características distintas e revelando os segredos por trás de cada xícara perfeita." 
            nomeAutor="Baggio Cafe" 
            /> */}
            <Navbar logado={true} nomeUsuario="Batata"/>
            <Blog />
            <Rodape />
        </>
    );
}

export default App;