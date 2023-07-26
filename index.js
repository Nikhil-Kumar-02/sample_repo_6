const express = require('express')
const app = express();
const { PORT } = require('./serverConfig');

const startServer = async () => {

    app.listen(PORT, () => {
        console.log(`server is running on port: ${PORT}`)
      })

}

startServer();