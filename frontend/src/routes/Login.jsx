import "./login.scss";
import { useQuery } from "react-query";
import { fetchUser } from "../fetchers/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  document.title = "Login";
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({
    login: "",
    password: "",
  });
  const { data } = useQuery(["user"], fetchUser);

  function handleInput() {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    event.preventDefault();
    data.map((item, index) => {
      if (item.login == inputs.login && item.password == inputs.password) {
        navigate("/order");
        return true;
      }

      setError(true);
    });
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          className={error && "error"}
          type="text"
          name="login"
          placeholder="Login"
          value={inputs.login}
          onChange={handleInput}
        />
        <input
          className={error && "error"}
          type="text"
          name="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleInput}
        />
        <button>Login</button>
      </form>
    </section>
  );
};
