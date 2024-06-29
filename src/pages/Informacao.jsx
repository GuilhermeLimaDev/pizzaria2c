import { useParams } from "react-router-dom"
import Pizzas from "../share/Pizzas"


const Informacao = () => {
    const { id } = useParams()
    const pizzaid = id ? parseInt(id) : undefined
    const pizza = pizzaid ? Pizzas.find((p) => p.id === pizzaid) : undefined

    return (
        <>
            <h1>Informações da pizza</h1>
            <p>{pizza.descricao}</p>
            <p>Valor R$ {pizza.preco},00</p>
            <img src={pizza.imagem} />
        </>
    )



}

export default Informacao