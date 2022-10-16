import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #FFFDF4;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (max-width: 800px) {
    background-size: 100% 350vh;
}

}
`;

export const Menu = styled(Link)`
  width: 100%;
  display: flex;
  font-size: 1.1em;
  text-decoration: none;
  color: #424949;
  font-family: 'Philosopher', sans-serif;
  transition: 0.3s;

  :hover{
    opacity: .7;
  }
  
  @media (max-width: 700px) {
    font-size: 1em;
  }
  @media (max-width: 400px) {
    font-size: 60%;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-basis: 50px;
  justify-content: flex-end;
  width: 97%;
  list-style: none;

  li{
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const Div = styled.div`
  width: 100%;
  height: 45.6vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  background-image: radial-gradient(
    farthest-side at 90% 90%,
    #f35 10%,
    #FFFDF4 80%
  );

  p {
    width: 80%;
    font-size: 1.3em;
    font-family: 'Philosopher', sans-serif;
  }

  @media (max-width: 1300px) {
    height: 65vw;
  }

  @media (max-width: 1000px) {
    height: 85vw;
  }

  @media (max-width: 800px) {
    height: 150vw;
  }

  @media (max-width: 450px) {
    height: 180vw;
  }

  @media (max-width: 400px) {
    p {
      font-size: 70%;
    }
  }
  @media (max-width: 900px) {
    p {
      font-size: 80%;
    }
  }

`;
export const Divs = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-evenly;

  p {
    width: 80%;
    font-size: 1.3em;
    font-family: 'Philosopher', sans-serif;
  }

  @media (max-width: 400px) {
    p {
      font-size: 70%;
    }
  }
  @media (max-width: 805px) {
    height: 3vh;
  }
`;

export const Divao = styled.div`
  width: 20%;
  height: 18vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  opacity: .6;
  transition: .3s;

  :hover{
    opacity: .9;
  }

  figure{
    width: 90%;
    height: 10vw;
  }

  img{
    width: 18vw;
    height: 9.5vw;
  }

  h2{
    font-family: 'Cinzel Decorative', cursive;
    font-size: 1em;
    background-color: aliceblue;
    height: .3vw;
    width: 100%;
    text-align: center;
  }

  a{
    text-decoration: none;
    color: #f35;
    transition: .2s;
  }

  a:hover{
    font-size: 1.1em;
  }

  p{
    font-size: 0.8em;
    text-align: center;
  }
  
  @media (max-width: 1300px) {

    height: 25vw;
  } 
  
  @media (max-width: 1200px) {

  h2{
    font-size: 0.9em;
  }
} 

@media (max-width: 1000px) {

h2{
  font-size: 0.8em;
}

} 

@media (max-width: 950px) {

h2{
  font-size: 0.7em;
}

}

  @media (max-width: 805px) {

    height: 30vw;

    p {
      font-size: 0.7em;
    }
  }

  @media (max-width: 600px) {
  width: 25%;
  height: 40vw;

  h2{
    font-size: 0.6em;
  }

  p{
    font-size: 0.6em;
  }

  img{
    width: 21vw;
    height: 11vw;
  }

}
`;


export const Title = styled.div`
  height: 100%;
  color: #424949;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Cinzel Decorative', cursive;
  font-size: 3em;

  .content {
  position: absolute;
  top: 75%;
  left: 25%;
  transform: translate(-50%, -50%);
  height: 2em;
  overflow: hidden;
  font-size: 40px;
  line-height: 40px;
  color: #424949;
  
  &__container {
    font-weight: 600;
    overflow: hidden;
    height: 40px;
    padding: 0 80px;

    &:before {
      content: '[';
      left: 0;
    }

    &:after {
      content: ']';
      position: absolute;
      right: 0;
    }

    &:after, &:before {
      position: absolute;
      top: 0;
      
      color: #f35;
      font-size: 42px;
      line-height: 40px;
      
      -webkit-animation-name: opacity;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    &__text {
      display: inline;
      float: left;
      margin: 0;
    }

    &__list {
      margin-top: 0;
      padding-left: 110px;
      text-align: left;
      list-style: none;
      
      -webkit-animation-name: change;
      -webkit-animation-duration: 10s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;

      &__item {
        line-height:40px;
        margin:0;
      }
    }
  }
}

@-webkit-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-webkit-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-o-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-o-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-moz-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-moz-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}
`;

export const Text = styled.div`
  height: 100%;
  color: #424949;
  width: 50%;
  margin-right: 50%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  h3{
  width: 70%;
  font-size: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  }

  span{
    color: #424949;
    width: 100%;
    text-decoration: none;
    text-align: center;
  }
`;

