const db = require("../db/query");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Fetch3Characters = async (req: any, res: any) => {
  const characters = await prisma.characters.findMany()?.categories;
  return characters?.sort(() => Math.random() - 0.5).slice(0, 3) || [];
};
const FetchCharacterByCoords = async (req: any, res: any) => {
  const { coordinateX, coordinateY } = req.body;
  const character = await prisma.characters.findUnique({
    where: {
      coordinateX: {
        gte: coordinateX - 35,
        lte: coordinateX + 35,
      },
      coordinateY: {
        gte: coordinateY - 35,
        lte: coordinateY + 35,
      },
    },
  });
  if (character) {
    return res.status(200).json({ character });
  } else {
    return res.status(404).json({ message: "No character found in range" });
  }
};
const FetchCharacterById = async (req: any, res: any) => {
  const { id } = req.body;
  const character = prisma.characters.findUnique({ where: { id: id } });
  return res.status(200).json({ character });
};

const createCharacter = async (req: any, res: any) => {
  const { name, image, positionX, positionY } = req.body;
  const character = await prisma.characters.create({
    data: {
      character_name: name,
      character_image: image,
      coordinateX: positionX,
      coordinateY: positionY,
    },
  });
  return character;
};
module.exports = {
  Fetch3Characters,
  FetchCharacterByCoords,
  FetchCharacterById,
  createCharacter,
};
