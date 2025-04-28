/*
  Warnings:

  - You are about to drop the column `images` on the `Ingredients` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ingredients" DROP COLUMN "images";

-- CreateTable
CREATE TABLE "Ingredient_Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "ingredientId" INTEGER NOT NULL,

    CONSTRAINT "Ingredient_Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ingredient_Image" ADD CONSTRAINT "Ingredient_Image_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
