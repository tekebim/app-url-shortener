import {Express, Request, Response} from "express";
import {createShortUrl, handleRedirect, getAnalytics} from "@controllers/ShortUrlController";
import validateRecord from "@middleware/ValidateRecord";
import shortUrlSchema from '@schemas/ShortUrl';

function routes(app: Express) {
    // Test endpoint to check app health
    app.get('/check', (req: Request, res: Response) => {
        return res.send('App is working');
    });
    // Post shortUrl endpoint
    app.post('/api/url', validateRecord(shortUrlSchema), createShortUrl);
    // Get record endpoint by shortId
    app.get('/:shortId', handleRedirect);
    // Get analytics endpoint
    app.get('/api/analytics', getAnalytics);
}

export default routes;
