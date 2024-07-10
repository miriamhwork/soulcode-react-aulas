import { Link } from "react-router-dom";


function Rodape() {
    return (
        <footer>
            <hr />
            <p class="text-center" >© 2024 Desenvolvido por Miriam Akiko</p>
            <Link className="footer-link d-block mx-auto text-center" to="/privacy">Política de Privacidade</Link>
        </footer>
    );
}

export default Rodape;