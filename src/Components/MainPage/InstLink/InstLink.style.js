import styled from 'styled-components';

export const StyledInstLink = styled.div`
  display: flex;
  color: white;
  position: fixed;
  left: 150px;
  bottom: 120px;
  transition: all 500ms ease;
  @media screen and (max-width: 768px) {
    left: 25px;
    bottom: 180px;
  }
`;

export const StyledInstItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  border: 2px solid grey;
  width: 220px;
  padding: 10px;
  margin: 0 10px;
  transition: inherit;
  animation: rotate 1s ease-out 200ms forwards;
  &:nth-child(even) {
    animation: rotate-even 1s ease-out 400ms forwards;
  }
  &:nth-child(3) {
    animation: rotate 1s ease-out 600ms forwards;
  }

  @keyframes rotate {
    from {
      opacity: 0;
      transform: rotate(0deg);
    }

    to {
      opacity: 1;
      transform: rotate(15deg);
    }
  }

  @keyframes rotate-even {
    from {
      opacity: 0;
      transform: rotate(0deg);
    }

    to {
      opacity: 1;
      transform: rotate(-15deg);
    }
  }

  &:hover {
    filter: drop-shadow(0px 0px 20px var(--color-shadow));
  }

  img {
    width: 200px;
    height: 230px;
    object-fit: cover;
  }
  h2 {
    /* width:100% */
    /* align-self: start; */
    font-size: 14px;
    text-align: center;
    padding-top: 10px;
  }

  @media screen and (max-width: 770px) {
    width: 30vw;
    padding: 1vw;
    margin: 0px;
    img {
      width: 28vw;
      height: 32vw;
      object-fit: cover;
    }
  }
`;
