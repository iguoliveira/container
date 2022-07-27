import styled from "styled-components";
import Input from "./input/input";

export default function Container() {
  return (
    <>
      <InputBlock>
        <Input name="CEP" />
        <Input name="Rua" />
        <Input name="No" />
        <Input name="Bairro" />
        <Input name="Cidade" />
        <Input name="UF" />
      </InputBlock>
    </>
  );
}

const InputBlock = styled.div`
  background-color: #ccd6dd;
  height: 34vh;
  width: 32vh;
  border-radius: 8px;
`;