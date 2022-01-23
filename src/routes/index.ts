import {Express, Request, Response} from "express";

function routes(app: Express) {
    app.get('/check', (req: Request, res: Response) => {
        return res.send('App is working');
    });
}

export default routes;
