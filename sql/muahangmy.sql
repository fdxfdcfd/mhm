-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 14, 2016 at 03:39 PM
-- Server version: 5.6.33-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `muahangmy`
--

-- --------------------------------------------------------

--
-- Table structure for table `cate_product`
--

CREATE TABLE IF NOT EXISTS `cate_product` (
  `category_id` int(5) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=13 ;

--
-- Dumping data for table `cate_product`
--

INSERT INTO `cate_product` (`category_id`, `category_name`, `created`, `updated`, `status`) VALUES
(1, 'Mobile Phones', 1472925059004, 1472925059004, 1),
(2, 'Desktop', 1472925059004, 1472925059004, 1),
(3, 'Laptop', 1472925059004, 1472925059004, 1),
(4, 'Accessories', 1472925059004, 1472925059004, 1),
(5, 'Software', 1472925059004, 1472925059004, 1),
(6, 'Sports & Fitness', 1472925059004, 1472925059004, 1),
(7, 'Footwear', 1472925059004, 1472925059004, 1),
(8, 'Jewellery', 1472925059004, 1472925059004, 1),
(9, 'Clothing', 1472925059004, 1472925059004, 1),
(10, 'Home Decor & Kitchen', 1472925059004, 1472925059004, 1),
(11, 'Beauty & Healthcare', 1472925059004, 1472925059004, 1),
(12, 'Toys, Kids & Babies', 1472925059004, 1472925059004, 1);

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(5) NOT NULL,
  `content` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `product_id` int(5) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `content`, `email`, `username`, `product_id`, `created`, `updated`, `status`) VALUES
(1, 'Good Product 01', 'khachhang01@gmail.com', 'khachhang01', 1, 1472925059004, 1472925059004, 1),
(2, 'Good Product 02', 'khachhang02@gmail.com', 'khachhang02', 1, 1472925059004, 1472925059004, 1),
(3, 'Good Product 03', 'khachhang02@gmail.com', 'khachhang02', 1, 1472925059004, 1472925059004, 1);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `id` int(5) NOT NULL,
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password_salt` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `sex` int(1) NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` bigint(15) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `username`, `password`, `password_salt`, `email`, `address`, `phone`, `first_name`, `last_name`, `sex`, `img`, `last_login`, `created`, `updated`, `status`) VALUES
(1, 'khachhang01', '123456', '123456', 'khachhang01@gmail.co', '123 xyz, q1, tp HCM', '0901234567', 'A', 'Nguyen', 1, 'images/avatar.png', 1472925059004, 1472925059004, 1472925059004, 1),
(2, 'khachhang02', '123456', '123456', 'khachhang02@gmail.co', '123 xyz, q1, tp HCM', '0901234765', 'B', 'Nguyen', 1, 'images/avatar.png', 1472925059004, 1472925059004, 1472925059004, 1);

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE IF NOT EXISTS `menu` (
  `menu_id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_parent` int(11) NOT NULL,
  `menu_name` varchar(255) NOT NULL,
  `menu_status` int(11) NOT NULL,
  `page` varchar(250) NOT NULL,
  `created` int(11) NOT NULL,
  `updated` int(11) NOT NULL,
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`menu_id`, `menu_parent`, `menu_name`, `menu_status`, `page`, `created`, `updated`) VALUES
(1, 0, 'Home', 1, 'trang-chu', 111, 111),
(2, 0, 'About', 1, 've-chung-toi', 111, 111),
(3, 0, 'Delivery', 1, 'giao-hang', 111, 111),
(4, 0, 'News', 1, 'tin-tuc', 111, 111),
(5, 0, 'Contact', 1, 'lien-he', 111, 111);

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `user_id`, `created`, `updated`, `status`) VALUES
(1, 1, 1472925059004, 1472925059004, 1),
(2, 2, 1472925059004, 1472925059004, 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE IF NOT EXISTS `order_detail` (
  `id` int(5) NOT NULL,
  `order_id` int(5) NOT NULL,
  `product_id` int(5) NOT NULL,
  `quantity` int(5) NOT NULL,
  `price` int(5) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`id`, `order_id`, `product_id`, `quantity`, `price`, `created`, `updated`, `status`) VALUES
(1, 1, 1, 1, 280, 1472925059004, 1472925059004, 1),
(2, 1, 2, 1, 280, 1472925059004, 1472925059004, 1),
(3, 2, 1, 1, 280, 1472925059004, 1472925059004, 1);

-- --------------------------------------------------------

--
-- Table structure for table `partner`
--

CREATE TABLE IF NOT EXISTS `partner` (
  `id` int(5) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `detail` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `partner`
--

INSERT INTO `partner` (`id`, `name`, `img`, `detail`, `created`, `updated`, `status`) VALUES
(1, 'H&M', 'images/h&m.jpg', 'Hennes & Mauritz AB (H&M) là một công ty đa quốc gia bán lẻ quần áo của Thụy Điển, được biết đến với các sản phẩm thời trang dành cho mọi đối tượng từ đàn ông, phụ nữ, thanh thiếu niên đến trẻ em.', 1475539959004, 1475539959004, 1),
(2, 'Gucci', 'images/gucci.jpg', 'The House of Gucci là một biểu tượng thời trang sở hữu bởi Italia và Pháp, một nhãn hiệu đồ da nổi tiếng. Gucci được coi là một trong những nhãn hiệu thời trang nổi tiếng, danh giá và được thừa nhận b', 1475539959004, 1475539959004, 1),
(3, 'Zara', 'images/zara.jpg', 'Zara là thương hiệu bình dân nổi tiếng của Tây Ban Nha được thành lập năm 1975. Thế mạnh của Zara nằm ở tốc độ tung ra mẫu mã mới và chất liệu đẹp.', 1475539959004, 1475539959004, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(5) NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `brief` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `detail` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `product_cate_id` int(5) NOT NULL,
  `partner_id` int(5) NOT NULL,
  `inventory` int(5) NOT NULL,
  `views` int(10) DEFAULT NULL,
  `reviews` text COLLATE utf8_unicode_ci NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `product_type` int(11) NOT NULL DEFAULT '0',
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=13 ;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `img`, `brief`, `detail`, `product_cate_id`, `partner_id`, `inventory`, `views`, `reviews`, `created`, `updated`, `product_type`, `status`) VALUES
(1, 'tivi', 500, 'images/feature-pic1.jpg', 'mô tả ngắn', 'mô tả dài', 1, 0, 1, 0, 'đây là review', 1479168000, 1479168000, 1, 1),
(2, 'Loa', 500, 'images/feature-pic2.jpg', 'mô tả ngắn', 'mô tả dài', 1, 1, 1, 1, 'đây là review', 1479168000, 1479168000, 1, 1),
(3, 'Máy ản', 500, 'images/feature-pic3.jpg', 'mô tả ngắn', 'mô tả dài', 1, 1, 1, 1, 'đây là review', 1479168000, 1479168000, 1, 1),
(4, 'tivi2', 3000, 'images/feature-pic4.jpg', 'mô tả ngắn', 'mô tả dài', 1, 1, 1, 0, 'đây là review', 1479168000, 1479168000, 1, 1),
(5, 'máy ảnh', 500, 'images/new-pic1.jpg', 'mô tả ngắn', 'mô tả dài', 1, 0, 1, 0, 'đây là review', 1479168000, 1479168000, 2, 1),
(6, 'Loaloa', 500, 'images/new-pic2.jpg', 'mô tả ngắn', 'mô tả dài', 1, 1, 1, 1, 'đây là review', 1479168000, 1479168000, 2, 1),
(7, 'tivi 3', 500, 'images/new-pic3.jpg', 'mô tả ngắn', 'mô tả dài', 1, 1, 1, 1, 'đây là review', 1479168000, 1479168000, 2, 1),
(8, 'loa loa 2', 3000, 'images/new-pic4.jpg', 'mô tả ngắn', 'mô tả dài', 1, 1, 1, 0, 'đây là review', 1479168000, 1479168000, 2, 1),
(9, 'tivi2', 3000, 'images/feature-pic4.jpg', 'mô tả ngắn', 'mô tả dài', 1, 1, 1, 0, 'đây là review', 1479168000, 1479168000, 1, 1),
(10, 'tivi2', 3000, 'images/feature-pic4.jpg', 'mô tả ngắn', 'mô tả dài', 1, 1, 1, 0, 'đây là review', 1479168000, 1479168000, 1, 1),
(11, 'tivi2', 3000, 'images/feature-pic4.jpg', 'mô tả ngắn', 'mô tả dài', 1, 1, 1, 0, 'đây là review', 1479168000, 1479168000, 1, 1),
(12, 'tivi2', 3000, 'images/feature-pic4.jpg', 'mô tả ngắn', 'mô tả dài', 1, 1, 1, 0, 'đây là review', 1479168000, 1479168000, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_type`
--

CREATE TABLE IF NOT EXISTS `product_type` (
  `product_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_type_name` varchar(250) NOT NULL,
  `link` varchar(250) NOT NULL,
  `created` int(11) NOT NULL,
  `updated` int(11) NOT NULL,
  PRIMARY KEY (`product_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `product_type`
--

INSERT INTO `product_type` (`product_type_id`, `product_type_name`, `link`, `created`, `updated`) VALUES
(1, 'Sản Phẩm mới', 'san-pham-moi', 123, 123),
(2, 'Sản Phẩm Bán Chạy', 'san-pham-ban-chay', 123, 123);

-- --------------------------------------------------------

--
-- Table structure for table `slide_banner`
--

CREATE TABLE IF NOT EXISTS `slide_banner` (
  `id` int(5) NOT NULL,
  `title` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `state` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `slide_banner`
--

INSERT INTO `slide_banner` (`id`, `title`, `content`, `state`, `created`, `updated`, `status`) VALUES
(1, 'Smart But Casual', 'Start your shopping here...', 'inactive', 1475539959004, 1475539959004, 1),
(2, 'Shop Online', 'Start your shopping here...', 'right', 1475539959004, 1475539959004, 1),
(3, 'Pack your Bag', 'Start your shopping here...', 'left', 1475539959004, 1475539959004, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(5) NOT NULL,
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password_salt` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `level` int(1) NOT NULL,
  `last_login` bigint(15) NOT NULL,
  `created` bigint(15) NOT NULL,
  `updated` bigint(15) NOT NULL,
  `status` int(1) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `password_salt`, `email`, `first_name`, `last_name`, `img`, `level`, `last_login`, `created`, `updated`, `status`) VALUES
(1, 'hanguyen', '123456', '123456', 'hanguyen@gmail.com', 'Ha', 'Nguyen', 'images/avatar.png', 1, 1476910059004, 1476910059004, 1476910059004, 1),
(2, 'hienpham', '123456', '123456', 'hienpham@gmail.com', 'Hien', 'Pham', 'images/avatar.png', 1, 1476910059004, 1476910059004, 1476910059004, 1),
(3, 'kieunguyen', '123456', '123456', 'kieunguyen@gmail.com', 'Kieu', 'Nguyen', 'images/avatar.png', 1, 1476910059004, 1476910059004, 1476910059004, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
