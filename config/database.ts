import config from 'config';
import mongoose from 'mongoose';

async function connectDatabase() {
    try {
        const dbUri: string = config.get('dbUri');
        await mongoose
            .connect(dbUri)
            .then(() => {
                console.log(`Database connected to ${dbUri}`);
            });
    } catch (e) {
        console.error(e);
        // Exit process with failure
        process.exit(1);
    }
}

export default connectDatabase;
