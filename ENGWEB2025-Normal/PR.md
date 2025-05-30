# Teste EngWeb2025

## Dataset
O dataset não teve transformações significativas, apenas a renomeação do campo id para _id e passagem para o formato de JsonArray.

## Comandos Importação Mongo
- docker cp eurovision_transformed.json mongoEW:/tmp
- docker exec -it mongoEW sh
- cd tmp
- mongoimport -d eurovision -c edicoes eurovision_transformed.json --jsonArray

## Comandos de Execução
- Para executar o ex1 (cd ex1 e npm start).
- Para executar o ex2 (cd ex2 e npm start).