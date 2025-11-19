# Secure Flag - Projeto CTF
**Yaldabaoth-Home & Yaldabaoth-Bank-Corporate**  
Projeto CTF acadêmico — Simulação de ataque forense a um banco fictício

- **Acesso aos Links do projeto:**  

  - **Github Repositórios:**
    - [Github - Yaldabaoth Home CTF Project](https://github.com/Cauan33XL/yaldabaoth-home-ctf-project)
    - [Github - Sistema Simulado de RH](https://github.com/Cauan33XL/SecureFlag-Sistema-Simulado-RH)
    - [Github - Yaldabaoth Email Corporate CTF Project](https://github.com/Cauan33XL/yaldabaoth-email-corporate-ctf-project)


  - **Websites do Projeto SecureFlag:** 
    - [Website - Yaldabaoth Home CTF Project](https://yaldabaoth-bank-home-ctf.vercel.app/)
    - [Website - Yaldabaoth Email Corporate CTF Project](https://yaldabaoth-bank-email-ctf.vercel.app/)
    - [Website - Sistema Simulado de RH](https://yaldabaoth-sistema-rh-ctf.vercel.app/)

  - **Plataforma Principal do Projeto CTF SecureFlag:** 
    - [Website - SecureFlag CTF Plataforma de Desafios](https://secureflagctf.svxsec.com/page)
    
---

**Equipe:**  
- CAUAN GABRIEL MATOS SILVA  
- CAIO LUIZ MATOS DE OLIVEIRA  
- FILIPE AUGUSTO DA SILVA CARDOSO  
- GABRIEL DE LIMA ADRIANO

**Instituição:** Centro Universitário do Planalto Central — UNICEPLAC  
**Disciplina / Orientador:** Projeto Integrado / Perícia Computacional — Prof. Rômulo Valadares  
**Período:** 30/08/2025 — 09/12/2025  
**Local:** Gama-DF, 2025

---

## Sumário
- [Resumo](#resumo)
- [Introdução](#introdução)
- [Objetivos](#objetivos)
- [Justificativa](#justificativa)
- [Metodologia](#metodologia)
- [Escopo e Entregáveis](#escopo-e-entregáveis)
- [Desenvolvimento do Projeto](#desenvolvimento-do-projeto)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Arquitetura & Fluxo de Dados](#arquitetura--fluxo-de-dados)
- [Tecnologias e Ferramentas](#tecnologias-e-ferramentas)
- [Testes e Evidências](#testes-e-evidências)
- [Resultados Esperados & Métricas](#resultados-esperados--métricas)
- [Licença](#licença)
- [Contribuição](#contribuição)
- [Agradecimentos](#agradecimentos)
- [Contatos](#contatos)
- [Apêndice / Anexos](#apêndice--anexos)
- [English Readme Version](#english-readme-version)

---

## Resumo

Secure Flag é um ambiente didático de Capture The Flag (CTF) com foco em cibersegurança forense. O projeto entrega dois sites fictícios interconectados — **Yaldabaoth-Home** (portal de entrada) e **Yaldabaoth-Bank-Corporate** (alvo bancário) — além de documentação completa e um gerenciador de desafios (CTFd — opcional).

Esta iniciativa busca enfrentar três desafios centrais:
- Alta demanda por profissionais de cibersegurança
- Escassez de experiências práticas no meio acadêmico
- Desenvolvimento de habilidades de resolução de problemas

Flags e pistas estão estrategicamente distribuídas por páginas, emails e assets, com o objetivo de ensinar investigação digital, análise de logs, engenharia reversa e redes através de gamificação.

---

## Introdução

Diante da escassez de experiência prática em segurança digital no meio acadêmico e do déficit de profissionais qualificados, projetamos um CTF pedagógico que simula um incidente em uma instituição financeira. A proposta combina experimento hands-on, documentação técnica detalhada e roteiros de aprendizado estruturados.

**Contexto Mercadológico:**
- Déficit de aproximadamente 750 mil profissionais em cibersegurança no Brasil (IBSEC)
- Crescente interesse dos jovens pela área, mas falta de preparo prático
- Necessidade de aproximação entre teoria acadêmica e realidade profissional

**Abordagem Educacional:**
- Desafios inspirados em casos reais do setor financeiro
- Desenvolvimento de competências técnicas e cognitivas
- Ambiente controlado e seguro para aprendizado experimental

---

## Objetivos

### Objetivos Gerais
- Construir ambiente prático e seguro para treinamento em cibersegurança forense
- Fornecer desafios documentados e escaláveis (iniciante → intermediário)
- Produzir material reutilizável para uso acadêmico
- Disponibilizar fluxo fácil de deploy local

### Objetivos Específicos
- Auxiliar interessados na área de segurança/forense com visão prática do dia a dia profissional
- Despertar curiosidade e desenvolver habilidades de resolução de problemas via gamificação
- Incentivar aprofundamento de conhecimentos em computação para estudantes de TI
- Testar conhecimentos em Linux, Windows, lógica de programação, análise de logs e redes
- Proporcionar experiência prática, divertida e educativa em cibersegurança

---

## Justificativa

### Problemas Atendidos
1. **Alta Demanda Profissional**: Mercado em crescimento com déficit de 750 mil profissionais
2. **Falta de Experiências Práticas**: Carência de oportunidades hands-on no ensino tradicional
3. **Desenvolvimento de Habilidades**: Necessidade de competências em resolução de problemas

### Fundamentação Estatística
- Segundo Correio Braziliense: "Cibersegurança cresce no Brasil e faltam profissionais qualificados"
- Dados IBSEC: Brasil enfrenta déficit crítico de especialistas na área
- Pesquisas indicam que 87% das empresas sofreram incidentes de segurança em 2023

### Solução Proposta
- CTF como ferramenta de aprendizado prático e envolvente
- Simulações realistas em ambiente controlado
- Formação gradual de novos talentos através de desafios progressivos

---

## Metodologia

### Abordagem de Desenvolvimento
- **Design por Caso**: Desafios inspirados em incidentes reais do setor financeiro
- **Prototipação Iterativa**: Figma para design de telas e fluxos de usuário
- **Implementação Progressiva**: Ciclo contínuo de MVP → testes → refinamentos
- **Ambiente Controlado**: Servidores locais e containers para testes seguros
- **Documentação Pedagógica**: Roteiros detalhados com objetivos claros e dicas contextuais

### Glossário de Termos Técnicos
| Termo | Definição |
|-------|-----------|
| **CTF** | Competição de desafios para treinar cibersegurança |
| **Cibersegurança** | Proteção de computadores, redes e informações |
| **Segurança Forense** | Investigação digital de crimes virtuais |
| **Engenharia Reversa** | Análise de sistemas para entender funcionamento |
| **Análise de Logs** | Leitura de registros do sistema para investigação |
| **Docker** | Ferramenta para criação e execução de containers |

---

## Escopo e Entregáveis

### Produtos Desenvolvidos
- **Yaldabaoth-Home**: Landing page completa com vídeo explicativo e navegação
- **Yaldabaoth-Bank-Corporate**: Website bancário simulado com email corporativo
- **Plataforma CTF Secure Flag**: Gerenciador de desafios com sistema de ranking

### Documentação e Artefatos
- Documentação técnica completa (README, roteiros, relatórios)
- Arquivos de deploy (Docker, scripts de configuração)
- Protótipos Figma e evidências de teste
- Licenças: MIT para código, CC BY-NC-SA 4.0 para conteúdo

---

## Desenvolvimento do Projeto

### Yaldabaoth-Home
**Função**: Ponto de partida do ataque e captura de flags iniciais

**Características Principais:**
- Seção "Melhores Ofertas" com promoções realistas
- Seção "Time de Especialistas" com emails para engenharia reversa
- Navegação intuitiva entre seções
- Botões de alternância de tema claro/escuro

### Yaldabaoth-Bank-Corporate
**Simulação de Ambiente Bancário Real**

**Sistema de Email Corporativo:**
- Tela de login com validação rigorosa
- Caixa de entrada com emails interativos e pistas
- Funcionalidades: modo claro/escuro, navegação, logout
- Emails de funcionários fictícios com flags estratégicas

### Plataforma CTF Secure Flag
**Sistema Completo de Gerenciamento**

**Recursos Principais:**
- Suporte a 20 idiomas diferentes
- Sistema de registro controlado por código
- Desafios exclusivamente individuais
- Ranking competitivo em tempo real
- Interface responsiva e intuitiva

**Telas Implementadas:**
- Home com vídeo explicativo e regras
- Sistema de usuários com busca e filtros
- Registro e login com validações
- Perfil e configurações personalizáveis
- Painel de controle com métricas

---

## Funcionalidades Principais

### Sistema de Submissão
- Validação automática de flags
- Feedback imediato para usuários
- Pontuação progressiva por desafio

### Sistema de Dicas
- Mecanismo de dicas contextuais
- Penalidade progressiva na pontuação
- Suporte a diferentes níveis de dificuldade

### Gestão de Usuários
- Registro controlado por código administrativo
- Perfis personalizáveis com preferências
- Sistema de ranking e classificação

### Experiência do Usuário
- Interface responsiva e acessível
- Temas claro e escuro
- Navegação intuitiva entre seções
- Mensagens de validação claras

---

## Arquitetura & Fluxo de Dados

### Arquitetura do Sistema

Frontend (Sites Estáticos) → CTFd (Opcional) → Database
↓
Yaldabaoth-Home
↓
Yaldabaoth-Bank-Corporate
↓
Submissão de Flags → Validação → Pontuação


### Fluxo Operacional
1. **Acesso Inicial**: Usuário acessa Yaldabaoth-Home
2. **Exploração**: Navega por páginas e coleta pistas
3. **Investigação**: Interage com email corporativo e assets
4. **Descoberta**: Encontra flags através de técnicas diversas
5. **Submissão**: Envia flags na plataforma Secure Flag
6. **Validação**: Sistema verifica e atribui pontos
7. **Ranking**: Atualização em tempo real da classificação

---

## Tecnologias e Ferramentas

### Stack Tecnológico

#### Frontend
- **HTML5/CSS3/JavaScript**: Sites estáticos Yaldabaoth
- **React 18**: Yaldabaoth-Bank-Corporate
- **Vite**: Build tool e desenvolvimento
- **CSS Modules**: Estilização componentizada

#### Infraestrutura
- **Docker**: Containerização e isolamento
- **CTFd**: Plataforma de gerenciamento de CTF
- **GitHub Pages**: Hospedagem estática
- **MariaDB/MySQL**: Persistência de dados

#### Desenvolvimento
- **Visual Studio Code**: IDE principal
- **Figma**: Prototipagem e design
- **Git/GitHub**: Controle de versão
- **GitHub Actions**: CI/CD automatizado

### Metodologias Aplicadas
- Desenvolvimento Scrum
- Arquitetura baseada em componentes
- Validações de segurança rigorosas
- Testes cross-browser abrangentes

---

## Testes e Evidências

### Estratégia de Testes
- **Responsividade**: Testes em desktop, tablet e mobile
- **Segurança**: Validação de inputs e proteção XSS
- **Funcionalidade**: Verificação de todas as interações
- **Usabilidade**: Avaliação da experiência do usuário

### Casos de Teste Principais
1. **Renderização Cross-browser**
2. **Validação de Formulários**
3. **Funcionalidade de Flags**
4. **Sistema de Pontuação**
5. **Responsividade em Dispositivos Móveis**

### Evidências Coletadas
- Screenshots completos de todas as telas
- Logs detalhados de interações
- Relatórios de testes manuais
- Registros de validação e pontuação

---

## Resultados Esperados & Métricas

### Resultados Qualitativos
- Ambiente funcional para 10+ desafios categorizados
- Material educacional reutilizável
- Base sólida para expansões futuras
- Experiência de aprendizado envolvente

### Métricas de Sucesso
- **Taxa de Conclusão**: >70% desafios iniciante
- **Pontuação Média**: Benchmark por categoria
- **Engajamento**: >5 submissões/usuário
- **Satisfação**: Nota >8/10 em pesquisas

### Impacto Educacional
- Fortalecimento de habilidades técnicas
- Desenvolvimento de pensamento crítico
- Preparação para desafios reais do mercado
- Formação de novos talentos em cibersegurança

---

## Licença

### Licenciamento Duplo
- **Código Fonte**: MIT License
- **Conteúdo e Documentação**: Creative Commons BY-NC-SA 4.0

### Arquivos de Licença
- `LICENSE` - Termos completos da MIT License
- `LICENSE-CC` - Termos completos da CC BY-NC-SA 4.0

---

## Contribuição

### Áreas de Interesse
- Novos desafios e categorias
- Correções de bugs e melhorias
- Expansão de documentação
- Traduções para novos idiomas

### Processo de Contribuição
1. Fork do repositório
2. Branch descritiva (`feature/...` ou `fix/...`)
3. Commits com mensagens claras
4. Pull Request com descrição detalhada

### Código de Conduta
- Respeito à equipe e comunidade
- Foco acadêmico e educacional
- Qualidade técnica e clareza
- Documentação adequada

---

## Agradecimentos

**Orientador**: Prof. Rômulo Valadares - Pela orientação especializada e apoio essencial

**Instituição**: UNICEPLAC - Pela infraestrutura e ambiente acadêmico

**Equipe**: Colegas de projeto - Pelo esforço dedicado e colaboração

**Contribuidores**: Todos que apoiaram direta ou indiretamente esta iniciativa educacional

---

## Contatos

**Equipe do Projeto**:
- cauan.silva@ads.uniceplac.edu.br
- cauan33XL@proton.me

**Orientador**:
Prof. Rômulo Valadares - UNICEPLAC

**Repositório Oficial**:

- https://github.com/Cauan33XL/yaldabaoth-home-ctf-project
- https://cauan33xl.github.io/SecureFlag-Sistema-Simulado-RH/
- https://github.com/Cauan33XL/yaldabaoth-email-corporate-ctf-project

---

## Apêndice / Anexos

### Cronograma de Execução
**Período**: 30/08/2025 — 09/12/2025

**Fases Principais**:
- Setembro: Pesquisa e Prototipação
- Outubro: Implementação Core
- Novembro: Testes e Refinamentos
- Dezembro: Documentação e Entrega

### Conteúdo Trabalhado
- Segurança da Informação
- Simulação de Ataques
- Análise Forense de Logs
- Engenharia Reversa
- Análise de Redes

### Referências Bibliográficas
1. CTFTIME - Eventos e estrutura de CTF
2. HackerSec - Fundamentos de desafios hacker
3. UNB Cybersecurity Club - Metodologias de ensino
4. Correio Braziliense - Contexto mercadológico
5. IBSEC - Estatísticas do setor

---

# English Readme Version

## Secure Flag - CTF Project
**Yaldabaoth-Home & Yaldabaoth-Bank-Corporate**
Academic CTF Project — Forensic attack simulation on a fictional bank

- **Access to Project Links:**

  - **Github Repositories:**
    - [Github - Yaldabaoth Home CTF Project](https://github.com/Cauan33XL/yaldabaoth-home-ctf-project)
    - [Github - Simulated HR System](https://github.com/Cauan33XL/SecureFlag-Sistema-Simulado-RH)
    - [Github - Yaldabaoth Email Corporate CTF Project](https://github.com/Cauan33XL/yaldabaoth-email-corporate-ctf-project)

  - **SecureFlag Project Websites:**
    - [Website - Yaldabaoth Home CTF Project](https://yaldabaoth-bank-home-ctf.vercel.app/)
    - [Website - Yaldabaoth Email Corporate CTF Project](https://yaldabaoth-bank-email-ctf.vercel.app/)
    - [Website - Simulated HR System](https://yaldabaoth-sistema-rh-ctf.vercel.app/)

  - **Main SecureFlag CTF Platform:**
    - [Website - SecureFlag CTF Challenge Platform](https://secureflagctf.svxsec.com/page)

---

**Team:**
- CAUAN GABRIEL MATOS SILVA
- CAIO LUIZ MATOS DE OLIVEIRA
- FILIPE AUGUSTO DA SILVA CARDOSO
- GABRIEL DE LIMA ADRIANO

**Institution:** Centro Universitário do Planalto Central — UNICEPLAC
**Discipline / Advisor:** Integrated Project / Computer Forensics — Prof. Rômulo Valadares
**Period:** 08/30/2025 — 12/09/2025
**Location:** Gama-DF, 2025

---

## Table of Contents
- [Abstract](#abstract)
- [Introduction](#introduction)
- [Objectives](#objectives)
- [Justification](#justification)
- [Methodology](#methodology)
- [Scope and Deliverables](#scope-and-deliverables)
- [Project Development](#project-development)
- [Main Features](#main-features)
- [Architecture & Data Flow](#architecture--data-flow)
- [Technologies and Tools](#technologies-and-tools)
- [Tests and Evidence](#tests-and-evidence)
- [Expected Results & Metrics](#expected-results--metrics)
- [License](#license)
- [Contribution](#contribution)
- [Acknowledgments](#acknowledgments)
- [Contacts](#contacts)
- [Appendix / Attachments](#appendix--attachments)

---

## Abstract

Secure Flag is a didactic Capture The Flag (CTF) environment focused on forensic cybersecurity. The project delivers two interconnected fictional websites — **Yaldabaoth-Home** (entry portal) and **Yaldabaoth-Bank-Corporate** (banking target) — in addition to complete documentation and a challenge manager (CTFd — optional).

This initiative seeks to address three central challenges:
- High demand for cybersecurity professionals
- Scarcity of practical experiences in the academic environment
- Development of problem-solving skills

Flags and clues are strategically distributed across pages, emails, and assets, with the goal of teaching digital investigation, log analysis, reverse engineering, and networking through gamification.

---

## Introduction

Given the scarcity of practical experience in digital security within the academic environment and the deficit of qualified professionals, we designed a pedagogical CTF that simulates an incident at a financial institution. The proposal combines hands-on experimentation, detailed technical documentation, and structured learning scripts.

**Market Context:**
- Deficit of approximately 750,000 cybersecurity professionals in Brazil (IBSEC)
- Growing interest among young people in the field, but a lack of practical preparation
- Need to bridge the gap between academic theory and professional reality

**Educational Approach:**
- Challenges inspired by real cases in the financial sector
- Development of technical and cognitive competencies
- Controlled and safe environment for experimental learning

---

## Objectives

### General Objectives
- Build a practical and safe environment for forensic cybersecurity training
- Provide documented and scalable challenges (Beginner → Intermediate)
- Produce reusable material for academic use
- Make an easy local deploy flow available

### Specific Objectives
- Assist those interested in the security/forensics area with a practical view of daily professional life
- Spark curiosity and develop problem-solving skills via gamification
- Encourage deep diving into computing knowledge for IT students
- Test knowledge in Linux, Windows, programming logic, log analysis, and networks
- Provide a practical, fun, and educational experience in cybersecurity

---

## Justification

### Addressed Problems
1. **High Professional Demand**: Growing market with a deficit of 750,000 professionals
2. **Lack of Practical Experiences**: Lack of hands-on opportunities in traditional teaching
3. **Skill Development**: Need for competencies in problem-solving

### Statistical Basis
- According to *Correio Braziliense*: "Cybersecurity grows in Brazil and qualified professionals are lacking"
- IBSEC Data: Brazil faces a critical deficit of specialists in the area
- Research indicates that 87% of companies suffered security incidents in 2023

### Proposed Solution
- CTF as a practical and engaging learning tool
- Realistic simulations in a controlled environment
- Gradual formation of new talents through progressive challenges

---

## Methodology

### Development Approach
- **Design by Case**: Challenges inspired by real incidents in the financial sector
- **Iterative Prototyping**: Figma for screen design and user flows
- **Progressive Implementation**: Continuous cycle of MVP → tests → refinements
- **Controlled Environment**: Local servers and containers for safe testing
- **Pedagogical Documentation**: Detailed scripts with clear objectives and contextual hints

### Glossary of Technical Terms
| Term | Definition |
|-------|-----------|
| **CTF** | Challenge competition to train cybersecurity skills |
| **Cybersecurity** | Protection of computers, networks, and information |
| **Forensic Security** | Digital investigation of virtual crimes |
| **Reverse Engineering** | Analysis of systems to understand their function |
| **Log Analysis** | Reading system records for investigation |
| **Docker** | Tool for creating and running containers |

---

## Scope and Deliverables

### Developed Products
- **Yaldabaoth-Home**: Complete landing page with explanatory video and navigation
- **Yaldabaoth-Bank-Corporate**: Simulated banking website with corporate email
- **Secure Flag CTF Platform**: Challenge manager with ranking system

### Documentation and Artifacts
- Complete technical documentation (README, scripts, reports)
- Deploy files (Docker, configuration scripts)
- Figma prototypes and test evidence
- Licenses: MIT for code, CC BY-NC-SA 4.0 for content

---

## Project Development

### Yaldabaoth-Home
**Function**: Starting point of the attack and capture of initial flags

**Main Characteristics:**
- "Best Offers" section with realistic promotions
- "Specialist Team" section with emails for reverse engineering
- Intuitive navigation between sections
- Light/Dark theme toggle buttons

### Yaldabaoth-Bank-Corporate
**Real Banking Environment Simulation**

**Corporate Email System:**
- Login screen with rigorous validation
- Inbox with interactive emails and clues
- Features: light/dark mode, navigation, logout
- Fictional employee emails with strategic flags

### Secure Flag CTF Platform
**Complete Management System**

**Main Features:**
- Support for 20 different languages
- Registration system controlled by code
- Exclusively individual challenges
- Real-time competitive ranking
- Responsive and intuitive interface

**Implemented Screens:**
- Home with explanatory video and rules
- User system with search and filters
- Registration and login with validations
- Profile and customizable settings
- Control panel with metrics

---

## Main Features

### Submission System
- Automatic flag validation
- Immediate feedback for users
- Progressive scoring per challenge

### Hint System
- Contextual hint mechanism
- Progressive penalty on scoring
- Support for different difficulty levels

### User Management
- Registration controlled by administrative code
- Customizable profiles with preferences
- Ranking and classification system

### User Experience
- Responsive and accessible interface
- Light and dark themes
- Intuitive navigation between sections
- Clear validation messages

---

## Architecture & Data Flow

### System Architecture

Frontend (Static Sites) → CTFd (Optional) → Database
↓
Yaldabaoth-Home
↓
Yaldabaoth-Bank-Corporate
↓
Flag Submission → Validation → Scoring

### Operational Flow
1. **Initial Access**: User accesses Yaldabaoth-Home
2. **Exploration**: Navigates pages and collects clues
3. **Investigation**: Interacts with corporate email and assets
4. **Discovery**: Finds flags through various techniques
5. **Submission**: Sends flags on the Secure Flag platform
6. **Validation**: System verifies and assigns points
7. **Ranking**: Real-time classification update

---

## Technologies and Tools

### Tech Stack

#### Frontend
- **HTML5/CSS3/JavaScript**: Yaldabaoth static sites
- **React 18**: Yaldabaoth-Bank-Corporate
- **Vite**: Build tool and development
- **CSS Modules**: Componentized styling

#### Infrastructure
- **Docker**: Containerization and isolation
- **CTFd**: CTF management platform
- **GitHub Pages**: Static hosting
- **MariaDB/MySQL**: Data persistence

#### Development
- **Visual Studio Code**: Main IDE
- **Figma**: Prototyping and design
- **Git/GitHub**: Version control
- **GitHub Actions**: Automated CI/CD

### Applied Methodologies
- Scrum Development
- Component-based Architecture
- Rigorous security validations
- Comprehensive cross-browser testing

---

## Tests and Evidence

### Test Strategy
- **Responsiveness**: Tests on desktop, tablet, and mobile
- **Security**: Input validation and XSS protection
- **Functionality**: Verification of all interactions
- **Usability**: User experience evaluation

### Main Test Cases
1. **Cross-browser Rendering**
2. **Form Validation**
3. **Flag Functionality**
4. **Scoring System**
5. **Responsiveness on Mobile Devices**

### Collected Evidence
- Complete screenshots of all screens
- Detailed interaction logs
- Manual test reports
- Validation and scoring records

---

## Expected Results & Metrics

### Qualitative Results
- Functional environment for 10+ categorized challenges
- Reusable educational material
- Solid foundation for future expansions
- Engaging learning experience

### Success Metrics
- **Completion Rate**: >70% beginner challenges
- **Average Score**: Benchmark by category
- **Engagement**: >5 submissions/user
- **Satisfaction**: Score >8/10 in surveys

### Educational Impact
- Strengthening of technical skills
- Development of critical thinking
- Preparation for real market challenges
- Formation of new talents in cybersecurity

---

## License

### Dual Licensing
- **Source Code**: MIT License
- **Content and Documentation**: Creative Commons BY-NC-SA 4.0

### License Files
- `LICENSE` - Complete terms of the MIT License
- `LICENSE-CC` - Complete terms of the CC BY-NC-SA 4.0

---

## Contribution

### Areas of Interest
- New challenges and categories
- Bug fixes and improvements
- Documentation expansion
- Translations to new languages

### Contribution Process
1. Fork the repository
2. Descriptive branch (`feature/...` or `fix/...`)
3. Commits with clear messages
4. Pull Request with detailed description

### Code of Conduct
- Respect for the team and community
- Academic and educational focus
- Technical quality and clarity
- Adequate documentation

---

## Acknowledgments

**Advisor**: Prof. Rômulo Valadares - For specialized guidance and essential support

**Institution**: UNICEPLAC - For the infrastructure and academic environment

**Team**: Project colleagues - For the dedicated effort and collaboration

**Contributors**: Everyone who directly or indirectly supported this educational initiative

---

## Contacts

**Project Team**:
- cauan.silva@ads.uniceplac.edu.br
- cauan33XL@proton.me

**Advisor**:
Prof. Rômulo Valadares - UNICEPLAC

**Official Repository**:

- https://github.com/Cauan33XL/yaldabaoth-home-ctf-project
- https://cauan33xl.github.io/SecureFlag-Sistema-Simulado-RH/
- https://github.com/Cauan33XL/yaldabaoth-email-corporate-ctf-project

---

## Appendix / Attachments

### Execution Schedule
**Period**: 08/30/2025 — 12/09/2025

**Main Phases**:
- September: Research and Prototyping
- October: Core Implementation
- November: Tests and Refinements
- December: Documentation and Delivery

### Covered Content
- Information Security
- Attack Simulation
- Forensic Log Analysis
- Reverse Engineering
- Network Analysis

### Bibliographic References
1. CTFTIME - Events and CTF structure
2. HackerSec - Fundamentals of hacker challenges
3. UNB Cybersecurity Club - Teaching methodologies
4. Correio Braziliense - Market context
5. IBSEC - Sector statistics

---
