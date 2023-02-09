import styled from 'styled-components';

export const StyledSocialMedia = styled.div`
  display: flex;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 3;
  color: white;
  @media screen and (max-width: 768px) {
    right: 12px;
    bottom: 15px;
  }
`;

export const StyledSocialItem = styled.a`
  width: 90px;
  margin-left: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: black;
  border: 1px solid white;
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    filter: drop-shadow(0px 0px 20px var(--color-shadow));
  }

  svg {
    width: 28px;
    height: 28px;
    margin-bottom: 12px;
    fill: white;
  }
  div {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    max-width: 22vw;

    padding: 15px;
  }
`;
