-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Wrz 15, 2024 at 03:11 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chat-app`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `message`) VALUES
(1, 'hello'),
(2, 'whats'),
(3, 'up?'),
(9, 'nigaaga69'),
(10, 'test'),
(11, 'hello'),
(12, 'wassup'),
(13, 'bonk'),
(14, 'mhm'),
(15, 'test123'),
(16, 'this works?'),
(17, 'in real time?!'),
(18, 'really looks like it'),
(19, 'you\'re damn right!'),
(20, 'let me refresh to see if it works'),
(21, 'yo ireffreshed'),
(22, 'and the nessages are still there'),
(23, 'alr rlar'),
(24, 'alr alr*'),
(25, 'that\' spretty cool'),
(26, 'let\'s make a scrollbar tho'),
(27, 'omg it works'),
(28, 'yessir'),
(29, 'umm'),
(30, '123'),
(31, '123'),
(32, '123'),
(33, '123'),
(34, '123'),
(35, '123'),
(36, '123'),
(37, 'okay'),
(38, 'yup'),
(39, 'rhm'),
(40, 'ayo'),
(41, 'test'),
(42, 'welp'),
(43, 'works lol'),
(44, 'also works here :)'),
(45, 'also when referesed!');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
