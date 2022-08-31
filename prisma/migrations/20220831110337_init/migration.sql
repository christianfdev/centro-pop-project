-- CreateTable
CREATE TABLE `Assisted` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `social_name` VARCHAR(191) NULL,
    `mother_name` VARCHAR(191) NULL,
    `father_name` VARCHAR(191) NULL,
    `sex` VARCHAR(191) NULL,
    `birth_data` VARCHAR(191) NULL,
    `nationality` VARCHAR(191) NULL,
    `phone_number` VARCHAR(191) NULL,
    `city_residence` VARCHAR(191) NULL,
    `rg` VARCHAR(191) NULL,
    `org_e` VARCHAR(191) NULL,
    `uf` VARCHAR(191) NULL,
    `dt_e` VARCHAR(191) NULL,
    `cpf` VARCHAR(191) NULL,
    `reservist` VARCHAR(191) NULL,
    `work_wallet` VARCHAR(191) NULL,
    `birth_cert` VARCHAR(191) NULL,
    `nis` VARCHAR(191) NULL,
    `benefits` VARCHAR(191) NULL,
    `situation` VARCHAR(191) NOT NULL,
    `schooling` VARCHAR(191) NULL,
    `relactory` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Familiar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NULL,
    `assistedId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Evolution` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` VARCHAR(191) NOT NULL,
    `demand` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'CONCLUIDO',
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `assistedId` INTEGER NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `assignment` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Familiar` ADD CONSTRAINT `Familiar_assistedId_fkey` FOREIGN KEY (`assistedId`) REFERENCES `Assisted`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evolution` ADD CONSTRAINT `Evolution_assistedId_fkey` FOREIGN KEY (`assistedId`) REFERENCES `Assisted`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evolution` ADD CONSTRAINT `Evolution_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
