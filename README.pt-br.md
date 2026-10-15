# SyntaxWear App

*Read this in English: [🇺🇸 English](README.md)*

## 📝 Descrição do Projeto

O SyntaxWear é uma vitrine virtual responsiva de calçados, desenvolvida com React e TypeScript. O projeto reúne catálogo de produtos, navegação por categorias, detalhes de produtos, carrinho de compras e páginas institucionais em uma experiência de e-commerce.

Este projeto é uma demonstração frontend: os produtos são carregados de dados locais e os fluxos de conta e checkout não estão conectados a serviços reais de comércio ou autenticação.

Acesse o site aqui: [Sintax Wear App](https://syntax-wear-app-black.vercel.app/)

## 🎨 Visão Geral

<div align="center">
   <div align="center">
   <img src="./src/assets/desktop.gif"  style="height: 300px; text-align: center;"> 
   <br><br>
   <img src="./src/assets/mobile.gif"  style="height: 300px; text-align: center;"> <br>
   </div>
</div>

## 🔎 Funcionalidades

- Vitrine responsiva com páginas inicial, sobre a marca e lojas
- Catálogo com páginas de categoria e detalhes de produtos
- Adicionar produtos ao carrinho, alterar quantidades e remover itens
- Persistência do carrinho no navegador usando `localStorage`
- Consulta de CEP pela API ViaCEP e estimativa de frete por região
- Formulário de cadastro com validação no cliente
- Componentes React reutilizáveis e dados de produtos/categorias tipados

> O login, o envio do cadastro e o checkout são apenas demonstrações de interface; nenhum usuário ou pedido real é criado.

## 🛠️ Tecnologias Utilizadas

- React 19 e TypeScript
- Vite
- TanStack Router
- Tailwind CSS 4
- React Hook Form e Zod
- React Icons
- `localStorage` para persistência do carrinho
- API ViaCEP para consulta de CEP

## 💡 Decisões do Projeto

1. **Interface baseada em componentes** — elementos compartilhados, como cabeçalho, rodapé, cartões de produto, formulários e painel do carrinho, são organizados como componentes reutilizáveis.
2. **Roteamento no cliente** — TanStack Router gerencia as rotas da vitrine, categorias, detalhes dos produtos e telas de conta.
3. **Catálogo local** — produtos e categorias estão definidos em `src/mocks/`, mantendo a demonstração independente de um backend de produtos.
4. **Estado do carrinho** — um contexto React centraliza as operações do carrinho, que é restaurado e salvo em `localStorage`.
5. **Validação de formulários** — React Hook Form e Zod são usados no tratamento e na validação dos formulários.

## 📁 Estrutura do Projeto

```text
src/
├── assets/          # Imagens e fontes
├── components/      # Componentes compartilhados da interface
├── contexts/        # Contexto e provider do carrinho
├── interfaces/      # Tipos de produto, categoria e endereço
├── mocks/           # Dados locais de produtos e categorias
├── pages/
│   ├── _app/        # Páginas da vitrine
│   └── _auth/       # Páginas de login e cadastro
├── styles/          # Estilos globais
├── utils/           # Helpers de formatação e validação
├── App.tsx
├── main.tsx
├── router.tsx
└── routeTree.gen.ts # Árvore de rotas gerada
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js compatível com o Vite 8
- npm
- Git

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/cezarviana/syntax-wear-app.git
   cd syntax-wear-app
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse o endereço exibido no terminal. O endereço local configurado geralmente é `http://localhost:3000`.

### Scripts Disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento Vite na porta 3000
- `npm run build` — verifica os tipos e gera o build de produção
- `npm run preview` — visualiza localmente o build de produção
- `npm run lint` — executa o ESLint
- `npm run check` — verifica a formatação com Prettier
- `npm run generate-routes` — gera a árvore de rotas do TanStack Router

## 📌 Observações

O SyntaxWear é uma vitrine demonstrativa/de portfólio e não processa pagamentos nem mantém contas de clientes. A consulta de CEP precisa de conexão com a internet para acessar a ViaCEP.
