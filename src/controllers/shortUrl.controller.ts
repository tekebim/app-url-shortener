import {Request, Response} from "express";
import shortUrl from "@models/shortUrl.model";

export async function createShortUrl(req: Request, res: Response) {
    const {destination} = req.body;
    const newShortUrl = await shortUrl.create({destination});

    return res.send(newShortUrl);
}
