![cover](https://github.com/user-attachments/assets/27be461c-b669-4118-88ac-5c2d8bec243d)

# MeuBanco

Uma interface simulando o Internet Banking de um banco. O objetivo da aplicação é que o usuário possa entrar com suas credenciais e ser redirecionado para a página inicial da aplicação.

A arquitetura do projeto adapta princípios da Clean Architecture e do padrão MVVM. A Clean Architecture visa aprimorar a organização, a reusabilidade e a testabilidade a longo prazo, enquanto o MVVM facilita o desacoplamento do código e a manutenção.

A estrutura do projeto está organizada da seguinte forma:

- :open_file_folder: **/src:**

  - :open_file_folder: **/application:** Casos de uso da aplicação, incluindo interações com serviços externos e backend (autenticação, cadastro, busca de usuário, envio de e-mails, etc).

  - :open_file_folder: **/domain:** Entidades (modelos) de negócio da aplicação.

  - :open_file_folder: **/infra:** Adaptadores para serviços externos, como banco de dados e cliente HTTP, visando o baixo acoplamento.

  - :open_file_folder: **/main:** Ponto de entrada da aplicação.

  - :open_file_folder: **/presentation:** Camada de apresentação, contendo componentes da interface do usuário (React Hooks, componentes, assets, helpers, etc). Tudo relacionado à exibição de dados na UI reside neste módulo.

    - :open_file_folder: **/pages:** Páginas da aplicação, utilizando o padrão MVVM.

    - :open_file_folder: **/static:** Arquivos de assets, como fontes, imagens e CSS.

    - :open_file_folder: **/templates:** UI que são compartilhados entre multiplas páginas.

    - :open_file_folder: **/ui:** Componentes de UI que podem ser reaproveitados.

  - :open_file_folder: **/test:** Mocks e testes da aplicação.

Para auxiliar com importações de arquivos foi feito uso dos path aliases (`@application`, `@domain`, `@infra`, `@main`, `@presentation`, `@test`) que podem ser configurados nos arquivos **vite.config.ts** e **tsconfig.app.json**.

Os componentes de página, devido à sua complexidade, lógica e dependências, adotam a arquitetura MVVM para facilitar a manutenção, testabilidade e desacoplamento. A seguinte convenção de nomenclatura foi utilizada:

- **\*.model.ts:** Contém a lógica do componente, frequentemente utilizando Custom Hooks para o gerenciamento de estado e dados.

- **\*.controller.tsx:** Representa a ViewModel, injetando dependências na camada de visão.

- **\*.view.tsx:** Camada de visão pura, sem lógica de negócio, recebendo dependências exclusivamente via propriedades.

- **\*.schema.ts:** Esquemas de validação de dados, utilizados principalmente em formulários.

- **\*.spec.ts:** Testes unitários e de integração do componente.

## Pré-requisitos

- Git
- Node 20 (ou superior)

## Como iniciar

Clone o repositório em um novo diretório:

```
git clone git@github.com:rodrigofontesdev/bank.git
```

```
cd bank
```

Instale as dependências do projeto:

```
npm install
```

Inicie o projeto em ambiente de desenvolvimento:

```
npm run dev
```

## Funcionalidades

- Autenticação (in-memory)
- Suite de testes (`npm run test`)

## Como usar

> [!NOTE]
>
> Recomendo a utilização de uma resolução de tela igual ou superior a 1280 pixels para melhor visualização.

Na tela de login, para conseguir acessar a aplicação utilize as seguintes credenciais:

> **Usuário:** demo
>
> **Senha:** demo

Se você tentar acessar qualquer uma das rotas a seguir sem estar logado, o sistema irá redirecioná-lo automaticamente para a página de login.

- /dashboard
- /dashboard/carteira
- /dashboard/transferencias
- /dashboard/servicos
- /dashboard/configuracoes

Como os dados de autenticação são armazenados apenas na memória, a página de login será carregada automaticamente sempre que uma página for atualizada.

## Considerações finais

Para simplificar, a autenticação neste projeto utiliza armazenamento em memória. Em cenário real, um sistema de autenticação robusto com JWT ou cookies seria implementado.

Bibliotecas como **TanStack Query**, com recursos de busca de dados, cache e sincronização, seriam ideais para gerenciar a autenticação e as informações do usuário.

O estado do usuário autenticado, por sua vez, poderia ser gerenciado com **Context API** ou uma solução mais robusta como **Zustand** ou **Redux**, considerando a complexidade da aplicação.

## Construído com

- **Vite:** Build e bundling otimizado da aplicação.

- **React:** Construção de interfaces de usuário (UI).

- **TypeScript:** Tipagem estática para JavaScript.

- **CSS Modules:** Estilização CSS com escopo local para componentes.

- **React Router:** Gerenciamento de rotas na aplicação.

- **React Hook Form:** Gerenciamento de formulários.

- **Zod:** Esquemas para validação de dados.

- **Axios:** Requisições HTTP.

- **Vitest:** Testes unitários e de integração.

- **ESLint:** Análise estática de código.

- **Prettier:** Formatação consistente de código.

- **Husky:** Gerenciador de Git hooks, executando o Prettier antes dos commits.

- **Commitlint:** Padronização de mensagens de commit, aplicando o padrão "Conventional Commits".

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md](LICENSE) para obter detalhes.
