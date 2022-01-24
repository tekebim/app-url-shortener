import express from 'express';
import config from 'config';
import routes from "./routes";
import database from "./database";

const app = express();
const port = config.get('port');

app.listen(port, () => {
    console.log(`Application is listening on ${port}`);
    database().then(r => {
        console.log(r)
    });
    routes(app);
})
