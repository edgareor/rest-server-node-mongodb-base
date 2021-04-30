# Base para *Rest Server con MongoDB*

Recuerden ejecutar el comando `npm install` para obtener los modulos de node necesarios.

Luego ejecutar `node main.js` or `nodemon main.js`

El puerto configurado en el archivo .env es el 8182. Existe una base de datos publica en MongoDB Atlas operativa 100% **URL**:
[https://account.mongodb.com/account/login](https://account.mongodb.com/account/login)

> **NOTA:** *En caso de ocupar una BD distinta debe proporcionar su url de conexion.*

## Metodos de API:

### GET ALL - http://localhost:8182/api
### GET BY ID - http://localhost:8182/api/id
### POST - http://localhost:8182/api

```javascript
{
    "nombre":"Nombre",
    "age": 10
}
```

### PUT - http://localhost:8182/api/id

{
    "age": 10
}

### DELETE - http://localhost:8182/api/id

