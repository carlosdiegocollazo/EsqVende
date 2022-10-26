-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 20-08-2022 a las 12:56:11
-- Versión del servidor: 8.0.21
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `esqvende`
--
CREATE DATABASE IF NOT EXISTS `esqvende` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `esqvende`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

DROP TABLE IF EXISTS `articulos`;
CREATE TABLE IF NOT EXISTS `articulos` (
  `idart` int NOT NULL AUTO_INCREMENT,
  `codigo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `barras` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `costo` int NOT NULL,
  `iva` int NOT NULL,
  `costoiva` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ganancia` int NOT NULL,
  `pvp` int NOT NULL,
  `stock` int NOT NULL,
  `familia` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `proveedor` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `deposito` int NOT NULL,
  `observaciones` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `activo` tinyint NOT NULL,
  PRIMARY KEY (`idart`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`idart`, `codigo`, `barras`, `descripcion`, `costo`, `iva`, `costoiva`, `ganancia`, `pvp`, `stock`, `familia`, `proveedor`, `deposito`, `observaciones`, `activo`) VALUES
(1, '183102', '70330129627 ', 'Boligrafo BIC Cristal Azul dura +', 878, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(2, '2302', 'Ahesiva', 'Cinta Adhesiva 12mm 30', 110, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(3, '1762', 'GomitasElas', 'Bandas Elasticas 65mm bolsa x 200g', 110, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(4, '2315', 'CintaEmpa', 'Cinta  Emaque 48mm 50 Trasparente', 609, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(5, '1999', 'RepGanchos', 'Broches No. 369 24/6 x 1000', 157, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(6, '2519', '9909 ', 'Engrampadora 9909', 145, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(7, '2328', 'Dispensador', 'Dispensador de cinta mediano 13cmtrs', 133, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(8, '3131', 'PapelA4', 'Papel fotocopia A4 Fanacopy', 750, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(9, '2801', '7890000000000 ', 'Lapiz Faber 1210 Docena de 14', 85, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(10, '2462', '7900000000000 ', 'Goma Borrar Mercur Mediana x 40', 340, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(11, '229903', 'CintaRoja', 'Cinta de Regalo 18mm Rojo', 42, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(12, '229905', 'CintaBlanca', 'Cinta de Regalo 18mm Blanco', 42, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(13, '229907', 'CintaAmarilla', 'Cinta de Regalo 18mm Amarillo', 42, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(14, '229908', 'CintaNaranja', 'Cinta de Regalo 18mm Naranja', 42, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(15, '229920', 'CintaCeleste', 'Cinta de Regalo 18mm Celeste', 42, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(16, '229925', 'CintaVerdeMan', 'Cinta de Regalo 18mm Verde Manzana', 42, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(17, '2413', 'rep.trinch', 'Repuesto cortante ancho x10', 270, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(18, 'C541', 'CintaMeta', '(Mate) Cinta metalizada 6 colores x 9', 24, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(19, 'UN9845', 'CampanaTorta', 'Campana de torta con tapa', 586, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(20, '1', 'PinchosRef', 'Pinchos reforzado', 281, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(21, '2', 'Pinchos', 'Pinchos ', 171, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(22, '3', 'Panel', 'Panel', 659, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(23, '4', 'RolloPrecio', 'Rollo Etiqueteadora 500 pcs', 157, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(24, '5', 'MaqPrecio', 'Maq Etiqueteadora', 366, 0, '', 0, 0, 0, '1', '1', 1, ' Consumo ', 1),
(25, 'PicoD01', 'PicoDulce', 'Chupetin Pico Dulce x 48', 304, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(26, 'Mani01', 'ManiJApo', 'Mani Japones Dori 500grms', 140, 0, '', 0, 0, 0, '1', '1', 1, 'Consumo', 1),
(27, 'BolsaEstam', 'BolsaEstam', 'Bolsa Estampada x 50', 73, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(28, 'CaraFrut01', '7900000000000 ', 'Caramelo Santa Rita Duro 600 grms Frutilla', 140, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(29, 'menttitas01', '7800000000000 ', ' Mentitas (la casa) x 12 frutal', 177, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(30, 'Mentitas02', '7800000000000 ', ' Mentitas (la casa) x 12 menta', 177, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(31, 'CaraMenta01', '7900000000000 ', 'Caramelo Santa Rita Duro 600 grms Menta', 140, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(32, 'CaraMiel01', '7900000000000 ', 'Caramelo Don 600 grms Miel', 133, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(33, 'Nutry01', '7890000000000 ', 'Barrita de ceral Nutry x 24', 1703, 0, '', 0, 0, 0, '1', '1', 1, ' sugerido$26 ', 1),
(34, '6', '8900000000000 ', 'Marcador Permanente Grueso Luxor', 110, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(35, '7', '8900000000000 ', 'Marcador Luxor Ecowrite Permanente', 122, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(36, '8306388', 'chplutac', 'Chic Plut Acido 40u', 152, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(37, '1006408', '77931528 ', 'Choco Agui Barrita 24x14g', 343, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(38, '5040418', '790000000000 ', 'Chocolinas Bagley 170g (40)', 418, 0, '', 0, 0, 0, '1', '1', 1, '', 1),
(39, '100', '100', 'aRTICULOS', 4, 4, '0', 0, 40, 1, '1', '1', 1, '', 1),
(40, '1000', '1000', 'CAFE ESpresso A La vuelta chico', 20, 40, '', 0, 60, 0, '1', '1', 1, '', 1),
(41, '101', '100', 'repetida la barra', 40, 60, '', 0, 60, 0, '1', '1', 1, '', 1),
(42, '11001', '100', 'CAFE ESpresso A La vuelta chico', 1, 1, '1', 0, 1, 1, '1', '1', 1, '', 1),
(43, '111', '112', 'Articulos de prueba', 40, 60, '', 0, 60, 0, '1', '1', 1, '', 1),
(44, '112', '112', 'artiuclo de preub', 50, 60, '', 0, 60, 5, '1', '1', 1, '', 1),
(45, '113', '113', 'Prueba nuevA', 40, 40, '', 0, 40, 0, '1', '1', 1, '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bancos`
--

DROP TABLE IF EXISTS `bancos`;
CREATE TABLE IF NOT EXISTS `bancos` (
  `idbanco` int NOT NULL AUTO_INCREMENT,
  `banco` text CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `moneda` int NOT NULL,
  `cuenta` text CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `sucursal` text CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `activo` int NOT NULL,
  PRIMARY KEY (`idbanco`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `bancos`
--

INSERT INTO `bancos` (`idbanco`, `banco`, `moneda`, `cuenta`, `sucursal`, `activo`) VALUES
(1, 'BROU $', 0, '123456789101112', '001 - Centro', 1),
(2, 'Santander USD', 1, '987654321123', '001 - Centro', 1),
(3, 'BROU USD', 1, '5454455454', '1', 1),
(4, 'Santander $', 0, '4454545', '22', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cajas`
--

DROP TABLE IF EXISTS `cajas`;
CREATE TABLE IF NOT EXISTS `cajas` (
  `idcaja` int NOT NULL AUTO_INCREMENT,
  `nombre` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cajmon` int NOT NULL,
  `observaciones` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cajprin` tinyint NOT NULL,
  `activo` tinyint(1) NOT NULL,
  PRIMARY KEY (`idcaja`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cheques`
--

DROP TABLE IF EXISTS `cheques`;
CREATE TABLE IF NOT EXISTS `cheques` (
  `idcheq` int NOT NULL AUTO_INCREMENT,
  `nrocheq` int NOT NULL,
  `importe` int NOT NULL,
  `banco` int NOT NULL,
  `moneda` int NOT NULL,
  `fechemi` varchar(10) NOT NULL,
  `fechpagc` varchar(10) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `fechcob` varchar(10) NOT NULL,
  `activo` int NOT NULL,
  PRIMARY KEY (`idcheq`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cheques`
--

INSERT INTO `cheques` (`idcheq`, `nrocheq`, `importe`, `banco`, `moneda`, `fechemi`, `fechpagc`, `fechcob`, `activo`) VALUES
(9, 1, 1, 1, 0, '2001-01-01', '', '', 1),
(10, 2, 2, 2, 1, '2002-01-02', '', '', 1),
(11, 3, 33, 3, 1, '2000-01-01', '', '', 1),
(12, 1, 1, 1, 0, '1000-01-01', '', '', 1),
(13, 4, 4, 2, 1, '2000-01-01', '3000-02-01', '10000-02-0', 1),
(14, 4, 4, 4, 0, '2024-04-04', '2020-04-04', '2020-05-04', 1),
(15, 2, 2, 2, 1, '2020-11-03', '2020-11-05', 'undefined', 1),
(16, 2, 2, 2, 1, '2020-11-03', '2020-11-05', 'undefined', 1),
(17, 3, 3, 3, 1, '2020-11-03', '2020-11-13', 'undefined', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `idcli` int NOT NULL AUTO_INCREMENT,
  `rutced` int NOT NULL,
  `email` text NOT NULL,
  `apellidos` text NOT NULL,
  `nombres` text NOT NULL,
  `telefono` text NOT NULL,
  `direccion` text NOT NULL,
  `ciudad` text NOT NULL,
  `fechnac` text NOT NULL,
  `observaciones` text NOT NULL,
  `activo` int NOT NULL,
  PRIMARY KEY (`idcli`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`idcli`, `rutced`, `email`, `apellidos`, `nombres`, `telefono`, `direccion`, `ciudad`, `fechnac`, `observaciones`, `activo`) VALUES
(1, 30759855, 'elmorra@gmail.com', 'Collazo Delgado', 'Carlos Diego', '099550624', 'Salto 1262', 'Montevideo', '0000-00-00', 'Ninguna', 1),
(22, 0, '${cliente.email}', '${cliente.apellidos}', '${cliente.nombres}', '${cliente.telefono}', '${cliente.direccion}', '${cliente.ciudad}', '${cliente.fechnac}', '${cliente.observaciones}', 0),
(21, 1, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0),
(20, 3075985, 'elmorra@gmail.com', 'Collazo Delgado', 'carlos Diego', '5556262642489', 'una direccion', 'una ciudad', '03/18/1977', 'Observaciones', 1),
(23, 44444, 'carlosdiegocollazo@esquema.com.uy', 'Delgado', 'Carlos Diego', '+59899550624', 'Salto 1262 ato 902', 'Centro', '1980-01-01', '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizacion`
--

DROP TABLE IF EXISTS `cotizacion`;
CREATE TABLE IF NOT EXISTS `cotizacion` (
  `idcot` int NOT NULL AUTO_INCREMENT,
  `fechcot` varchar(10) NOT NULL,
  `moneda` int NOT NULL,
  `cotizacion` double NOT NULL,
  `deldia` tinyint NOT NULL,
  `activo` int NOT NULL,
  PRIMARY KEY (`idcot`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cotizacion`
--

INSERT INTO `cotizacion` (`idcot`, `fechcot`, `moneda`, `cotizacion`, `deldia`, `activo`) VALUES
(1, '2020-10-30', 1, 45, 0, 1),
(2, '2020-10-30', 3, 0.005, 1, 1),
(3, '2020-10-30', 3, 1, 1, 1),
(4, '2020-10-30', 3, 0.019, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `depositos`
--

DROP TABLE IF EXISTS `depositos`;
CREATE TABLE IF NOT EXISTS `depositos` (
  `iddep` int NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL,
  `localizacion` text NOT NULL,
  `observaciones` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `principal` tinyint NOT NULL,
  `activo` tinyint NOT NULL,
  PRIMARY KEY (`iddep`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `depositos`
--

INSERT INTO `depositos` (`iddep`, `nombre`, `localizacion`, `observaciones`, `principal`, `activo`) VALUES
(1, 'A la Vuelta', 'Vazquez 1417 local 17', 'Local Comercial', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentos`
--

DROP TABLE IF EXISTS `documentos`;
CREATE TABLE IF NOT EXISTS `documentos` (
  `idtipdoc` int NOT NULL AUTO_INCREMENT,
  `tipodoc` text CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `moneda` int NOT NULL,
  `activo` tinyint(1) NOT NULL,
  PRIMARY KEY (`idtipdoc`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `documentos`
--

INSERT INTO `documentos` (`idtipdoc`, `tipodoc`, `moneda`, `activo`) VALUES
(1, 'Factura Contado', 0, 1),
(2, 'Nota Credito', 0, 1),
(3, 'Factura Credito', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturacion`
--

DROP TABLE IF EXISTS `facturacion`;
CREATE TABLE IF NOT EXISTS `facturacion` (
  `codfac` int NOT NULL AUTO_INCREMENT,
  `fecfac` text,
  `tipdoc` int DEFAULT NULL,
  `codcli` int DEFAULT NULL,
  `cliente` text,
  `direccion` text,
  `codart` int DEFAULT NULL,
  `articulo` varchar(45) DEFAULT NULL,
  `cant` int DEFAULT NULL,
  `unitario` int DEFAULT NULL,
  `iva` int DEFAULT NULL,
  `desc` int DEFAULT NULL,
  `total` int DEFAULT NULL,
  `observaciones` text,
  PRIMARY KEY (`codfac`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

DROP TABLE IF EXISTS `facturas`;
CREATE TABLE IF NOT EXISTS `facturas` (
  `idfac` int NOT NULL AUTO_INCREMENT,
  `tipodoc` int NOT NULL,
  `fecha` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `moneda` int NOT NULL,
  `rutced` int NOT NULL,
  `cliente` int NOT NULL,
  `Direccion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cantidad` int NOT NULL,
  `descripcion` int NOT NULL,
  `preciounit` int NOT NULL,
  `precio` int NOT NULL,
  `observaciones` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `subtotal` int NOT NULL,
  `iva` int NOT NULL,
  `descuento` int NOT NULL,
  `total` int NOT NULL,
  `vuelto` int NOT NULL,
  `activo` tinyint(1) NOT NULL,
  PRIMARY KEY (`idfac`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `familias`
--

DROP TABLE IF EXISTS `familias`;
CREATE TABLE IF NOT EXISTS `familias` (
  `idfam` int NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  `observaciones` text NOT NULL,
  `activo` tinyint NOT NULL,
  PRIMARY KEY (`idfam`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `familias`
--

INSERT INTO `familias` (`idfam`, `descripcion`, `observaciones`, `activo`) VALUES
(1, 'Arcor', 'Ninguna', 1),
(2, 'Ricard', 'Ninguna', 1),
(3, 'A la Vuelta', 'Articulos o productos de produccion propia', 1),
(4, 'FAMILIA', 'Ninguna', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monedas`
--

DROP TABLE IF EXISTS `monedas`;
CREATE TABLE IF NOT EXISTS `monedas` (
  `idmon` int NOT NULL AUTO_INCREMENT,
  `moneda` text NOT NULL,
  `divide` int NOT NULL,
  `activo` int NOT NULL,
  PRIMARY KEY (`idmon`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `monedas`
--

INSERT INTO `monedas` (`idmon`, `moneda`, `divide`, `activo`) VALUES
(0, 'Peso', 0, 1),
(1, 'Dolares', 1, 1),
(2, 'Reales', 1, 1),
(3, 'Australes', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimientos`
--

DROP TABLE IF EXISTS `movimientos`;
CREATE TABLE IF NOT EXISTS `movimientos` (
  `idmov` int NOT NULL AUTO_INCREMENT,
  `proveedor` int NOT NULL,
  `tipdoc` int NOT NULL,
  `nrofac` int NOT NULL,
  `fechemi` varchar(10) NOT NULL,
  `fechpag` varchar(10) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `moneda` int NOT NULL,
  `nrocheq` int NOT NULL,
  `fechcheq` varchar(10) NOT NULL,
  `debe` int NOT NULL,
  `haber` int NOT NULL,
  `saldo` int NOT NULL,
  `saldtot` int NOT NULL,
  `nrorec` int NOT NULL,
  `observaciones` text NOT NULL,
  `activo` tinyint NOT NULL,
  PRIMARY KEY (`idmov`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `movimientos`
--

INSERT INTO `movimientos` (`idmov`, `proveedor`, `tipdoc`, `nrofac`, `fechemi`, `fechpag`, `moneda`, `nrocheq`, `fechcheq`, `debe`, `haber`, `saldo`, `saldtot`, `nrorec`, `observaciones`, `activo`) VALUES
(1, 5, 1, 1, '2020-11-03', '2020-11-04', 1, 0, '', 1, 1, 1, 0, 11, '1', 1),
(2, 5, 1, 2, '2020-11-03', '2020-11-05', 0, 2, '2020-11-04', 0, 2, 2, 0, 2, '2', 1),
(3, 5, 1, 2, '2020-11-03', '2020-11-05', 0, 2, '2020-11-04', 0, 2, 2, 0, 2, '2', 1),
(4, 5, 3, 3, '2020-11-03', '2020-11-11', 2, 0, '', 3, 3, 3, 0, 3, '3', 1),
(5, 5, 3, 3, '2020-11-03', '2020-11-11', 2, 3, '2020-11-15', 3, 3, 3, 0, 3, '33', 1),
(6, 6, 1, 4, '2020-11-03', '2020-11-04', 1, 0, '', 4, 4, 4, 0, 4, '4', 1),
(7, 5, 2, 5, '2020-11-03', '2020-11-05', 2, 0, '', 5, 5, 5, 0, 5, '5', 1),
(8, 5, 1, 2, '2020-11-03', '2020-10-29', 2, 0, '', 20, 2, 2, 0, 2, '2', 1),
(9, 5, 1, 1, '2020-12-23', '2020-12-28', 0, 0, '', 300, 700, 700, 0, 0, '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
CREATE TABLE IF NOT EXISTS `proveedores` (
  `idpro` int NOT NULL AUTO_INCREMENT,
  `rutced` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `razon` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `fantasia` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `email` text NOT NULL,
  `nombre` text NOT NULL,
  `apellido` text NOT NULL,
  `feching` varchar(10) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `telefono` text NOT NULL,
  `direccion` text NOT NULL,
  `ciudad` text NOT NULL,
  `moneda` int NOT NULL,
  `saldoinicial` int NOT NULL,
  `saldototal` int NOT NULL,
  `retorno` int NOT NULL,
  `fechret` varchar(10) NOT NULL,
  `retactivo` int NOT NULL,
  `observaciones` text NOT NULL,
  `activo` tinyint(1) NOT NULL,
  PRIMARY KEY (`idpro`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`idpro`, `rutced`, `razon`, `fantasia`, `email`, `nombre`, `apellido`, `feching`, `telefono`, `direccion`, `ciudad`, `moneda`, `saldoinicial`, `saldototal`, `retorno`, `fechret`, `retactivo`, `observaciones`, `activo`) VALUES
(1, '123456789', 'Correa Hnos', 'Supermercado 18', 'mail@mail.com', 'Sergio ', 'Correa', '1985-01-01', '2413075', 'Sarandi y 18 de Julio', 'Rosario', 0, 500, 0, 5, '2020-12-31', 0, '', 1),
(2, '2313212332132165465', 'FNC', 'FNC', 'unmail@mail', 'Fabrica Nacional decErvezas', 'FNC', '2020-01-01', '321231321', '2313213', 'Montevideo', 0, 0, 0, 10, '2020-01-01', 0, '', 1),
(3, '219186280010', 'Claudia Prnna Clark', 'A la Vuelta', 'alavueltakioscoymas@gmail.com', 'Diego', 'Collazo', '2022-01-01', '091992611', 'Vazquez 1417', 'MONTEVIDEO', 0, 0, 0, 0, '', 0, '', 1),
(4, '44444', 'un prov', 'el prov', '', 'proveedor', 'de ejemplo', '2022-01-02', '', '', '', 0, 0, 0, 0, '', 0, '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguridad`
--

DROP TABLE IF EXISTS `seguridad`;
CREATE TABLE IF NOT EXISTS `seguridad` (
  `idseg` int NOT NULL AUTO_INCREMENT,
  `categoria` int DEFAULT NULL,
  `descripcion` text NOT NULL,
  `activo` text NOT NULL,
  PRIMARY KEY (`idseg`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `seguridad`
--

INSERT INTO `seguridad` (`idseg`, `categoria`, `descripcion`, `activo`) VALUES
(0, 0, 'Administrador', '1'),
(1, 1, 'Administrativo', '1'),
(2, 2, 'Consultante', '1'),
(50, 5, 'Categoria 5', '1'),
(49, 6, 'Categoria 6', '0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `idstk` int NOT NULL AUTO_INCREMENT,
  `idart` int NOT NULL,
  `cantidad` int NOT NULL,
  `deposito` int NOT NULL,
  `observaciones` text NOT NULL,
  PRIMARY KEY (`idstk`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idusu` int NOT NULL AUTO_INCREMENT,
  `email` text NOT NULL,
  `pass` text NOT NULL,
  `apellidos` text NOT NULL,
  `nombres` text NOT NULL,
  `telefono` text NOT NULL,
  `direccion` text NOT NULL,
  `ciudad` text NOT NULL,
  `seguridad` int NOT NULL,
  `fechnac` varchar(10) NOT NULL,
  `feching` varchar(10) NOT NULL,
  `observaciones` text NOT NULL,
  `activo` int NOT NULL,
  PRIMARY KEY (`idusu`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusu`, `email`, `pass`, `apellidos`, `nombres`, `telefono`, `direccion`, `ciudad`, `seguridad`, `fechnac`, `feching`, `observaciones`, `activo`) VALUES
(1, 'admin@mail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'Collazo', 'Carlos Diego', '099550624', 'Salto1262', 'Montevideo', 0, '2000-01-01', '2000-01-01', '', 1),
(2, 'admini@mail.com', '5e543256c480ac577d30f76f9120eb74', 'Collazo', 'Diego', '099550624', 'Salto1262', 'Montevideo', 0, '2000-02-02', '2000-01-02', '', 1),
(14, '4@4', 'a87ff679a2f3e71d9181a67b7542122c', '4', '4', '4', '4', '4', 0, '2020-12-23', '2020-12-24', '4', 0),
(13, '3@3', '5e543256c480ac577d30f76f9120eb74', '3', '3', '3', '3', '3', 0, '2020-12-23', '2020-12-23', '3', 0),
(12, '2@2', '5e543256c480ac577d30f76f9120eb74', '2', '2', '2', '2', '2', 0, '', '', '', 0),
(10, 'email@email', 'c4ca4238a0b923820dcc509a6f75849b', 'Ledesma', 'Pablo', '', '', '', 0, '', '', '', 0),
(11, '1@1', '5e543256c480ac577d30f76f9120eb74', '1', '1', '1', '1', '1', 0, '', '', '', 0),
(9, 'administrativo@mail.com', '5e543256c480ac577d30f76f9120eb74', 'De Turno', 'Administrativo', '45522093', 'Sarandi y Treinta y tres', 'Rosario', 1, '1975-02-18', '2020-10-01', 'Usuario para probar seguridad de administrativo', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
