# 15/04/21
## estrutura 
- Criação do projeto

- Definição das tecnologias usadas

- Definição da estrutura do backend
  - optei por criar o meu propróprio banco de dados usando json-server para poder me focar no front-end, pois encontrei alguns inconvenientes na hora de lidar com o banco Mysql

- Definição da estrutura inicial no frontend

- BACKEND - criação de uma versão inicial do backend, sendo pretendido extensões e modificações futuramente

- FRONTEND - Criação dos componentes e rotas, de forma que cada página tenha 3 divisões:
  - pages: pasta de maior nível de uma página, ela conterá apenas os componentes necessários para formar a UI e a lógica da página. Ela não conterá estados, funções ou qualquer tipo de lógica
  - components: conterá a lógica global do componente principal da página e pedaços de ui que compõem o todo
  - parts: menores pedaços de componentes que compõem os componentes maiores da pasta 'components'. Os components da pasta 'parts' também costumam ter componentes reutilizáveis, ou seja, podem ser usados dentro de vários outros componentes

## FRONTEND 
- criação do componente de registro (RegisterForm)
  - criação da lógica e html básico do componente
  - aplicação de estilização básica
  - implementação da lógica
    - inputs controlados por estado
    - dados do usuário são salvos em localStorage e serão aplicados como default no valor dos campos de input caso presente
    - o botão de registro apenas direciona para a págica de 'recipes'. Esse comportamento será alterado posteriormente 
  - refinamento da estilização UI
  - aplicação de responsividade
