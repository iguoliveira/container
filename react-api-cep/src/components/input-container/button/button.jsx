import styled from "styled-components";

export default function Button(props) {
  return <Btn>{props.name}</Btn>;
}

const Btn = styled.button`
  background-color: #744EAA;
  width: 100%;
  padding: 10px;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 4px;

  &:hover{
    box-shadow: 3px 4px 0 black;
    transition: 120ms ease-in-out;
  }
`;