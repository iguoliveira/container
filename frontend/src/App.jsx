import './app.scss'
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchProduct, postProduct } from './fetchers/products'

export const App = () => {
  document.title = 'Products'
  const client = useQueryClient()
  const { data, isLoading, error } = useQuery(
    ['product'],
    fetchProduct
  )

  const mutation = useMutation(postProduct, {
    onSuccess: () => {
      client.invalidateQueries('product')
    }
  })
  const [inputs, setInputs] = useState({
    name: '',
    qtd: 0,
    price: 0
  });

  function handleInput() {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit() {
    event.preventDefault()
    mutation.mutate(inputs)
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      <form>
        <input type="text" name="name" className="input" placehoder='Nome' value={inputs.name} onChange={handleInput} />
        <input type="number" name="qtd" className="input" placehoder='Quantidade' value={inputs.qtd} onChange={handleInput} />
        <input type="number" name="price" className="input" placehoder='Price' value={inputs.price} onChange={handleInput} />
        <button type="submit" className="button" onClick={handleSubmit}>Cadastrar</button>
      </form>
      <div className="items-container">
        {data.map((item, index) => {
          return (
            <div key={index}>{item.name} - {item.qtd} - R${item.price}</div>
          )
        })}
      </div>
    </section>
  )
}