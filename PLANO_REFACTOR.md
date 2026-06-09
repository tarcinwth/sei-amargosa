# Plano de refatoração — página inicial e árvore/anexos

## Objetivo
Organizar a evolução do código em blocos menores e mais fáceis de manter, com foco nas áreas que mais impactam a experiência do usuário:
- gestão de anexos
- controle dos processos
- árvore de anexos / documentos
- navegação e ações rápidas sobre o processo

## Direção de desempenho e escopo
- reduzir o escopo do projeto para o núcleo que realmente entrega valor ao dia a dia do SEI
- priorizar anexos, controle de processos e árvore de documentos
- despriorizar editor de textos e funções de IA no momento
- remover dependências pesadas e trechos não usados em rotas que não precisam delas

## Escopo prioritário
1. Funções da página inicial
   - ordenação e personalização dos painéis
   - carregamento e atualização dos blocos da home
   - comportamento de opções e toggles
2. Funções da árvore/anexos
   - navegação da árvore
   - leitura e geração de links
   - ações sobre anexos e documentos
   - atualização de dados no processo

---

## Fase 1 — Mapeamento do código atual
### Tarefas
- [ ] Identificar as funções principais usadas na página inicial em dist/js/sei-functions-pro.js
- [ ] Identificar as funções principais usadas na árvore/anexos em dist/js/sei-functions-pro.js
- [ ] Listar dependências globais e variáveis compartilhadas que podem ser isoladas
- [ ] Anotar quais funções estão fortemente acopladas ao DOM do SEI

### Entregáveis
- lista das funções alvo
- mapa das dependências entre home, árvore e anexos
- lista de funções que devem virar módulos separados

---

## Fase 2 — Separar responsabilidades
### Estrutura proposta
Criar módulos menores para:
- home
- arvore
- anexos
- utilidades
- ui/dialogs

### Regras de refatoração
- [ ] evitar lógica dispersa no arquivo principal
- [ ] manter funções pequenas e com única responsabilidade
- [ ] encapsular trechos de DOM e manipulação de dados
- [ ] reduzir uso de variáveis globais sempre que possível
- [ ] carregar somente o necessário para cada página/fluxo
- [ ] remover código e bibliotecas de IA/editor quando não forem essenciais para a rotina principal

### Prioridade de extração
1. funções da home
2. funções de links e navegação da árvore
3. funções de anexos e atualização de dados
4. utilidades compartilhadas

---

## Fase 3 — Refatoração da página inicial
### Objetivos
- deixar o carregamento dos painéis mais previsível
- simplificar a lógica de ordenação e personalização
- padronizar as funções de toggle e opções
- manter a home leve e evitar inicialização desnecessária de módulos pesados

### Itens de trabalho
- [ ] separar a lógica de ordenação dos painéis
- [ ] revisar o fluxo de inicialização dos blocos da home
- [ ] simplificar as funções de configuração e persistência
- [ ] remover trechos duplicados ou mortos

### Critério de sucesso
A home deve continuar carregando normalmente, com a mesma experiência de uso, mas com código mais organizado e mais fácil de manter.

---

## Fase 4 — Refatoração da árvore/anexos
### Objetivos
- melhorar a leitura dos links da árvore
- organizar a lógica de anexos e navegação
- tornar as ações de documento mais previsíveis
- otimizar o tratamento de anexos e controle do processo, que são o coração da rotina

### Itens de trabalho
- [ ] isolar funções de busca/extração de links da árvore
- [ ] revisar fluxo de atualização de dados do processo
- [ ] separar lógica de anexos/documentos do restante do arquivo principal
- [ ] revisar a integração com iframes e objetos de contexto do SEI

### Critério de sucesso
As funções de árvore e anexos devem ficar mais claras, com menor acoplamento ao DOM e menos dependência de estado global.

---

## Fase 5 — Validação e regressão
### Checklist de validação
- [ ] a página inicial abre e carrega normalmente
- [ ] os painéis continuam funcionando após reorganização
- [ ] a árvore abre e navega como antes
- [ ] links e anexos continuam operando corretamente
- [ ] funcionalidades principais do SEI não foram quebradas

### Método de validação
- testar por cenário principal do SEI
- revisar se os módulos carregam na ordem correta
- confirmar que não há regressão visível nas áreas alteradas

---

## Progresso da etapa atual
- [x] reduzir a superfície pública dos módulos de home/árvore/processo para manter apenas o que é consumido no fluxo principal
- [x] remover logs de depuração e trechos de suporte que não são necessários na rotina de trabalho
- [ ] continuar extraindo trechos pesados do arquivo principal para módulos menores e mais previsíveis

## Próximo passo imediato
1. mapear as funções da home e da árvore/anexos no arquivo principal
2. extrair primeiro os blocos mais isolados
3. validar cada extração antes de continuar para a próxima

---

## Resultado esperado
Ao final desta refatoração, o projeto deve ficar:
- mais organizado
- mais fácil de evoluir
- menos dependente de código monolítico
- com melhor base para futuras melhorias em home, anexos e árvore
