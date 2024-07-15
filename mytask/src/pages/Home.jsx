import { Container} from "react-bootstrap";
import Carrossel from "../components/Carrossel";
import Cards from "../components/Cards";

function Home() {
    return (
        <main>
            <Container className="mt-5" >
                <h1>Seja bem-vindo!</h1>
                <Carrossel />
                <Cards/>
            </Container>
        </main>
    );
}

export default Home;