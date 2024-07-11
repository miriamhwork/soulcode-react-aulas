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
          <Route path="*" element={<NotFound />}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/novatarefa" element={<NovaTarefa/>}/>
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;