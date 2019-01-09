const express = require("express");
const app = express();

app.use(express.static(__dirname + "/View"));
app.use(express.static(__dirname + "/Script"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(3000);
console.log("Running at port 3000");
