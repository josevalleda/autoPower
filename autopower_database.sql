CREATE DATABASE  IF NOT EXISTS `auto_power` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `auto_power`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: auto_power
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `arreglo`
--

DROP TABLE IF EXISTS `arreglo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `arreglo` (
  `idarreglo` int NOT NULL AUTO_INCREMENT,
  `vehiculo` int NOT NULL,
  `fecha` date NOT NULL,
  `tipo_arreglo` varchar(255) NOT NULL,
  `taller` int NOT NULL,
  `precio` double DEFAULT '0',
  `descripcion` longtext,
  PRIMARY KEY (`idarreglo`,`vehiculo`),
  KEY `fk_arreglo_vehiculo1_idx` (`vehiculo`),
  KEY `fk_arreglo_taller1_idx` (`taller`),
  CONSTRAINT `fk_arreglo_taller1` FOREIGN KEY (`taller`) REFERENCES `taller` (`idtaller`),
  CONSTRAINT `fk_arreglo_vehiculo1` FOREIGN KEY (`vehiculo`) REFERENCES `vehiculo` (`idvehiculo`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `arreglo`
--

LOCK TABLES `arreglo` WRITE;
/*!40000 ALTER TABLE `arreglo` DISABLE KEYS */;
INSERT INTO `arreglo` VALUES (15,8,'2021-08-18','Mecánica básica',1,0,'asd'),(16,11,'2021-08-24','Mecánica especializada',1,1002,'sdasfsdfgsdf'),(17,12,'2021-08-09','Revisión Automotriz',1,0,NULL);
/*!40000 ALTER TABLE `arreglo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taller`
--

DROP TABLE IF EXISTS `taller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taller` (
  `idtaller` int NOT NULL AUTO_INCREMENT,
  `direccion` varchar(255) NOT NULL,
  PRIMARY KEY (`idtaller`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taller`
--

LOCK TABLES `taller` WRITE;
/*!40000 ALTER TABLE `taller` DISABLE KEYS */;
INSERT INTO `taller` VALUES (1,'Cienaga, Calle 3');
/*!40000 ALTER TABLE `taller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idusuarios` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `tipo` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`idusuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'Jose Gasd','jos2e@gmail.com','$2a$10$Qknb.Q.utf1PeCpwu.7IG.cY7RCd/PUQ/S7/A3AeFgXg1P/UvtvDq','jose13',0),(5,'Administrador','admin@autopower.com','$2a$10$h5HCNAvlIftmp5zI9ltUre0aJMdq2t3.OL2kLmCuAyjxcw8Ssad0O','admin',0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehiculo`
--

DROP TABLE IF EXISTS `vehiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehiculo` (
  `idvehiculo` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `marca` varchar(255) NOT NULL,
  `modelo` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `propietario` int NOT NULL,
  `estado` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`idvehiculo`,`propietario`),
  KEY `fk_vehiculo_usuarios_idx` (`propietario`),
  CONSTRAINT `fk_vehiculo_usuarios` FOREIGN KEY (`propietario`) REFERENCES `usuarios` (`idusuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehiculo`
--

LOCK TABLES `vehiculo` WRITE;
/*!40000 ALTER TABLE `vehiculo` DISABLE KEYS */;
INSERT INTO `vehiculo` VALUES (7,'Carro1','mazda','2012','rojo',2,0),(8,'Carro 3','Suzuki','2012','Blanco',2,2),(9,'Carro 4','Mercedez Benz','2020','Verde Fluorescente',2,6),(10,'Carro 5','Patico','2093','Azul',2,0),(11,'Carro 64','McLaren','2020','Naranja',2,7),(12,'Carrito1','Patico','2012','Verde',5,1);
/*!40000 ALTER TABLE `vehiculo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-05 18:33:51
