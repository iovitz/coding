// user about
const express = require("express");
const router = express.Router();
const Profile = require("../../modules/profile");

const keys = require("../../configs/keys");
const passport = require("passport");

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const profileFields = {};
    if (req.body.type) profileFields.type = req.body.type;
    if (typeof req.body.describe !== 'undefined') profileFields.describe = req.body.describe;
    if (typeof req.body.income !== 'undefined') profileFields.income = req.body.income;
    if (typeof req.body.expend !== 'undefined') profileFields.expend = req.body.expend;
    if (typeof req.body.cash !== 'undefined') profileFields.cash = req.body.cash;
    if (typeof req.body.remark !== 'undefined') profileFields.remark = req.body.remark;

    console.log(profileFields)

    new Profile(profileFields).save().then((profile) => {
      res.json(profile);
    });
  }
);

router.post(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const profileFields = {};
    if (req.body.type) profileFields.type = req.body.type;
    if (req.body.describe) profileFields.describe = req.body.describe;
    if (req.body.income) profileFields.income = req.body.income;
    if (req.body.expend) profileFields.expend = req.body.expend;
    if (req.body.cash) profileFields.cash = req.body.cash;
    if (req.body.remark) profileFields.remark = req.body.remark;

    Profile.findOneAndUpdate(
      { _id: req.params.id },
      { $set: profileFields },
      { new: true }
    ).then((profile) => res.json(profile));
  }
);

router.get(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ _id: req.params.id })
      .then((profile) => {
        if(!profile) {
          return res.json({msg: '没有数据被删除'})
        }
        res.json({msg: '删除成功'})
      })
      .catch((err) => res.status(404).json({ msg: "删除失败" }));
  }
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.find({}).sort({date: -1})
      .then((profiles) => {
        if (!profiles.length) {
          return res.status(404).json({
            msg: "没有任何数据",
          });
        }
        res.json(profiles);
      })
      .catch((err) => res.status(500).json(err));
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ _id: req.params.id })
      .then((profile) => {
        if (!profile) {
          return res.status(404).json({
            msg: "没有任何数据",
          });
        }
        res.json(profile);
      })
      .catch((err) => res.status(500).json(err));
  }
);

module.exports = router;
