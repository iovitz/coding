DROP TABLE IF EXISTS `mini_chat_user`;
CREATE TABLE `mini_chat_user` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `nickname` char(40) NOT NULL,
  `username` char(20) NOT NULL UNIQUE,
  `password` char(70) NOT NULL,
  `description` char(200) NULL DEFAULT NULL,
  `avatar` varchar(200) NULL DEFAULT NULL,
  `gender` tinyint UNSIGNED NOT NULL DEFAULT 0,
  `phone` char(15) NULL DEFAULT NULL,
  `email` char(30) NULL DEFAULT NULL,
  `status` tinyint(1) NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `mini_chat_user_info`;
CREATE TABLE `mini_chat_user_info` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `uid` int UNSIGNED NULL DEFAULT NULL,
  `birthday` timestamp NULL DEFAULT NULL,
  `job` varchar(10) NULL DEFAULT NULL,
  `home` varchar(255) NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `mini_chat_user_friend_request`;
CREATE TABLE `mini_chat_user_friend_request` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `uid` int UNSIGNED NULL DEFAULT NULL,
  `rid` int UNSIGNED NULL DEFAULT NULL,
  `type` int UNSIGNED NULL DEFAULT NULL,
  `payload` int UNSIGNED NULL DEFAULT NULL,
  `read` tinyint(1) NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
);

DROP TABLE IF EXISTS `mini_chat_user_friend`;
CREATE TABLE `mini_chat_user_friend` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `uid` int UNSIGNED NULL DEFAULT NULL,
  `fid` int UNSIGNED NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
);
