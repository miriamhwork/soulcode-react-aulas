// Importante: importar para que os estilos do arquivo
// façam parte do projeto

// Exercício: Aplicar props ao componente Mensagem, as propriedades são: 
// textoTitulo, nomeAutor, paragrafo e linkImagem. 
// Adapte o componente para receber props.
import "./Mensagem.css";

function Mensagem(props) {
    return (
        <section className="mensagem-corpo">
            <h2 className="mensagem-titulo">{props.titulo}</h2>
            <img src={props.linkImagem} alt={props.legenda}/>
            <p className="paragrafo">{props.paragrafo}</p>
            <small>Criado por: {props.nomeAutor}</small>
        </section>
    );
}

export default Mensagem;
