# Site-Guerreiras-Caxienses
Sistema Web Integrado de Denúncias, Atendimentos e Informação da Secretaria Municipal da Mulher de Caxias Maranhão


# Contexto

Um site web que pode facilitar o acesso à informação, permitir o registro seguro de denúncias, a requisição de atendimentos especializados, a comunicação institucional e o acolhimento anônimo de mulheres em situação de vulnerabilidade.

# Serviços

As Mulheres podem acessar por meio do navegador o nosso site e efetuam denuncias para a secretaria da mulher adicionando um endereço e um telefone.

Para efetuar a requisição de atendimentos especializados, ou a comunicação institucinal elas precisam efetuar um cadastro para criar uma conta. Esses serviços mais especificos onde precisamos ter um agendamento previo.

Para ter acesso as noticias, avisos tambem é necessário ter uma conta e efetuar um login.

# C1: Diagrama de Contexto

![Imagem_Diagrama_C1](assetsReadme/C1%20-%20Imagem.png)

### Usuarios: 
Mulheres e Profissionais Especializados(Agentes da Delegacia da mulher, Advogados, Medicos e Psicologos). Esses usuarios acessam ao site, efetuam denuncias, solicitam serviços com algum profissional, obtem informações sobre seus direitos e sobre serviços disponiveis e disponibilizam seus serviços.

### Sistema Principal: 

O Site do Guerreiras Caxienses serve de portal de comunicação para as mulheres em situação de vulnerabilidade para os sistemas finais(Externos).

### Sistemas Externos: 
Delegacia da Mulher e Corpo de Profissionais especializados

# C2: Diagrama de Conteiners

![Imagem_Diagrama_C2](assetsReadme/C2%20-%20Imagem.png)

### Aplicação Web

Front-End: React.js 

Porque o projeto exige dinamismo (agendar serviços, carregar informações). O React permite que a página atualize apenas as partes necessárias sem recarregar tudo, melhorando a experiência de quem está em uma conexão móvel lenta, o que pode ser o caso das usuárias em vulnerabilidade.

Back-End: Python com FastAPI

Porque o FastAPI é extremamente rápido e lida muito bem com processos assíncronos, essenciais para comunicações com APIs externas.Ele utiliza "Type Hinting" (indicação de tipos) o que ajuda muito a evitar erros bobos de lógica. Ele também gera automaticamente uma documentação (Swagger) onde você podemos testar nossas rotas sem precisar criar o front-end primeiro.

Banco de Dados: PostgreSQL

Para armazenar os perfis, os agendamentos e as denúncias, utilizaremos um banco de dados. Uma Mulher faz um Agendamento com um Profissional. Essa relação (Foreign Keys) é muito melhor gerenciada em um banco relacional do que em bancos não-relacionais (NoSQL).

### Comunicação com Sistemas Externos (APIs)


Tecnologia: Biblioteca HTTPX ou Requests (dentro do Python/FastAPI).O Back-end funcionará como um "cliente" que envia requisições (geralmente em formato JSON) para as URLs dos sistemas externos. Para enviar a denúncia para a delegacia, nos fará uma requisição POST para a API deles. Para solicitar serviços profissionais, nos consumiremos a API de agendamento desses órgãos. Se esses sistemas não tiverem uma API real ainda, nos podemos "simular" esse comportamento criando pequenos serviços mockados (falsos) para testar nossos fluxo.