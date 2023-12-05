-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2023 at 08:59 PM
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
-- Database: `rayan_care_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointmants`
--

CREATE TABLE `appointmants` (
  `patient_id` int(11) NOT NULL,
  `date_of_appointment` varchar(255) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `status_of_appointment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointmants`
--

INSERT INTO `appointmants` (`patient_id`, `date_of_appointment`, `doctor_id`, `status_of_appointment`) VALUES
(49, '12/3/2023, 9:17:00 PM', 47, 'finished'),
(49, '12/7/2023, 9:17:00 PM', 47, 'rejected'),
(49, '12/20/2023, 9:17:00 PM', 47, 'accepted'),
(49, '12/28/2023, 9:17:00 PM', 47, 'rejected'),
(49, '12/30/2023, 9:17:00 PM', 47, 'accepted');

-- --------------------------------------------------------

--
-- Table structure for table `doctor-patient`
--

CREATE TABLE `doctor-patient` (
  `doctor_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `doctor_id` int(11) NOT NULL,
  `doctor_name` varchar(255) NOT NULL,
  `speciality` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`doctor_id`, `doctor_name`, `speciality`) VALUES
(47, 'Salim Assaf', 'Heart'),
(48, 'Lea', 'Mahmoud');

-- --------------------------------------------------------

--
-- Table structure for table `medical_history`
--

CREATE TABLE `medical_history` (
  `patient_id` int(11) NOT NULL,
  `patient_condition` varchar(255) NOT NULL,
  `date_of_add` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medical_history`
--

INSERT INTO `medical_history` (`patient_id`, `patient_condition`, `date_of_add`) VALUES
(49, 'checked in', '2023-12-05'),
(49, 'had MRI', '2023-12-05'),
(49, 'waiting medication', '2023-12-05'),
(50, 'waiting operation', '2023-12-05'),
(50, 'operation successful', '2023-12-05');

-- --------------------------------------------------------

--
-- Table structure for table `medication`
--

CREATE TABLE `medication` (
  `patient_id` int(11) NOT NULL,
  `medicine` varchar(255) NOT NULL,
  `date_of_prescription` datetime NOT NULL DEFAULT current_timestamp(),
  `prescription_details` varchar(255) NOT NULL DEFAULT '1/day',
  `active_prescription` varchar(255) NOT NULL DEFAULT 'yes'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medication`
--

INSERT INTO `medication` (`patient_id`, `medicine`, `date_of_prescription`, `prescription_details`, `active_prescription`) VALUES
(49, 'panadol', '2023-12-05 21:30:41', '2/day', 'yes'),
(49, 'paracetamol', '2023-12-05 21:30:49', '1/day', 'yes'),
(50, 'ogmantin', '2023-12-05 21:36:38', '1 in the moring', 'yes'),
(49, 'heart-meds', '2023-12-05 21:38:05', '1/day', 'no');

-- --------------------------------------------------------

--
-- Table structure for table `patient-room`
--

CREATE TABLE `patient-room` (
  `patient_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `patient_id` int(11) NOT NULL,
  `patient_name` varchar(255) NOT NULL,
  `patient_img` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `doctor` int(11) NOT NULL,
  `current_condition` text NOT NULL,
  `room` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`patient_id`, `patient_name`, `patient_img`, `age`, `gender`, `doctor`, `current_condition`, `room`) VALUES
(49, 'kamal Ahmad', 'https://i.pravatar.cc/200?u=118836', 25, 'male', 47, 'taking medication', 2),
(50, 'Sarah Halawi', 'https://i.pravatar.cc/200?u=1188361', 41, 'female', 47, 'healthy', 8);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `room_id` int(11) NOT NULL,
  `room_number` int(11) NOT NULL,
  `floor` int(11) NOT NULL,
  `capacity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`room_id`, `room_number`, `floor`, `capacity`) VALUES
(2, 100, 1, 2),
(3, 101, 1, 2),
(4, 102, 1, 1),
(5, 200, 2, 2),
(6, 201, 2, 3),
(7, 300, 3, 2),
(8, 301, 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_role` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_role`, `user_email`, `user_password`) VALUES
(46, 'admin', 'rayan@gmail.com', '$2y$10$DLKmdvxpSM9BBtKmAaoQAuiSBWEV.VwFyH.heJtnj5nM16BW6IKsK'),
(47, 'doctor', 'Salim@gmail.com', '$2y$10$eK5ylbmLcWbNdNVoPcRMgOBxTUC1ueGeapIIZ3SqaTl8RKrA8IEI.'),
(48, 'doctor', 'lea@gmail.com', '$2y$10$DyCz4OmKEZiZF1dI2Ah0ieivIVx76tv9aPmLtjcyu4Qhi.0L/FXAq'),
(49, 'patient', 'kamal@gmail.com', '$2y$10$KpXC/8saMVMRFgr6b06HsOIuNvYIERsYPNKAKMPYL48W6s96kMjGu'),
(50, 'patient', 'sara@gmail.com', '$2y$10$XZ7u9XRxgx.J9rH4whErxuAbCoV5JXsH7LYQ4CCd1e7B0PQR5X/uG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointmants`
--
ALTER TABLE `appointmants`
  ADD KEY `patient` (`patient_id`),
  ADD KEY `doctor` (`doctor_id`);

--
-- Indexes for table `doctor-patient`
--
ALTER TABLE `doctor-patient`
  ADD KEY `doctor_id` (`doctor_id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`doctor_id`);

--
-- Indexes for table `medical_history`
--
ALTER TABLE `medical_history`
  ADD KEY `d` (`patient_id`);

--
-- Indexes for table `medication`
--
ALTER TABLE `medication`
  ADD KEY `p` (`patient_id`);

--
-- Indexes for table `patient-room`
--
ALTER TABLE `patient-room`
  ADD KEY `room_id` (`room_id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`patient_id`),
  ADD KEY `patient_doctor` (`doctor`),
  ADD KEY `patient-room` (`room`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`room_id`),
  ADD UNIQUE KEY `unique_room_number` (`room_number`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `unique_user_email` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `room_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointmants`
--
ALTER TABLE `appointmants`
  ADD CONSTRAINT `doctor` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`doctor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patient` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doctor-patient`
--
ALTER TABLE `doctor-patient`
  ADD CONSTRAINT `doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`doctor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `doctor_user` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `medical_history`
--
ALTER TABLE `medical_history`
  ADD CONSTRAINT `d` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `medication`
--
ALTER TABLE `medication`
  ADD CONSTRAINT `p` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient-room`
--
ALTER TABLE `patient-room`
  ADD CONSTRAINT `room_id` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `patient-room` FOREIGN KEY (`room`) REFERENCES `rooms` (`room_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patient-user` FOREIGN KEY (`patient_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patient_doctor` FOREIGN KEY (`doctor`) REFERENCES `doctors` (`doctor_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
