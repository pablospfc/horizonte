-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: horizonte
-- ------------------------------------------------------
-- Server version	8.0.17

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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `id_status_cliente` int(11) NOT NULL DEFAULT '3',
  `razao_social` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `responsavel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cnpj` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_status_cliente_idx` (`id_status_cliente`),
  CONSTRAINT `fk_status_cliente` FOREIGN KEY (`id_status_cliente`) REFERENCES `status_cliente` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,1,'CLP Sistemas','Claudio Pablo Silva Santos','74026470000160','98988197084','2019-12-03 15:48:03','2019-12-03 16:10:25'),(2,3,'CLP Sistemas','Claudio Pablo Silva Santos','20331873000194','98988197084','2019-12-04 14:39:24','2019-12-04 14:39:24'),(3,3,'CLP Sistemas','Claudio Pablo Silva Santos','20331873000194','98988197084','2019-12-04 14:49:25','2019-12-04 14:49:25'),(4,3,'CLP Sistemas','Claudio Pablo Silva Santos','20331873000194','98988197084','2019-12-04 14:51:43','2019-12-04 14:51:43'),(5,3,'CLP Sistemas','Claudio Pablo Silva Santos','20331873000194','98988197084','2019-12-04 15:03:44','2019-12-04 15:03:44'),(7,3,'CLP Sistemas','Claudio Pablo Silva Santos','20331873000194','98988197084','2019-12-04 15:09:13','2019-12-04 15:09:13');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documentos_cliente`
--

DROP TABLE IF EXISTS `documentos_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documentos_cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_tipo_documento` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_mes` int(11) DEFAULT NULL,
  `descricao` text,
  `ano` int(11) DEFAULT NULL,
  `nome_arquivo` varchar(45) DEFAULT NULL,
  `md5_arquivo` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tipo_documento_idx1` (`id_tipo_documento`),
  KEY `fk_cliente_idx1` (`id_cliente`),
  KEY `fk_mes_idx1` (`id_mes`),
  CONSTRAINT `fk_clientes` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id`),
  CONSTRAINT `fk_mes` FOREIGN KEY (`id_mes`) REFERENCES `meses` (`id`),
  CONSTRAINT `fk_tipo_documentos` FOREIGN KEY (`id_tipo_documento`) REFERENCES `tipos_documentos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentos_cliente`
--

LOCK TABLES `documentos_cliente` WRITE;
/*!40000 ALTER TABLE `documentos_cliente` DISABLE KEYS */;
INSERT INTO `documentos_cliente` VALUES (1,1,1,NULL,'contrato',NULL,'179_Conselho_Superior_REIT.pdf','131458201912035de65fd2408ba.pdf','2019-12-03 16:14:58','2019-12-03 17:42:40'),(2,2,1,1,NULL,2019,'Boleto TJ.pdf','135510201912035de6693e3ad23.pdf','2019-12-03 16:24:41','2019-12-03 17:36:07');
/*!40000 ALTER TABLE `documentos_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` longtext,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log`
--

LOCK TABLES `log` WRITE;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
INSERT INTO `log` VALUES (1,'Undefined index: arquivo','2019-11-25 22:24:34','2019-11-25 22:24:34'),(2,'error_log() expects parameter 1 to be string, array given','2019-11-25 22:24:51','2019-11-25 22:24:51'),(3,'error_log() expects parameter 1 to be string, array given','2019-11-25 22:24:55','2019-11-25 22:24:55'),(4,'error_log() expects parameter 1 to be string, array given','2019-11-25 22:25:19','2019-11-25 22:25:19'),(5,'Undefined variable: dados','2019-11-25 23:30:15','2019-11-25 23:30:15'),(6,'Undefined variable: dados','2019-11-25 23:30:43','2019-11-25 23:30:43'),(7,'Undefined variable: dados','2019-11-25 23:30:47','2019-11-25 23:30:47'),(8,'json_decode() expects parameter 1 to be string, array given','2019-11-26 15:49:47','2019-11-26 15:49:47'),(9,'Trying to get property of non-object','2019-11-26 16:58:56','2019-11-26 16:58:56'),(10,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'id_mes\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `id_mes`, `ano`, `descricao`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, undefined, undefined, AUDIINFO_SES.pdf, 113524201911275dde5f7ce5fbc.pdf, 2019-11-27 11:35:25, 2019-11-27 11:35:25))','2019-11-27 14:35:25','2019-11-27 14:35:25'),(11,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'id_mes\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `id_mes`, `ano`, `descricao`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, undefined, undefined, Doc1.pdf, 114217201911275dde6119de039.pdf, 2019-11-27 11:42:17, 2019-11-27 11:42:17))','2019-11-27 14:42:17','2019-11-27 14:42:17'),(12,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'id_mes\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `id_mes`, `ano`, `descricao`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, undefined, undefined, contrato website - Horizonte Assessoria.pdf, 114815201911275dde627fe6b96.pdf, 2019-11-27 11:48:15, 2019-11-27 11:48:15))','2019-11-27 14:48:15','2019-11-27 14:48:15'),(13,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'id_mes\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `id_mes`, `ano`, `descricao`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, undefined, undefined, SaaS.pdf, 114846201911275dde629e0ffe3.pdf, 2019-11-27 11:48:46, 2019-11-27 11:48:46))','2019-11-27 14:48:46','2019-11-27 14:48:46'),(14,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'id_mes\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `id_mes`, `ano`, `descricao`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, undefined, undefined, Doc1.pdf, 115132201911275dde6344d623c.pdf, 2019-11-27 11:51:32, 2019-11-27 11:51:32))','2019-11-27 14:51:32','2019-11-27 14:51:32'),(15,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'id_mes\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `id_mes`, `ano`, `descricao`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, undefined, undefined, edital-seleção-dec-exército-2019.pdf, 115459201911275dde6413d8f89.pdf, 2019-11-27 11:54:59, 2019-11-27 11:54:59))','2019-11-27 14:54:59','2019-11-27 14:54:59'),(16,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'id_mes\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `id_mes`, `ano`, `descricao`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, undefined, undefined, edital-seleção-dec-exército-2019.pdf, 115723201911275dde64a3edada.pdf, 2019-11-27 11:57:23, 2019-11-27 11:57:23))','2019-11-27 14:57:24','2019-11-27 14:57:24'),(17,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, AUDIINFO_SES.pdf, 115839201911275dde64ef43a6a.pdf, 2019-11-27 11:58:39, 2019-11-27 11:58:39))','2019-11-27 14:58:39','2019-11-27 14:58:39'),(18,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, AUDIINFO_SES.pdf, 120001201911275dde6541f0fa6.pdf, 2019-11-27 12:00:02, 2019-11-27 12:00:02))','2019-11-27 15:00:02','2019-11-27 15:00:02'),(19,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, AUDIINFO_SES.pdf, 120644201911275dde66d4e4e4c.pdf, 2019-11-27 12:06:44, 2019-11-27 12:06:44))','2019-11-27 15:06:44','2019-11-27 15:06:44'),(20,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, Doc1.pdf, 120822201911275dde67367dbb2.pdf, 2019-11-27 12:08:22, 2019-11-27 12:08:22))','2019-11-27 15:08:22','2019-11-27 15:08:22'),(21,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, AUDIINFO_SES.pdf, 121018201911275dde67aa5ee4a.pdf, 2019-11-27 12:10:18, 2019-11-27 12:10:18))','2019-11-27 15:10:18','2019-11-27 15:10:18'),(22,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, contrato website - Horizonte Assessoria.pdf, 121459201911275dde68c3c4388.pdf, 2019-11-27 12:14:59, 2019-11-27 12:14:59))','2019-11-27 15:14:59','2019-11-27 15:14:59'),(23,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, edital-seleção-dec-exército-2019.pdf, 121659201911275dde693b2e0f2.pdf, 2019-11-27 12:16:59, 2019-11-27 12:16:59))','2019-11-27 15:16:59','2019-11-27 15:16:59'),(24,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, edital-seleção-dec-exército-2019.pdf, 121943201911275dde69df4da18.pdf, 2019-11-27 12:19:43, 2019-11-27 12:19:43))','2019-11-27 15:19:43','2019-11-27 15:19:43'),(25,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'undefined\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `descricao`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, undefined, , edital-seleção-dec-exército-2019.pdf, 122352201911275dde6ad8dec06.pdf, 2019-11-27 12:23:52, 2019-11-27 12:23:52))','2019-11-27 15:23:52','2019-11-27 15:23:52'),(26,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'null\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, null, AUDIINFO_SES.pdf, 124833201911275dde70a12506e.pdf, 2019-11-27 12:48:33, 2019-11-27 12:48:33))','2019-11-27 15:48:33','2019-11-27 15:48:33'),(27,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'null\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, null, contrato website - Horizonte Assessoria.pdf, 125503201911275dde7227ab4d9.pdf, 2019-11-27 12:55:03, 2019-11-27 12:55:03))','2019-11-27 15:55:03','2019-11-27 15:55:03'),(28,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'null\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, null, Doc1.pdf, 125529201911275dde72415b649.pdf, 2019-11-27 12:55:29, 2019-11-27 12:55:29))','2019-11-27 15:55:29','2019-11-27 15:55:29'),(29,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'null\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 6, null, Doc1.pdf, 125645201911275dde728d12711.pdf, 2019-11-27 12:56:45, 2019-11-27 12:56:45))','2019-11-27 15:56:45','2019-11-27 15:56:45'),(30,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'null\' for column \'id_mes\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `id_mes`, `ano`, `descricao`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, null, null, null, AUDIINFO_SES.pdf, 125824201911275dde72f0e1a86.pdf, 2019-11-27 12:58:24, 2019-11-27 12:58:24))','2019-11-27 15:58:24','2019-11-27 15:58:24'),(31,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'null\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, null, AUDIINFO_SES.pdf, 130025201911275dde7369a90ed.pdf, 2019-11-27 13:00:25, 2019-11-27 13:00:25))','2019-11-27 16:00:25','2019-11-27 16:00:25'),(32,'SQLSTATE[HY000]: General error: 1366 Incorrect integer value: \'null\' for column \'ano\' at row 1 (SQL: insert into `documentos_cliente` (`id_cliente`, `id_tipo_documento`, `ano`, `nome_arquivo`, `md5_arquivo`, `updated_at`, `created_at`) values (1, 1, null, Doc1.pdf, 133643201911275dde7beb837d9.pdf, 2019-11-27 13:36:43, 2019-11-27 13:36:43))','2019-11-27 16:36:43','2019-11-27 16:36:43'),(33,'Call to undefined method Illuminate\\Database\\Query\\Builder::innerJoin()','2019-11-27 17:07:08','2019-11-27 17:07:08'),(34,'SQLSTATE[42S22]: Column not found: 1054 Unknown column \'cli.nome\' in \'field list\' (SQL: select *, `mes`.`nome` as `mes`, `tdc`.`nome` as `tipo_documento`, `cli`.`nome` as `cliente` from `documentos_cliente` as `doc` left join `meses` as `mes` on `doc`.`id_mes` = `mes`.`id` inner join `clientes` as `cli` on `doc`.`id_cliente` = `cli`.`id` inner join `tipos_documentos` as `tdc` on `doc`.`id_tipo_documento` = `tdc`.`id`)','2019-11-27 17:09:16','2019-11-27 17:09:16'),(35,'SQLSTATE[42S22]: Column not found: 1054 Unknown column \'------WebKitFormBoundarymh7fGbJIaiIm3Izz\r\nContent-Disposition:_form-data;_name\' in \'field list\' (SQL: update `documentos_cliente` set `------WebKitFormBoundarymh7fGbJIaiIm3Izz\r\nContent-Disposition:_form-data;_name` = \"id\"\r\n\r\n14\r\n------WebKitFormBoundarymh7fGbJIaiIm3Izz\r\nContent-Disposition: form-data; name=\"id_cliente\"\r\n\r\n2\r\n------WebKitFormBoundarymh7fGbJIaiIm3Izz\r\nContent-Disposition: form-data; name=\"id_tipo_documento\"\r\n\r\n3\r\n------WebKitFormBoundarymh7fGbJIaiIm3Izz\r\nContent-Disposition: form-data; name=\"id_mes\"\r\n\r\n2\r\n------WebKitFormBoundarymh7fGbJIaiIm3Izz\r\nContent-Disposition: form-data; name=\"ano\"\r\n\r\n2019\r\n------WebKitFormBoundarymh7fGbJIaiIm3Izz\r\nContent-Disposition: form-data; name=\"descricao\"\r\n\r\ntestedddddnnnn\r\n------WebKitFormBoundarymh7fGbJIaiIm3Izz--, `updated_at` = 2019-11-29 19:11:43 where `id` = 14)','2019-11-29 22:11:43','2019-11-29 22:11:43'),(36,'SQLSTATE[42S22]: Column not found: 1054 Unknown column \'_method\' in \'field list\' (SQL: update `documentos_cliente` set `id` = 14, `_method` = PUT, `id_cliente` = 2, `id_tipo_documento` = 3, `id_mes` = 2, `ano` = 2019, `descricao` = testedddddxxx, `updated_at` = 2019-11-29 19:34:04 where `id` = 14)','2019-11-29 22:34:04','2019-11-29 22:34:04'),(37,'SQLSTATE[42S22]: Column not found: 1054 Unknown column \'_method\' in \'field list\' (SQL: update `documentos_cliente` set `id` = 14, `_method` = PUT, `id_cliente` = 2, `id_tipo_documento` = 3, `id_mes` = 2, `ano` = 2019, `descricao` = testedddddx, `updated_at` = 2019-11-29 19:35:06 where `id` = 14)','2019-11-29 22:35:06','2019-11-29 22:35:06'),(38,'SQLSTATE[42S22]: Column not found: 1054 Unknown column \'_method\' in \'field list\' (SQL: update `documentos_cliente` set `id` = 14, `_method` = PUT, `id_cliente` = 2, `id_tipo_documento` = 3, `id_mes` = 2, `ano` = 2019, `descricao` = testedddddqqq, `updated_at` = 2019-11-29 19:39:27 where `id` = 14)','2019-11-29 22:39:27','2019-11-29 22:39:27'),(39,'SQLSTATE[42S22]: Column not found: 1054 Unknown column \'arquivo\' in \'field list\' (SQL: update `documentos_cliente` set `id` = 15, `id_cliente` = 2, `id_tipo_documento` = 8, `ano` = 2019, `descricao` = ddddd, `arquivo` = undefined, `updated_at` = 2019-12-02 11:53:09 where `id` = 15)','2019-12-02 14:53:10','2019-12-02 14:53:10'),(40,'SQLSTATE[42S22]: Column not found: 1054 Unknown column \'arquivo\' in \'field list\' (SQL: update `documentos_cliente` set `id` = 15, `id_cliente` = 2, `id_tipo_documento` = 8, `ano` = 2019, `descricao` = ddddd, `arquivo` = undefined, `updated_at` = 2019-12-02 17:27:59 where `id` = 15)','2019-12-02 20:27:59','2019-12-02 20:27:59'),(41,'Undefined index: password','2019-12-04 15:08:15','2019-12-04 15:08:15');
/*!40000 ALTER TABLE `log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meses`
--

DROP TABLE IF EXISTS `meses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meses` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meses`
--

LOCK TABLES `meses` WRITE;
/*!40000 ALTER TABLE `meses` DISABLE KEYS */;
INSERT INTO `meses` VALUES (1,'Janeiro',NULL,NULL),(2,'Fevereiro',NULL,NULL),(3,'Março',NULL,NULL),(4,'Abril',NULL,NULL),(5,'Maio',NULL,NULL),(6,'Junho',NULL,NULL),(7,'Julho',NULL,NULL),(8,'Agosto',NULL,NULL),(9,'Setembro',NULL,NULL),(10,'Outubro',NULL,NULL),(11,'Novembro',NULL,NULL),(12,'Dezembro',NULL,NULL);
/*!40000 ALTER TABLE `meses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_11_19_175914_create_perfil_table',1),(4,'2019_11_19_180046_create_meses_table',1),(5,'2019_11_19_180120_create_tipo_documento_table',1),(6,'2019_11_19_180346_create_clientes_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfis`
--

DROP TABLE IF EXISTS `perfis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfis` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfis`
--

LOCK TABLES `perfis` WRITE;
/*!40000 ALTER TABLE `perfis` DISABLE KEYS */;
INSERT INTO `perfis` VALUES (1,'Administrador',NULL,NULL),(2,'Operador',NULL,NULL),(3,'Cliente',NULL,NULL);
/*!40000 ALTER TABLE `perfis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status_cliente`
--

DROP TABLE IF EXISTS `status_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status_cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_cliente`
--

LOCK TABLES `status_cliente` WRITE;
/*!40000 ALTER TABLE `status_cliente` DISABLE KEYS */;
INSERT INTO `status_cliente` VALUES (1,'Aprovado'),(2,'Rejeitado'),(3,'Aguardando Aprovação');
/*!40000 ALTER TABLE `status_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_documentos`
--

DROP TABLE IF EXISTS `tipos_documentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_documentos` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_documentos`
--

LOCK TABLES `tipos_documentos` WRITE;
/*!40000 ALTER TABLE `tipos_documentos` DISABLE KEYS */;
INSERT INTO `tipos_documentos` VALUES (1,'Parte contratual',NULL,NULL),(2,'Impostos sobre Faturamentos',NULL,NULL),(3,'Folhas de Pagamento',NULL,NULL),(4,'Boletos',NULL,NULL),(5,'Certidões',NULL,NULL),(6,'Balanços',NULL,NULL),(7,'Declaração DEFIS',NULL,NULL),(8,'Declaração IRPF',NULL,NULL);
/*!40000 ALTER TABLE `tipos_documentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_perfil` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `login` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuarios_login_unique` (`login`),
  KEY `vbcvbcvb_idx` (`id_perfil`),
  KEY `fk_cliente_idx` (`id_cliente`),
  CONSTRAINT `fk_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id`),
  CONSTRAINT `fk_perfil` FOREIGN KEY (`id_perfil`) REFERENCES `perfis` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (6,3,7,'Claudio Pablo Silva Santos','20331873000194','$2y$10$0stHxHnl9YLkdktGUsMM7OUpO9RbiuRh2T66SnK5F8cOll0mpNky6',NULL,'2019-12-04 15:09:13','2019-12-04 15:09:13'),(7,2,NULL,'Leilane Holanda','leilane','$2y$10$0stHxHnl9YLkdktGUsMM7OUpO9RbiuRh2T66SnK5F8cOll0mpNky6',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-04 17:43:22
