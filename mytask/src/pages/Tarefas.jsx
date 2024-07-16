import { Card, Container, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import { getTarefas, deleteTarefa} from "../firebase/tarefas";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"

function Tarefas() {

    const [tarefas, setTarefas] = useState(null); //começa com null, porque indica que não tem dados para exibir
    // lista de tarefas do return do tarefa.js

    const navigate = useNavigate(); // para usar a função no botão Editar

    // função assíncrona, precisa do then, vai pegar os dados da lista Tarefas e mostrar
    function carregarDados() { 
    // O then devolve a lista de tarefas da coleção
    getTarefas().then((resultados) => { // dentro do ( ) vai colocar os resultados (retorno do getTarefas) que é a lista de tarefas, pode ser qualquer nome
        setTarefas(resultados); // escolhe o que vai fazer com esses dados da coleção do Firestore, nesse caso, vai setar a lista para conseguir exibir na interface. Vai setar aquele useState que era null.
    })
    }

    function deletarTarefa(id) {
        // true -> apagar a tarefa, false -> não fazer nada
        const deletar = confirm("Tem certeza ?");
        if(deletar) {
            deleteTarefa(id).then(() => { // não esqueça de importar em cima
                toast.success("Tarefa removida com sucesso"); // não esqueça de importar em cima
                carregarDados(); // vai atualizar após o usuário confirmar a exclusão e vai retirar o card da tela do navegador.
            });
        }    
    }

    // Executar uma função quando o componente é renderizado a primeira vez
    // useEffect vai chamar a função quando o componente aparece na tela (quando o usuário abrir a página)
    // o array () está vazio para executar a 1ª vez que o usuário entrar na página, chamado de efeito colateral
    useEffect(() => { 
        carregarDados();
    }, []); //aqui é um array vazio, vai executar a função na 1ª vez que o usuário entrar

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
                                <Badge bg="dark">{new Date(tarefa.dataConclusao).toLocaleDateString()}</Badge>
                            </div>
                            <Button variant="dark" onClick={() => {
                                navigate(`/tarefas/editar/${tarefa.id}`);
                            }}>Editar</Button>
                            {/* O botão Editar vai redirecionar para a página de editar a tarefa específica com o id, conforme montamos o Route no App.jsx */}
                            <Button variant="danger" onClick={() => deletarTarefa(tarefa.id)}>
                            Excluir 
                            {/* O botão Excluir vai chamar a função deletarTarefa */}
                            </Button>
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