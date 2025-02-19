import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed; 
  bottom: 30px;
  width: 100vw;
  display: flex;
  justify-content: center;
`

export const NavbarBody = styled.div`
  border: 2px solid var(--neon-yellow);
  background-color: var(--background-color);
  border-radius: 100px;
  padding: 5px 20px;
  width: 90%;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;

    
}
`

export const List = styled.li<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: ${({ selected }) => selected ? `2px solid var(${"--neon-yellow"})` : 'none'};
  border-radius: 50%;

  a {
    width: 32px;
    height: 32px;
    display: block;
    text-decoration: none;
    color: var(--black);
  }

  img {
    fill: white;
    width: 32px;
    height: 32px;
    object-fit: contain;
    color: white;
  }
`