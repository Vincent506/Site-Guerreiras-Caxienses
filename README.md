# Informações gerais sobre o site: Guerreiras Caxienses
Sistema Web Integrado de Denúncias, Atendimento e Informação da Secretaria Municipal da Mulher de Caxias - Maranhão.

# Sobre o Projeto

O Guerreiras Caxienses é uma plataforma web desenvolvida com o objetivo de facilitar o acesso à informação, permitir o registro seguro de denúncias e aproximar mulheres em situação de vulnerabilidade dos serviços oferecidos pela Secretaria Municipal da Mulher de Caxias.

A proposta do sistema é atuar como um canal digital de acolhimento, comunicação institucional e encaminhamento para atendimento especializado, contribuindo para o combate à violência contra a mulher e para a promoção dos seus direitos.

O projeto foi desenvolvido como parte das atividades acadêmicas do curso de Ciência da Computação.

# Contexto Social

Mulheres em situação de vulnerabilidade frequentemente enfrentam dificuldades para acessar informações, denunciar casos de violência ou solicitar apoio especializado.

O sistema Guerreiras Caxienses busca reduzir essas barreiras oferecendo:

    Registro simplificado de denúncias;
    
    Acesso remoto aos serviços da Secretaria da Mulher;
    
    Divulgação de informações sobre direitos e proteção;
    
    Comunicação entre usuários e profissionais especializados;
    
    Ambiente digital acessível e seguro.

# Funcionalidades Implementadas


### Usuários: 

    Cadastro de usuários;
    
    Login com autenticação JWT;
    
    Criptografia de senhas utilizando bcrypt;
    
    Logout da aplicação.

### Denúncias: 

    Criar denúncia;
    
    Listar denúncias;
    
    Buscar denúncia por ID;
    
    Atualizar denúncia;
    
    Excluir denúncia;
    
    Alterar status da denúncia: 
        Aberta;
        Em análise;
        Resolvida.

### Interface

    Tela inicial;
    
    Página de login;
    
    Página de cadastro;
    
    Página de denúncias;
    
    Página "Sobre o Projeto";
    
    Navegação entre páginas utilizando React Router.

# Tecnologias Utilizadas

### Front-end

    React
    Vite
    React Router DOM
    Axios
    CSS3

### Back-end

    Node.js
    Express
    Sequelize ORM
    JWT (JSON Web Token)
    bcryptjs

### Banco de Dados

    PostgreSQL

### Infraestrutura

    Docker
    Docker Compose


# Arquitetura do Sistema

    Front-end (React + Vite)

    Back-end (Node + Express)

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

