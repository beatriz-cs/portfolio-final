import React from "react";
import * as S from "../styled/Styled.js";

const Modal = ({ indice1, indice2, indice3, indice4 }) => {
  return (
    <nav>
      <S.Ul>
        <li>
          <S.Menu to="/">{indice1}</S.Menu>
        </li>
        <li>
          <S.Menu to="/About">{indice2}</S.Menu>
        </li>
        <li>
          <S.Menu to="/Projects">{indice3}</S.Menu>
        </li>
        <li>
          <S.Menu to="/Contact">{indice4}</S.Menu>
        </li>
      </S.Ul>
    </nav>
  );
};


export default Modal;
