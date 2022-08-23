-- AlterTable
ALTER TABLE `article` ADD COLUMN `categoryId` BIGINT UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
