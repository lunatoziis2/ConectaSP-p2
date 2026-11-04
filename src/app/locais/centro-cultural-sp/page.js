/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Local.module.css";
import RecursosAcessibilidade from '../../components/RecursosAcessibilidade';

export const metadata = {
  title: "Centro Cultural São Paulo - ConectaSP",
};

export default function CentroCulturalSP() {

  const recursosCCSP = [
    {
      nome: "Acessibilidade física",
      itens: [
        "Espaço aberto, integrado e sem barreiras",
        "Acesso direto pela rampa da Estação Vergueiro",
        "Áreas de circulação e convivência"
      ]
    },
    {
      nome: "Acessibilidade visual",
      itens: [
        "Livros falados",
        "Computadores adaptados",
        "Biblioteca Louis Braille"
      ]
    },
    {
      nome: "Acessibilidade auditiva",
      itens: [
        "Programações com recursos de Libras"
      ]
    }
  ];

  return (
    <>
      <header className={styles.cabecalho}>
        <div className={styles.logo}>
          <p>ConectaSP</p>
        </div>
        <nav className={styles.navegacao}>
          <Link href="/">Início</Link>
        </nav>
      </header>

      <main>
        <section className={styles.informacoesLocal}>
          <article className={styles.textoLocal}>
            <h1>Centro Cultural São Paulo</h1>
            <p className={styles.localizacao}>Zona Sul</p>
            <p>
              O Centro Cultural São Paulo (CCSP) é um dos principais equipamentos
              públicos de cultura da cidade de São Paulo, reunindo bibliotecas,
              teatros, salas de exposição, cinemas, jardins e espaços de convivência
              em um único complexo.
            </p>
          </article>
          <figure className={styles.imagemLocal}>
            <img src="/imagens/conectasp_centrosp.png" alt="Centro Cultural São Paulo" />
          </figure>
        </section>

        <section className={styles.informacoes}>
          <article className={styles.informacao}>
            <h3>Endereço</h3>
            <p>Rua Vergueiro, 1000 - Liberdade,<br />São Paulo - SP, 01504-000</p>
          </article>
          <article className={styles.informacao}>
            <h3>Horário</h3>
            <p>Terça a domingo,<br />das 10h às 22h.</p>
          </article>
          <article className={styles.informacao}>
            <h3>Entrada</h3>
            <p>Gratuita</p>
          </article>
          <article className={styles.informacao}>
            <h3>Contato</h3>
            <p>(11) 3397-4002</p>
          </article>
        </section>
        <RecursosAcessibilidade categorias={recursosCCSP} />
      </main>
    </>
  );
}