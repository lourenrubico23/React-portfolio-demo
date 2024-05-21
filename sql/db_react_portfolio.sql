-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2024 at 05:02 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_react_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `portfolio_aid` int(11) NOT NULL,
  `portfolio_title` varchar(50) NOT NULL,
  `portfolio_category` varchar(50) NOT NULL,
  `portfolio_image` varchar(50) NOT NULL,
  `portfolio_publish_date` varchar(20) NOT NULL,
  `portfolio_description` text NOT NULL,
  `portfolio_is_active` tinyint(1) NOT NULL,
  `portfolio_created` varchar(20) NOT NULL,
  `portfolio_datetime` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`portfolio_aid`, `portfolio_title`, `portfolio_category`, `portfolio_image`, `portfolio_publish_date`, `portfolio_description`, `portfolio_is_active`, `portfolio_created`, `portfolio_datetime`) VALUES
(7, 'Natural Smile Dental Clinic', 'Web Design', '../../card1.png', '645654', 'A website for both clients and clinic. \n                                    The clients can schedule their appointment through this website.', 1, '2024-05-10 14:30:16', 2024),
(8, 'Shoes Ni Sabel', 'Web Design', 'card2.png', 'rgfrsdfg', 'Customer can discover and buy footwear reflecting Filipino\\\\\\\'s shoemakers\\\\\\\' unique craftmanship and cultural identity.', 1, '2024-05-10 14:31:31', 2024),
(9, 'Sports Blog Website', 'Web Design', 'card3.png', 'fsad', 'Our blog sports website offers insight, update, and trends across diverse sports disciplines and tournaments', 1, '2024-05-10 14:32:02', 2024),
(10, '1', '1', '1', '1', '1', 1, '2024-05-13 08:30:28', 2024),
(11, 'netflix', 'movies', 'bg-login.jpg', 'sdadsadas', 'asasa', 1, '2024-05-14 09:51:56', 2024),
(12, 'asasas', 'asas', 'logo.png', 'asasa', 'asasa', 1, '2024-05-14 10:03:39', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_aid` int(11) NOT NULL,
  `user_is_active` tinyint(1) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_key` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_created` varchar(20) NOT NULL,
  `user_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_aid`, `user_is_active`, `user_name`, `user_email`, `user_key`, `user_password`, `user_created`, `user_datetime`) VALUES
(7, 1, 'louren', 'lourenisobel18@gmail.com', '', '$2y$10$5vtu/IgMdTiQWiWyYxs1GOgQ/bgq1Vrhp6TL6EBEbQOGpzDtT6f3G', '2024-05-20 13:58:22', '2024-05-20 15:23:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`portfolio_aid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `portfolio_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
