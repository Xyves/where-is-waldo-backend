const scoreboardRouter = express.Router();
const scoreboardController = require("../controllers/scoreboardController");

scoreboardRouter.get("/", scoreboardController.fetchScores);

scoreboardRouter.post("/", scoreboardController.postScore);

module.exports = scoreboardRouter;
