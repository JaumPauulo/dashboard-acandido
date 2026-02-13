# 📊 Central de Dashboards – Setor de Dados | Grupo A.Cândido

Este projeto é um **site institucional de apresentação e navegação de dashboards Power BI**, desenvolvido para funcionar como uma **central única de acesso aos painéis estratégicos do Grupo A.Cândido**.

O site atua como um **Painel de Navegação**, permitindo que gestores e áreas estratégicas acessem rapidamente os dashboards corretos, de forma organizada, visual e intuitiva.

---

## 🎯 Objetivo do Projeto

- Centralizar o acesso aos dashboards do Power BI
- Organizar os painéis por área/setor
- Facilitar a navegação e a tomada de decisão baseada em dados
- Fornecer uma experiência visual moderna, corporativa e responsiva
- Servir como **landing page institucional do Setor de Dados**

---

## 🧭 Estrutura de Navegação

### 🔹 Tela Principal – Painel de Navegação
Apresenta os cards principais, cada um representando uma área do negócio.

- **Contabilidade** → abre dashboard Power BI
- **Recurso Humano** → abre dashboard Power BI
- **Departamento Pessoal** → abre dashboard Power BI
- **Tráfego** → abre uma nova tela com submenu
- **Manutenção** → abre dashboard Power BI
- **Compras** → abre dashboard Power BI
- **Qualidade** → abre dashboard Power BI

> Todos os cards (exceto Tráfego) são cards únicos e redirecionam diretamente para o Power BI em nova aba.

---

### 🔹 Submenu – Tráfego
Ao clicar em **Tráfego**, o usuário é direcionado para uma segunda tela contendo:

- **CCO** → Power BI
- **CMO** → Power BI
- **Planejamento** → Power BI
- **Ocorrências** → Power BI

Cada card abre diretamente o respectivo dashboard do Power BI.

---

## ✨ Animações e Experiência do Usuário

- Os cards **não animam no carregamento do site**
- A animação ocorre **somente quando a seção de cards entra totalmente na tela**
- A animação é do tipo **stagger (um card por vez)**:
  - Opacity: `0 → 1`
  - TranslateY: `20px → 0`
- A animação é **reativada toda vez que o usuário sai e retorna à seção**
- Implementação baseada em **detecção de viewport (IntersectionObserver)**

---

## 🎨 Identidade Visual

Cores institucionais utilizadas:

- **Azul A.Cândido (principal):** `#00194C`
- **Vermelho (destaque/CTA):** `#F11E26`
- **Branco:** fundos e textos

Estilo visual:
- Corporativo
- Tecnológico
- Limpo e moderno
- Inspirado em painéis estratégicos e dashboards executivos

---

## 🧱 Componentes Principais

- **Navbar fixa (sticky)**
  - Logo institucional
  - Título do painel
  - Botão de ação “Visão Detalhada”
- **Hero Section**
  - Título de impacto
  - Subtítulo institucional
  - Botão CTA “Acessar Painéis”
- **Painel de Cards**
  - Grid responsivo
  - Ícones grandes
  - Cards totalmente clicáveis
- **Footer**
  - Informações institucionais

---

## 📱 Responsividade

O site é totalmente responsivo:

- **Desktop:** grid com múltiplas colunas
- **Tablet:** 2 colunas
- **Mobile:** 1 coluna
- Menu adaptável
- Botões e cards com boa área de toque

---

## 🔗 Links Power BI

Os links dos dashboards são configurados como **placeholders**, facilitando a substituição:

```txt
https://powerbi.com/view?r=SEU_LINK_AQUI
