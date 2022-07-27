import styled from "styled-components";

export default function Button(props) {
  return <Btn>{props.name}</Btn>;
}

const Btn = styled.button`
  background-color: #744EAA;
  width: 72px;
  height: 24px;
  border: 0;
  color: white;
  cursor: pointer;

  &:hover{
    box-shadow: 1px 1px 0px black;
  }
`;