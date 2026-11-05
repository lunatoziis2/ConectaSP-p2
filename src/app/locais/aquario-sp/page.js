/* Luna Tozi RA:10771378 / Millena Maurer RA:10771373 / Hellen Karoline RA:10771420 */

import Link from "next/link";
import styles from "@/styles/Local.module.css";
import RecursosAcessibilidade from "../../componentes/RecursoAcessibilidade";

export const metadata = {
  title: "Aquário de São Paulo - ConectaSP",
};

export default function AquarioSP() {
  const recursosAquario = [
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
      itens: ["Piso tátil", "Informações em braile"],
    },
    {
      nome: "Acessibilidade auditiva",
      itens: ["Legendas em vídeos"],
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
            <h1>Aquário de São Paulo</h1>
            <p className={styles.localizacao}>Zona Sul</p>
            <p>
              O Aquário de São Paulo é o maior aquário da América Latina e uma
              das atrações mais completas para famílias e turistas na capital
              paulista.
            </p>
          </article>
          <figure className={styles.imagemLocal}>
            <img
              src="/imagens/conectasp_aquariosp_2.png"
              alt="Aquário de São Paulo"
            />
          </figure>
        </section>

        <section className={styles.informacoes}>
          <article className={styles.informacao}>
            <h3>Endereço</h3>
            <p>R. Huet Bacelar, 407 - Vila São José, São Paulo</p>
          </article>
          <article className={styles.informacao}>
            <h3>Horário</h3>
            <p>
              Segunda a Sábado
              <br />
              9h às 17h
            </p>
            <p>
              Domingo
              <br />
              10h às 17h
            </p>
          </article>
          <article className={styles.informacao}>
            <h3>Entrada</h3>
            <p>R$120,00</p>
          </article>
          <article className={styles.informacao}>
            <h3>Contato</h3>
            <p>(11) 2273-5500</p>
          </article>
        </section>

        <RecursosAcessibilidade
          titulo="Recursos de acessibilidade"
          categorias={recursosAquario}
        />
      </main>
    </>
  );
}