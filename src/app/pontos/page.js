/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Pontos.module.css"; 
import ListaPontos from "../componentes/ListaPontos";

export const metadata = {
  title: "Pontos Turísticos Acessíveis - ConectaSP",
};

export default function Pontos() {
  return (
    <div className={styles.pagina}>
      <header className={styles.cabecalho}>
        <div className={styles.logo}>
          <h1>ConectaSP</h1>
        </div>
        <nav className={styles.navegacao}>
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre o Projeto</Link>
        </nav>
      </header>

      <main>
        <section className={styles.escolhaDestino}>
          <h2>Escolha seu destino</h2>
        </section>

        <ListaPontos />
        
      </main>

      <footer className={styles.rodape}>
        <div className={styles.rodapeLogo}>
          <h3>ConectaSP</h3>
          <p>
            Promovemos informação, acessibilidade e inclusão
            para que todas as pessoas possam viver o melhor
            da cultura e do lazer em São Paulo.
          </p>
          <figure className={styles.redesSociais}>
            <img src="/imagens/conectasp_facebook.png" alt="Facebook" />
            <img src="/imagens/conectasp_twitter.png" alt="Twitter" />
            <img src="/imagens/conectasp_insta.png" alt="Instagram" />
          </figure>
        </div>
        <div className={styles.rodapeContato}>
          <h4>Fale Conosco</h4>
          <p>conectasp@gmail.com.gov.br</p>
          <p>(11) 1234-5678</p>
        </div>
      </footer>
    </div>
  );
}