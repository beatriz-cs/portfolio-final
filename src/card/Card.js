import React from "react";
import Ic3peak from "../img/ic3peak.png";
import Finn from "../img/finn.png";
import Lol from "../img/lol.png";
import Portflow from "../img/portflow.png";
import List from "../img/list.png";
import Codar from "../img/codar.png";
import * as S from "../styled/Styled.js";

export default function Home() {  
    return (
      <S.Div>
        <S.Divs>
        <S.Divao>
            <figure>
                <img src={Ic3peak} alt="Russian duo Ic3peak" />
            </figure>
            <h2><a href="https://codepen.io/bialbs/full/ZEvdwpG">ic3peak landpage</a></h2>
          <p>The IC3PEAK landpage was coded with HTML and CSS </p>
        </S.Divao>
        <S.Divao>
            <figure>
                <img src={Finn} alt="Finn from Adventure Time" />
            </figure>
            <h2><a href="https://codepen.io/bialbs/full/XWZbWqd">finn login</a></h2>
          <p>The Finn login was coded with HTML and CSS </p>
        </S.Divao>
        <S.Divao>
            <figure>
                <img src={Lol} alt="Login page of League of Legends game" />
            </figure>
            <h2><a href="https://beatriz-cs.github.io/login-LoL/">lol login</a></h2>
          <p>The League of Legends login was coded with HTML, CSS and Javascript </p>
        </S.Divao>
        </S.Divs>
        <S.Divs>
        <S.Divao>
            <figure>
                <img src={Portflow} alt="portflow website" />
            </figure>
            <h2><a href="https://beatriz-cs.github.io/portflow-mod1/">portflow</a></h2>
          <p>The Portflow website was coded with HTML and CSS </p>
        </S.Divao>
        <S.Divao>
            <figure>
                <img src={List} alt="to do list" />
            </figure>
            <h2><a href="https://codesandbox.io/s/github/beatriz-cs/lista-tarefas-simples">to do list</a></h2>
          <p>The to do list was coded with React </p>
        </S.Divao>
        <S.Divao>
            <figure>
                <img src={Codar} alt="codar website" />
            </figure>
            <h2><a href="https://codepen.io/bialbs/details/jOZybZb">codar</a></h2>
          <p>The codar website was coded with HTML and CSS </p>
        </S.Divao>
        </S.Divs>
      </S.Div>
    );
  }