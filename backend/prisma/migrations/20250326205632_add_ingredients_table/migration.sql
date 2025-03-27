-- CreateTable
CREATE TABLE "Ingredients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "images" TEXT,

    CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("id")
);
