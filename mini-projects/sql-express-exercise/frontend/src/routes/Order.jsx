import "./order.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchOrder, postOrder, deleteOrder } from "../fetchers/products";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const Order = () => {
  document.title = "Orders";
  const { data, isLoading, error } = useQuery(["order"], fetchOrder);
  const client = useQueryClient();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    totalPrice: 0,
    productId: [],
  });
  const mutation = useMutation(postOrder, {
    onSuccess: () => {
      client.invalidateQueries("product");
    },
  });

  const delOrderMutation = useMutation(deleteOrder, {
    onSuccess: () => {
      client.invalidateQueries("order");
    },
  });

  function handleInput() {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    mutation.mutate(inputs);
    navigate(`/${data[data.length - 1].id + 1}/products`);
  }

  function handleDelete() {
    event.preventDefault();
    delOrderMutation.mutate({ id: event.target.id });
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
          placeholder="Order Name"
          value={inputs.name}
          onChange={handleInput}
          autoFocus
        />
        <button type="submit">Create Order</button>
      </form>
      <div className="order-container">
        {data.map((item, index) => {
          return (
            <div key={index} className="order-card">
              <div>
                {item.name} - {item.totalPrice}
              </div>
              <div>
                <button id={item.id} onClick={handleDelete}>
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
