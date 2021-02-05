/*
  Warnings:

  - You are about to drop the `visitor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `firstName` to the `reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `visitor` DROP FOREIGN KEY `visitor_ibfk_1`;

-- AlterTable
ALTER TABLE `reservation` ADD COLUMN     `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN     `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN     `email` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `visitor`;
