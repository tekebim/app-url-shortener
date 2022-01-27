import {Request, Response} from "express";
import ShortUrl from "@models/ShortUrl";
import Analytics from "@models/Analytics";

export async function createShortUrl(req: Request, res: Response) {
    const {destination} = req.body;
    const newShortUrl = await ShortUrl.create({destination});

    return res.send(newShortUrl);
}

export async function handleRedirect(req: Request, res: Response) {
    const {shortId} = req.params;
    const record = await ShortUrl.findOne({shortId}).lean();

    if (!record) {
        return res.sendStatus(404);
    }

    Analytics.create({ShortUrl: record._id});

    return res.redirect(record.destination);
}

export async function getAnalytics(req: Request, res: Response) {
    const data = await Analytics.find({}).lean();
    return res.send(data);
}
