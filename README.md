# SEI Amargosa

<p align="center">
  <img src="dist/icons/amargosa/icon-128.png" alt="SEI Amargosa Logo" width="128">
</p>

<p align="center">
  <strong>Extensão avançada para o SEI - Prefeitura Municipal de Amargosa/BA</strong>
</p>

<p align="center">
  <a href="https://www.amargosa.ba.gov.br">
    <img src="https://img.shields.io/badge/Município-Amargosa-blue" alt="Município">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Versão-1.0.0-green" alt="Versão">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/SEI-4.0%2B-orange" alt="SEI Versão">
  </a>
</p>

---

## 📋 Sobre

O **SEI Amargosa** é uma extensão do navegador baseada no [SEI Pro](https://github.com/SEI-Pro/sei-pro), desenvolvida especificamente para atender às necessidades da **Prefeitura Municipal de Amargosa - Bahia**. A extensão adiciona funcionalidades avançadas de gestão de processos administrativos eletrônicos, mantendo a identidade visual do município.

### 🎯 Objetivo

Facilitar o trabalho dos servidores públicos municipais com ferramentas adicionais que aumentam a produtividade no SEI (Sistema Eletrônico de Informações).

---

## ✨ Funcionalidades Principais

### 📊 Painéis de Informação na Árvore de Documentos

- **📋 Especificação do Processo** - Visualização direta da especificação do processo aberto, com função de cópia e edição rápida
- **🔢 Número do Processo** - Exibição do número completo do processo com opção de copiar para a área de transferência  
- **👤 Atribuição** - Visualização dos responsáveis pelo processo
- **📝 Anotações** - Acesso rápido às anotações do processo

### 🛠️ Ferramentas Avançadas (do SEI Pro)

- **📁 Gestão de Documentos** - Funções avançadas para manipulação de documentos
- **🔍 Pesquisa Aprimorada** - Busca otimizada dentro do SEI
- **⚡ Atalhos de Produtividade** - Acesso rápido às funções mais utilizadas
- **🎨 Interface Personalizada** - Identidade visual da Prefeitura de Amargosa

### 🔐 Compatibilidade

- ✅ SEI versão 3.x e 4.x
- ✅ Navegadores: Google Chrome, Microsoft Edge, Brave
- ✅ Sistemas operacionais: Windows, macOS, Linux

---

## ⚡ Melhorias de Performance

### Otimizações Implementadas

Esta versão do SEI Amargosa inclui melhorias significativas de performance em relação ao SEI Pro original:

- **🔄 Eliminação de recarregamentos desnecessários** - Corrigido o problema de múltiplos recarregamentos na página inicial ao exibir a especificação do processo
- **⚡ Carregamento assíncrono otimizado** - Implementação de AJAX eficiente para buscar dados sem travar a interface
- **🎯 Fluidez aprimorada** - Redução de operações bloqueantes que prejudicavam a experiência do usuário
- **💾 Cache inteligente** - Reutilização de dados já carregados para evitar requisições redundantes

Estas melhorias garantem uma experiência mais fluida e responsiva para os servidores públicos de Amargosa.

---

## 🚀 Instalação

### Chrome Web Store (Em breve)

A extensão será disponibilizada oficialmente na Chrome Web Store. Aguarde a aprovação.

### Instalação Manual (Modo Desenvolvedor)

1. **Baixe o código fonte:**
   ```bash
   git clone https://github.com/tarcinwth/sei-amargosa.git
   ```

2. **Acesse a página de extensões do Chrome:**
   - Digite `chrome://extensions/` na barra de endereços
   - Ou acesse: Menu → Mais ferramentas → Extensões

3. **Ative o Modo Desenvolvedor:**
   - No canto superior direito, ative a chave "Modo do desenvolvedor"

4. **Carregue a extensão:**
   - Clique em "Carregar sem compactação"
   - Selecione a pasta `dist/` do projeto

5. **Pronto!** A extensão SEI Amargosa está instalada e ativa.

---

## 📖 Como Usar

### Painéis de Informação

Após abrir um processo no SEI, os novos painéis aparecerão automaticamente na **árvore de documentos** (lado esquerdo da tela):

#### 📋 Especificação
- Mostra a **descrição completa** do processo
- **Clique no texto** para copiar para a área de transferência
- **Clique no ícone ✏️** para editar a especificação (abre página de consulta/alteração)

#### 🔢 Número do Processo
- Exibe o **número SEI completo** (formato: `NNNNNNN.NNNNNNN/AAAA-NN`)
- **Clique no número** para copiar para a área de transferência
- Útil para colar em outros sistemas ou documentos

---

## 🏛️ Prefeitura Municipal de Amargosa

<p align="center">
  <strong>Amargosa - Bahia</strong><br>
  <a href="https://www.amargosa.ba.gov.br">www.amargosa.ba.gov.br</a>
</p>

Amargosa é um município brasileiro do estado da Bahia, localizado na região do Vale do Jiquiriçá. Conhecida como a "Princesa do Vale", possui rica história e cultura.

---

## 🛠️ Desenvolvimento

### Tecnologias Utilizadas

- **JavaScript** - Lógica principal da extensão
- **jQuery** - Manipulação do DOM
- **JMESPath** - Consultas em objetos JSON
- **Moment.js** - Manipulação de datas
- **Font Awesome** - Ícones

### Estrutura do Projeto

```
sei-amargosa/
├── dist/                    # Código compilado (extensão)
│   ├── css/                 # Estilos
│   ├── html/                # Páginas HTML
│   ├── icons/               # Ícones
│   │   └── amargosa/        # Ícones da marca
│   ├── js/                  # Scripts JavaScript
│   │   ├── sei-pro-arvore.js    # Lógica da árvore de documentos
│   │   ├── sei-functions-pro.js # Funções auxiliares
│   │   └── ...
│   └── manifest.json        # Configuração da extensão
├── src/                     # Código fonte (opcional)
└── README.md               # Este arquivo
```

### Fork do SEI Pro

Este projeto é um fork do [SEI Pro](https://github.com/SEI-Pro/sei-pro), mantido pela comunidade. Adaptações específicas foram feitas para atender às necessidades da Prefeitura de Amargosa, incluindo:

- Novos painéis de informação na árvore de documentos
- Identidade visual personalizada
- **Melhorias de performance** - Otimizações que eliminam recarregamentos e travamentos

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto é um fork do [SEI Pro](https://github.com/SEI-Pro/sei-pro) e está licenciado sob a **GNU Affero General Public License v3.0 (AGPL-3.0)**.

A AGPL-3.0 é uma licença de software livre que garante que você pode usar, estudar, modificar e distribuir este software livremente, desde que mantenha a mesma licença para versões derivadas.

Veja o arquivo [LICENSE](LICENSE) para o texto completo da licença.

**Copyright © 2025 Prefeitura Municipal de Amargosa - BA**

---

## 👨‍💻 Desenvolvedor

**Tarcio Rodrigues**
- GitHub: [@tarcinwth](https://github.com/tarcinwth)

---

## 📞 Suporte

Para suporte, dúvidas ou sugestões:
- 🐛 **Issues:** [Abrir issue no GitHub](https://github.com/tarcinwth/sei-amargosa/issues)
- 📧 **Email:** Contate através do [site da prefeitura](https://www.amargosa.ba.gov.br)

---

## 🙏 Agradecimentos

- [SEI Pro](https://github.com/SEI-Pro/sei-pro) - Extensão base mantida pela comunidade
- [Processo Eletrônico Nacional](https://www.gov.br/gestao/pt-br/assuntos/processo-eletronico-nacional) - Sistema SEI

---

<p align="center">
  <strong>🌟 Desenvolvido com orgulho para os servidores de Amargosa 🌟</strong>
</p>
