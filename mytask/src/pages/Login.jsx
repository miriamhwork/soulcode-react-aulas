import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { entrarGoogle, loginUsuario } from "../firebase/auth";

function Login() {
  const { register, handleSubmit, formState: {errors}} = useForm();
  const navigate = useNavigate();

  function entrar(data) { // data é um objeto com os dados do formulário
    loginUsuario(data.email, data.senha).then(() => {
      toast.success("Bem-vindo(a)!");
      navigate("/tarefas");
    }).catch(() => {
      toast.error("Email e/ou senha incorreta!");
    });
  }

  function handleEntrarGoogle() {
    entrarGoogle().then(() => { // não se esqueça de importar
      toast.success("Bem-vindo(a)!");
      navigate("/tarefas");
    });
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(entrar)}>
        <h1>Login</h1>
        <hr/>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            {...register("email", {required: "O email é obrigatório"})}
            />
            {errors.email && <small className="invalid">{errors.email.message}</small>}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            id="senha" 
            className="form-control" 
            {...register("senha", {required: "A senha é obrigatória", minLength: 6})}
            />
            {errors.senha && <small className="invalid">{errors.senha.message}</small>}
        </div>
        <Button variant="dark" className="mt-1 w-100" type="submit">
          Entrar
        </Button>
        <Button 
          onClick={handleEntrarGoogle}
          variant="danger" 
          className="mt-1 w-100" 
          type="button">
          Entrar com o Google
        </Button>
      </form>
    </main>
  );
}

export default Login;

/* htmlFor serve para quando clicar no label o campo input se destaca e para isso o id e o htmlFor precisam ter o mesmo nome. Nessa biblioteca não precisa do atributo name */
/* a className serve para ele ir até a largura total do formulário (no index.css está no form com width: 320px) */