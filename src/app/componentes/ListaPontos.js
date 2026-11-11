
"use client";

import { useEffect, useState } from "react";
import CardPonto from "./CardPonto";
import styles from "@/styles/Pontos.module.css";

export default function ListaPontos() {
  const [pontos, setPontos] = useState([]);

  useEffect(() => {
    async function buscarPontos() {
      try {
        const resposta = await fetch("/api/locais", {
          method: "GET",
        });

        if (!resposta.ok) {
          throw new Error("Erro ao buscar os pontos turísticos");
        }

        const dados = await resposta.json();
        setPontos(dados);
      } catch (erro) {
        console.error(erro);
      }
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
