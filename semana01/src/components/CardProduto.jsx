/* Correção do exercício 2 dia 04/07 */

import "./CardProduto.css";

// <CardProduto nome="" precoUnitario={0} desconto={0}/>
function CardProduto(props) {
    const valorDesconto = props.precoUnitario - props.precoUnitario * (props.desconto/100);

    return (
        <article className="card-produto">
            <p>{props.nome}</p>
            
            {props.desconto > 0 && <p className="grifado">R$ {props.precoUnitario}</p>} 
            {/* condicional para aparecer o valor original grifado, se tiver desconto maior que zero */}

            {props.desconto > 0 ? <h4>R$ {valorDesconto}</h4> : <h4>R$ {props.precoUnitario}</h4> }
            {/* ternário para aparecer o valor destacado original ou descontado, se o desconto for maior que zero */}

            {props.desconto > 0 && <p className="desconto">{props.desconto}% OFF</p>}
            {/* condicional para aparecer o valor do desconto em verde só se o valor do desconto for maior que zero */}

        </article>
    );
}

export default CardProduto;

/* Quando usar o && -> quando tiver uma condição que depende de uma condição */
/* Quando usar o ? : -> quando tiver duas situações */