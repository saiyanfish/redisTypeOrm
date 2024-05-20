const s3User = require('../model/s3user.cjs');
const catchAsync = require('../error/catchAsync.cjs');
const s3Photo = require('../model/s3photo.cjs');

exports.uploadWithUser = catchAsync(async (req, res, next) => {
  console.log(req.body.name);
  if (!req.body.name) return next(new Error('no name'));
  const user = await s3User.findOne({ name: req.body.name });
  console.log(user);
  if (!user) return next(new Error('no this user'));
  req.user = user;
  next();
});

exports.uploadEnd = catchAsync(async (req, res) => {
  const imageUrl = req.file.location;
  const photo = await s3Photo.create({
    address: imageUrl,
    s3User: req.user._id,
  });
  res.render('result', { imageUrl: imageUrl });
});
