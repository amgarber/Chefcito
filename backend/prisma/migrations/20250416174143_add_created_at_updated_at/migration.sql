/*
  Warnings:

  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Recipe_Ingredient" (
    "id_recipe" INTEGER NOT NULL,
    "id_ingredient" INTEGER NOT NULL,
    "measurement_unit" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "Instructions" (
    "id" SERIAL NOT NULL,
    "id_recipe" INTEGER NOT NULL,
    "steps_numerations" TEXT NOT NULL,
    "Description" TEXT NOT NULL,

    CONSTRAINT "Instructions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe_Type" (
    "id_RecipeType" SERIAL NOT NULL,
    "id_recipe" INTEGER NOT NULL,
    "id_recipeFilter" INTEGER NOT NULL,

    CONSTRAINT "Recipe_Type_pkey" PRIMARY KEY ("id_RecipeType")
);

-- CreateTable
CREATE TABLE "Recipe_Filter" (
    "id_RecipeFilter" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Recipe_Filter_pkey" PRIMARY KEY ("id_RecipeFilter")
);

-- CreateTable
CREATE TABLE "Shopping_List" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Shopping_List_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shopping_List_Ingredient" (
    "id_ShoppingList" INTEGER NOT NULL,
    "id_Ingredients" INTEGER NOT NULL,
    "quantity" TEXT NOT NULL,
    "bought" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Planner" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Planner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_Ingredient_id_recipe_id_ingredient_key" ON "Recipe_Ingredient"("id_recipe", "id_ingredient");

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_Type_id_recipe_id_recipeFilter_key" ON "Recipe_Type"("id_recipe", "id_recipeFilter");

-- CreateIndex
CREATE UNIQUE INDEX "Shopping_List_Ingredient_id_ShoppingList_id_Ingredients_key" ON "Shopping_List_Ingredient"("id_ShoppingList", "id_Ingredients");

-- CreateIndex
CREATE UNIQUE INDEX "Planner_id_user_key" ON "Planner"("id_user");

-- AddForeignKey
ALTER TABLE "Recipe_Ingredient" ADD CONSTRAINT "Recipe_Ingredient_id_ingredient_fkey" FOREIGN KEY ("id_ingredient") REFERENCES "Ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe_Ingredient" ADD CONSTRAINT "Recipe_Ingredient_id_recipe_fkey" FOREIGN KEY ("id_recipe") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instructions" ADD CONSTRAINT "Instructions_id_recipe_fkey" FOREIGN KEY ("id_recipe") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe_Type" ADD CONSTRAINT "Recipe_Type_id_recipeFilter_fkey" FOREIGN KEY ("id_recipeFilter") REFERENCES "Recipe_Filter"("id_RecipeFilter") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe_Type" ADD CONSTRAINT "Recipe_Type_id_recipe_fkey" FOREIGN KEY ("id_recipe") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shopping_List" ADD CONSTRAINT "Shopping_List_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shopping_List_Ingredient" ADD CONSTRAINT "Shopping_List_Ingredient_id_Ingredients_fkey" FOREIGN KEY ("id_Ingredients") REFERENCES "Ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shopping_List_Ingredient" ADD CONSTRAINT "Shopping_List_Ingredient_id_ShoppingList_fkey" FOREIGN KEY ("id_ShoppingList") REFERENCES "Shopping_List"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Planner" ADD CONSTRAINT "Planner_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
