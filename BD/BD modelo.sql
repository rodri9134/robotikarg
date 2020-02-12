-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema proyecto
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema proyecto
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `proyecto` DEFAULT CHARACTER SET utf8 ;
USE `proyecto` ;

-- -----------------------------------------------------
-- Table `proyecto`.`lenguaje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`lenguaje` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `tipoLenguaje` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`roles` (
  `id` INT NOT NULL,
  `tipoRol` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`usuarios` (
  `id` INT NOT NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `telefono` INT(9) NULL,
  `idRol` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuarios_roles1_idx` (`idRol` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_roles1`
    FOREIGN KEY (`idRol`)
    REFERENCES `proyecto`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`categorias` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`tienda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`tienda` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `horario` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`articulos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`articulos` (
  `id` INT NOT NULL,
  `marca` VARCHAR(45) NULL,
  `modelo` VARCHAR(45) NULL,
  `descripcion` TEXT NULL,
  `referencia` VARCHAR(45) NULL,
  `coste_aprox` DECIMAL(2,4) NULL,
  `imagen` VARCHAR(45) NULL,
  `idCategoria` INT NOT NULL,
  `idTienda` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_articulos_categorias_idx` (`idCategoria` ASC) VISIBLE,
  INDEX `fk_articulos_tienda1_idx` (`idTienda` ASC) VISIBLE,
  CONSTRAINT `fk_articulos_categorias`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `proyecto`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_articulos_tienda1`
    FOREIGN KEY (`idTienda`)
    REFERENCES `proyecto`.`tienda` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`intrucciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`intrucciones` (
  `id` INT NOT NULL,
  `instruccion` VARCHAR(45) NULL,
  `accion` VARCHAR(45) NULL,
  `idLenguaje` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_intrucciones_lenguaje1_idx` (`idLenguaje` ASC) VISIBLE,
  CONSTRAINT `fk_intrucciones_lenguaje1`
    FOREIGN KEY (`idLenguaje`)
    REFERENCES `proyecto`.`lenguaje` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`instrucciones_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`instrucciones_usuarios` (
  `id` INT NOT NULL,
  `idUsuario` INT NOT NULL,
  `idInstruccion` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_codigos_usuarios_usuarios1_idx` (`idUsuario` ASC) VISIBLE,
  INDEX `fk_instrucciones_usuarios_intrucciones1_idx` (`idInstruccion` ASC) VISIBLE,
  CONSTRAINT `fk_codigos_usuarios_usuarios1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `proyecto`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_instrucciones_usuarios_intrucciones1`
    FOREIGN KEY (`idInstruccion`)
    REFERENCES `proyecto`.`intrucciones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`provincia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`provincia` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`rangoedad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`rangoedad` (
  `id` INT NOT NULL,
  `tiporango` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`torneos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`torneos` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `fecha` DATE NULL,
  `ubicacion` VARCHAR(45) NULL,
  `latitud` VARCHAR(45) NULL,
  `longitud` VARCHAR(45) NULL,
  `costeequipo` VARCHAR(45) NULL,
  `idprovincia` INT NOT NULL,
  `idrangoedad` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_torneos_provincia1_idx` (`idprovincia` ASC) VISIBLE,
  INDEX `fk_torneos_rangoedad1_idx` (`idrangoedad` ASC) VISIBLE,
  CONSTRAINT `fk_torneos_provincia1`
    FOREIGN KEY (`idprovincia`)
    REFERENCES `proyecto`.`provincia` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_torneos_rangoedad1`
    FOREIGN KEY (`idrangoedad`)
    REFERENCES `proyecto`.`rangoedad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
