/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Pontos.module.css"; 
import CardPonto from "../componentes/CardPonto";

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

        <section className={styles.listaPontos}>
          {[
            {
              nome: "Aquário de São Paulo",
              imagem: "/imagens/conectasp_aquariosp.png",
              localizacao: "Zona Sul",
              endereco: "/locais/aquario-sp",
            },
            {
              nome: "Parque Ibirapuera",
              imagem: "/imagens/conectasp_parque.png",
              localizacao: "Zona Sul",
              endereco: "/locais/parque-ibirapuera",
            },
            {
              nome: "Pinacoteca de São Paulo",
              imagem: "/imagens/conectasp_pinacoteca.png",
              localizacao: "Luz, São Paulo",
              endereco: "/locais/pinacoteca",
            },
            {
              nome: "Museu da Inclusão",
              imagem: "/imagens/conectasp_museudainclusao.png",
              localizacao: "Zona Oeste",
              endereco: "/locais/museu-da-inclusao",
            },
            {
              nome: "Centro Cultural Banco do Brasil São Paulo",
              imagem: "/imagens/conectasp_ccbb.png",
              localizacao: "Centro",
              endereco: "/locais/ccbb",
            },
            {
              nome: "Centro Cultural São Paulo",
              imagem: "/imagens/conectasp_centrosp.png",
              localizacao: "Zona Sul",
              endereco: "/locais/centro-cultural-sp",
            },
          ].map((ponto) => (
            <CardPonto
              key={ponto.endereco}
              imagem={ponto.imagem}
              nome={ponto.nome}
              localizacao={ponto.localizacao}
              endereco={ponto.endereco}
            />
          ))}
        </section>
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