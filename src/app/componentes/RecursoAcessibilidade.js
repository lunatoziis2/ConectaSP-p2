/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

"use client";

import { useId, useState } from "react";
import styles from "@/styles/Local.module.css";

const LIMITE_INICIAL = 2;

export default function RecursosAcessibilidade({
  titulo = "Recursos de acessibilidade",
  categorias = [],
}) {
  return (
    <section id="acessibilidade" className={styles.acessibilidade}>
      <h2>{titulo}</h2>
      <div className={styles.recursos}>
        {categorias.map((categoria) => (
          <CategoriaRecurso key={categoria.nome} categoria={categoria} />
        ))}
      </div>
    </section>
  );
}

function CategoriaRecurso({ categoria }) {
  const [expandido, setExpandido] = useState(false);
  const listaId = useId();

  const temMais = categoria.itens.length > LIMITE_INICIAL;
  const itensVisiveis = expandido
    ? categoria.itens
    : categoria.itens.slice(0, LIMITE_INICIAL);

  return (
    <article className={styles.recurso}>
      <h3>{categoria.nome}</h3>
      <ul id={listaId}>
        {itensVisiveis.map((item, indice) => (
          <li key={`${categoria.nome}-${indice}`}>{item}</li>
        ))}
      </ul>
      {temMais && (
        <button
          type="button"
          className={styles.verMais}
          onClick={() => setExpandido((atual) => !atual)}
          aria-expanded={expandido}
          aria-controls={listaId}
          aria-label={
            expandido
              ? `Ver menos recursos de ${categoria.nome}`
              : `Ver mais recursos de ${categoria.nome}`
          }
        >
          {expandido ? "Ver menos recursos" : "Ver mais recursos"}
        </button>
      )}
    </article>
  );
}