import {Express, Request, Response} from "express";
import {createShortUrl, handleRedirect, getAnalytics} from "@controllers/ShortUrlController";
import validateRecord from "@middleware/ValidateRecord";
import shortUrlSchema from '@schemas/ShortUrl';

function routes(app: Express) {
    app.get('/check', (req: Request, res: Response) => {
        return res.send('App is working');
    });

    app.post('/api/url', validateRecord(shortUrlSchema), createShortUrl);

    app.get('/:shortId', handleRedirect);

    app.get('/api/analytics', getAnalytics);
}

export default routes;
