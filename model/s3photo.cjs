const mongoose = require('mongoose');

const s3Photo = new mongoose.Schema({
  address: String,
  s3User: {
    type: mongoose.Schema.ObjectId,
    ref: 'UploadUser',
  },
});

const uploadPhoto = mongoose.model('uploadPhoto', s3Photo, 'uploadPhoto');

module.exports = uploadPhoto;
