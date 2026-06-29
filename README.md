# Informações gerais sobre o site: Guerreiras Caxienses
Sistema Web Integrado de Denúncias, Atendimento e Informação da Secretaria Municipal da Mulher de Caxias - Maranhão.

# Sobre o Projeto

O Guerreiras Caxienses é uma plataforma web desenvolvida com o objetivo de facilitar o acesso à informação, permitir o registro seguro de denúncias e aproximar mulheres em situação de vulnerabilidade dos serviços oferecidos pela Secretaria Municipal da Mulher de Caxias.

A proposta do sistema é atuar como um canal digital de acolhimento, comunicação institucional e encaminhamento para atendimento especializado, contribuindo para o combate à violência contra a mulher e para a promoção dos seus direitos.

O projeto foi desenvolvido como parte das atividades acadêmicas do curso de Ciência da Computação.

# Contexto Social

Mulheres em situação de vulnerabilidade frequentemente enfrentam dificuldades para acessar informações, denunciar casos de violência ou solicitar apoio especializado.

O sistema Guerreiras Caxienses busca reduzir essas barreiras oferecendo:

* Registro simplificado de denúncias;
    
* Acesso remoto aos serviços da Secretaria da Mulher;
    
* Divulgação de informações sobre direitos e proteção;
    
* Comunicação entre usuários e profissionais especializados;
    
    Ambiente digital acessível e seguro.

# Funcionalidades Implementadas


### Usuários: 

* Cadastro de usuários;
    
* Login com autenticação JWT;
    
* Criptografia de senhas utilizando bcrypt;
    
* Logout da aplicação.

### Denúncias: 

* Criar denúncia;
    
* Listar denúncias;
    
* Buscar denúncia por ID;
    
* Atualizar denúncia;
    
* Excluir denúncia;
    
* Alterar status da denúncia: 
    + Aberta;
    + Em análise;
    + Resolvida.

### Interface

* Tela inicial;
    
* Página de login;
    
* Página de cadastro;
    
* Página de denúncias;
    
* Página "Sobre o Projeto";
    
* Navegação entre páginas utilizando React Router.

# Tecnologias Utilizadas

### Front-end

* React
* Vite
* React Router DOM
* Axios
* CSS3

### Back-end

* Node.js
* Express
* Sequelize ORM
* JWT (JSON Web Token)
* bcryptjs

### Banco de Dados

* PostgreSQL

### Infraestrutura

* Docker
* Docker Compose


# Arquitetura do Sistema

    Front-end (React + Vite)
        ↓
    Back-end (Node + Express)
        ↓
    PostgreSQL    

A comunicação entre frontend e backend é realizada através de requisições HTTP utilizando Axios.

O acesso às rotas protegidas é realizado através de autenticação JWT.


# Estrutura do Projeto


```
WebServer/ 
│ ├── app/ 
│ ├── backend/ 
│ ├── src/ 
│ │     ├── controllers/ 
│ │     ├── middleware/ 
│ │     ├── models/ 
│ │     ├── routes/ 
│ │     ├── conf/ 
│ │     └── app.js 
│ ├── config.env 
│ ├── package.json 
│ └── server.js 
| |
│ ├── front-end-vite/ 
│ ├── src/ 
│ │ ├── pages/ 
│ │ ├── services/ 
│ │ ├── styles/
│ │ └── assets/ 
│ │
│ ├── package.json
│ └── vite.config.js
│ 
└── docker-compose.yml
```

# Configuração do Ambiente

### Back-end

Instalar dependências:

    cd app/backend
    npm install

Executar o servidor:

    node server.js

Servidor disponível em:

    http://localhost:3000

### Front-end

Instalar dependências:

    cd app/front-end-vite
    npm install

Executar aplicação:

    npm run dev

Front-end disponível em:

    http://localhost:5173

Observação: por questões de segurança do projeto eu não vou disponibilizar as variaveis de ambientes para quem não for colaborador oficial do projeto

# Execução com o Docker

Construir os containers:

    docker compose up --build

Executar em segundo plano:

    docker compose up -d

Parar os containers:

    docker compose down

# Endpoints da API

### Autenticação 
#### Cadastro
    POST /auth/register

Exemplo: 

    {
        "nome": "Maria",
        "email": "maria@email.com",
        "senha": "123456"
    }

#### Login

    POST /auth/login

Exemplo:

    {
        "email": "maria@email.com",
        "senha": "123456"
    }

Resposta: 

    {
        "token": "jwt-token"
    }

### Denúncias

#### Criar denúncia

    POST /denuncias

#### Listar denúncias

    GET /denuncias

#### Buscar denúncia por ID

    GET /denuncias/:id

#### Atualizar denúncia
    
    PUT /denuncias/:id

#### Excluir denúncia
    
    DELETE /denuncias/:id

### Segurança

* Senhas armazenadas utilizando bcrypt;

* Autenticação baseada em JWT;

* Rotas protegidas por middleware;

* Variáveis sensíveis isoladas em arquivo de configuração;

* Suporte à execução em containers Docker.

### Próximas Funcionalidades

* Upload de imagens e documentos;

* Recuperação de senha;

* Painel administrativo;

* Dashboard estatístico;

* Agendamento de atendimento especializado;

* Integração com profissionais parceiros;

* Sistema de notificações;

* Mapa de serviços de apoio à mulher.

### Público Alvo

* Mulheres em situação de vulnerabilidade;

* Secretaria Municipal da Mulher;

* Delegacia Especializada da Mulher;

* Advogados;

* Psicólogos;

* Assistentes sociais;

* Profissionais parceiros da rede de apoio.