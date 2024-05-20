const mongoose = require('mongoose');
const validator = require('validator');

const s3User = new mongoose.Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, 'plz provide correct email format'],
    },
    name: { type: String, unique: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const uploadUser = mongoose.model('UploadUser', s3User, 'UploadUser');

module.exports = uploadUser;
