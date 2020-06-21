# Delivery Much Tech Challenge

Solução para desafio Delivery Much Tech Challenge

## Requisito

- Docker

## Configuração

- Renomeie o arquivo `.env.example`  para `.env`
- Altere dentro do arquivo `.env` a Key da API do Giphy `GIPHY_KEY`

Para obter a Key é necessário cadastro na API do Giphy em [Giphy](https://developers.giphy.com/dashboard/)

## Execução

- Clone o repositorio

```
$ git clone https://github.com/jefferson-dev/challenge.git
```

- Com o repositório clonado entre no diretorio usando

```
$ cd challenge
```

- Dentro do diretório execulte
```
$ docker build -t deliverymuch .
```

- Após criar a imagem com docker rode o seguinte comando para iniciar
```
docker run -p 3000:3000 -d --restart unless-stopped deliverymuch
```

## Teste

- Utilize o link `http://localhost:3000/recipes?i=onion,tomato` para realizar a requisição.