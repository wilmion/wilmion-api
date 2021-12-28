import * as express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hola",
  });
});

app.listen(3000, () => {
  console.log(`App runing on http://localhost:3000`);
});
