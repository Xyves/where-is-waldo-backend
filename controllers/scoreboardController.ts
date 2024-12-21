const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
export const fetchScores = async (req: any, res: any) => {
  const results = await prisma.scoreboard.findMany({
    orderBy: {
      time: "asc",
    },
  });
  return res.status(200).json({ results });
};
export const postScore = async (req: any, res: any) => {
  const { username, time } = req.body;
  console.log(username, time);
  if (!username || !time) {
    return res.status(400).json({ error: "username and time are required" });
  }

  const score = await prisma.scoreboard.create({
    data: { username, time },
  });

  res.json(score);
};
module.exports = { fetchScores, postScore };
