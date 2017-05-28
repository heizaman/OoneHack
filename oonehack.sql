-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2017 at 05:29 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oonehack`
--

-- --------------------------------------------------------

--
-- Table structure for table `pdthistory`
--

CREATE TABLE `pdthistory` (
  `hisid` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `info` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pdthistory`
--

INSERT INTO `pdthistory` (`hisid`, `id`, `date`, `info`) VALUES
(12, 123456, '2017-02-08', 'General query regarding installation'),
(34, 123456, '2017-03-31', 'Complaint regarding faded print'),
(56, 123456, '2017-04-20', 'Enquiry about product warranty'),
(67, 456789, '2016-07-20', 'Enquiry regarding cleaning of product'),
(87, 456789, '2016-10-26', 'Complaint about drier not working'),
(98, 456789, '2017-04-12', 'Enquiry about new product available for exchange');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dop` date NOT NULL,
  `owner` varchar(25) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `website` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `dop`, `owner`, `phone`, `website`) VALUES
(123456, 'Canon imageClass', '2017-01-21', 'Ram Prakash', '9999888877', 'goo.gl/2zJA4e'),
(456789, 'Whirlpool Bloomwash', '2016-04-05', 'Mohit Kumar', '8765432198', 'goo.gl/nS4WtF');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pdthistory`
--
ALTER TABLE `pdthistory`
  ADD PRIMARY KEY (`hisid`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pdthistory`
--
ALTER TABLE `pdthistory`
  ADD CONSTRAINT `pdthistory_ibfk_1` FOREIGN KEY (`id`) REFERENCES `products` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
