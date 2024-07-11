import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm();

  function entrar(data) {
    // data é um objeto com os dados do formulário
    console.log("Login!")
    console.log(data);
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
            {...register("email")}
            />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            id="senha" 
            className="form-control" 
            {...register("senha")}
            />
        </div>
        <Button variant="dark" className="mt-1 w-100" type="submit">
          Entrar
        </Button>
        <Button variant="danger" className="mt-1 w-100" type="button">
          Entrar com o Google
        </Button>
      </form>
    </main>
  );
}

export default Login;

/* htmlFor serve para quando clicar no label o campo input se destaca e para isso o id e o htmlFor precisam ter o mesmo nome. Nessa biblioteca não precisa do atributo name */
/* a className serve para ele ir até a largura total do formulário (no index.css está no form com width: 320px) */