/*
  Warnings:

  - You are about to drop the column `countriesVisited` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `countryInfoDisplayIsOpen` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `countryListContainer` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `countrySelected` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `firstVisitToSite` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `helpContainer` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `imagesContainer` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `settingsMenuIsOpen` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `welcomeContainer` on the `Setting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Setting" DROP COLUMN "countriesVisited",
DROP COLUMN "countryInfoDisplayIsOpen",
DROP COLUMN "countryListContainer",
DROP COLUMN "countrySelected",
DROP COLUMN "firstVisitToSite",
DROP COLUMN "helpContainer",
DROP COLUMN "imagesContainer",
DROP COLUMN "settingsMenuIsOpen",
DROP COLUMN "welcomeContainer";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "countriesVisited" TEXT[],
ADD COLUMN     "firstVisitToSite" BOOLEAN NOT NULL DEFAULT true;
