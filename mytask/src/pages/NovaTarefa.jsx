import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addTarefa } from "../firebase/tarefas";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function NovaTarefa() {
    const { register, handleSubmit, formState: {errors}} = useForm();

    const navigate = useNavigate(); // para usar o useNavigate na função e poder levar o usuário para outra página (navegação imperativa)

    function salvarTarefa(data) {
        // Os dados do formulário são passados para a função de inserir 
        // Then => aguarda a inserção da tarefa para então exibir o toast
        addTarefa(data)
        .then(() => {
          toast.success("Tarefa adicionada com sucesso!");
          navigate("/tarefas"); //vai usar o navigate para levar para a ágina de tarefas, mas só funciona com caminhos dentro da aplicação, por exemplo, levar para a pág do Google não poderia, teria que usar o Routes e Link
        })
        .catch(() => {
          toast.error("Um erro aconteceu ao adicionar tarefa!");
        });
    }

    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(salvarTarefa)}>
                <h1>Adicionar tarefa</h1>
                <hr />
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input 
                    type="text" 
                    id="titulo" 
                    className="form-control" 
                    {...register("titulo", {required: true, maxLength: 200})}
                    />
                    {errors.titulo && <small className="invalid">O título é inválido!</small>}
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea 
                    id="descricao" 
                    className="form-control"
                    {...register("descricao", {required: true})}
                    ></textarea>
                    {errors.descricao && <small className="invalid">A drescrição é inválida!</small>}
                </div>
                <div>
                    <label htmlFor="dataConclusao">Data</label>
                    <input 
                    type="date" 
                    id="dataConclusao" 
                    className="form-control"
                    {...register("dataConclusao")} 
                    />
                </div>
                <div className="form-check">
                    <input 
                    type="checkbox" 
                    id="concluido" 
                    className="form-check-input" 
                    {...register("concluido")}
                    />
                    <label htmlFor="concluido" className="form-check-label">
                        Concluído?
                    </label>
                </div>
                <div>
                    <label htmlFor="categoria">Categoria</label>
                    <select 
                    id="categoria" 
                    className="form-select"
                    {...register("categoria")}
                    >
                        <option value="Trabalho">Trabalho</option>
                        <option value="Estudos">Estudos</option>
                        <option value="Projetos">Projetos</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
                <Button variant="dark" className="w-100 mt-1" type="submit">
                    Salvar Tarefa
                </Button>
            </form>
        </main>
    );
}

export default NovaTarefa;