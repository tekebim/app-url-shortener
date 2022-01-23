import express from 'express';
import config from 'config';
import routes from "./routes";

const app = express();
const port = config.get('port');

app.listen(port, () => {
    console.log(`Application is listening on ${port}`);
    routes(app);
})
