/*
  Warnings:

  - Made the column `referalnumber` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `referalnumber` VARCHAR(191) NOT NULL;
