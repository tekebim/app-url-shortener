import mongoose, {Document} from "mongoose";
import {customAlphabet} from 'nanoid';

const generateCustomNanoId = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 9);

export interface ShortURL extends Document {
    shortId: string;
    destination: string;
}

const schema = new mongoose.Schema({
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

const shortUrl = mongoose.model<ShortURL>('shortUrl', schema);

export default shortUrl;
