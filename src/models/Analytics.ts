import {Document, Model, model, Schema} from "mongoose";
import {IShortURL} from "@models/ShortUrl";

interface IAnalytics extends Document {
    shortUrl: IShortURL;
}

const analyticsSchema: Schema = new Schema(
    {
        shortUrl: {
            type: Schema.Types.ObjectId,
            ref: "shortUrl",
            required: true,
        }
    },
    {
        timestamps: true
    }
);

const Analytics: Model<IAnalytics> = model("analytics", analyticsSchema);

export default Analytics;
