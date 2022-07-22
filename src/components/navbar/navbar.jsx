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
  background-color: #6D597A;
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
      color: #585858;
      transition: 200ms;
    }
  }
`;

const Logo = styled.div`
  font-size: 1.25em;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 10px;
`;
