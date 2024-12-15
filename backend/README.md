# Sistema de Votação

Este projeto foi desenvolvido para o desafio de desenvolvimento de uma API de votação para uma cooperativa.

## Technologias Utilizadas

- Java 23
- Spring Boot
- Maven
- MongoDB
- Docker
- Docker Compose

## Estrutura do Projeto

Esse projeto foi criado utilizando a abordagem de design
de DDD (Domain Driven Development) e "Clean Architecture". 


- `src/main/java/com/votacao/desafiovotacao`: Contém o código principal do aplicativo.
    - `application`: Contém controladores e DTOs.
    - `domain`:Contém entidades, serviços e exceções.
    - `infra`: Contém as interfaces dos repositórios.


### Prerequisitos

- Java 23
- Maven
- MongoDB
- Docker
- Docker Compose

## Alguns CPFs para teste

- 086.492.750-95
- 984.928.230-46
- 582.106.150-41
- 263.220.420-84
- 333.535.550-48


## Como executar o projeto

Para rodar o projeto é necessário ter o Java 23 e o Maven instalados.
Assim como estar com o docker e o docker-compose instalados e funcionando.

### Primeiro instalar as dependências
```

```

### Depois de executar o projeto e com o docker funcionando
```
docker compose up -d
```



### Explicação breve do porquê das escolhas tomadas durante o desenvolvimento da solução

A escolha de usar o design DDD e o clean architecture foi feita para facilitar a manutenção e a escalabilidade do projeto.
Tendo sempre em vista uma boa organização para o bom entendimento do fluxo de dados e ações, o que
permite que o código seja facilmente compreendido e alterado.

Com isso em mente o projeto foi divido em 3 camadas, a de aplicação onde ficam os controladores e os DTOS
que se comunicam com a camada de domínio, onde ficam as entidades, serviços e exceções.
E os serviços se utilizam das entidade e dos repositórios que estão na camada de infraestrutura.
E as entidades são o núcleo do projeto, onde ficam as regras de negócio.

O uso do MongoDB foi escolhido por ser um banco de dados NoSQL que é mais performático que um banco relacional, isso ocorre devido
ao MongoDB ser um banco de dados CP (do Teorema CAP) o que oferece consistência e tolerância à partição em detrimento da disponibilidade.

Portanto o uso do MongoDB é ideal para o cenário de votação permite que que existam centenas de milhares de votos, conforme exigido 
pela "Tarefa Bônus 2 - Performance".

Foi criado o serviço para validar o CPF informado conforme solicitado na "Tarefa Bônus 1 - Validação do Associado".
Contudo o quesito de retornar "ABLE_TO_VOTE" ou "UNABLE_TO_VOTE" não é utilizado na criação de associado, há apenas
um endpoint para sua utilização, tendo em vista que não há razão para colocar algo aleatório no código. Ao contrário da
validação do CPF que foi adicionado ao código para garantir que não há CPFs inválidos no banco de dados.


A atualização de se uma sessão está aberta ou encerrada se dá quando ela é procurada.

O Status da pauta não fecha, pois não há um limite para quantas sessões podem ser criadas nela.


### Versionamento da API

"Como você versionaria a API da sua aplicação? Que estratégia usar?"

A versão da API pode ser controlada por meio da URL. Aconselhável quando a API sofre mudanças significativas.
Por exemplo, a versão 1 da API seria acessada através de `/api/v1/`.

Outra estratégia seria usar o content-type para controlar a versão da API, 
por exemplo: content-type: `application/vnd.api.v1+json`. Aconselhável quando a API sofre
mudanças incrementais ou mesmo mundanças de no conteúdo trocado com o cliente.

Portanto, eu versionaria a API conforme a mundança que será feita no código.


## Como rodar o backend do projeto

 Para rodar o projeto é necessário ter o Java e o Maven e o Docker funcionando.

### Subir o banco de dados
```
docker compose up -d
```


- Execute a aplicação Spring Boot.
```
mvn clean
```
```
mvn spring-boot:run
```





### Para acessar a aplicação:
```
http://localhost:8080/
```
