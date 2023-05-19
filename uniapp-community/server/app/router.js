'use strict';

module.exports = app => {
  const { router, controller } = app;
  const { user } = controller;

  const userRouter = router.namespace('/api/user');
  userRouter.post('/send_code/v1', user.sendCode);
};
