import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

//Link: este componente habilita o SPA (Single-Page Application)
// Obs: Se houver links externos utilize a tag <a/>
//Navbar.Toggle => vai deixar o menu como "hamburguer"
//Navbar.Collapse => para agrupar e esconder os conteúdos navbar;

function Menu() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand='md'> 
                {/* expand é o breakingpoint para menu virar hamburguer */}
                <Container fluid>
                    <Link to="/">
                        <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" width ="32"/>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/tarefas">Tarefas</Link>
                        <Link className="nav-link" to="/tarefas/adicionar">NovaTarefa</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/cadastro">Cadastro</Link>
                        <Link className="nav-link" to="/ajuda">Ajuda</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Menu;