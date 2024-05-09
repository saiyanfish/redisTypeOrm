const express = require('express');
const upload = require('../upload.cjs');

const router = express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
  const imageUrl = req.file.location;
  res.render('result', { imageUrl: imageUrl });
});

module.exports = router;
