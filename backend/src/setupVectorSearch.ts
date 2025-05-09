import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

async function setupVectorSearch() {
  const client = new MongoClient(process.env.MONGODB_URI!);
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const db = client.db('urban_db');
    const collection = db.collection('urban_data');
    await collection.insertOne({ test: 'Connection successful' });
    console.log('Test document inserted');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
  }
}

setupVectorSearch();