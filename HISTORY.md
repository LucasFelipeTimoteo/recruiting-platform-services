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