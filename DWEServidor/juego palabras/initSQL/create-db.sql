SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `juegoPalabra` DEFAULT CHARACTER SET utf8 ;
USE `juegoPalabra`;

CREATE TABLE IF NOT EXISTS `juegoPalabra`.`equipo` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `emblema` VARCHAR(100) NOT NULL,
    `puntuacion` INT NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `juegoPalabra`.`jugador` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user` VARCHAR(45) NOT NULL,
    `score` INT NOT NULL,
    `avatar` VARCHAR(100) NOT NULL,
    `equipo_id` INT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_Jugador_Equipo_idx` (`equipo_id` ASC) VISIBLE,
    CONSTRAINT `fk_Jugador_Equipo`
    FOREIGN KEY (`equipo_id`)
    REFERENCES `juegoPalabra`.`equipo` (`id`)
    ON DELETE SET NULL
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `juegoPalabra`.`partida` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `start_time` DATETIME NOT NULL,
    `end_time` DATETIME NOT NULL,
    `intentos` TINYINT(2) NOT NULL,
    `palabra_ronda` VARCHAR(45) NOT NULL,
    `puntuacion` INT NOT NULL,
    `jugador_id` INT NOT NULL,
    `juego_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_Partida_Jugador_idx` (`jugador_id` ASC) VISIBLE,
    INDEX `fk_Partida_Juego_idx` (`juego_id` ASC) VISIBLE,
    CONSTRAINT `fk_Partida_Jugador`
    FOREIGN KEY (`jugador_id`)
    REFERENCES `juegoPalabra`.`jugador` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_Partida_Juego`
    FOREIGN KEY (`juego_id`)
    REFERENCES `juegoPalabra`.`juego` (`id_juego`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `juegoPalabra`.`juego` (
    `id_juego` INT NOT NULL AUTO_INCREMENT,
    `dificultad_juego` ENUM('FACIL', 'NORMAL', 'DIFICIL') NOT NULL,
    `descripcion` VARCHAR(500) NOT NULL,
    `intentos_dificultad` INT NOT NULL,
    PRIMARY KEY (`id_juego`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `juegoPalabra`.`palabra` (
    `id_palabra` INT NOT NULL AUTO_INCREMENT,
    `id_juego` INT NOT NULL,
    `palabra` VARCHAR(45) NOT NULL,
    `dificultad_palabra` ENUM('FACIL', 'NORMAL', 'DIFICIL') NOT NULL,
    PRIMARY KEY (`id_palabra`),
    INDEX `fk_Palabra_Juego_idx` (`id_juego` ASC) VISIBLE,
    CONSTRAINT `fk_Palabra_Juego`
    FOREIGN KEY (`id_juego`)
    REFERENCES `juegoPalabra`.`juego` (`id_juego`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
