import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://junaidsyed:uuSxCpaNRutArQ4f@cluster0.pmge6tn.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db;
  
  console.log(db, client, collection, document);

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}

// mongodb+srv://junaidsyed:uuSxCpaNRutArQ4f@cluster0.ntrwp.mongodb.net/events?retryWrites=true&w=majority

// mongodb+srv://junaidsyed:uuSxCpaNRutArQ4f@cluster0.pmge6tn.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0