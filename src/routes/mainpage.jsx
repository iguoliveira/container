import styled from "styled-components";

import Navbar from "../components/navbar/navbar";
import Container from "../components/input-container/container";
import React from "react";

export default function Mainpage() {
  return (
    <>
      <Navbar />
      <ContainerBlock>
        <Container />
      </ContainerBlock>
    </>
  );
}

const ContainerBlock = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
