const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const cors = require("cors");
app.use(cors());
const scoreRouter = require("./routes/scoreboard");
const charactersRouter = require("./routes/characters");
const commentsRouter = require("./routes/commentsRouter");
app.use((req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/characters", charactersRouter);
app.use("/api/scoreboard", scoreRouter);

app.all("*", (req: any, res: any) => {
  try {
    res.status(404).json({
      timestamp: Date.now(),
      msg: "No root matches your request",
      code: 404,
    });
  } catch (e: any) {
    throw new Error(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
type ErrorResponse = {
  timestamp: number;
  msg: string;
  code: number;
};
