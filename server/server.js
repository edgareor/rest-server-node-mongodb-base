const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../db/connect');

class Server {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        dbConnection();
    }

    routes() {
        this.app.use('/api', require('../routes/routes'));
    }

    start() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Levantando puerto: ${process.env.PORT}`);
        })
    }
}

module.exports = Server;