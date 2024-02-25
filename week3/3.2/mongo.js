const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://satyamlaheri3:Password123@cluster0.xmgll38.mongodb.net/");

// Corrected the model name to use 'User' instead of 'Users'
const User = mongoose.model('User', { name: String, email: String, password: String });

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    // Corrected the variable name to use 'User' instead of 'Userser'
    const existingUser = await User.findOne({ email: username });

    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });

    // Make sure to use async/await or handle the promise returned by save()
    await user.save();

    res.json({
        "msg": "User created successfully"
    });
});

// Assuming you want the app to listen on a specific port, add this line
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
