<div>
    <img alt="Static Badge" src="https://img.shields.io/badge/React-4c84f3?style=for-the-badge&logo=react&logoColor=white">
        <img src="https://img.shields.io/badge/-Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
        <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
            <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black" alt="react router" />
</div>

<h3 align="center">Projeto para o teste tecnico Milhas Pix</h3>

- **[Versão Online na Vercel](https://milhas-pix-one.vercel.app)**
<div>
    📝 Resumo Geral do Projeto – Gerenciador de Ofertas

Durante o desenvolvimento do projeto, foram implementadas diversas funcionalidades e boas práticas para garantir uma aplicação organizada, funcional e com boa experiência de uso.
Abaixo estão os principais pontos desenvolvidos:

🧭 1. Estrutura e Roteamento

Utilização do React Router para gerenciamento de páginas e navegação entre diferentes etapas do fluxo da aplicação.

Configuração das rotas principais, incluindo páginas de cadastro de oferta, listagem de ofertas e demais componentes.

Uso do BrowserRouter, Routes e Route para definir e estruturar as rotas.

🧠 2. Componentização

Separação da interface em componentes reutilizáveis, permitindo melhor manutenção e reaproveitamento de código.

Criação de componentes específicos como:

LayoutMain para estrutura base da aplicação.

Componentes para inputs, listas, itens, botões e filtros.

Cada componente possui responsabilidade única, mantendo o código limpo e organizado.

🎨 3. Estilização com Tailwind CSS

Utilização do Tailwind CSS para estilização responsiva e ágil dos componentes.

Uso de classes utilitárias para espaçamento, cores, tipografia e layout.

Implementação de grids responsivos (ex.: grid de 6 colunas com múltiplas linhas) para organizar as listagens de ofertas.

🌐 4. Consumo de API

Implementação do consumo da API de ofertas via Axios, utilizando proxy configurado no vite.config.js para evitar problemas de CORS durante o desenvolvimento local.

Integração com a API https://api.milhaspix.com/simulate-offers-list para listar e exibir os dados em tela.

Tratamento de loading e erros para melhor feedback ao usuário.

📑 5. Listagem de Dados

Exibição dos dados retornados pela API em formato de tabela, com colunas organizadas para facilitar a leitura.

Utilização de .map() para renderizar dinamicamente cada oferta com base no retorno da API.

🧭 6. Sistema de Filtros

Implementação de um sistema de filtro dinâmico:

Input de busca para filtrar por Login de acesso ou ID da oferta.

Select para filtrar por status da oferta (Ativa, Em utilização, Inativo).

Uso de estados locais (searchTerm e statusFilter) combinados com .filter() para aplicar múltiplos filtros simultaneamente.

🟢 7. Variação de Estilo por Status

Criação de lógica condicional para alterar classes Tailwind com base no offerStatus.

Exemplo: exibição de um “bullet” colorido — verde para “Ativa”, azul para “Em utilização” e cinza/vermelho para “Inativo”.

🧱 8. Boas Práticas Gerais

Uso de TypeScript para definição de tipos e interfaces (Offer, OffersResponse), garantindo mais segurança no desenvolvimento.

Organização do código em pastas (pages, components, context, etc.).

Separação de responsabilidades entre lógica de dados (hooks/useEffect) e apresentação (JSX).

🧪 (Opcional / Futuro)

Possibilidade de incluir máscaras de input, debounce nos filtros, e testes automatizados com Cypress ou React Testing Library para melhorar a robustez.
</div>



## 📋 <a name="table">Guia Básico</a>

1. ✨ [Introdução](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🤸 [Iniciando o Projeto](#quick-start)


## <a name="introduction">✨ Introdução</a>

Gerenciador de Ofertas de Milhas com React, React Router e APIs REST!
Implemente cadastro de novas ofertas com inputs funcionais, máscaras de valor em R$, e consumo em tempo real de ranking de milheiros. Liste e gerencie ofertas através de integração com a API de ofertas, alternando entre telas de cadastro e listagem com navegação fluida. Tudo isso dentro de uma interface responsiva, fiel ao design do Figma e focada em uma experiência de uso clara, moderna e reutilizável.


## <a name="tech-stack">⚙️ Tech Stack - O que foi utilizado no projeto!!</a>

- **[React](https://react.dev/)** is a popular open‑source JavaScript library for building user interfaces using reusable components and a virtual DOM, enabling efficient, dynamic single-page and native apps.

- **[React Router v7](https://reactrouter.com/)** is the go‑to routing library for React apps, offering nested routes, data loaders/actions, error boundaries, code splitting, and SSR support—all with a smooth upgrade path from v6.
  
- **[Tailwind CSS](https://tailwindcss.com/)** is a utility-first CSS framework that allows developers to design custom user interfaces by applying low-level utility classes directly in HTML, streamlining the design process.

- **[TypeScript](https://www.typescriptlang.org/)** is a superset of JavaScript that adds static typing, providing better tooling, code quality, and error detection for developers, making it ideal for building large-scale applications.

- **[Vite](https://vite.dev/)** is a fast build tool and dev server using native ES modules for instant startup, hot‑module replacement, and Rollup‑powered production builds—perfect for modern web development.
- **[Axios](https://axios-http.com/ptbr/docs/intro)** 

## <a name="quick-start">🤸 Iniciando o Projeto </a>

Siga o passo a passo para rodar o projeto localmente na sua máquina.


**Pre requisitos** 
<br/>
Tenha certeza que os seguintes programas estão instalados:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Clonando o Repositorio**

```bash
git clone https://github.com/wll-machado/MilhasPix.git
cd milhaspix
```

**Instalação**

Instale as dependências do projeto usando npm:

```bash
npm install
```

**Rodando o Projeto**

```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no seu navegador para visualizar o projeto.
