import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchOrder, postOrder } from "../fetchers/products";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const Order = () => {
  document.title = "Order";
  const client = useQueryClient();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    totalPrice: 0,
  });
  const mutation = useMutation(postOrder, {
    onSuccess: () => {
      client.invalidateQueries("product");
    },
  });
  const { data } = useQuery(["order"], fetchOrder);

  function handleInput() {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    event.preventDefault();
    navigate(`/${data[data.length - 1].id + 1}/products`);
    mutation.mutate(inputs);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleInput}
        />
        <button>Login</button>
      </form>
    </section>
  );
};
