const catchAsync = require('../error/catchAsync.cjs');
const s3User = require('../model/s3user.cjs');

exports.createUser = catchAsync(async (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) return next(new Error('no data'));
  const newUser = await s3User.create({ name, email });
  res.status(201).json({
    newUser,
  });
});
