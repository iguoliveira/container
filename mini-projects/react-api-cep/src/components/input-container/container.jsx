import styled from "styled-components";
import Input from "./input/input";
import Button from "./button/button";

export default function Container() {
  return (
    <InputBlock>
      <Input name="CEP" width="normal" />
      <Input name="Rua" width="first" />
      <Input name="No" width="second" />
      <Input name="Bairro" width="normal" />
      <Input name="Cidade" width="first" />
      <Input name="UF" width="second" />
      <Button name="Submit" />
    </InputBlock>
  );
}

const InputBlock = styled.div`
  background-color: white;
  padding: 30px 50px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;