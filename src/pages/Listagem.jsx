import Pizzas from "../share/Pizzas";

const Listagem = () => {
  const ItensPizzas = () =>
    Pizzas.map((pizza) => (
      <li key={pizza.id}>
        <img src={pizza.imagem} />
        <p>{pizza.descricao}</p>
        <p>{pizza.preco}</p>
        <hr />
        <br />
      </li>
    ));
  return (
    <>
      <ItensPizzas />
    </>
  );
};

export default Listagem;
