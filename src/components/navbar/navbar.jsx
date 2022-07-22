import { Link } from "react-router-dom";
import styled from "styled-components";
import Links from "./links/links";

export default function Navbar() {
  return (
    <Container>
      <Link to="/" className="link">
        <Logo>CEP</Logo>
      </Link>
      <LinksContainer>
        <Link to="about" className="link">
          <Links linkName="About us" />
        </Link>
        <a
          href="https://github.com/iguoliveira"
          target="_blank"
          className="link"
        >
          <Links linkName="Github" />
        </a>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f8f8f8;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link {
    text-decoration: none;
    color: black;
    cursor: pointer;

    &:hover {
      color: #585858;
      transition: 200ms;
    }
  }
`;

const Logo = styled.div`
  font-size: 1.2em;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 10px;
`;
