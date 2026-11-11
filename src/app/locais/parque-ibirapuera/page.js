/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Local.module.css";
import RecursosAcessibilidade from "../../componentes/RecursoAcessibilidade";
import ListaPontos from "../componentes/ListaPontos";

export const metadata = {
  title: "Parque Ibirapuera - ConectaSP",
};

export default function ParqueIbirapuera() {
  const recursosIbirapuera = [
    {
      nome: "Acessibilidade física",
      itens: [
        "Rampas e rotas acessíveis",
        "Banheiros acessíveis",
        "Estacionamento acessível",
        "Bebedouros acessíveis",
      ],
    },
    {
      nome: "Acessibilidade visual",
      itens: ["Mapas táteis", "Piso tátil", "Informações em braile"],
    },
    {
      nome: "Acessibilidade auditiva",
      itens: ["Intérprete de Libras (eventos)", "Legendas em vídeos"],
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
            <h1>Parque Ibirapuera</h1>
            <p className={styles.localizacao}>Zona Sul</p>
            <p>
              Um dos maiores e mais importantes parques urbanos do Brasil, com
              áreas de lazer, cultura e natureza.
            </p>
          </article>
          <figure className={styles.imagemLocal}>
            <img src="/imagens/conectasp_parque.png" alt="Parque Ibirapuera" />
          </figure>
        </section>

        <section className={styles.informacoes}>
          <article className={styles.informacao}>
            <h3>Endereço</h3>
            <p>
              Avenida Ibirapuera, 3103,
              <br />
              São Paulo, 04028-000
            </p>
          </article>
          <article className={styles.informacao}>
            <h3>Horário</h3>
            <p>
              Todos os dias
              <br />
              5h às 0h
            </p>
          </article>
          <article className={styles.informacao}>
            <h3>Entrada</h3>
            <p>Gratuita</p>
          </article>
          <article className={styles.informacao}>
            <h3>Contato</h3>
            <p>(11) 5561-9606</p>
          </article>
        </section>

        <RecursosAcessibilidade
          titulo="Recursos de acessibilidade"
          categorias={recursosIbirapuera}
        />
      </main>
    </>
  );
}