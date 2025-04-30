const express = require('express');
const app = express();

require('dotenv').config();


const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



function genertorEndpoint(quote, author) {
  let endpoint = `api/${quote}/${author}`;
  let url = `https://wisdomdisperserapi.onrender.com/${endpoint}`;
    
  return url;
}


app.get('/', function (req, res) {

  fetch('https://wisdomdisperserapi.onrender.com/api/random')
  .then(
    response => response.json()
  )
  .then(
    (data) => {
      // adds quote to the database
      let sellectedQuote = data[0]["quotes"][Math.floor(Math.random() * data[0]["quotes"].length)];      
      res.render('index.ejs', { "quote": sellectedQuote, "author": data[0]["author"]});
    }
  )
  .catch(error => console.error('Error:', error));
})

/* */
app.post('/submit-quote', (req, res) => {
  const { quote, author } = req.body;

  
  const uri = genertorEndpoint(req.body.quote, req.body.author);
  
  fetch(uri, {
    method: 'POST'
  })
  .then((response) => {
        
    if (response.status == 204) {
      fetch(uri, {
        method: 'PUT'
      })
      .then((response) => {
          if (response.status == 204) {
            console.log(response.status);
            
            
            res.json({message: "quote was already in the data base!", "status": response.status});
            res.end();
          }
          
          else{
            console.log(response.status);
            res.json({message: "quote was added to data base!", "status": response.status});
            res.end();
          }

        }
      )
      .catch(error => console.error('Error:', error));
    } 
    
    else {
      console.log(response.status);
      res.json({message: "quote and person was added to data base!", "status": response.status});
      res.end();
    }
    
  })
  .catch(error => console.error('Error:', error));
  
})



app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
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