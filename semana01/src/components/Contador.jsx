import { useState } from "react";
import "./Contador.css";

function Contador({valorInicial = 0}) {
    // Para definir um estado usamos: useState
    // useState -> estado, função para alterar este estado
    // definimos no useState o valor incicial do estado
    const [numero, setNumero] = useState(valorInicial);

    function handleIncremento() {
        // Indica ao componente que ele deve atualizar, para corresponder a mudança do estado
        setNumero(numero + 1);
        console.log("Evento incremento: ", numero);
    }

    // Implementar o decremento
    function handleDecremento() {
        if (numero > 0) {
            setNumero(numero - 1);
        }
    }

    // Criar um botão que ao clicar incrementa +100
    function handleMaisCem() {
        setNumero(numero + 100);
    }

    // Criar um botão Zerar
    function handleZerar () {
        setNumero(props.valorInicial);
    }

    return (
        <section>
            <h2 className={numero % 2 === 0 ? "par": "impar"} >Contagem: {numero}</h2>
            <button onClick={handleIncremento}>+1</button>
            <button onClick={handleDecremento}>-1</button>
            <button onClick={handleMaisCem}>+100</button>
            <button onClick={handleZerar}>Zerar</button>
        </section>
    );
}

export default Contador;


// Para que o número mude, o componente precisa renderizar novamente. Para fazer isso precisamos do Estado (state):
// Estado é uma variável especial que sincroniza as mudanças na tela