-- CreateTable
CREATE TABLE "Scoreboard" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Scoreboard_pkey" PRIMARY KEY ("id")
);
