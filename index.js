const express = require('express')
const app = express();
const { PORT } = require('./serverConfig');
const apiRoutes = require('./router/index');

app.use('/' , apiRoutes);

const startServer = async () => {

    app.listen(PORT, () => {
        console.log(`interservice server is running on port: ${PORT}`)
      })

}

startServer();