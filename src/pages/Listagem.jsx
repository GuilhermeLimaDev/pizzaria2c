import Pizzas from "../share/Pizzas";
import "../App.css";
import { Link } from "react-router-dom";

const Listagem = () => {
  const ItensPizzas = () =>
    Pizzas.map((pizza) => (
      <Link to={`/informacao/${pizza.id}`}>
        <li key={pizza.id} className="cardPizzas">
          <img src={pizza.imagem} />
          <p>Titulo: {pizza.descricao}</p>
          <p>{pizza.preco}</p>
        </li>
      </Link>

    ));
  return (
    <>
      <h2>Lista de nossas pizzas</h2>
      <ItensPizzas />
    </>
  );
};

export default Listagem;
