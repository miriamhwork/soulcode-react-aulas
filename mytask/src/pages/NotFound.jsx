import { Figure } from "react-bootstrap";

function NotFound() {
    return (
        <main>
            <h1>Página não encontrada. 404</h1>
            <Figure>
                <Figure.Image
                    width={500}
                    alt="Batatas chips inteiras e uma quebrada ao centro"
                    src="https://plus.unsplash.com/premium_photo-1677651883964-dae74b0b3a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVycm9yfGVufDB8fDB8fHww"
                />
                <Figure.Caption>
                Erro 404 Not Found
                </Figure.Caption>
            </Figure>
        </main>
    );
}

export default NotFound;