const { Router } = require("express");
const scoreboardRouter = Router();
const scoreboardController = require("../controllers/scoreboardController");

scoreboardRouter.get("/", scoreboardController.fetchScores);

scoreboardRouter.post("/", scoreboardController.postScore);

module.exports = scoreboardRouter;
