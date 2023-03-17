import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
const router = express.Router();

const credentials = './mongo-cert.pem';
const client = new MongoClient('mongodb+srv://cluster0.2o9gb9c.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1
});
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