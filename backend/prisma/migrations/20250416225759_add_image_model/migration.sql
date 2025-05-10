/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Recipe` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[imageId]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Recipe"
    ADD COLUMN "imageId" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN "picture" TEXT;

-- CreateTable
CREATE TABLE "Image" (
                         "id" SERIAL NOT NULL,
                         "url" TEXT NOT NULL,
                         CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_imageId_key" ON "Recipe"("imageId");

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
