const express = require("express");

const app = express();

const users = [
  { username: "taras", password: "hej" },
  { username: "sarat", password: "då" },
];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/login", (req, res) => {
  console.log(req.query);
  console.log(users.find((user) => user.username == req.query.username));
});

app.listen(80);
