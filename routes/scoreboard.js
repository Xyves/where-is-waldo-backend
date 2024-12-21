const { Router } = require("express");
const scoreboardRouter = Router();
const scoreboardController = require("../controllers/scoreboardController");

scoreboardRouter.get("/", scoreboardController.fetchScores);

scoreboardRouter.post("/create", scoreboardController.postScore);

module.exports = scoreboardRouter;
