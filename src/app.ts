import express from "express";
import config from "config";
import bodyParser from "body-parser";
import routes from "@routes/index";
import connectDatabase from "../config/database";
import 'dotenv/config';

const app = express();
const port: string | number = process.env.APP_PORT || config.get('port');
const databaseURI: string = process.env.DB_URI || config.get('databaseURI');

app.use(bodyParser.json());
connectDatabase(databaseURI);

app.listen(port, () => {
    console.log(`Application is listening on ${port} !`);
    routes(app);
});
