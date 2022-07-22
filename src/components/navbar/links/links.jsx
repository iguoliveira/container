import styled from "styled-components";

export default function Links(props) {
  return (
    <main>
        <NavLinks>{props.linkName}</NavLinks>
    </main>
  );
}

const NavLinks = styled.div`
`