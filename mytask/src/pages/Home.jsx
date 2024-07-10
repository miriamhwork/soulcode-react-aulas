import { Container, Carousel, Card, Button, Tabs, Tab } from "react-bootstrap";

function Home() {
    return (
        <main>
            <Container className="mt-5" >
                <h1>Seja bem-vindo!</h1>
                <Carousel className="mb-5">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/task1.jpg" 
                            alt="Imagem de vários papéis amarelos para recados"
                        />
                        <Carousel.Caption>
                        <h3>Conheça nossas soluções</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, nostrum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/task2.jpg" 
                            alt="Imagem de vários papéis amarelos para recados"
                        />
                        <Carousel.Caption>
                        <h3>Use em qualquer lugar</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, nostrum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/task3.jpg" 
                            alt="Imagem de vários papéis amarelos para recados"
                        />
                        <Carousel.Caption>
                        <h3>Bora começar a se organizar?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, nostrum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/task4.jpg" 
                            alt="Imagem de vários papéis amarelos para recados"
                        />
                        <Carousel.Caption>
                        <h3>Chega de papelada! Venha para o MyTask</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, nostrum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <section className="cards">
                    <Card bg="dark" text="white" style={{ width: '18rem' }} className="mt-5" >
                        <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1683309556192-d024cd55a9ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFza3xlbnwwfHwwfHx8MA%3D%3D" />
                        <Card.Body>
                            <Card.Title>Como funciona</Card.Title>
                            <Card.Text>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, aliquid.
                            </Card.Text>
                            <Button variant="outline-info">Saiba Mais</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" style={{ width: '18rem' }} className="mt-5" >
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1570649236495-42fa5fe5c48b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFza3xlbnwwfDF8MHx8fDA%3D" />
                        <Card.Body>
                            <Card.Title>Como funciona</Card.Title>
                            <Card.Text>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, aliquid.
                            </Card.Text>
                            <Button variant="outline-info">Saiba Mais</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" style={{ width: '18rem' }} className="mt-5" >
                        <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1683309556192-d024cd55a9ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFza3xlbnwwfHwwfHx8MA%3D%3D"  />
                        <Card.Body>
                            <Card.Title>Como funciona</Card.Title>
                            <Card.Text>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, aliquid.
                            </Card.Text>
                            <Button variant="outline-info">Saiba Mais</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" style={{ width: '18rem' }} className="mt-5" >
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1570649236495-42fa5fe5c48b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFza3xlbnwwfDF8MHx8fDA%3D" />
                        <Card.Body>
                            <Card.Title>Como funciona</Card.Title>
                            <Card.Text>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, aliquid.
                            </Card.Text>
                            <Button variant="outline-info">Saiba Mais</Button>
                        </Card.Body>
                    </Card>
                </section>

            </Container>
        </main>
    );
}

export default Home;