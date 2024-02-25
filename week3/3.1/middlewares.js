const express = require("express");
const app = express();

// ---> BAD WAY <-----

// app.get("/health-checkup", function(req, res) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if (username !== "harkirat" || password !== "pass") {
//         res.status(400).json({"msg": "something is up with your inputs"});
//         return;
//     }

//     if (kidneyId !== 1 && kidneyId !== 2) {
//         res.status(400).json({"msg": "something is up with your inputs"});
//         return;
//     }

//     res.json({
//         msg: "your kidney is fine!"
//     });
// });


// app.get("/kidney-check", function(req, res) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if (username !== "harkirat" || password !== "pass") {
//         res.status(400).json({"msg": "something is up with your inputs"});
//         return;
//     }

//     if (kidneyId !== 1 && kidneyId !== 2) {
//         res.status(400).json({"msg": "something is up with your inputs"});
//         return;
//     }

//     res.json({
//         msg: "your kidney is fine!"
//     });
// });


function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username !== "harkirat" || password !== "pass") {
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if (kidneyId !== "1" && kidneyId !== "2") {
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        next();
    }
}

app.get("/health-checkup",userMiddleware,kidneymiddleware,function(req,res) {
    res.send("your heart is healthy");
});

app.get("/heart-check",userMiddleware,kidneymiddleware,function(req,res) {
    res.send("your heart is healthy");
});


app.listen(3001);
