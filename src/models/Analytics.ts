import {Document, Model, model, Schema, Types} from "mongoose";
import {IShortURL} from "@models/ShortUrl";

interface IAnalytics extends Document {
    shortUrl: IShortURL;
}

const analyticsSchema: Schema = new Schema(
    {
        shortUrl: {
            type: Types.ObjectId,
            ref: "shortUrl",
            required: true,
        }
    },
    {
        timestamps: true
    }
);

const analytics: Model<IAnalytics> = model("Analytics", analyticsSchema);

export default analytics;
