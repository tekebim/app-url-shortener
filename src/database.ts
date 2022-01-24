import mongoose from 'mongoose';
import config from 'config';

async function database() {
    const dbUri: string = config.get('dbUri');
    try {
        await mongoose
            .connect(dbUri)
            .then(() => {
                console.log(`Database connected to ${dbUri}`);
            });
    } catch (e) {
        console.error(e);
    }
}

export default database;
