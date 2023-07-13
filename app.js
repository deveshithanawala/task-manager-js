const connectDB= require('./app/db/connect')
const express = require('express');
const app = express();
const tasks = require('./app/routes/tasks');
require('dotenv').config();

//middleware

app.use(express.json())

// routes

app.get("/api/v1/hello",(req,res)=>{
    res.send('Task Manager App')
}
)
app.use("/api/v1/tasks",tasks)

// get("/api/v1/tasks")--> get all tasks 
// get("/api/v1/tasks/:id")--> get a single task
// post("/api/v1/tasks") --> create a task
// patch("/api/v1/tasks/:id")--> update a single task 
// delete("/api/v1/tasks/:id") --> delete a single task 

const port = 4000;

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening at port ${port}...`));
    }catch(error){
        console.log(error);

    }

}

start()


