-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2024 at 07:57 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `netflix`
--

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `uuid` text DEFAULT NULL,
  `judul` text DEFAULT NULL,
  `gambar` text DEFAULT NULL,
  `kategori` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`id`, `uuid`, `judul`, `gambar`, `kategori`) VALUES
(1, '096ec1c5-7d72-4d2e-b638-ab5aaf38945f', 'One Piece Film: Gold', '096ec1c5-7d72-4d2e-b638-ab5aaf38945f.png', 'Anime & Anime-Inspired'),
(2, '441e9172-8851-4879-a34c-6841b1d82107', 'Magic and Muscles', '441e9172-8851-4879-a34c-6841b1d82107.png', 'Anime & Anime-Inspired'),
(3, 'f69f4e26-b62e-4890-aac7-e160a82b3945', 'Black Clover', 'f69f4e26-b62e-4890-aac7-e160a82b3945.png', 'Anime & Anime-Inspired'),
(4, 'ba9bfa03-7dc4-40a7-86d0-6677d6d28993', 'Blue Exorcist', 'ba9bfa03-7dc4-40a7-86d0-6677d6d28993.png', 'Anime & Anime-Inspired'),
(5, '5dc07eeb-517c-4cfe-8b4c-3f25dd05e132', 'That Time I Got Reincarnated as a Slime', '5dc07eeb-517c-4cfe-8b4c-3f25dd05e132.png', 'Anime & Anime-Inspired'),
(6, '0a7267b5-6a9d-4efa-b80d-48d2e91faa53', 'Ushio & Tora', '0a7267b5-6a9d-4efa-b80d-48d2e91faa53.png', 'Anime & Anime-Inspired'),
(7, '8ad62ffc-01f1-459b-8eda-32643b6a233e', 'Frieren: Beyond the Journey\'s End', '8ad62ffc-01f1-459b-8eda-32643b6a233e.png', 'Anime & Anime-Inspired'),
(8, '6fb63284-15e8-491b-b85a-e8818cea2444', 'Rurouni Kenshin', '6fb63284-15e8-491b-b85a-e8818cea2444.png', 'Anime & Anime-Inspired'),
(9, 'ad5e0ca0-052c-4a94-825a-889fd5405347', 'One-Punch Man', 'ad5e0ca0-052c-4a94-825a-889fd5405347.png', 'Anime & Anime-Inspired'),
(10, '4a7bb6dc-c8e5-4660-a9ff-bf2fe8d7354d', 'Record of Ragnarok', '4a7bb6dc-c8e5-4660-a9ff-bf2fe8d7354d.png', 'Anime & Anime-Inspired'),
(11, '96deae63-3ab0-464e-a3ed-4c6c04495af5', 'Hunter X Hunter (2011)', '96deae63-3ab0-464e-a3ed-4c6c04495af5.png', 'Anime & Anime-Inspired'),
(12, 'e0383330-f1f1-49a1-91e2-5d08a0c1af0f', 'Naruto Shippuden', 'e0383330-f1f1-49a1-91e2-5d08a0c1af0f.png', 'Anime & Anime-Inspired'),
(13, '9ec8aea3-72b7-4347-9553-2e715c43a27e', 'One Piece Film: Gold', '9ec8aea3-72b7-4347-9553-2e715c43a27e.png', 'Trending Now'),
(14, '337b8e92-a5fc-4b7e-94a5-47962f5464e4', 'Rebel Moon — Part One: A Child of Fire', '337b8e92-a5fc-4b7e-94a5-47962f5464e4.png', 'Trending Now'),
(15, '9cfdb431-a9b2-4ebb-a618-5ee63534cb80', 'Yu Yu Hakusho', '9cfdb431-a9b2-4ebb-a618-5ee63534cb80.png', 'Trending Now'),
(16, '3142d946-bc29-4fb7-b0b9-2e7de95ec8b2', 'Batman Begins', '3142d946-bc29-4fb7-b0b9-2e7de95ec8b2.png', 'Trending Now'),
(17, '2c0c622d-4cc0-4b29-b95f-5a57c7630949', 'KENGAN ASHURA', '2c0c622d-4cc0-4b29-b95f-5a57c7630949.png', 'Trending Now'),
(18, 'b792196a-321e-4390-a488-1d3d7615c633', 'Batman v Superman: Dawn of Justice', 'b792196a-321e-4390-a488-1d3d7615c633.png', 'Trending Now'),
(19, 'c6d8e774-e6a8-4cd3-8852-24f766b0771a', 'Money Heist', 'c6d8e774-e6a8-4cd3-8852-24f766b0771a.png', 'Trending Now'),
(20, 'b7ab66cb-b335-4857-9009-464b059aecb7', 'Brooklyn Nine-Nine', 'b7ab66cb-b335-4857-9009-464b059aecb7.png', 'Trending Now'),
(21, '19d9609e-6c86-4699-a834-ef74de983aee', 'The Witcher', '19d9609e-6c86-4699-a834-ef74de983aee.png', 'Trending Now'),
(22, 'fa81db11-c21b-4cd8-935a-5c7bdd962b56', 'Black Clover', 'fa81db11-c21b-4cd8-935a-5c7bdd962b56.png', 'Trending Now'),
(23, '0d679a74-cf6d-4066-a88b-03e6e4ca30d3', 'Lucifer', '0d679a74-cf6d-4066-a88b-03e6e4ca30d3.png', 'Trending Now'),
(24, '9ca73e3a-be3d-42a7-9200-a951132ef04e', 'Haikyu!!', '9ca73e3a-be3d-42a7-9200-a951132ef04e.png', 'Trending Now'),
(25, 'f094e777-9e6e-4a8b-b6b7-1170e31bc92b', 'True Blood', 'f094e777-9e6e-4a8b-b6b7-1170e31bc92b.png', 'Binge-worthy Western Supernatural TV Shows'),
(26, '94ca3d30-9faf-4116-902f-6d665bb4750e', 'Shadowhunters: The Mortal Instruments', '94ca3d30-9faf-4116-902f-6d665bb4750e.png', 'Binge-worthy Western Supernatural TV Shows'),
(27, 'bb438660-1da5-4f29-889c-8e7d90d75043', 'Stranger Things', 'bb438660-1da5-4f29-889c-8e7d90d75043.png', 'Binge-worthy Western Supernatural TV Shows'),
(28, '8fe4b7a1-7bda-499a-8d3b-3ec0b76f15a8', 'The Witcher: Blood Origin', '8fe4b7a1-7bda-499a-8d3b-3ec0b76f15a8.png', 'Binge-worthy Western Supernatural TV Shows'),
(29, 'fc27ec2e-29f8-460e-bd40-3ea2b3b60094', 'Manifest', 'fc27ec2e-29f8-460e-bd40-3ea2b3b60094.png', 'Binge-worthy Western Supernatural TV Shows'),
(30, '94f70b89-7d74-44e6-9cfe-b4a93e9c6bc1', 'Locke & Key', '94f70b89-7d74-44e6-9cfe-b4a93e9c6bc1.png', 'Binge-worthy Western Supernatural TV Shows'),
(31, 'bde1cbf6-eb6b-4e09-97d0-20976ea891de', 'V Wars', 'bde1cbf6-eb6b-4e09-97d0-20976ea891de.png', 'Binge-worthy Western Supernatural TV Shows'),
(32, '0d442d58-4cf9-4c05-840f-00fae087326d', 'Feria: The Darkest Light', '0d442d58-4cf9-4c05-840f-00fae087326d.png', 'Binge-worthy Western Supernatural TV Shows'),
(33, 'e25a8f2c-453d-4522-acde-7283ebd6b35e', 'Glitch', 'e25a8f2c-453d-4522-acde-7283ebd6b35e.png', 'Binge-worthy Western Supernatural TV Shows'),
(34, '0a8cbd8e-92a5-47bf-b1c0-d4b483f276c4', 'The Imperfects', '0a8cbd8e-92a5-47bf-b1c0-d4b483f276c4.png', 'Binge-worthy Western Supernatural TV Shows'),
(35, '1fc4a71e-6e53-4565-b7ea-cc215e36eaae', 'The Girl in the Mirror', '1fc4a71e-6e53-4565-b7ea-cc215e36eaae.png', 'Binge-worthy Western Supernatural TV Shows'),
(36, 'a7a1987f-60bd-4a25-be21-cb2498999ab2', 'Castle Rock', 'a7a1987f-60bd-4a25-be21-cb2498999ab2.png', 'Binge-worthy Western Supernatural TV Shows');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
