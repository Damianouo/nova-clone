import styled from 'styled-components';

export const StyledMainPage = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: space-between;

  .background {
    position: absolute;
    z-index: -5;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  #title {
    font-size: 6vw;
    margin: 160px 0 0 180px;
    transition: all 200ms ease;
  }
  #state {
    font-size: 3vw;
    margin: 120px 80px 0 0;
    transition: all 200ms ease;
  }

  #title:hover,
  #state:hover {
    color: white;

    filter: drop-shadow(0px 0px 20px black);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    #title {
      margin: calc(50px + 10vw) 0 0 10vw;
    }
    #state {
      font-size: 25px;
      margin: 160px 20vw;
      text-align: center;
    }
  }
`;
