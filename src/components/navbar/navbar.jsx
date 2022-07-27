import { Link } from "react-router-dom";
import styled from "styled-components";
import Links from "./links/links";

export default function Navbar() {
  return (
    <Container>
      <Link to="/" className="link">
        <Logo>CEP</Logo>
      </Link>
      <Links link="https://github.com/iguoliveira" linkName="Github" />
    </Container>
  );
}

const Container = styled.div`
  background-color: #744eaa;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link {
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 1.1em;

    &:hover {
      color: #cacaca;
      transition: 200ms;
    }
  }
`;

const Logo = styled.div`
  font-size: 1.25em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
