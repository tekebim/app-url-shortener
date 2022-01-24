import {Express, Request, Response} from "express";
import {createShortUrl, handleRedirect} from "@controllers/shortUrl.controller";

function routes(app: Express) {
    app.get('/check', (req: Request, res: Response) => {
        return res.send('App is working');
    });

    app.post('/api/url', createShortUrl);

    app.get('/:shortId', handleRedirect);
}

export default routes;
