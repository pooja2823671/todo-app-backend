import { MongoClient } from "mongodb";

let isDbConnected = null;

const CLUSTER_URL = process.env.MONGO_URI;
const client = new MongoClient(CLUSTER_URL);

//async make a function asynchronous, we can use await
async function connectToDatabase(dbName) {
    if (isDbConnected === null) {
        try {
            await client.connect();
            isDbConnected = client.db(dbName)
            console.log("database connected successfully")
        } catch (e) {
            console.log(`database connection, error ${e.message}`)
        }
    }
    else {
        console.log("database already connected")
    }
    return isDbConnected;
}

export default connectToDatabase;