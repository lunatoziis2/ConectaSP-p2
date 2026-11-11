"use client";

import { useEffect, useState } from "react";
import CardPonto from "./CardPonto";
import styles from "@/styles/Pontos.module.css";


export default function ListaPontos() {
  const [pontos, setPontos] = useState([]);

  useEffect(() => {
    async function buscarPontos() {
      const resposta = await fetch("/api/locais");
      const dados = await resposta.json();

      setPontos(dados);
    }

    buscarPontos();
  }, []);

  return (
    <section className={styles.listaPontos}>
      {pontos.map((ponto) => (
        <CardPonto
          key={ponto.endereco}
          imagem={ponto.imagem}
          nome={ponto.nome}
          localizacao={ponto.localizacao}
          endereco={ponto.endereco}
        />
      ))}
    </section>
  );
}