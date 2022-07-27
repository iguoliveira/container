import styled from "styled-components";
import "./input.css";

export default function Input(props) {
  return <InputArea placeholder={props.name} className={props.width} />;
}

const InputArea = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid black;

  &::placeholder {
    text-align: center;
  }
`;
