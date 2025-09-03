-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-09-2025 a las 02:44:41
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `e_commerce`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `total` decimal(10,2) UNSIGNED DEFAULT NULL,
  `fecha_compra` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_actualizacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id`, `usuario_id`, `total`, `fecha_compra`, `fecha_actualizacion`) VALUES
(33, 1, 800.00, '2025-08-31 07:36:58', '2025-08-31 07:36:58'),
(34, 2, 380.00, '2025-08-31 07:37:15', '2025-08-31 07:37:15'),
(35, 3, 800.00, '2025-08-31 07:37:31', '2025-08-31 07:37:31'),
(37, 4, 1680.00, '2025-08-31 07:39:19', '2025-08-31 07:39:19'),
(39, 5, 1450.00, '2025-08-31 07:42:40', '2025-08-31 07:42:40'),
(40, 1, 80.00, '2025-08-31 07:44:17', '2025-08-31 07:44:17'),
(41, 3, 1030.00, '2025-08-31 07:54:46', '2025-08-31 07:54:46'),
(42, 2, 350.00, '2025-08-31 07:59:24', '2025-08-31 07:59:24'),
(43, 1, 350.00, '2025-08-31 07:59:45', '2025-08-31 07:59:45'),
(44, 5, 800.00, '2025-08-31 08:02:16', '2025-08-31 08:02:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_compras`
--

CREATE TABLE `detalle_compras` (
  `id` int(11) NOT NULL,
  `compra_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `cantidad` int(10) UNSIGNED DEFAULT NULL,
  `subtotal` decimal(10,2) UNSIGNED DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_actualizacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `detalle_compras`
--

INSERT INTO `detalle_compras` (`id`, `compra_id`, `producto_id`, `cantidad`, `subtotal`, `fecha_creacion`, `fecha_actualizacion`) VALUES
(56, 33, 1, 1, 500.00, '2025-08-31 07:36:58', '2025-08-31 07:36:58'),
(57, 33, 2, 1, 300.00, '2025-08-31 07:36:58', '2025-08-31 07:36:58'),
(58, 34, 8, 1, 300.00, '2025-08-31 07:37:15', '2025-08-31 07:37:15'),
(59, 34, 9, 1, 80.00, '2025-08-31 07:37:15', '2025-08-31 07:37:15'),
(60, 35, 7, 1, 600.00, '2025-08-31 07:37:31', '2025-08-31 07:37:31'),
(61, 35, 6, 1, 200.00, '2025-08-31 07:37:31', '2025-08-31 07:37:31'),
(66, 37, 3, 1, 650.00, '2025-08-31 07:39:19', '2025-08-31 07:39:19'),
(67, 37, 4, 1, 180.00, '2025-08-31 07:39:19', '2025-08-31 07:39:19'),
(68, 37, 5, 1, 350.00, '2025-08-31 07:39:19', '2025-08-31 07:39:19'),
(69, 37, 1, 1, 500.00, '2025-08-31 07:39:19', '2025-08-31 07:39:19'),
(70, 39, 1, 1, 500.00, '2025-08-31 07:42:40', '2025-08-31 07:42:40'),
(71, 39, 2, 1, 300.00, '2025-08-31 07:42:40', '2025-08-31 07:42:40'),
(72, 39, 3, 1, 650.00, '2025-08-31 07:42:40', '2025-08-31 07:42:40'),
(73, 40, 9, 1, 80.00, '2025-08-31 07:44:17', '2025-08-31 07:44:17'),
(74, 41, 9, 1, 80.00, '2025-08-31 07:54:46', '2025-08-31 07:54:46'),
(75, 41, 2, 1, 300.00, '2025-08-31 07:54:46', '2025-08-31 07:54:46'),
(76, 41, 3, 1, 650.00, '2025-08-31 07:54:46', '2025-08-31 07:54:46'),
(77, 42, 5, 1, 350.00, '2025-08-31 07:59:24', '2025-08-31 07:59:24'),
(78, 43, 5, 1, 350.00, '2025-08-31 07:59:45', '2025-08-31 07:59:45'),
(79, 44, 7, 1, 600.00, '2025-08-31 08:02:16', '2025-08-31 08:02:16'),
(80, 44, 6, 1, 200.00, '2025-08-31 08:02:16', '2025-08-31 08:02:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` decimal(10,2) UNSIGNED NOT NULL,
  `stock` int(11) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_actualizacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `stock`, `fecha_creacion`, `fecha_actualizacion`) VALUES
(1, 'TV SMART SONY 55\"', 'Televisor Smart TV Marca Sony de 55\"', 500.00, 12, '2025-08-31 01:55:22', '2025-08-31 07:42:40'),
(2, 'TV SMART HYUNDAI 32\"', 'Televisor Smart TV Marca Hyundai de 32\"', 300.00, 11, '2025-08-31 01:55:38', '2025-08-31 07:54:46'),
(3, 'Portatil HP 15,6\"', 'HP Portátil de 15,6 pulgadas, pantalla táctil HD, AMD Ryzen 3 7320U, 8 GB de RAM, SSD de 128 GB, gráficos AMD Radeon, Windows 11 Home en modo S, plata natural', 650.00, 16, '2025-08-31 01:55:50', '2025-08-31 07:54:46'),
(4, 'Samsung Galaxy A16 4G LTE', 'Samsung Galaxy A16 4G LTE, Teléfono Móvil Android, Pantalla 6,7\" Super AMOLED, Múltiples Cámaras, Almacenamiento 256GB, Negro (Versión Española), Garantía del Fabricante 3 Años + 1 Año Extra', 180.00, 26, '2025-08-31 01:56:09', '2025-08-31 07:39:19'),
(5, 'Samsung Galaxy A36 5G', 'Samsung Galaxy A36 5G 256GB Teléfono Móvil, 8GB RAM, 50MP Cámara, Blanco, Garantía del Fabricante 3 Años + 1 Año Extra ', 350.00, 11, '2025-08-31 01:56:26', '2025-08-31 07:59:45'),
(6, 'Silla Gaming Ergonómica Reclinable', 'Silla Gaming Ergonómica Reclinable con Cojín Lumbar y Cervical | Respaldo Alto Acolchado | Altura ajustable | Ruedas Giratorias 360° y Reposabrazos | Ideal Ordenador, Oficina, Videojuego o Escritorio', 200.00, 7, '2025-08-31 02:52:45', '2025-08-31 08:02:16'),
(7, 'Samsung Galaxy Tab S10 FE 128GB', 'Samsung Galaxy Tab S10 FE 128GB, Tablet Android + S Pen, Galaxy AI, 8GB RAM, Pantalla de 10,9\", Batería de Larga Duración, Azul, Garantía del Fabricante 3 Años + 1 Año Extra', 600.00, 2, '2025-08-31 02:52:45', '2025-08-31 08:02:16'),
(8, 'Mesa Gaming PC', 'Mesa Gaming PC para e-sports con Iluminación LED RGB alimentada por USB, Textura de Fibra de Carbono, Gran Reposavasos, Guiado de Cables y Soporte para Auriculares. Color Negro ', 300.00, 2, '2025-08-31 02:52:45', '2025-08-31 07:37:15'),
(9, 'JBL Tune 510 BT Auriculares inalámbricos', 'JBL Tune 510 BT Auriculares inalámbricos on-ear con tecnología Bluetooth, ligeros, cómodos y plegables, hasta 40h de batería, Siri y Asistente de Google, con conexión multipunto, negro', 80.00, 5, '2025-08-31 02:52:45', '2025-08-31 07:54:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `edad` int(11) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_actualizacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `edad`, `fecha_registro`, `fecha_actualizacion`) VALUES
(1, 'RAFAEL', 'rafaelgerdel@gmail.com', 45, '2025-08-31 01:15:41', '2025-08-31 08:03:19'),
(2, 'DOMENICO', 'domenicogerdell@gmail.com', 18, '2025-08-31 01:21:37', '2025-08-31 01:21:37'),
(3, 'MARIA', 'mariacorina@gmail.com', 21, '2025-08-31 01:21:37', '2025-08-31 01:21:37'),
(4, 'ALEXANDRA', 'adignazi@gmail.com', 40, '2025-08-31 01:21:37', '2025-08-31 01:21:37'),
(5, 'MAX', 'maxantonio@gmail.com', 25, '2025-08-31 01:21:37', '2025-08-31 01:21:37');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `detalle_compras`
--
ALTER TABLE `detalle_compras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `compra_id` (`compra_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `detalle_compras`
--
ALTER TABLE `detalle_compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `detalle_compras`
--
ALTER TABLE `detalle_compras`
  ADD CONSTRAINT `detalle_compras_ibfk_1` FOREIGN KEY (`compra_id`) REFERENCES `compras` (`id`),
  ADD CONSTRAINT `detalle_compras_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
