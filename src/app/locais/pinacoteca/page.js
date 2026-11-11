/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Local.module.css";
import RecursosAcessibilidade from "../../componentes/RecursoAcessibilidade";
import ListaPontos from "../componentes/ListaPontos";

export const metadata = {
  title: "Pinacoteca de São Paulo - ConectaSP",
};

export default function Pinacoteca() {
  const recursosPinacoteca = [
    {
      nome: "Acessibilidade física",
      itens: [
        "Rampas e rotas acessíveis e elevadores",
        "Cadeiras de rodas manuais e motorizadas gratuitas",
        "Banheiros acessíveis",
        "Estacionamento acessível",
        "Bebedouros acessíveis",
        "Programa Educativo para Pessoas com Deficiência",
      ],
    },
    {
      nome: "Acessibilidade visual",
      itens: [
        "Mapas táteis",
        "Audioguia",
        "Audiodescrição",
        "Piso tátil",
        "Informações em braile",
        "Cão-guia",
      ],
    },
    {
      nome: "Acessibilidade auditiva",
      itens: [
        "Intérprete de Libras (eventos)",
        "Legendas em vídeos",
        "Abafadores de ruído gratuitos",
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
            <h1>Pinacoteca de São Paulo</h1>
            <p className={styles.localizacao}>Luz, São Paulo</p>
            <p>
              Um dos mais importantes museus de arte do Brasil e o mais antigo
              do estado de São Paulo.
            </p>
          </article>
          <figure className={styles.imagemLocal}>
            <img
              src="/imagens/conectasp_pinacoteca.png"
              alt="Pinacoteca de São Paulo"
            />
          </figure>
        </section>

        <section className={styles.informacoes}>
          <article className={styles.informacao}>
            <h3>Endereço</h3>
            <p>Praça da Luz, 2 - Luz, São Paulo - SP, 01120-010</p>
          </article>
          <article className={styles.informacao}>
            <h3>Horário</h3>
            <p>
              Quarta a segunda-feira
              <br />
              10h às 18h (entrada até as 17h)
            </p>
            <p>Fechado às terças-feiras</p>
          </article>
          <article className={styles.informacao}>
            <h3>Entrada</h3>
            <p>
              Inteira: R$ 30,00
              <br />
              Meia-entrada: R$ 15,00
              <br />
              Ingressos online: valor do ingresso + R$ 2,00 de taxa
            </p>
            <p>Aos sábados: entrada gratuita para todas as pessoas.</p>
          </article>
          <article className={styles.informacao}>
            <h3>Contato</h3>
            <p>(11) 3324-1000</p>
          </article>
        </section>

        <RecursosAcessibilidade
          titulo="Recursos de acessibilidade"
          categorias={recursosPinacoteca}
        />
      </main>
    </>
  );
}