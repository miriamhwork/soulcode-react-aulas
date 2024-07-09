import { useState } from "react";

function CalculadoraIMC() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);

    // Dentro do evento tem informações sobre o input
    function handlePeso(evento) { // evento pode ser qualquer nome
        const input = evento.target; // vai pegar o valor do input, se fosse OnClick, não precisaria dessa linha. Mas, como é input, precisa
        const valor = input.value; // estabelece o valor do input como a constante valor

        setPeso(valor); // vai guardar o valor
    }

    function handleAltura(evento) { // mesma estrutura da função do handlePeso
        const input = evento.target; 
        const valor = input.value; 

        setAltura(valor);
    }

    function handleCalcularImc() {
        const resultado = peso / altura ** 2;
        setImc(resultado);
    }

    
    return (
        <section>
            <h3>Calculadora IMC</h3>
            <input
                type="number"
                placeholder="Digite seu peso"
                onChange={handlePeso} // evento toda vez que o usuário interagir com o input, vai exercutar a função handlePeso
                // poderia colcoar direto sem a função handlePeso, direto inline:
                // onChange={(evento) => setPeso(evento.target.value)}
            />
            <input 
                type="number"
                placeholder="Digite sua altura"
                onChange={handleAltura}
            />
            <br />
            <button onClick={handleCalcularImc}>Calcular</button>
            <hr />
            <h4>Seu IMC é: {imc.toFixed(2)}</h4>
        </section>
    );
}

export default CalculadoraIMC;