import styled from 'styled-components';

export const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 101px;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 10;
  background-color: black;
  border: 1px solid white;
  border-width: 1px 1px 1px 0;
  .blank {
    border-top: 1px solid white;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    top: 0;
    width: 100vw;
    height: 69.6px;
    border: none;

    .self {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .blank {
      display: none;
    }
  }
`;

export const StyledNavLink = styled.a`
  min-width: 100px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: white;
  border-bottom: 1px solid white;
  transition: all 300ms ease;
  background-color: black;

  &:hover {
    filter: drop-shadow(0px 0px 20px var(--color-shadow));
  }

  svg {
    width: 16px;
    height: 16px;
    margin-bottom: 8px;
    fill: white;
    /* stroke: black; */
  }

  @media screen and (max-width: 768px) {
    min-width: 15vw;
    border: none;
    outline: none;
  }
`;
