/*
API gateway faite a partir de ce tuto sur medium : https://medium.com/geekculture/create-an-api-gateway-using-nodejs-and-express-933d1ca23322
Prochain ajouts :
- Authentication
- Rate limiting
- Real routes to real microservices
 */

const express = require('express')

const {ROUTES} = require("./route");

const {setupLogging} = require("./logging");
const {setupProxies} = require("./proxy");

const app = express()
const port = 3000;


setupLogging(app);
setupProxies(app, ROUTES);

app.listen(port, () => {
    console.log(`The app is now listening at http://localhost:${port}`)
})