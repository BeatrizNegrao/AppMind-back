-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mind_app
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(200) NOT NULL,
  `id_usuarios` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_usuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('teste1','teste1@gmail.com','$2b$10$FbWgthPhnto.6h02AYLtJu6/oCNuvo28Irr8u9Yy8FUeE3pwzWT4G',20),('teste2','teste2@gmail.com','$2b$10$zuZUsXAEC5BqVUHpYT.q.egAv7XP.b5VaLrodZUqkQm7ET0QcfQtG',21),('Beatriz','bia@gmail.com','$2b$10$j3aKcYDYMymWGK8ESegavOz/htBJgAW5NSprBhlODhUi5r8o625M6',22),('Beatriz Silva ','beatrizsilva@gmail.com','$2b$10$tJM7kxU1xZAtDAICtfCbhugPjBykzr3lqfa3MlH.kRSSf5o5il1Ey',23),('Pedro ','pedro@gmail.com','$2b$10$E8oeCGOv4XZ8db7a5pL3XOqBLELhdlYTQM56e4jB7Caay5UYzx.Ta',24),('Pedro Gabriel ','pedrogabriel@gmail.com ','$2b$10$4pu/zjj5aK.Jqy4Gy.mhuO19clmuRPzmapdTjJXkxCfcbtr7ZjNx.',25),('admin','admin@gmail.com ','$2b$10$7/AqzMuhDoYNnHKDYrgfLOHVXtzUgqpdEqve9IKSG5xZc06QTn00C',27),('Admin2','admin2@gmail.com ','$2b$10$XgKp9Y2wYnWFG7ZWpH7.VeVafKOrysf78u.sunzy8/521o8ZVyvWq',28),('teste6','teste6@gmail.com','$2b$10$GBXmVlplGO2e9MBLw/9cIu1/N7Uee1Jv.gOckABQ4RZI.S/sTs84m',29),('teste','teste123@gmail.com','$2b$10$nhQ9JegSES.o3mowgJCJOe6jXS2Vhe38bHTXxSDQ8.dG0nSvXnFiq',30),('teste6','teste6@gmail.com','$2b$10$oxO1uLR.OVv18XeY5nSeluvffxqNu0sLrNp2NbutBUhewcwmlpKkG',31),('Priscila','priscila@gmail.com ','$2b$10$3xOiGa5usV9w.pWkZ4xqQ.i0F2AngGaJ8XPRatgqk6m3wIk1gMVkK',32),('root','root','$2b$10$m.pFWmMZdvIxI2K5Hrg8D.Io.i0XzZRQou/02FEWqt1xbkObsfOI.',33);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-10 10:51:50
