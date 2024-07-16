import { Card, Container, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import { getTarefas } from "../firebase/tarefas";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

function Tarefas() {
    const [tarefas, setTarefas] = useState(null); //começa com null, porque indica que não tem dados para exibir
    // lista de tarefas do return do tarefa.js

    // função assíncrona, precisa do then, vai pegar os dados da lista Tarefas e mostrar
    function carregarDados() { 
    // O then devolve a lista de tarefas da coleção
    getTarefas().then((resultados) => { // dentro do ( ) vai colocar os resultados (retorno do getTarefas) que é a lista de tarefas, pode ser qualquer nome
        setTarefas(resultados); // escolhe o que vai fazer com esses dados da coleção do Firestore, nesse caso, vai setar a lista para conseguir exibir na interface. Vai setar aquele useState que era null.
    })
    }

    // Executar uma função quando o componente é renderizado a primeira vez
    // useEffect vai chamar a função quando o componente aparece na tela (quando o usuário abrir a página)
    // o array () está vazio para executar a 1ª vez que o usuário entrar na página, chamado de efeito colateral
    useEffect(() => { 
        carregarDados();
    }, []);

    return (
        <main>
            <Container className="mt-5">
                <h1>Suas tarefas</h1>
                <hr />
                <Link className="btn btn-dark" to="/tarefas/adicionar">Adicionar tarefa</Link>
                {/* condicional para aparecer a lista de tarefas */ }
                {tarefas ? <section className="mt-2">
                    {tarefas.map((tarefa) => {
                        return <Card key={tarefa.id}>
                            <Card.Body>
                                <Card.Title>{tarefa.titulo}</Card.Title>
                                <Card.Text>{tarefa.descricao}</Card.Text>
                            <div className="mb-2">
                                {tarefa.concluido ? 
                                <Badge bg="success">Concluído</Badge> 
                                : <Badge bg="warning">Pendente</Badge>}
                                <Badge>{tarefa.categoria}</Badge>
                            </div>
                            <Button variant="dark">Editar</Button>
                            <Button variant="danger">Excluir</Button>
                            </Card.Body>
                        </Card>
                    })}
                </section> : <Loader />} 
                {/* chama o componente Loader para mostrar par ao usuário que está carregando*/}
            </Container>
        </main>
    );
}

export default Tarefas;

