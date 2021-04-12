# Base para *Rest Server para MongoDB*

Recuerden ejecutar el comando `npm install` para obtener los modulos de node necesarios.

Luego ejecutar `node main.js` or `nodemon main.js`

```
El puerto configurado en el archivo .env es el 8182. 

Existe una base de datos publica en MongoDB Atlas operativa 100%. Url: mongodb+srv://user_node:XPwxNWgT6yF6TzV@clustereojedar.5zyhw.mongodb.net/test
```

## Metodos de API:

### GET ALL - http://localhost:8182/api
### GET BY ID - http://localhost:8182/api/id
### POST - http://localhost:8182/api

{
    "nombre":"Nombre",
    "age": 10
}

### PUT - http://localhost:8182/api/id

{
    "age": 10
}

### DELETE - http://localhost:8182/api/id

