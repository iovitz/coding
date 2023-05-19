DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` smallint UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` char(40) NULL DEFAULT NULL,
  `password` char(40) NULL DEFAULT NULL,
  `avatar` varchar(255) NULL DEFAULT NULL,
  `phone` char(15) NULL DEFAULT NULL,
  `email` char(30) NULL DEFAULT NULL,
  `status` tinyint(1) NULL DEFAULT 1,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `user_bind`;
CREATE TABLE `user_bind` (
  `id` smallint UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` varchar(50) NOT NULL,
  `openid` varchar(255) NOT NULL,
  `uid` smallint UNSIGNED NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `id` smallint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uid` smallint UNSIGNED NULL DEFAULT NULL,
  `age` tinyint UNSIGNED NOT NULL DEFAULT 0,
  `sex` tinyint UNSIGNED NOT NULL DEFAULT 2,
  `emotion` tinyint UNSIGNED NOT NULL DEFAULT 0,
  `job` varchar(10) NULL DEFAULT NULL,
  `home` varchar(255) NULL DEFAULT NULL,
  `birthday` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `verify_code`;
CREATE TABLE `verify_code`  (
  `id` smallint UNSIGNED NOT NULL AUTO_INCREMENT,
  `fingerprint` char(32) NOT NULL,
  `code` char(32) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);