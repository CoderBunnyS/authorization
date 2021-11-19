const express = require("express");
const app = express()

app.get("/public", (req, res) => {
    res.status(200).send("Hello Public");
});

app.get("/private", (req, res) => {
    res.status(200).send("Hello Private")
});
app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(8888, () => console.log("API started on port 8888"))
;