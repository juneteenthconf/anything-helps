import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
const router = express.Router();



dotenv.config();
const uri = process.env.mongodb_conn;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    await client.connect();
    const database = client.db("anything-helps");
    const collection = database.collection("volunteer-opportunities");
    const volunteerOpportunities = await collection.find().toArray();
    res.send(volunteerOpportunities);
  } finally {
    await client.close();
  }
});

export default router;