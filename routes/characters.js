const { Router } = require("express");
const characterRouter = Router();
const characterController = require("../controllers/characterController");

// Fetch 3 characters
characterRouter.get("/", characterController.Fetch3Characters);

// Find Character By coordinates provided by user click
characterRouter.get("/coordinates", characterController.FetchCharacterByCoords);

//  Fetch Character By id
characterRouter.get("/:id", characterController.FetchCharacterById);

// Create New Character
characterRouter.post("/create", characterController.createCharacter);
module.exports = characterRouter;
