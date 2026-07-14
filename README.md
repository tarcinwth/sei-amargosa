<div align="center">

<img src="dist/icons/icon128.png" alt="SEI PRO Amargosa Logo" width="96" />

# SEI PRO · Amargosa

**Extensão Chrome para o Sistema Eletrônico de Informações — Prefeitura Municipal de Amargosa, BA**

[![Versão](https://img.shields.io/badge/versão-3.0.0-0f1f3d?style=for-the-badge&logo=googlechrome&logoColor=f59e0b)](https://github.com/tarcinwth/sei-amargosa)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Manifest%20V3-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/mv3/)
[![Licença](https://img.shields.io/badge/licença-MIT-22c55e?style=for-the-badge)](LICENSE)
[![Governo](https://img.shields.io/badge/Prefeitura-Amargosa%20·%20BA-0f1f3d?style=for-the-badge&logo=gov.br&logoColor=f59e0b)](https://amargosa.ba.gov.br)
[![Fork](https://img.shields.io/badge/fork%20de-SEI%20Pro%20Lab-6366f1?style=for-the-badge)](https://sei-pro.github.io/sei-pro)

*Fork personalizado do [SEI Pro Lab](https://sei-pro.github.io/sei-pro), desenvolvido exclusivamente para a Prefeitura Municipal de Amargosa, Bahia — com design system próprio, melhorias de desempenho e funcionalidades customizadas para o fluxo de trabalho municipal.*

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Capturas de Tela](#-capturas-de-tela)
- [Funcionalidades](#-funcionalidades)
- [Melhorias Técnicas](#-melhorias-técnicas)
- [Design System](#-design-system-amargosa)
- [Instalação](#-instalação)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Compatibilidade](#-compatibilidade)
- [Créditos e Atribuição](#-créditos-e-atribuição)
- [Licença](#-licença)

---

## 🏛️ Sobre o Projeto

O **SEI PRO | Amargosa** é uma extensão para o Google Chrome que aprimora a experiência de uso do **SEI — Sistema Eletrônico de Informações** no âmbito da Prefeitura Municipal de Amargosa, Bahia (`amargosa.seibahia.ba.gov.br`).

Desenvolvida como um fork personalizado do [SEI Pro Lab](https://sei-pro.github.io/sei-pro), a extensão incorpora um **Design System exclusivo** (paleta Marinho & Âmbar), corrige falhas de renderização, adiciona funcionalidades avançadas de upload em lote e reforça a identidade visual institucional do município.

> **Escopo:** Esta extensão opera exclusivamente no domínio `amargosa.seibahia.ba.gov.br`. Não afeta outros ambientes SEI.

---

## 📸 Capturas de Tela

<div align="center">

| Painel de Processos | Upload em Lote | Árvore de Documentos |
|:---:|:---:|:---:|
| ![Painel de Processos](.github/screenshots/painel-processos.png) | ![Upload em Lote](.github/screenshots/upload-lote.png) | ![Árvore de Documentos](.github/screenshots/arvore-documentos.png) |
| *Sidebar com informações instantâneas* | *Upload simultâneo para múltiplos processos* | *Sidebar com painéis contextuais* |

| Lista de Processos | Página de Configurações |
|:---:|:---:|
| ![Lista de Processos](.github/screenshots/lista-processos.png) | ![Configurações](.github/screenshots/configuracoes.png) |
| *Header marinho, hover dourado, sem flickering* | *Interface redesenhada com Design System Amargosa* |

> 📌 *As capturas de tela serão adicionadas em breve. Contribuições são bem-vindas!*

</div>

---

## ✨ Funcionalidades

### Visão Geral

| # | Funcionalidade | Descrição | Status |
|---|---|---|:---:|
| 1 | 🗂️ **Painel de Informações** | Sidebar com dados instantâneos do processo (número, tipo, nível de acesso, requerente, remetente, etc.) carregados sem atraso junto à árvore de documentos | ✅ |
| 2 | 📤 **Upload em Lote** | Selecione múltiplos processos e envie um arquivo para todos de uma vez, com suporte a processos Restritos e Sigilosos | ✅ |
| 3 | ⚡ **Lista de Processos Otimizada** | Renderização estável da coluna de especificação, sem flickering. Headers com gradiente marinho e efeito hover dourado | ✅ |
| 4 | 🎨 **Design System Amargosa** | Sistema de design completo com paleta Marinho + Âmbar Dourado, fonte Inter, micro-animações e UX premium | ✅ |
| 5 | 🌳 **Árvore de Documentos** | Árvore aprimorada com badge inline do processo e painéis laterais contextuais | ✅ |
| 6 | ⚙️ **Configurações Redesenhadas** | Página de configurações com header marinho, botão salvar âmbar, fonte Inter e abas fluidas | ✅ |
| 7 | ✍️ **Assinatura do Autor** | Assinatura institucional exibida na sidebar: *SEI PRO ■ Amargosa – BA \| Tarcio Rodrigues · SUFIN / SEAFI* | ✅ |

---

### 🗂️ Painel de Informações do Processo

A sidebar de informações do processo é carregada **em paralelo** à renderização da árvore de documentos, eliminando o delay presente no SEI padrão. Exibe de forma organizada:

- 📌 Número e tipo do processo
- 🔒 Nível de acesso (Público, Restrito ou Sigiloso)
- 👤 Requerente e remetente
- 📅 Datas de autuação e movimentação
- 🏢 Unidades e interessados

---

### 📤 Upload em Lote

O módulo de **Upload em Lote** permite que o servidor selecione múltiplos processos na lista e envie um único arquivo para todos simultaneamente.

**Destaques:**

- ✅ Suporte completo a processos **Restritos** e **Sigilosos**
- ✅ Herança automática do nível de acesso e hipótese legal (ex: LGPD) diretamente da descrição do processo
- ✅ Mapeamento semântico da hipótese legal a partir dos metadados do processo
- ✅ Interface de progresso com feedback em tempo real

---

### 🌳 Árvore de Documentos

A árvore de documentos aprimorada conta com painéis laterais contextuais para:

| Painel | Conteúdo |
|---|---|
| 🔍 **Consultar Andamento** | Histórico de tramitações com header marinho destacado |
| 📋 **Dados do Processo** | Metadados completos e estruturados |
| 👥 **Atribuição** | Responsáveis e unidades envolvidas |
| 📊 **Atividades** | Log de ações realizadas no processo |
| 📝 **Anotações** | Notas e observações registradas |
| 🔗 **Processos Relacionados** | Vínculos com outros processos |

---

## 🔧 Melhorias Técnicas

Esta versão inclui correções e refatorações importantes em relação ao fork original:

| Problema | Solução Implementada |
|---|---|
| 🔄 **Flickering na lista de processos** | `viewEspecifacaoProcesso` agora é idempotente — verifica elementos existentes antes de reinserir, eliminando a oscilação visual |
| ♻️ **Loop destrutivo na tabela** | Removido o loop recursivo de destruição de tabela em `tableHomeDestroy`, prevenindo race conditions |
| 🔒 **Upload em processos restritos/sigilosos** | Auto-detecção do nível de acesso com mapeamento semântico da hipótese legal a partir da descrição do processo |
| 🛑 **Erros no console** | Supressão de erros de `arvore_visualizar.js` via injeção de iframe dummy |
| 🖼️ **Ícone PDF com 404** | Caminho do ícone PDF corrigido no manifesto e nas referências CSS |
| 🎨 **CSS Variables** | Sistema de design tokens `--amg-*` para consistência visual e manutenibilidade |

---

## 🎨 Design System Amargosa

O **Design System Amargosa** é implementado via CSS Custom Properties (`--amg-*`) e garante identidade visual consistente em toda a extensão.

### Paleta de Cores

| Token | Hex | Uso |
|---|---|---|
| `--amg-navy` | `#0f1f3d` | Cor primária — headers, botões principais |
| `--amg-navy-light` | `#1a3260` | Variação clara do marinho — hovers, gradientes |
| `--amg-gold` | `#f59e0b` | Cor de acento — destaques, bordas ativas |
| `--amg-gold-light` | `#fde68a` | Âmbar claro — fundos sutis, badges |
| `--amg-surface` | `#f8fafc` | Superfície — fundo de painéis e cards |
| `--amg-text` | `#1e293b` | Texto principal |

### Tipografia & Animação

```css
/* Fonte */
font-family: 'Inter', system-ui, -apple-system, sans-serif;

/* Transição padrão */
transition: all cubic-bezier(.4, 0, .2, 1) 0.18s;

/* Sombra base */
box-shadow: 0 4px 24px rgba(15, 31, 61, 0.12),
            0 1px 4px rgba(15, 31, 61, 0.08);
```

---

## 🚀 Instalação

> **Requisito:** Google Chrome (versão 88 ou superior, com suporte a Manifest V3)

### Passo a passo

**1. Clone o repositório**
```bash
git clone https://github.com/tarcinwth/sei-amargosa.git
cd sei-amargosa
```

**2. Abra as extensões do Chrome**

Acesse `chrome://extensions` na barra de endereço.

**3. Ative o Modo do Desenvolvedor**

No canto superior direito, ative a chave **"Modo do desenvolvedor"**.

**4. Carregue a extensão sem compactação**

Clique em **"Carregar sem compactação"** e selecione a pasta `dist/` do repositório clonado.

**5. Acesse o SEI de Amargosa**

Navegue até [`https://amargosa.seibahia.ba.gov.br/sei/`](https://amargosa.seibahia.ba.gov.br/sei/) e faça login normalmente. A extensão será ativada automaticamente.

---

> 💡 **Dica:** Fixe a extensão na barra de ferramentas do Chrome clicando no ícone de quebra-cabeça 🧩 e fixando **SEI PRO | Amargosa** para acesso rápido às configurações.

---

## 📁 Estrutura de Arquivos

```
sei-amargosa/
│
├── 📄 README.md
├── 📄 LICENSE
│
└── dist/                              # Pasta da extensão (carregue esta pasta no Chrome)
    │
    ├── 📄 manifest.json               # Manifesto da extensão (Manifest V3)
    │
    ├── html/
    │   ├── 📄 options.html            # Página de configurações
    │   ├── 📄 options.js              # Lógica da página de configurações
    │   └── 📄 page.css                # Estilos base do Design System Amargosa
    │
    ├── css/
    │   └── 📄 sei-pro.css             # Stylesheet principal (tokens, componentes, overrides)
    │
    ├── js/
    │   ├── 📄 sei-pro.js              # Lógica principal (home, lista de processos)
    │   ├── 📄 sei-pro-arvore.js       # Lógica da árvore de documentos e painéis laterais
    │   ├── 📄 sei-functions-pro.js    # Funções utilitárias compartilhadas
    │   └── 📄 ...                     # Demais módulos da extensão
    │
    └── icons/                         # Ícones da extensão (16, 32, 48, 128px)
        ├── 🖼️ icon16.png
        ├── 🖼️ icon32.png
        ├── 🖼️ icon48.png
        └── 🖼️ icon128.png
```

---

## 🌐 Compatibilidade

| Ambiente | Status |
|---|:---:|
| Google Chrome 88+ | ✅ Suportado |
| Microsoft Edge (Chromium) | ⚠️ Não testado |
| Firefox | ❌ Não compatível (Manifest V3 Chrome-specific) |
| `amargosa.seibahia.ba.gov.br` | ✅ Domínio alvo |
| Outros ambientes SEI | ❌ Fora do escopo |

---

## 👥 Créditos e Atribuição

<table>
  <tr>
    <td align="center" width="50%">
      <strong>🔧 Desenvolvedor desta fork</strong><br><br>
      <strong>Tarcio Rodrigues</strong><br>
      SUFIN / SEAFI<br>
      Prefeitura Municipal de Amargosa, Bahia<br><br>
      <a href="https://github.com/tarcinwth">@tarcinwth</a>
    </td>
    <td align="center" width="50%">
      <strong>🧪 Projeto Original</strong><br><br>
      <strong>SEI Pro Lab</strong><br>
      Comunidade de desenvolvedores do SEI<br>
      Extensão open-source para o SEI Gov BR<br><br>
      <a href="https://sei-pro.github.io/sei-pro">sei-pro.github.io/sei-pro</a>
    </td>
  </tr>
</table>

---

### Assinatura Institucional

> *SEI PRO ■ Amargosa – BA | Tarcio Rodrigues · SUFIN / SEAFI*

Esta extensão é um produto interno da **Superintendência de Finanças (SUFIN)** da **Secretaria de Administração e Finanças (SEAFI)** da Prefeitura Municipal de Amargosa, desenvolvido para otimizar os fluxos de trabalho dos servidores municipais no SEI.

---

## 📜 Licença

```
MIT License

Copyright (c) 2024 Tarcio Rodrigues — SUFIN/SEAFI
Prefeitura Municipal de Amargosa, Bahia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

Veja o arquivo [LICENSE](LICENSE) para o texto completo.

---

<div align="center">

**SEI PRO | Amargosa** · v1.6.2

Desenvolvido com ❤️ para os servidores da Prefeitura Municipal de Amargosa · Bahia · Brasil

[![SEI Pro Lab](https://img.shields.io/badge/baseado%20em-SEI%20Pro%20Lab-6366f1?style=flat-square)](https://sei-pro.github.io/sei-pro)
[![SUFIN/SEAFI](https://img.shields.io/badge/SUFIN-SEAFI-0f1f3d?style=flat-square&logo=gov.br)](https://amargosa.ba.gov.br)
[![Amargosa BA](https://img.shields.io/badge/Amargosa-Bahia%20🌻-f59e0b?style=flat-square)](https://amargosa.ba.gov.br)

*"Tecnologia a serviço do cidadão amargosense."*

</div>
