import mongoose from 'mongoose';

async function connectDatabase(databaseUri: string) {
    try {
        await mongoose
            .connect(databaseUri)
            .then(() => {
                console.log(`Database connected to ${databaseUri}`);
            });
    } catch (e) {
        console.error(e);
        // Exit process with failure
        return process.exit(1);
    }
}

export default connectDatabase;
