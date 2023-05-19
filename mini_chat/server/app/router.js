'use strict';

module.exports = app => {
  const { router, controller } = app;
  const { user } = controller;

  const userRouter = router.namespace('/api/user');
  userRouter.post('/register', user.register);
  userRouter.post('/login', user.login);
  userRouter.post('/find', user.findUsers);
};
