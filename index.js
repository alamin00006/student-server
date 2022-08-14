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
      await client.connect();
      const userCollection = client.db('allUsers').collection('users');
      const teacherCollection = client.db('allTeacher').collection('teachers');
      const presentCollection = client.db('allStudent').collection('student');
    

        app.get('/student', async (req, res) =>{
            const student = await userCollection.find().toArray();
           
            res.send(student)
          })

        app.get('/teacher', async (req, res) =>{
            const teacher = await teacherCollection.find().toArray();
           
            res.send(teacher)
          })

      
    app.post('/teacher',  async(req, res) =>{
      const teacher = req.body;
      const result = await teacherCollection.insertOne(teacher);
      res.send(result);
      })

      app.get('/present', async (req, res) =>{
        const present = await presentCollection.find().toArray();
        res.send(present)
      })
      app.get('/absent', async (req, res) =>{
        const absent = await presentCollection.find().toArray();
      res.send(absent)
      })

    app.post('/present',  async(req, res) =>{
      const present = req.body;
      const result = await presentCollection.insertOne(present);
      res.send(result);
      })
    app.post('/absent',  async(req, res) =>{
      const absent = req.body;
      const result = await presentCollection.insertOne(absent);
      res.send(result);
      })


    }
    finally{

    }
}
run().catch(console.dir)





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })