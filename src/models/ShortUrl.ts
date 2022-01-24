import {Document, Model, model, Schema} from "mongoose";
import {customAlphabet} from 'nanoid';

export interface IShortURL extends Document {
    shortId: string;
    destination: string;
}

const generateCustomNanoId = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 9);

const shortUrlSchema: Schema = new Schema({
    shortId: {
        type: String,
        unique: true,
        required: true,
        default: () => generateCustomNanoId(),
    },
    destination: {
        type: String,
        required: true,
    }
});

const ShortUrl: Model<IShortURL> = model('shortUrl', shortUrlSchema);

export default ShortUrl;
