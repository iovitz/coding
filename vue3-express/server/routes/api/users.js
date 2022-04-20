// user about
const express = require("express");
const router = express.Router();
const User = require("../../modules/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../../configs/keys");
const gravatar = require("gravatar");
const passport = require("passport");

router.get("/test", (req, res) => {
  res.json({
    msg: "works",
  });
});

// register
router.post("/register", (req, res) => {
  // 查询数据库中是否拥有邮箱
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: '邮箱已被注册'
      });
    }
    const avatar = gravatar.url(req.body.email, { s: "200", r: "pg", d: "g" });
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      avatar,
      identity: req.body.identity,
      password: req.body.password,
    });

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        if (err) {
          throw err;
        }
        newUser.password = hash;
        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      });
    });
  });
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({
        email: "用户不存在",
      });
    }

    // 使用 bcrypt 判断密码是否匹配
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // 登录成功返回 token
        const rule = {
          name: user.name,
          id: user.id,
          email: user.email,
          avatar: user.avatar,
          identity: user.identity,
        };
        // jwt.sign('规则', '加密名字', '过期时间', '回调函数')
        jwt.sign(
          rule,
          keys.secretOrKey,
          {
            expiresIn: 3600,
          },
          (err, token) => {
            if (err) throw err;

            res.json({
              success: true,
              token: `Bearer ${token}`,
            });
          }
        );
      } else
        return res.status(400).json({
          password: "密码错误",
        });
    });
  });
});

/**
 * $toute GET api/user/current
 * @desc return current user
 * @sccess Private
 */
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { user } = req;
    res.json({
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      identity: user.identity
    });
  }
);

module.exports = router;
