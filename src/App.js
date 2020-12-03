import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //Definir estado do jogo (Começo, Meio, Fim)
  const [estado, setEstado] = useState("ENTRADA");

  //palpite da máquina
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setnumPalpites] = useState(1);
  //Min e max
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setnumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return (
      <div>
        <p>
          Tente adivinhar um número entre {min} e {max}
        </p>
        <button onClick={iniciarJogo}>Começa ai, man!</button>
      </div>
    );
  }

  const menor = () => {
    setnumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setnumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => setEstado("FIM");

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpites} chutes!{" "}
          <button onClick={iniciarJogo}>Jogar novamente</button>
        </p>
      </div>
    );
  }

  //0 a 300
  //palpites que a máquina deu
  return (
    <div className="App">
      <p>O seu número é {palpite}? </p>
      <p>
        Min:{min} / Max:{max}
      </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}
