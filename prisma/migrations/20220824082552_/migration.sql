/*
  Warnings:

  - Added the required column `updatedAt` to the `article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
