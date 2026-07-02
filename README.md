⛽ ValorEmRede Fuel Management System

Sistema de gestão executiva para postos de combustível, com painel de indicadores, controle de tanques, compras, estoque, financeiro, simulador de lucro e um módulo de "IA Gerente" com insights automáticos.

O projeto é dividido em duas partes:


Frontend: React + TypeScript (Vite), com Chart.js para os gráficos.⛽ Dallas Fuel Management System

Sistema de gestão executiva para postos de combustível, com painel de indicadores, controle de tanques, compras, estoque, financeiro, simulador de lucro e um módulo de "IA Gerente" com insights automáticos.

O projeto é dividido em duas partes:


Frontend: React + TypeScript (Vite), com Chart.js para os gráficos.
Backend: Node.js + Express, expondo uma API REST que alimenta o frontend e também serve o build de produção.



🧱 Tecnologias

Frontend


React 18
TypeScript
Vite
React Router DOM (navegação entre módulos)
Chart.js / react-chartjs-2 (gráficos)
Fontsource Inter (tipografia)


Backend


Node.js
Express
CORS
dotenv (variáveis de ambiente)



📁 Estrutura do projeto

projeto_dl-3/
├── backend/
│   ├── server.js          # API REST + serve o build do frontend
│   ├── package.json
│   └── dist/               # build de produção do frontend (gerado pelo Vite)
├── frontend/
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── components/
│   │   └── AppLayoutFixed.tsx   # sidebar + topbar + layout base
│   ├── pages/
│   │   ├── DashboardPage.tsx     # Painel Executivo (consome API)
│   │   ├── PricesPage.tsx        # Inteligência de Preços
│   │   ├── TanksPage.tsx         # Controle dos Tanques
│   │   ├── PurchasesPage.tsx     # Compras Inteligentes
│   │   ├── PumpsPage.tsx         # Dashboard Bombas
│   │   ├── StorePage.tsx         # Loja de Conveniência
│   │   ├── StockPage.tsx         # Estoque
│   │   ├── MaintenancePage.tsx   # Manutenção
│   │   ├── FinancialPage.tsx     # Financeiro
│   │   ├── EmployeesPage.tsx     # Funcionários
│   │   ├── SimulatorPage.tsx     # Simulador de Lucro (consome API)
│   │   ├── MapPage.tsx           # Mapa de Vendas
│   │   └── AiPage.tsx            # IA Gerente
│   └── src/
│       ├── main.tsx
│       ├── AppWithLayout.tsx     # define as rotas da aplicação
│       └── styles/global.css
├── public/
│   └── index.html
└── TODO.md


🚀 Como rodar o projeto localmente

Pré-requisitos: Node.js instalado (versão 18+).

1. Backend

bashcd backend
npm install
node server.js

O servidor sobe em http://localhost:3000. Você verá no terminal:

Dallas Fuel backend running on http://localhost:3000

2. Frontend

Em outro terminal:

bashcd frontend
npm install
npm run dev

O Vite sobe em http://localhost:5174. Abra esse endereço no navegador — o frontend consome a API do backend em http://localhost:3000.


⚠️ Os dois precisam estar rodando ao mesmo tempo (backend e frontend) durante o desenvolvimento.



3. Build de produção

bashcd frontend
npm run build

O build é gerado direto em backend/dist (configurado no vite.config.ts). Depois disso, basta rodar só o backend (node server.js) — ele serve o frontend já buildado em http://localhost:3000.


🔌 Rotas da API (backend)

MétodoRotaDescriçãoGET/api/healthHealth checkGET/api/dashboardDados do Painel ExecutivoGET/api/pricesInteligência de preçosGET/api/tanksControle dos tanquesGET/api/purchasesCompras inteligentesGET/api/pumpsDashboard de bombasGET/api/storeLoja de conveniênciaGET/api/stockEstoqueGET/api/maintenanceManutençãoGET/api/financialFinanceiroGET/api/employeesFuncionáriosGET/api/simulatorConfiguração base do simulador de lucroPOST/api/simulator/calculateCalcula o resultado do simuladorGET/api/mapMapa de vendasGET/api/ai/insightsInsights da IA Gerente

Todas as respostas seguem o formato:

json{ "ok": true, "data": { ... } }


📊 Status de integração com a API

MóduloConsome a API?Painel Executivo (Dashboard)✅ SimSimulador de Lucro✅ SimInteligência de Preços, Tanques, Compras, Bombas, Loja, Estoque, Manutenção, Financeiro, Funcionários, Mapa, IA Gerente⏳ Ainda com dados fixos (mock) no frontend — rotas já existem no backend, falta conectar


📝 Roadmap

Veja o TODO.md para o checklist completo do que já foi feito e o que falta (principalmente: conectar os módulos restantes às rotas já existentes no backend).


🗂️ Variáveis de ambiente

O backend usa dotenv. Se precisar customizar a porta, crie um arquivo .env dentro de backend/:

PORT=3000

(Por padrão, se .env não existir, o backend usa a porta 3000.)
Backend: Node.js + Express, expondo uma API REST que alimenta o frontend e também serve o build de produção.



🧱 Tecnologias

Frontend


React 18
TypeScript
Vite
React Router DOM (navegação entre módulos)
Chart.js / react-chartjs-2 (gráficos)
Fontsource Inter (tipografia)


Backend


Node.js
Express
CORS
dotenv (variáveis de ambiente)



📁 Estrutura do projeto

projeto_dl-3/
├── backend/
│   ├── server.js          # API REST + serve o build do frontend
│   ├── package.json
│   └── dist/               # build de produção do frontend (gerado pelo Vite)
├── frontend/
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── components/
│   │   └── AppLayoutFixed.tsx   # sidebar + topbar + layout base
│   ├── pages/
│   │   ├── DashboardPage.tsx     # Painel Executivo (consome API)
│   │   ├── PricesPage.tsx        # Inteligência de Preços
│   │   ├── TanksPage.tsx         # Controle dos Tanques
│   │   ├── PurchasesPage.tsx     # Compras Inteligentes
│   │   ├── PumpsPage.tsx         # Dashboard Bombas
│   │   ├── StorePage.tsx         # Loja de Conveniência
│   │   ├── StockPage.tsx         # Estoque
│   │   ├── MaintenancePage.tsx   # Manutenção
│   │   ├── FinancialPage.tsx     # Financeiro
│   │   ├── EmployeesPage.tsx     # Funcionários
│   │   ├── SimulatorPage.tsx     # Simulador de Lucro (consome API)
│   │   ├── MapPage.tsx           # Mapa de Vendas
│   │   └── AiPage.tsx            # IA Gerente
│   └── src/
│       ├── main.tsx
│       ├── AppWithLayout.tsx     # define as rotas da aplicação
│       └── styles/global.css
├── public/
│   └── index.html
└── TODO.md


🚀 Como rodar o projeto localmente

Pré-requisitos: Node.js instalado (versão 18+).

1. Backend

bashcd backend
npm install
node server.js

O servidor sobe em http://localhost:3000. Você verá no terminal:

Dallas Fuel backend running on http://localhost:3000

2. Frontend

Em outro terminal:

bashcd frontend
npm install
npm run dev

O Vite sobe em http://localhost:5174. Abra esse endereço no navegador — o frontend consome a API do backend em http://localhost:3000.


⚠️ Os dois precisam estar rodando ao mesmo tempo (backend e frontend) durante o desenvolvimento.



3. Build de produção

bashcd frontend
npm run build

O build é gerado direto em backend/dist (configurado no vite.config.ts). Depois disso, basta rodar só o backend (node server.js) — ele serve o frontend já buildado em http://localhost:3000.


🔌 Rotas da API (backend)

MétodoRotaDescriçãoGET/api/healthHealth checkGET/api/dashboardDados do Painel ExecutivoGET/api/pricesInteligência de preçosGET/api/tanksControle dos tanquesGET/api/purchasesCompras inteligentesGET/api/pumpsDashboard de bombasGET/api/storeLoja de conveniênciaGET/api/stockEstoqueGET/api/maintenanceManutençãoGET/api/financialFinanceiroGET/api/employeesFuncionáriosGET/api/simulatorConfiguração base do simulador de lucroPOST/api/simulator/calculateCalcula o resultado do simuladorGET/api/mapMapa de vendasGET/api/ai/insightsInsights da IA Gerente

Todas as respostas seguem o formato:

json{ "ok": true, "data": { ... } }


📊 Status de integração com a API

MóduloConsome a API?Painel Executivo (Dashboard)✅ SimSimulador de Lucro✅ SimInteligência de Preços, Tanques, Compras, Bombas, Loja, Estoque, Manutenção, Financeiro, Funcionários, Mapa, IA Gerente⏳ Ainda com dados fixos (mock) no frontend — rotas já existem no backend, falta conectar


📝 Roadmap

Veja o TODO.md para o checklist completo do que já foi feito e o que falta (principalmente: conectar os módulos restantes às rotas já existentes no backend).


🗂️ Variáveis de ambiente

O backend usa dotenv. Se precisar customizar a porta, crie um arquivo .env dentro de backend/:

PORT=3000

(Por padrão, se .env não existir, o backend usa a porta 3000.)
