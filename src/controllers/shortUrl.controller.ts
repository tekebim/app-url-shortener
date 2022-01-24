import {Request, Response} from "express";
import shortUrl from "@models/shortUrl.model";
import analytics from "@models/analytics.model";

export async function createShortUrl(req: Request, res: Response) {
    const {destination} = req.body;
    const newShortUrl = await shortUrl.create({destination});

    return res.send(newShortUrl);
}

export async function handleRedirect(req: Request, res: Response) {
    const {shortId} = req.params;
    const record = await shortUrl.findOne({shortId}).lean();

    if (!record) {
        return res.sendStatus(404);
    }

    analytics.create({shortUrl: record._id});
    return res.redirect(record.destination);
}

export async function getAnalytics(req: Request, res: Response) {
    const data = await analytics.find({}).lean();
    return res.send(data);
}
