-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `profilePicture` VARCHAR(255) NOT NULL DEFAULT 'default.png',
    `type` VARCHAR(50) NOT NULL DEFAULT 'user',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Player` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` TEXT NOT NULL,
    `team` VARCHAR(100) NOT NULL,
    `role` VARCHAR(100) NOT NULL,
    `game` VARCHAR(100) NOT NULL,
    `type` VARCHAR(50) NOT NULL DEFAULT 'player',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `League` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `rounds` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `type` VARCHAR(50) NOT NULL DEFAULT 'league',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Game` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `image` VARCHAR(200) NOT NULL,
    `description` TEXT NOT NULL,
    `developer` VARCHAR(100) NOT NULL,
    `releaseDate` DATE NOT NULL,
    `type` VARCHAR(50) NOT NULL DEFAULT 'game',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LeagueTeam` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `leagueName` VARCHAR(100) NOT NULL,
    `teamName` VARCHAR(100) NOT NULL,
    `round1` BOOLEAN NOT NULL,
    `round1Opponent` VARCHAR(100) NOT NULL,
    `round2` BOOLEAN NOT NULL,
    `round2Opponent` VARCHAR(100) NOT NULL,
    `round3` BOOLEAN NOT NULL,
    `round3Opponent` VARCHAR(100) NOT NULL,
    `round4` BOOLEAN NOT NULL,
    `round4Opponent` VARCHAR(100) NOT NULL,
    `round5` BOOLEAN NOT NULL,
    `round5Opponent` VARCHAR(100) NOT NULL,
    `round6` BOOLEAN NOT NULL,
    `round6Opponent` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `game` VARCHAR(100) NOT NULL,
    `country` VARCHAR(100) NOT NULL,
    `image` VARCHAR(200) NOT NULL,
    `score` INTEGER NOT NULL,
    `position` INTEGER NOT NULL,
    `type` VARCHAR(50) NOT NULL DEFAULT 'team',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
