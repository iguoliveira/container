import styled from "styled-components";
import Input from "./input/input";
import Button from "./button/button";

export default function Container() {
  return (
    <InputBlock>
        <Input name="CEP" width="normal" />
        <Blocks>
          <Input name="Rua" width="first" />
          <Input name="No" width="second" />
        </Blocks>
        <Input name="Bairro" width="normal" />
        <Blocks>
          <Input name="Cidade" width="first" />
          <Input name="UF" width="second" />
        </Blocks>
      <Button name="Submit"/>
    </InputBlock>
  );
}

const InputBlock = styled.div`
  padding: 20px;
  background-color: #ccd6dd;
  height: 32vh;
  width: 30vh;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Blocks = styled.div`
  display: flex;
  gap: 10px;
`;