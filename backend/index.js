const express = require("express");
const app = express();
const port = 3000;
const obj = {
  Name: "Ankit",
  Hobby: "Gym",
  Profession: "Software Development",
  Mark: 83,
};
app.get("/api/data", (req, res) => {
  res.send(obj);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});