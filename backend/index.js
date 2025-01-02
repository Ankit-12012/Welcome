import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
// const port = process.env.PORT || 3000;
const obj = {
  Name: "Ankit",
  Hobby: "Gym",
  Profession: "Software Development",
  Mark: 83,
};
app.get("/api/data", (req, res) => {
  res.json(obj);
});
app.get("/", (req, res) => {
  res.send("hello Ankit");
});
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
export default app;
