/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

"use client";

import { useState } from "react";
import styles from "@/styles/Local.module.css";

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
  const itensVisiveis = expandido ? categoria.itens : categoria.itens.slice(0, 2);

  return (
    <article className={styles.recurso}>
      <h3>{categoria.nome}</h3>
      <ul>
        {itensVisiveis.map((item, indice) => (
          <li key={`${categoria.nome}-${indice}`}>{item}</li>
        ))}
      </ul>
      {categoria.itens.length > 2 && (
        <button
          type="button"
          className={styles.verMais}
          onClick={() => setExpandido(!expandido)}
          aria-expanded={expandido}
        >
          {expandido ? "Ver menos recursos" : "Ver mais recursos"}
        </button>
      )}
    </article>
  );
}
