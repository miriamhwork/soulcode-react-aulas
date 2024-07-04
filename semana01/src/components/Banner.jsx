import "./Banner.css";
import imagem from "../assets/beach.jpg"

function Banner () {
    return (
        <section>
            <img src={imagem} alt="imagem de uma praia" width="240"/>
            <div className="teste" style={{ backgroundImage: `url(${imagem})` }}></div>
            <img src="/vite.svg" alt="Logo do vite" />
            <img src="/imagens/beach.jpg" alt="Banner praia" />
            <section className="fundo-imagem">
                Lorem ipsum dolor sit amet.
            </section>
            <button>Clique aqui</button>
        </section>
    );
}

export default Banner;