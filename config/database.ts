import mongoose from 'mongoose';

function connectDatabase(databaseUri: string) {
    try {
        mongoose
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
