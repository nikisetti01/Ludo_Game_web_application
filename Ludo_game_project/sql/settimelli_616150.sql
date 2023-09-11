-- Progettazione Web 
DROP DATABASE if exists settimelli_616150; 
CREATE DATABASE settimelli_616150; 
USE settimelli_616150; 
-- MySQL dump 10.13  Distrib 5.7.28, for Win64 (x86_64)
--
-- Host: localhost    Database: settimelli_616150
-- ------------------------------------------------------
-- Server version	5.7.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `punteggi`
--

DROP TABLE IF EXISTS `punteggi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `punteggi` (
  `id_partita` int(11) NOT NULL AUTO_INCREMENT,
  `giocatore` varchar(255) NOT NULL,
  `punteggio` int(11) NOT NULL,
  PRIMARY KEY (`id_partita`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `punteggi`
--

LOCK TABLES `punteggi` WRITE;
/*!40000 ALTER TABLE `punteggi` DISABLE KEYS */;
INSERT INTO `punteggi` VALUES (1,'nikisetti01',3),(2,'giova01',4),(3,'nikisetti01',3),(4,'giova01',4),(5,'giova01',3),(6,'nikisetti01',4),(7,'nikisetti01',4),(8,'pinopini',2),(13,'alefranco01',4),(14,'cateterina',2),(15,'alefranco01',3),(16,'cateterina',4),(17,'federicobini',2),(18,'cateterina',4),(19,'federicobini',4),(20,'cateterina',1),(21,'nikisetti01',4),(22,'federicobini',2),(23,'nikisetti01',4),(24,'federicobini',3),(25,'federicobini',4),(26,'giova01',2),(33,'giova01',0),(34,'giova01',1),(35,'giova01',1),(37,'giova01',4),(38,'giova01',1),(39,'giova01',1),(40,'giova01',4),(41,'giova01',1),(42,'giova01',1),(43,'giova01',1),(44,'giova01',1);
/*!40000 ALTER TABLE `punteggi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `risultati`
--

DROP TABLE IF EXISTS `risultati`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `risultati` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `giocatorevincente` varchar(255) NOT NULL,
  `giocatoreperdente` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `risultati`
--

LOCK TABLES `risultati` WRITE;
/*!40000 ALTER TABLE `risultati` DISABLE KEYS */;
INSERT INTO `risultati` VALUES (13,'giova01','nikisetti01'),(14,'nikisetti01','giova01'),(15,'nikisetti01','pinopini'),(16,'pinopini','nikisetti01'),(17,'alefranco01','cateterina'),(18,'cateterina','federicobini'),(19,'cateterina','alefranco01'),(20,'cateterina','federicobini'),(21,'nikisetti01','federicobini'),(22,'nikisetti01','federicoobini'),(23,'federicobini','giova01'),(31,'giova01','CPU'),(32,'nikisetti01','CPU'),(33,'studente1','studente2'),(34,'federicobini','nikisetti01'),(35,'federicobini','nikisetti01');
/*!40000 ALTER TABLE `risultati` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utenti`
--

DROP TABLE IF EXISTS `utenti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utenti` (
  `nome` varchar(50) DEFAULT NULL,
  `cognome` varchar(50) DEFAULT NULL,
  `nomeUtente` varchar(20) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`nomeUtente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utenti`
--

LOCK TABLES `utenti` WRITE;
/*!40000 ALTER TABLE `utenti` DISABLE KEYS */;
INSERT INTO `utenti` VALUES ('Alessio','Franchini','alefranco01','alelolxp@gmail.com','$2y$10$VzZMKbJgXL72uNLieZx9Z.FuX.18AvHfB1nZWU3zTHyiRyvj1ZoGO'),('Caterina','Benedetti','cateterina','cateterina@gmail.com','$2y$10$qYdwDv6DXTTzuK6fCcsqHuOh.8kxF8Y9dL599suVcG28qpsvWOLu2'),('Federico','Bini','federicobini','federicobini01@gmail.com','$2y$10$bU5wWZGBzAHhTD5I401SkeuPJc6TWrCrg953F1Ww4nvxJtrt9Skku'),('Giovanni','Mazzuoli','giova01','giovannimazzuoli@gmail.com','$2y$10$eHRXGDAqP1lvwe/xZoi7Wut17Z5FxKMm8D.xCpELm/a0VX4tITNLS'),('Daniel','Namaki','namawho','daninamawho@gmail.com','$2y$10$vP4Wve./mF/C6R0GPKBKhOEWAXJNF3A.I4bopUJ3/SAhDGLt.EWq6'),('Niccolo','Settimelli','nikisetti01','niccolosettimelli@gmail.com','$2y$10$dwn8BTHcX6SjiOHEu2AkeOBKzbOMKwoa/1F.d..gYoXzgFHJRMO6u'),('Pino','Pini','pinopini','pinopini03@gmail.com','$2y$10$8Vy0vcYSk6gg9AWIkQU5DOdNPF3Tvh7fzYxqoG9Zjk4mDAG3fhr.W'),('Studente','Studente','studente1','studente@gmail.com','$2y$10$LvfkhnbDkTrzd5U5G5Mbw.CeoRp8tcMkjik.YfWey6lFVYVpRlMX.'),('Studenteb','Studenteb','studente2','studenteb@gmail.com','$2y$10$6AygJ1LUgobSr.UcrY8qsetQFaIp3p4Hz5G4ULzhx7Z7UiznK4iIC');
/*!40000 ALTER TABLE `utenti` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-17 23:04:21
