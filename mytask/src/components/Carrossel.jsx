import { Carousel } from "react-bootstrap";

function Carrossel() {
    return (
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
    );
}

export default Carrossel;