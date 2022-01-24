import express from 'express';
import config from 'config';
import bodyParser from "body-parser";
import routes from "@routes/index";
import database from "./database";

const app = express();
const port = config.get('port');

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Application is listening on ${port} !`);
    database();
    routes(app);
})
