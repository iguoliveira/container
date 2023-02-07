import { Link } from "react-router-dom";
import styled from "styled-components";
import Links from "./links/links";

export default function Navbar() {
  return (
    <Container>
      <Link to="/" className="link">
        CEP
      </Link>
      <LinkItems>
        <Links link="https://github.com/iguoliveira" linkName="Github" />
      </LinkItems>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
  padding: 20px 0px;
  background-color: #744eaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  .link {
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 1.5em;
    margin-left: 20px;

    &:hover {
      color: #cacaca;
      transition: 200ms;
    }
  }
`;

const LinkItems = styled.div`
  margin-right: 20px;
`;
