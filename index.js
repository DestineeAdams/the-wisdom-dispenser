const express = require('express');
const { ConnectionCheckOutFailedEvent } = require('mongodb');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();


app.set('view engine', 'ejs')
app.use(express.static('public'))


const uri = `mongodb+srv://${process.env.mongodbUSERNAME}:${process.env.mongodbPASS}@cluster0.rusjhfg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


app.get('/', function (req, res) {
    res.render('index.ejs')
})

app.listen(process.env.PORT, function () {
    console.log(`listening on http://localhost:${process.env.PORT}`)
})























/*
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});
  
  
async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
  */