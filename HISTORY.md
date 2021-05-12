# 15/04/21
## Estrutura 
- Criação do projeto

- Definição das tecnologias usadas

- Definição da estrutura do backend
  - optei por criar o meu próprio banco de dados usando json-server para poder me focar no front-end, pois encontrei alguns inconvenientes na hora de lidar com o banco Mysql

- Definição da estrutura inicial no frontend

- FRONTEND - Criação dos componentes e rotas, de forma que cada página tenha 3 divisões:
  - pages: pasta de maior nível de uma página, ela conterá apenas os componentes necessários para formar a UI e a lógica da página. Ela não conterá estados, funções ou qualquer tipo de lógica
  - components: conterá a lógica global do componente principal da página e pedaços de ui que compõem o todo
  - parts: menores pedaços de componentes que compõem os componentes maiores da pasta 'components'. Os componentes da pasta 'parts' também costumam ter componentes reutilizáveis, ou seja, podem ser usados dentro de vários outros componentes
 
## Frontend
- criação do componente de registro (RegisterForm)

  - criação da lógica e html básico do componente

  - aplicação de estilização básica

  - implementação da lógica
    - inputs controlados por estado
    - dados do usuário são salvos em localStorage e serão aplicados como default no valor dos campos de input caso presente
    - o botão de registro apenas direciona para a págica de 'recipes'. Esse comportamento será alterado posteriormente 

  - implementação de testes unitários em todas as util functions
 
  - refinamento da estilização UI
 
  - refinamento da responsividade
 
## Backend
  - Criação de uma versão inicial do backend, sendo pretendido extensões e modificações futuramente


# 16/04/2021
## Frontend
- Correção de bugs gerados por configurações internas do Material-UI
  - as bordas incompletas que fica abaixo do Header e dos itens da lista seriam feitas inicialmente com os pseudo-elementos CSS ::after e ::before, mas a biblioteca me limita e não consegui fazer isso
    - Portanto optei pela abordagem criar um sub-componente centralizado no meio do componente pai, ele recebeu bordas largas e transparentes nas laterais e uma leve borda cinza na parte de baixo. Isso cria um belo efeito de borda inferior
 
- Finalização do componente de Header
 
- Criação da Página e de recipes (seleção das receitas principais) e seus respectivos componentes e subcomponentes
 
- Criação da UI da lista e botão
 
- Implementação da lógica de seleção dos itens (recipes)
  - a lógica foi implementadas da seguinte forma:
    - primeiramente, analisei todas as possibilidades de comportamento que a lógica de seleção poderia ter
      - cheguei em essencialmente 4 condições, que são:
        - se o item não é o mesmo que recebeu o click do usuário, ele não irá se alterar
        - se o usuario seleciona um item deselecionado quando o limite de seleções já foi atingido, ele não será selecionado
        - se o item já foi selecionado, sempre será permitido deselecionar
        - se o limite não foi atingido, o item poderá alterado
    - implementei todas as 4 condicionais e em seguida separei cada condição em um componente
      isso além de diminuir a bagunça visual e permitir crição de testes unitários dentro da função, também permite uma fácil identificação das condicionais, uma vez que ao invés de olhar diretamente para a lógica, o desenvolvedor olhará para uma variável que descreve exatamente o que aquela lógica analisa

- Implementação da lógica de conversão dos números "puros" de tempo retornados do backend em um valor válido em minutos
  - a lógica foi implementada da seguinte forma:
    - inicialmente procurei e tentei pensar em uma formula matemática para realizar a conversão, mas persebi que existia uma abordagem mais simples
    - simplesmente transformando o número em string e manipulando os valores de alhgumas posições da string
      - a lógica se divide em 3 principais condições
        - quando o número possuir 1 caractere, basta adicionar dois zeros (00) à esquerda e colocar dois ponto (:) no índice 1
        - quando o número  possuir 2 caracteres, basta adicionar um zero (0) à esquerda e colocar dois pontos (:) no índice 1
        - quando o número possuir 3 ou mais caracteres, basta colocar dois pontos (:) no índice -2 (antepenúltimo índice)

- Implementação de testes unitários nas util functions relacioanadas à conversão do tempo em minutos

- Devido a problemas com o git por ele não aceitar o tamanho dos nomes de alguns arquivos de teste, deixarei para resolver esse problema e realizar os commits dos testes de hoje para amanhã

# 17/04/2021
- apenas corrigi o problema do git
  - fiz isso adicionando a opção longpath=true no arquivo presente em .git/config

# 19/04/2021
- apenas movi algumas subpastas do 'utils' e do 'parts' e modifiquei pequenas coisas, pois percebi que seriam reutilizadas em outras páginas. Depois tive que me focar em outros trabalhos.

# 20/04/2021
## Frontend
- Criação do componente de selecão das receitas

- Criação do componente de complementos
  - Não foi finalizado, apenas criei a estruturas, estilos e a lógica dos checkbox, que foi reaproveirada do componente de recipes
  - Ao final, percebi alguns problemas gerados pelo fluxo de dados atual, estou pensando se autero todo o fluxo da aplicação ou se resolvo de outra maneira
    - a hierarquia de componentes criada está dificiltando obter os dados das receitas selecionadas em um escopo mais global dentro do componente da lista de receitas
      - o principal motivo é que o atributo "checked" é atribuído depois de obter a lista dos dados puros dentro de um map

- Hoje também refleti sobre algumas coisas que me arrependi um pouco de ter feito e que podiam terer sido implementados de uma maneira melhor, mas que não posso mais mudar
  - não listarei isso agora, deixarei um tópico de postos a melhorar no final do projeto

- também reparei que alguns componentes não foram componentizados e que poderiam ser de maneira global para o reuso na lista de recipes e de complements
  - deixarei essa refatoração para um outro momento

# 23/04/2021
## Frontend
- Finalização da lógica envolvendo a seleção dos complementos
  - inicialmente, tentei uma abordagem diferente do tradicional, optei por testar um fluxo de dados guiado pelo localStorage ao invés do estado
    - a abordagem funcionou, mas percebi que ela é inferior à abordagem de estado e que isso poderia abrir brechas de segurança e performance caso fosse uma aplicação real
      - por este motivo, refiz toda a lógica do fluxo de dados 

- optimização geral das funções 

- Dei um rename em diversas pastas, arquivos, funções e variáveis para manter a consistencia e compreensão do código

- Movi algumas pastas de lugar 

## Backend
- Mudei o nome da rota "recipes" para "ingredients" para manter a consistência dos nomes

- Mudei o nome antigo das rotas de recipes para ingredients

- Mudei o nome dos controllers de recipes para ingredients

# 24/04/2021
## Frontend
- optimização e componentização geral nos componentes

## Backend
- criação de uma nova rota para salvar os usuários

# 25/04/2021
## Frontend
- No dia de hoje, embora tenha tido pouco tempo, realizei optimizações gerais
  - utilizei o LightHouse para analisar minha aplicação e aplicar o rank, e com base no rank, optimizei 
  - nomes de classes foram auteradas para garantir maior indentificação com o componente estilizado
  - componentes e pastas tiveram nomes alterados 

- A estutura css e html foi auterada
  - a abordagem anterior para criar as bordas cinzas de baixo tornavam a legibilidade relativamente mais difícil, além de gerar alguns bugs em proporções mobile
    - isso me levou à decisão de auterar isso e optar por uma abordagem menos bonita, porém, mais eficiente, que foi a abordagem de usar uma passing no próprio componente app.js

- estou cansado e preciso acordar cedo amanhã, então deixarei para commitar amanhã minhas mudanças de hoje

# 27/04/2021
## Frontend
- No dia de hoje, criei a lógica para calcular o tempo total dos pedidos feitos pelo cliente
  - de inicio, achei que seria algo bem simples, mas percebi depois que seria algo um pouco mais complexo pelas diversas conversões e tratamento que os dados deveriam receber
  - para facilitar o desenvolvimento, dividi ele em duas etapas:
    - etapa onde foram criadas as funções de cálculo, mas a única coisa que faziam era somar os números puros
    - etapa onde foi adicionada a lógica de conversão de e cálculo dos dados dentro das funções criadas
  - a lógica da conversão se resume em:
    - converter o número para o formato desejado
    - separar esse número convertido em 2 partes, os minutos e os segundos (caso haja duas partes)
      - se tiver apenas uma, o número já pode ser retornado 
    - tratar adequadamente as partes e concatenar tudo no final

# 28/04/2021
## Backend
- Atualização do tempo de preparo dos cookies
  - de 20 para 130

- Criação da rota responsável por obter o cupon 

- Criação da página de espera após a finalização do pedido

## Planejamento
- Planejamento do Timer
  - estou pensando sobre o que farei no timer, pois, para criar a animação, terei que manipular SVGs, e eu não sei como fazer isso. Até posso tirar um tempo para estudar, mas isso certamente tomaria muito tempo e prolongaria a data de entrega do projeto. Vou pensar melhor sobre isso depois


# 03/05/2021
## Frontend
- Optimização do código
  - refatoração e divisão das funções utilitarias

- Criação de testes unitários e de integração para as funções utilitárias

- Cobri a maior parte das funções utilitárias com testes, Amanha terminarei as restantes e aplicarei testes nos hooks

# 04/05/2021
## Frontend
- Apenas criei mais alguns testes

## Planejamento
- procurei uma lib para criar o Timer
  -  vou testar amanhã algumas que separei

# 06/05/2021
## Fronted
- Foi implementada a página de espera e o timer 

- Toda a lógica envolvendo o temporizador foi aplicada

- Algumas melhorias de acessibilidade, legibilidade do código e SEO também foram implementadas

- A aplicação frontend já está praticamente pronta
  - se sobrar um tempo nesse final de semana, vou tentar fazer alguma coisa no backend, se não sobrar, já vou entregar assim mesmo, pois já estou satisfeito, já que meu objetivo era focar apenas no frontend desde o início

# 10/05/2021
## Frontend

- Finalização do frontend

- Optimização dos componentes aplicando memoização em determinados componentes

- Acessibilidade aplicando "title" em determinados componentes

- Criação de novas funções e separação de funcionalidades usando os princípios S.O.L.I.D

## Backend

- Criação de um document no banco de dados para as orders feitas pelo usuário

- Criação da rota de tratamento de dados para as orders

## planejamentos

- A aplicação já está pronta, mas quero optimizar mais um pouco
  - amanhã, aplicarei testes unitários para as funções restantes e procurarei por nomes que podem ser melhorados

- Se tudo der certo e eu tiver tempo, amanhã estará tudo feito

# 11/05/2021
## Frontend

- Finalização da aplicação 🥳🎉

- Criação de alguns testes unitários

- Criação da documentação da aplicação