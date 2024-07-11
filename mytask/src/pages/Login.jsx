import { Button } from "react-bootstrap";

function Login() {
    return (
        <main>
            <form className="form-section">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control"/>
                    {/* htmlFor serve para quando clicar no label o campo input se destaca e para isso o id e o htmlFor precisam ter o mesmo nome. Nessa biblioteca não precisa do atributo name */}
                    {/* a className serve para ele ir até a largura total do formulário (no index.css está no form com width: 320px) */}
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" className="form-control"/>
                </div>
                <Button variant="dark" className="mt-1 w-100">Entrar</Button>
                <Button variant="primary" className="mt-1 w-100">Entrar com o Google</Button>
            </form>
        </main>
    );
}

export default Login;