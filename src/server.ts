import app from "@/src/app";
import config from "config";
import connectDatabase from "~/config/database";

const port: string | number = process.env.APP_PORT || config.get('port');
const databaseURI: string = process.env.DB_URI || config.get('databaseURI');

connectDatabase(databaseURI);

app.listen(port, () => {
    console.log(`Application is listening on ${port} !`);
});
