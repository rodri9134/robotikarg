-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.1.37-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura de base de datos para proyecto
DROP DATABASE IF EXISTS `proyecto`;
CREATE DATABASE IF NOT EXISTS `proyecto` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `proyecto`;


-- Volcando estructura para tabla proyecto.articulos
DROP TABLE IF EXISTS `articulos`;
CREATE TABLE IF NOT EXISTS `articulos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `referencia` varchar(50) DEFAULT NULL,
  `coste` float DEFAULT NULL,
  `imagen` varchar(50) NOT NULL,
  `idCategoria` int(11) DEFAULT NULL,
  `idTienda` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_articulos_tiendas` (`idTienda`),
  CONSTRAINT `FK_articulos_categoria` FOREIGN KEY (`id`) REFERENCES `categorias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_articulos_tiendas` FOREIGN KEY (`idTienda`) REFERENCES `tiendas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.articulos: ~0 rows (aproximadamente)
DELETE FROM `articulos`;
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.categorias
DROP TABLE IF EXISTS `categorias`;
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.categorias: ~0 rows (aproximadamente)
DELETE FROM `categorias`;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.instrucciones
DROP TABLE IF EXISTS `instrucciones`;
CREATE TABLE IF NOT EXISTS `instrucciones` (
  `int` int(11) NOT NULL AUTO_INCREMENT,
  `instruccion` text,
  `accion` varchar(50) DEFAULT NULL,
  `idLenguaje` int(11) DEFAULT NULL,
  PRIMARY KEY (`int`),
  KEY `FK_instrucciones_lenguajes` (`idLenguaje`),
  CONSTRAINT `FK_instrucciones_lenguajes` FOREIGN KEY (`idLenguaje`) REFERENCES `lenguajes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.instrucciones: ~0 rows (aproximadamente)
DELETE FROM `instrucciones`;
/*!40000 ALTER TABLE `instrucciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `instrucciones` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.instrucciones_usuarios
DROP TABLE IF EXISTS `instrucciones_usuarios`;
CREATE TABLE IF NOT EXISTS `instrucciones_usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(11) DEFAULT NULL,
  `idInstruccion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_codigos_usuarios_usuarios` (`idUsuario`),
  KEY `FK_codigos_usuarios_codigos` (`idInstruccion`),
  CONSTRAINT `FK_codigos_usuarios_codigos` FOREIGN KEY (`idInstruccion`) REFERENCES `instrucciones` (`int`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_codigos_usuarios_usuarios` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.instrucciones_usuarios: ~0 rows (aproximadamente)
DELETE FROM `instrucciones_usuarios`;
/*!40000 ALTER TABLE `instrucciones_usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `instrucciones_usuarios` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.lenguajes
DROP TABLE IF EXISTS `lenguajes`;
CREATE TABLE IF NOT EXISTS `lenguajes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `tipoLenguaje` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.lenguajes: ~0 rows (aproximadamente)
DELETE FROM `lenguajes`;
/*!40000 ALTER TABLE `lenguajes` DISABLE KEYS */;
/*!40000 ALTER TABLE `lenguajes` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.provincias
DROP TABLE IF EXISTS `provincias`;
CREATE TABLE IF NOT EXISTS `provincias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.provincias: ~0 rows (aproximadamente)
DELETE FROM `provincias`;
/*!40000 ALTER TABLE `provincias` DISABLE KEYS */;
/*!40000 ALTER TABLE `provincias` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.rangoedad
DROP TABLE IF EXISTS `rangoedad`;
CREATE TABLE IF NOT EXISTS `rangoedad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tiporango` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.rangoedad: ~0 rows (aproximadamente)
DELETE FROM `rangoedad`;
/*!40000 ALTER TABLE `rangoedad` DISABLE KEYS */;
/*!40000 ALTER TABLE `rangoedad` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.roles
DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipoRol` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.roles: ~0 rows (aproximadamente)
DELETE FROM `roles`;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.tiendas
DROP TABLE IF EXISTS `tiendas`;
CREATE TABLE IF NOT EXISTS `tiendas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.tiendas: ~0 rows (aproximadamente)
DELETE FROM `tiendas`;
/*!40000 ALTER TABLE `tiendas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tiendas` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.torneos
DROP TABLE IF EXISTS `torneos`;
CREATE TABLE IF NOT EXISTS `torneos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `ubicacion` varchar(45) NOT NULL,
  `latitud` varchar(45) NOT NULL,
  `longitud` varchar(45) NOT NULL,
  `costeequipo` float NOT NULL,
  `idprovincia` int(11) NOT NULL,
  `idrangoedad` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_torneos_provincias` (`idprovincia`),
  KEY `FK_torneos_rangoedad` (`idrangoedad`),
  CONSTRAINT `FK_torneos_provincias` FOREIGN KEY (`idprovincia`) REFERENCES `provincias` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `FK_torneos_rangoedad` FOREIGN KEY (`idrangoedad`) REFERENCES `rangoedad` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.torneos: ~0 rows (aproximadamente)
DELETE FROM `torneos`;
/*!40000 ALTER TABLE `torneos` DISABLE KEYS */;
/*!40000 ALTER TABLE `torneos` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `idrol` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_usuarios_roles` (`idrol`),
  CONSTRAINT `FK_usuarios_roles` FOREIGN KEY (`idrol`) REFERENCES `roles` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.usuarios: ~0 rows (aproximadamente)
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
