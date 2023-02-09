import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  --color-shadow:#f8d6f8;

}
    
  *{
    font-family: 'Encode Sans Expanded', sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;
  }

 .app{
    width: 100vw;
    height: 100vh;
  }

  body{
    overflow:hidden;
  }
  



a{
  color: unset;
  text-decoration:none; 
}


.scale-up-center {
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
`;

export default GlobalStyles;
