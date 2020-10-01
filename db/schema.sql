DROP SCHEMA IF EXISTS `burgersDB`;

CREATE SCHEMA
`burgersDB` ;
USE `burgersDB`;

CREATE TABLE `burgersDB`.`burgers`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR
(50) NOT NULL,
  `devoured` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY
(`id`));
