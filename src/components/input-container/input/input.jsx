import styled from "styled-components";

export default function Input(props) {
  return <InputArea placeholder={props.name} />;
}

const InputArea = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid black;
`;
