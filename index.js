const express = require('express')
const app = express()
const port = process.env.PORT||5000;
const cors = require('cors');


// studentattendance
// c2JQuWdgaoqtQFcB
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://studentattendance:c2JQuWdgaoqtQFcB@cluster0.0zpwoxc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        app.get('/user' , verifyJWT, async (req, res) =>{
            const user = await userCollection.find().toArray();
            console.log(user)
            res.send(user)
          })


    }
    finally{

    }
}
run().catch(console.dir)





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })