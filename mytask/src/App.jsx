import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Rodape from "./components/Rodape";
import Privacy from "./pages/Privacy";
import NovaTarefa from "./pages/NovaTarefa";
import Tarefas from "./pages/Tarefas";
import { Toaster } from "react-hot-toast";

// BrowserRouter: componente essencial para conduzir o roteamento no navegador.
// Route: indicamos a rota (path) e o elemento que será exibido na tela.
function App() {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/ajuda" element={<Ajuda />}/>
          <Route path="/tarefas" element={<Tarefas />}/>
          <Route path="/tarefas/adicionar" element={<NovaTarefa/>}/>
          <Route path="*" element={<NotFound />}/>
          <Route path="/privacy" element={<Privacy/>}/>
        </Routes>
        <Rodape />
      </BrowserRouter>
      <Toaster position="bottom-rigth"/>
    </>
  );
}

export default App;