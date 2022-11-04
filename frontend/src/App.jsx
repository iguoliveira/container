import "./app.scss";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  findAllProductsInOrder,
  postProduct,
  udpateProduct,
  deleteProduct,
} from "./fetchers/products";
import { useLoaderData } from "react-router-dom";

export const App = () => {
  document.title = "Products";
  const client = useQueryClient();
  const params = useLoaderData();
  const { data, isLoading, error } = useQuery(["order-product"], () =>
    findAllProductsInOrder(params)
  );

  const mutation = useMutation(postProduct, {
    onSuccess: () => {
      client.invalidateQueries("order-product");
    },
  });

  const mutationEdit = useMutation(udpateProduct, {
    onSuccess: () => {
      client.invalidateQueries("order-product");
    },
  });

  const mutationDelete = useMutation(deleteProduct, {
    onSuccess: () => {
      client.invalidateQueries("order-product");
    },
  });

  const [inputs, setInputs] = useState({
    name: "",
    qtd: 0,
    price: 0,
    orderId: params,
  });

  function handleInput() {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    event.preventDefault();
    mutation.mutate(inputs);
  }

  function handleEdit() {
    const editData = {
      id: event.target.parentNode.id,
      ...inputs,
    };
    mutationEdit.mutate(editData);
  }

  function handleDelete(event) {
    mutationDelete.mutate({ id: event.target.parentNode.id });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="input"
          placehoder="Nome"
          value={inputs.name}
          onChange={handleInput}
        />
        <input
          type="number"
          name="qtd"
          className="input"
          placehoder="Quantidade"
          value={inputs.qtd}
          onChange={handleInput}
        />
        <input
          type="number"
          name="price"
          className="input"
          placehoder="Price"
          value={inputs.price}
          onChange={handleInput}
        />
        <button type="submit" className="button">
          Cadastrar
        </button>
      </form>
      <div className="items-container">
        {data.products.map((item, index) => {
          return (
            <div key={index} className="product-card">
              <span>
                {item.name} - {item.qtd} - R${item.price}
              </span>
              <div id={item.id}>
                <button
                  className="button-delete"
                  onClick={(evt) => handleDelete(evt)}
                >
                  DELETAR
                </button>
                <button className="button-edit" onClick={() => handleEdit()}>
                  EDITAR
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
