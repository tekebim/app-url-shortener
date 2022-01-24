import {Express, Request, Response} from "express";
import {createShortUrl} from "@controllers/shortUrl.controller";

function routes(app: Express) {
    app.get('/check', (req: Request, res: Response) => {
        return res.send('App is working');
    });

    app.post('/api/url', createShortUrl);
}

export default routes;
