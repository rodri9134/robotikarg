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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `referencia` varchar(300) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `imagen` varchar(50) NOT NULL,
  `idCategoria` int(11) DEFAULT NULL,
  `idTienda` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_articulos_tiendas` (`idTienda`),
  KEY `FK_articulos_categorias` (`idCategoria`),
  CONSTRAINT `FK_articulos_categorias` FOREIGN KEY (`idCategoria`) REFERENCES `categorias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_articulos_tiendas` FOREIGN KEY (`idTienda`) REFERENCES `tiendas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.articulos: ~2 rows (aproximadamente)
DELETE FROM `articulos`;
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
INSERT INTO `articulos` (`id`, `titulo`, `descripcion`, `referencia`, `precio`, `imagen`, `idCategoria`, `idTienda`) VALUES
	(1, 'Makeblock', 'Robot Ranger Educativo 3 en uno', 'https://cutt.ly/BteFmXh', 170, 'elego.jpg', 1, 8),
	(2, 'Elego', 'Robot compatible con arduino', 'https://cutt.ly/4twXxDP', 100, 'makeblock.jpg', 2, 8);
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.categorias
DROP TABLE IF EXISTS `categorias`;
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.categorias: ~4 rows (aproximadamente)
DELETE FROM `categorias`;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` (`id`, `nombre`, `descripcion`) VALUES
	(1, 'Robots', NULL),
	(2, 'Kits', NULL),
	(3, 'Drones', NULL),
	(4, 'Accesorios', NULL);
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.contactos
DROP TABLE IF EXISTS `contactos`;
CREATE TABLE IF NOT EXISTS `contactos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `motivo` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.contactos: ~0 rows (aproximadamente)
DELETE FROM `contactos`;
/*!40000 ALTER TABLE `contactos` DISABLE KEYS */;
/*!40000 ALTER TABLE `contactos` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.instrucciones
DROP TABLE IF EXISTS `instrucciones`;
CREATE TABLE IF NOT EXISTS `instrucciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `instruccion` text,
  `accion` varchar(50) DEFAULT NULL,
  `idLenguaje` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_instrucciones_lenguajes` (`idLenguaje`),
  CONSTRAINT `FK_instrucciones_lenguajes` FOREIGN KEY (`idLenguaje`) REFERENCES `lenguajes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.instrucciones: ~3 rows (aproximadamente)
DELETE FROM `instrucciones`;
/*!40000 ALTER TABLE `instrucciones` DISABLE KEYS */;
INSERT INTO `instrucciones` (`id`, `instruccion`, `accion`, `idLenguaje`) VALUES
	(1, 'lf r t', 'Girar a la izquierda', 1),
	(2, 'mv r t', 'Mover tortuga a la derecha', 2),
	(3, 'prueba', 'prueba', 2);
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
  CONSTRAINT `FK_codigos_usuarios_intrucciones` FOREIGN KEY (`idInstruccion`) REFERENCES `instrucciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_instrucciones_usuarios_usuarios` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.instrucciones_usuarios: ~3 rows (aproximadamente)
DELETE FROM `instrucciones_usuarios`;
/*!40000 ALTER TABLE `instrucciones_usuarios` DISABLE KEYS */;
INSERT INTO `instrucciones_usuarios` (`id`, `idUsuario`, `idInstruccion`) VALUES
	(3, 17, 1),
	(5, 18, 2),
	(6, 17, 3);
/*!40000 ALTER TABLE `instrucciones_usuarios` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.lenguajes
DROP TABLE IF EXISTS `lenguajes`;
CREATE TABLE IF NOT EXISTS `lenguajes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `tipoLenguaje` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.lenguajes: ~0 rows (aproximadamente)
DELETE FROM `lenguajes`;
/*!40000 ALTER TABLE `lenguajes` DISABLE KEYS */;
INSERT INTO `lenguajes` (`id`, `nombre`, `tipoLenguaje`) VALUES
	(1, 'PHP', 'Poo'),
	(2, 'Java', 'Poo');
/*!40000 ALTER TABLE `lenguajes` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.provincias
DROP TABLE IF EXISTS `provincias`;
CREATE TABLE IF NOT EXISTS `provincias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.provincias: ~52 rows (aproximadamente)
DELETE FROM `provincias`;
/*!40000 ALTER TABLE `provincias` DISABLE KEYS */;
INSERT INTO `provincias` (`id`, `nombre`) VALUES
	(1, 'Álava'),
	(2, 'Albacete'),
	(3, 'Alicante'),
	(4, 'Almería'),
	(5, 'Ávila'),
	(6, 'Badajoz'),
	(7, 'Baleares (Illes)'),
	(8, 'Barcelona'),
	(9, 'Burgos'),
	(10, 'Cáceres'),
	(11, 'Cádiz'),
	(12, 'Castellón'),
	(13, 'Ciudad Real'),
	(14, 'Córdoba'),
	(15, 'A Coruña'),
	(16, 'Cuenca'),
	(17, 'Girona'),
	(18, 'Granada'),
	(19, 'Guadalajara'),
	(20, 'Guipúzcoa'),
	(21, 'Huelva'),
	(22, 'Huesca'),
	(23, 'Jaén'),
	(24, 'León'),
	(25, 'Lleida'),
	(26, 'La Rioja'),
	(27, 'Lugo'),
	(28, 'Madrid'),
	(29, 'Málaga'),
	(30, 'Murcia'),
	(31, 'Navarra'),
	(32, 'Ourense'),
	(33, 'Asturias'),
	(34, 'Palencia'),
	(35, 'Las Palmas'),
	(36, 'Pontevedra'),
	(37, 'Salamanca'),
	(38, 'Santa Cruz de Tenerife'),
	(39, 'Cantabria'),
	(40, 'Segovia'),
	(41, 'Sevilla'),
	(42, 'Soria'),
	(43, 'Tarragona'),
	(44, 'Teruel'),
	(45, 'Toledo'),
	(46, 'Valencia'),
	(47, 'Valladolid'),
	(48, 'Vizcaya'),
	(49, 'Zamora'),
	(50, 'Zaragoza'),
	(51, 'Ceuta'),
	(52, 'Melilla');
/*!40000 ALTER TABLE `provincias` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.rangoedad
DROP TABLE IF EXISTS `rangoedad`;
CREATE TABLE IF NOT EXISTS `rangoedad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tiporango` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.rangoedad: ~6 rows (aproximadamente)
DELETE FROM `rangoedad`;
/*!40000 ALTER TABLE `rangoedad` DISABLE KEYS */;
INSERT INTO `rangoedad` (`id`, `tiporango`) VALUES
	(1, '4 a 16 años'),
	(2, '7 a 20 años'),
	(3, '16 a 70 años'),
	(4, '12 a 18 años'),
	(5, '8 a 88 años'),
	(6, '7 a 17 años');
/*!40000 ALTER TABLE `rangoedad` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.roles
DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipoRol` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.roles: ~2 rows (aproximadamente)
DELETE FROM `roles`;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `tipoRol`) VALUES
	(1, 'usuario'),
	(2, 'admin');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.tiendas
DROP TABLE IF EXISTS `tiendas`;
CREATE TABLE IF NOT EXISTS `tiendas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.tiendas: ~6 rows (aproximadamente)
DELETE FROM `tiendas`;
/*!40000 ALTER TABLE `tiendas` DISABLE KEYS */;
INSERT INTO `tiendas` (`id`, `nombre`) VALUES
	(1, 'Robotica'),
	(2, 'Electan'),
	(3, 'Ciencia y robotica'),
	(4, 'Electronica Embajadores'),
	(5, 'Robotshop'),
	(6, 'Microlog'),
	(7, 'Rcctecnic'),
	(8, 'Amazon');
/*!40000 ALTER TABLE `tiendas` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.torneos
DROP TABLE IF EXISTS `torneos`;
CREATE TABLE IF NOT EXISTS `torneos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imagen` varchar(200) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `fecha` datetime NOT NULL,
  `ubicacion` varchar(400) NOT NULL,
  `enlace` varchar(400) NOT NULL,
  `pagina` varchar(200) NOT NULL,
  `costeEquipo` varchar(50) NOT NULL,
  `idprovincia` int(11) NOT NULL,
  `idrangoedad` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_torneos_provincias` (`idprovincia`),
  KEY `FK_torneos_rangoedad` (`idrangoedad`),
  CONSTRAINT `FK_torneos_provincias` FOREIGN KEY (`idprovincia`) REFERENCES `provincias` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `FK_torneos_rangoedad` FOREIGN KEY (`idrangoedad`) REFERENCES `rangoedad` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.torneos: ~4 rows (aproximadamente)
DELETE FROM `torneos`;
/*!40000 ALTER TABLE `torneos` DISABLE KEYS */;
INSERT INTO `torneos` (`id`, `imagen`, `nombre`, `fecha`, `ubicacion`, `enlace`, `pagina`, `costeEquipo`, `idprovincia`, `idrangoedad`) VALUES
	(2, 'roborave.jpg', 'RoboRave Ibérica', '2020-05-04 00:00:00', 'Toledo', 'https://goo.gl/maps/SwaiaQFa7gMQmZEQ7', 'http://roboraveiberica.org/', ' 23 €', 15, 5),
	(3, 'vexf.png', 'VexRobotics', '2021-03-03 12:15:00', 'Barcelona', 'https://goo.gl/maps/tpFtCcF7iYBFVbiFA', 'http://vexcompetition.es/torneos/', '30 €', 8, 4),
	(7, 'robolid.png', 'Robolid', '2020-04-16 16:39:20', 'Valladolid', 'https://goo.gl/maps/7zZsjiLKBRpGyaZH8', 'http://robolid.es/', '10 €', 47, 2),
	(10, 'desafioCiutat.png', 'Desafio Ciutat', '2020-04-24 10:00:20', 'Valencia', 'https://goo.gl/maps/fRFc4NbQDURaZhan8', 'https://www.cac.es/es/web/desafiorobot/informacion-general', 'Gratuito', 46, 6);
/*!40000 ALTER TABLE `torneos` ENABLE KEYS */;


-- Volcando estructura para tabla proyecto.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `foto` varchar(50) DEFAULT NULL,
  `idrol` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_usuarios_roles` (`idrol`),
  CONSTRAINT `FK_usuarios_roles` FOREIGN KEY (`idrol`) REFERENCES `roles` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla proyecto.usuarios: ~6 rows (aproximadamente)
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `email`, `password`, `telefono`, `foto`, `idrol`) VALUES
	(17, 'rodri9134@gmail.com', '$2a$10$KEy3srvQWl57jTLS2pfN/.nQ6ZWjgjt3L2XFwnc0jZ5', '123456789', NULL, 1),
	(18, 'hola@hola.com', '$2a$10$PXDCK2ey8Pl/NS.sOo9o4Omg2z6ZWAN8r43q5T/o7.b', '123456789', NULL, 1),
	(19, 'r@r.com', '$2a$10$50ZXdJjMhM2O/BrZqqSEBuM5/IAkGTGsze4zecd6KWd', '123456789', NULL, 1),
	(20, 'aaaaaa@aaaa.com', '$2a$10$lE3V5cx7nmnb/Z4GBMeeSONBpmq1kNfjEwqHuUmG3lM', '1111111111', NULL, 1),
	(21, 'prueba@prueba.com', '$2a$10$//jb7aq7XZQDujq7G53bbuF30f1x2Cow6YROaYOvVrd', '123456789', NULL, 1),
	(22, 'adminrob@gmail.com', '$2a$10$KEy3srvQWl57jTLS2pfN/.nQ6ZWjgjt3L2XFwnc0jZ5', NULL, NULL, 2);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
