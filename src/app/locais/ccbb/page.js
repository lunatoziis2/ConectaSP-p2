/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Local.module.css";
import RecursosAcessibilidade from "../../componentes/RecursoAcessibilidade";
import ListaPontos from "../componentes/ListaPontos";

export const metadata = {
  title: "Centro Cultural Banco do Brasil - ConectaSP",
};

export default function CCBB() {
  const recursosCCBB = [
    {
      nome: "Acessibilidade física",
      itens: [
        "Cadeiras de rodas disponíveis para utilização dos visitantes",
        "Rampas e rotas acessíveis, elevadores",
        "Banheiros acessíveis",
        "Estacionamento acessível",
        "Bebedouros acessíveis",
      ],
    },
    {
      nome: "Acessibilidade visual",
      itens: [
        "Mapas táteis",
        "Plataforma elevatória",
        "Piso tátil",
        "Informações em braile",
      ],
    },
    {
      nome: "Acessibilidade auditiva",
      itens: [
        "Audiodescrição",
        "Intérprete de Libras (eventos)",
        "Sessões especiais com interpretação em Libras e recursos como legendas/closed caption",
      ],
    },
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
            <h1>Centro Cultural Banco do Brasil São Paulo</h1>
            <p className={styles.localizacao}>São Paulo, Centro</p>
            <p>
              O Centro Cultural Banco do Brasil São Paulo, também conhecido como
              CCBB São Paulo, foi inaugurado em 21 de abril de 2001, no centro
              histórico da cidade.
            </p>
          </article>
          <figure className={styles.imagemLocal}>
            <img
              src="/imagens/conectasp_ccbb.png"
              alt="Centro Cultural Banco do Brasil São Paulo"
            />
          </figure>
        </section>

        <section className={styles.informacoes}>
          <article className={styles.informacao}>
            <h3>Endereço</h3>
            <p>
              R. Álvares Penteado, 112 - Centro Histórico de São Paulo, São
              Paulo - SP, 01012-000
            </p>
          </article>
          <article className={styles.informacao}>
            <h3>Horário</h3>
            <p>
              Quarta a segunda-feira
              <br />
              10h às 18h
            </p>
            <p>Fechado às terças-feiras</p>
          </article>
          <article className={styles.informacao}>
            <h3>Entrada</h3>
            <p>Gratuita</p>
          </article>
          <article className={styles.informacao}>
            <h3>Contato</h3>
            <p>(11) 4297-0600</p>
          </article>
        </section>

        <RecursosAcessibilidade
          titulo="Recursos de acessibilidade"
          categorias={recursosCCBB}
        />
      </main>
    </>
  );
}