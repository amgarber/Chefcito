-- CreateTable
CREATE TABLE "Favourite" (
    "id_user" INTEGER NOT NULL,
    "id_recipe" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Favourite_id_user_id_recipe_key" ON "Favourite"("id_user", "id_recipe");

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_id_recipe_fkey" FOREIGN KEY ("id_recipe") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
