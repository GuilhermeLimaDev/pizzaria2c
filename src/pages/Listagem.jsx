import Pizzas from "../share/Pizzas";
import "../App.css";

const Listagem = () => {
  const ItensPizzas = () =>
    Pizzas.map((pizza) => (
      <li key={pizza.id} className="cardPizzas">
        <img src={pizza.imagem} />
        <p>Titulo: {pizza.descricao}</p>
        <p>{pizza.preco}</p>
      </li>
    ));
  return (
    <>
      <h2>Lista de nossas pizzas</h2>
      <ItensPizzas />
    </>
  );
};

export default Listagem;
