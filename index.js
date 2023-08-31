const express = require('express')
const mongoose = require('mongoose');

async function connectToMongo() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
    console.log('Connected to MongoDB');
    // Your code here
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}


const app = express();
const port =3001;

app.use(express.json())
// ----------  routes 
app.use('/api/auth', require('./routes/auth'))


app.listen(port,()=>{
    console.log("connected to the localhost 3001")
})

connectToMongo();
