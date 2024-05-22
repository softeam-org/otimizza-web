# OTIMIZZA 

Projeto de landing page realizado para a empresa Otimizza engenharia.

## Instruções

### Tecnologias e Versões

- Neste projeto está sendo utilizado `React` com `Typescript` em conjunto com `vite`.
- O framework CSS `Tailwind` juntamente com a biblioteca `daisyUI`.
- Como gerenciador de pacotes, está sendo utilizado `pnpm` em sua versão `8.14.0`.
- O `node` utilizado nesse projeto está na versão `20.9`.

### Rodando o projeto na sua máquina local

- Para configurar o projeto em sua máquina, basta utilizar o seguinte comando no terminal:
```sh
pnpm install
```
- Para rodar o projeto em sua máquina, basta utilizar o seguinte comando no terminal:
```sh
pnpm run dev
```

### Padrões do projeto

- Todos os componentes devem ser criados em `/src/components`.
- Para acessar os componentes basta adicionar usar, substituindo `COMPONENT` pelo nome do componente que se deseja utilizar. 
```ts
import { COMPONENT } from @components/[COMPONENT]
```
- TODAS as novas branchs devem ser criadas a partir da branch `development`.
- TODAS as branchs devem ser nomeadas seguindo o padrão `feature/[COMPONENT]` para funcionalidades e/ou criação de novos componentes.
- TODAS as branchs devem ser nomeadas seguindo o padrão `fix/[COMPONENT]` para correção.
- Para commits, utilize o [ConventionalCommits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/).

