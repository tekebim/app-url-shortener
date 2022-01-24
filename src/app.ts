import express from 'express';
import config from 'config';
import routes from "./routes";
import database from "./database";
import bodyParser from "body-parser";

const app = express();
const port = config.get('port');

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Application is listening on ${port}`);
    database();
    routes(app);
})
