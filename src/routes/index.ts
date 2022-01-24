import {Express, Request, Response} from "express";
import {createShortUrl, handleRedirect} from "@controllers/shortUrl.controller";
import validateResource from "~/src/middleware/validateResource";
import shortUrlSchema from '~/src/schemas/createShortUrl.schema';

function routes(app: Express) {
    app.get('/check', (req: Request, res: Response) => {
        return res.send('App is working');
    });

    app.post('/api/url', validateResource(shortUrlSchema), createShortUrl);

    app.get('/:shortId', handleRedirect);
}

export default routes;
