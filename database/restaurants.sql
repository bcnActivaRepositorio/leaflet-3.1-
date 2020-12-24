-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-12-2020 a las 18:41:18
-- Versión del servidor: 5.7.19
-- Versión de PHP: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `my_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
CREATE TABLE IF NOT EXISTS `restaurants` (
  `id_restaurant` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `lat` decimal(10,8) NOT NULL,
  `lng` decimal(11,8) NOT NULL,
  `kind_food` set('Mediterraneo','Mexicano','Vegetariano','Italiano','Casero','Internacional','Oriental','High Cuisine') NOT NULL,
  PRIMARY KEY (`id_restaurant`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `restaurants`
--

INSERT INTO `restaurants` (`id_restaurant`, `name`, `address`, `lat`, `lng`, `kind_food`) VALUES
(1, 'La Placeta', 'Pl. del Pi 1\r\n08002 Barcelona', '41.38176037', '2.17444037', 'Mediterraneo,Italiano'),
(2, 'Bot-Bot', 'Carrer del Bot, 23 -25\r\n08002 Barcelona', '41.38453325', '2.17181153', 'Mexicano,Casero,Internacional'),
(3, 'El Chino Orwell', 'Pl. George Orwell, 1\r\n08002 Barcelona', '41.38054677', '2.17766687', 'Casero,Oriental'),
(4, 'Pizzeria Sant Michelle', 'Pl. Sant Miquel, 1\r\n08002 Barcelona', '41.38220014', '2.17693754', 'Italiano'),
(5, 'The Lost Guiri', 'C. Rambla, 56\r\n08002 Barcelona', '41.38014326', '2.17442369', 'Internacional'),
(6, 'La Torrada del Gòtic', 'Ptge. Pau, 11', '41.37794417', '2.17779059', 'Mediterraneo,Vegetariano,Casero'),
(7, 'El Mòs', 'Pl. Sant Josep Oriol, 10\r\n08002 Barcelona', '41.38198776', '2.17449479', 'Mediterraneo,Vegetariano,Casero,Internacional'),
(8, 'Poco Pollo', 'Pg. Colom, 9', '41.38016115', '2.18082678', 'Casero'),
(9, 'The Red Dragon', 'Pl.Regomir, 4\r\n08002 Barcelona', '41.38161931', '2.17861242', 'Oriental,High Cuisine'),
(10, 'El Agente de la Continental', 'Av. Catedral, 7\r\n08002 Barcelona', '41.38487761', '2.17572444', 'Mediterraneo,High Cuisine'),
(11, 'Verde que te quiero', 'Pl. Traginers, 8\r\n08002 Barcelona', '41.38213739', '2.17995247', 'Mediterraneo,Vegetariano'),
(12, 'El Rey de las Tapas', 'Pl. Catalunya, 19\r\n08002 Barcelona', '41.38624500', '2.17100178', 'Mediterraneo,Casero'),
(13, 'Quimet, Quimeta & Co', 'Pl. Joaqim Xirau i Palau, 1\r\n08002 Barcelona', '41.37852758', '2.17691593', 'Mediterraneo,Mexicano,Vegetariano,Italiano,Casero,Internacional');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
