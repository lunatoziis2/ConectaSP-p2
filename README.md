# ConectaSP

**Cultura, lazer e turismo sem barreiras.**

## 1. Sobre o projeto

O ConectaSP é um site desenvolvido com o objetivo de divulgar pontos turísticos e culturais acessíveis na cidade de São Paulo.

A plataforma reúne informações sobre locais, localização e recursos de acessibilidade, permitindo que pessoas com deficiência encontrem opções de cultura e lazer com mais facilidade.

## 2. Ideação e protótipo

O projeto surgiu da ideia de tornar a cultura e o lazer mais acessíveis para todos. Durante a etapa de ideação, foi definida a criação de uma plataforma que reunisse informações sobre pontos turísticos de São Paulo e seus recursos de acessibilidade.

O protótipo foi desenvolvido pensando em uma navegação simples, organizada e intuitiva, com páginas para apresentar o projeto, listar os locais e mostrar informações específicas de cada destino.

## 3. Migração para React e Next.js

Na segunda etapa, o projeto foi migrado para Next.js, utilizando React e componentização.

A componentização permite dividir a interface em partes menores e reutilizáveis. Por exemplo, o componente `CardPonto.js` é utilizado para apresentar os pontos turísticos, evitando a repetição do mesmo código em diferentes páginas.

Essa organização facilita a manutenção, a reutilização e a atualização do projeto.

Também foram utilizados:

- **CSS Modules:** para organizar os estilos de cada página e componente.
- **CSS Global:** para definir estilos gerais do site.
- **useState:** para controlar estados da interface.
- **useEffect:** para executar ações durante o ciclo de vida dos componentes.

## 4. Rotas do projeto

O Next.js permite criar páginas por meio da organização de pastas e arquivos.

### Rota simples

A rota `/sobre` apresenta informações sobre o projeto ConectaSP.

## 5. API interna e carregamento dos dados

Para apresentar os pontos turísticos de forma dinâmica, foi criada uma API interna no Next.js.

Os dados dos locais ficam armazenados no arquivo `src/dados/locais.json`.

### Rota da API

Arquivo: `src/app/api/locais/route.js`

```javascript
import locais from "@/dados/locais.json";

export async function GET() {
  return Response.json(locais);
}
```

A função `GET()` disponibiliza os dados do arquivo JSON em formato de resposta, permitindo que outras partes do projeto os consultem pelo endereço `/api/locais`.

### Consumo da API

No componente `ListaPontos.js`, foi utilizado `fetch` para buscar os dados da API.

```javascript
const [pontos, setPontos] = useState([]);

useEffect(() => {
  async function buscarPontos() {
    const resposta = await fetch("/api/locais");
    const dados = await resposta.json();

    setPontos(dados);
  }

  buscarPontos();
}, []);
```

Nesse trecho:

- `useState` cria o estado que armazena os pontos turísticos.
- `useEffect` executa a busca quando o componente é carregado.
- `fetch` realiza a requisição para a API.
- `resposta.json()` transforma a resposta em dados que podem ser utilizados no JavaScript.
- `setPontos()` atualiza o estado com os dados recebidos.

Depois, o método `map()` percorre os pontos turísticos e utiliza o componente `CardPonto` para exibir cada local na página.

## 6. Como executar o projeto

Para executar o ConectaSP localmente, siga os passos:

1. Clone ou baixe o repositório do GitHub.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o terminal.
4. Instale as dependências:

```bash
npm install
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

6. Acesse o endereço no navegador:

```text
http://localhost:3000
```

## 8. Utilização de Inteligência Artificial

Durante o desenvolvimento, foi utilizado o ChatGPT e Claude como ferramenta de apoio ao aprendizado e à programação.

A ferramenta auxiliou na interpretação dos requisitos do projeto, na compreensão dos conceitos de React e Next.js e na identificação e correção de erros.

O código foi analisado e ajustado pelo grupo, que permanece responsável por compreender e explicar todas as funcionalidades implementadas.
