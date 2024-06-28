import { useParams } from "react-router-dom";
import Pizzas from "../share/Pizzas";

const Information = () => {
  const { id } = useParams();
  const pizzaid = id ? parseInt(id) : undefined;
  const pizza = pizzaid ? Pizzas.find((p) => p.id === pizzaid) : undefined;

  return (
    <>
      <h2>Detalhes da pizza</h2>
      <p>{pizza.descricao}</p>
      <p>Valor da pizza: R$ {pizza.preco},00</p>
      <img src={pizza.imagem} />
    </>
  );
};

export default Information;
