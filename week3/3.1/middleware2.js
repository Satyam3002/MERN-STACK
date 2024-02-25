const express = require("express");
const app = express();



function isOldEnoughMiddleware(req,res,next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    }  else {
        res.json({
            msg: " sorry you are not of age yet",
        });
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride2", function(req,res) {
    res.json({
        msg: "you have successfully riden the ride 2",
    });
});

app.get("/ride1",function (req,res) {
    res.json({
        msg: "yOU HAVE SUCCESFULLY RIDEN THE RIDEN 1",
    })
});

app.listen(3000);
