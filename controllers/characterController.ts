const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Fetch3Characters = async (req: any, res: any) => {
  try {
    const characters = await prisma.characters.findMany();
    const sortedCharacters = characters
      ?.sort(() => Math.random() - 0.5)
      .slice(0, 3);
    res.status(200).json(sortedCharacters);
  } catch (error) {
    console.error("Error fetching characters", error);
    res.status(500).json({ error: "Failed to fetch characters" });
  }
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
  const { character_name, character_image, coordinateX, coordinateY } =
    req.body;
  const character = await prisma.characters.create({
    data: {
      character_name,
      character_image,
      coordinateX,
      coordinateY,
    },
  });
  res.json(character);
};
module.exports = {
  Fetch3Characters,
  FetchCharacterByCoords,
  FetchCharacterById,
  createCharacter,
};
