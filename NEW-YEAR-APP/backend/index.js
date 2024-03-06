// write basic express boiler code 
const express = require("express");
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json())
app.use(cors({
  //origin: "http://localhost:5173"
}));

app.post("/todos",async function(req,res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
          msg: "you sent the wrong inputs",
        })
        return;
    }
  await todo.create({
    tittle: createPayload.title,
    description: createPayload.description,
  })

  res.json ({
    msg:"Todo created"
  })

})

app.get("/todos",async function(req,res) {
const todos = await todo.find({});
 res.json({
  todos
 })

})

app.put("/completed", async function(req,res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
   await todos.update({
    _id: req.body.id
   }, {
    completed:true
  })

   res.json({
    msg:"Todo marked as completed"
   })
})

app.listen(3001);