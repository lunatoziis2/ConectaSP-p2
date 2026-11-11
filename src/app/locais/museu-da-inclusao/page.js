/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Local.module.css";
import RecursosAcessibilidade from "../../componentes/RecursoAcessibilidade";

export const metadata = {
  title: "Museu da Inclusão - ConectaSP",
};

export default function MuseuDaInclusao() {
  const recursosMuseu = [
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
            <h1>Museu da Inclusão</h1>
            <p className={styles.localizacao}>Zona Oeste</p>
            <p>
              O Museu da Inclusão, em São Paulo, é um espaço dedicado a contar e
              preservar a história e a luta pelos direitos das pessoas com
              deficiência no Brasil.
            </p>
          </article>
          <figure className={styles.imagemLocal}>
            <img
              src="/imagens/conectasp_museudainclusao.png"
              alt="Museu da Inclusão"
            />
          </figure>
        </section>

        <section className={styles.informacoes}>
          <article className={styles.informacao}>
            <h3>Endereço</h3>
            <p>
              Memorial da América Latina - Av. Mário de Andrade, 564 - Portão
              10
              <br />
              Barra Funda - São Paulo
            </p>
          </article>
          <article className={styles.informacao}>
            <h3>Horário</h3>
            <p>
              Segunda a sexta-feira
              <br />
              10h às 17h
            </p>
          </article>
          <article className={styles.informacao}>
            <h3>Entrada</h3>
            <p>Gratuita</p>
          </article>
          <article className={styles.informacao}>
            <h3>Contato</h3>
            <p>cultura.sedpcd@sp.gov.br</p>
          </article>
        </section>

        <RecursosAcessibilidade
          titulo="Recursos de acessibilidade"
          categorias={recursosMuseu}
        />
      </main>
    </>
  );
}