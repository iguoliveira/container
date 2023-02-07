import styled from "styled-components";

export default function Links(props) {
  return <NavLinks href={props.link} target={"_blank"}>{props.linkName}</NavLinks>;
}

const NavLinks = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-size: 1em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  &:hover {
    color: #cacaca;
    transition: 200ms;
  }
`;