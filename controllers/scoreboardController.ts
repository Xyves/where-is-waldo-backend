const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
export const fetchScores = async (req: any, res: any) => {
  const results = await prisma.scoreboard.findMany();
  return res.status(200).json({ results });
};
export const postScore = async (req: any, res: any) => {
  const { username, time } = req.body;
  if (!username || !time) {
    return res.status(400).json({ error: "username and time are required" });
  }

  try {
    const score = await prisma.scoreboard.create({
      data: { username, time },
    });

    res.status(201).json(score);
  } catch (error) {
    console.error("Error creating comment:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the new score" });
  }
};
module.exports = { fetchScores, postScore };
