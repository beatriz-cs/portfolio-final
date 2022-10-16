import React from "react";
import MyComponent from "../rotas/Link.js"
import Behance from "../rotas/Behance.js"
import Linkedin from "../rotas/Linkedin.js"
import Github from "../rotas/Github.js"
import * as S from "../styled/Styled.js";

export default function Home() {  
    return (
      <S.Div>
        <S.Text>
          <p>Beatriz is a cat, book and art lover. Graduated in Communications, she's based in Brazil and ready to 
            do creative stuff in front-end development and UX design. For graphic design and editorial design, 
            find her at <MyComponent>Litteris Estúdio</MyComponent></p>
            <h3>
            <Github>github</Github>
            <Behance>behance</Behance>
            <Linkedin>linkedin</Linkedin>
            </h3>
        </S.Text>
      </S.Div>
    );
  }
  