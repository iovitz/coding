-- 创建项目所需要的数据库

-- 用户表
CREATE TABLE IF NOT EXISTS `mysql8521956_db`.`user`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `phone` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL COMMENT '密码加盐',
  `nickname` varchar(20) NOT NULL,
  `email` varchar(20) NULL,
  `avatar` varchar(50) NULL,
  `gender` tinyint NOT NULL COMMENT '1男2女3保密',
  PRIMARY KEY (`id`)
);