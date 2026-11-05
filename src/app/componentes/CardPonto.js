/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Pontos.module.css";

export default function CardPonto({ imagem, nome, descricaoImagem, localizacao, endereco }) {
  return (
    <article className={styles.cardPonto}>
      <img src={imagem} alt={descricaoImagem || nome} />
      <div className={styles.informacoesPonto}>
        <h3>{nome}</h3>
        <p className={styles.localizacao}>{localizacao}</p>
      </div>
      <div className={styles.detalhes}>
        <Link href={endereco}>Ver detalhes</Link>
      </div>
    </article>
  );
}