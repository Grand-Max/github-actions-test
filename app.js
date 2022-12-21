
const express = require("express");
const app = express();
 
app.get("/", function(request, response){
    response.end("Hello from Express!");
});

app.get("/status", (req, res) => res.status(200).json({ status: "ok" }));

app.listen(3000);
