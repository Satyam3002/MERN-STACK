const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://satyamlaheri3:o3A4k3FSuvgcq8Pf@cluster0.zlsnbra.mongodb.net/")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}