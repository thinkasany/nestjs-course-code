const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const qiniuService = require('../service/qiniu');

module.exports = function (app) {
  app.get('/health',  (req, res) => {
    return res.json({ message: 'OK', data: `Time Is ${new Date().toString()}` });
  });

  app.post('/upload', upload.single('image'), async (req, res) => {
    try {
      const fileBuffer = req.file.buffer;
      const imageUrl = await qiniuService.uploadToQiniu(fileBuffer);
      res.status(200).json({ imageUrl });
    } catch (error) {
      res.status(500).json({ error: 'Upload failed', message: error.message });
    }
  });

};
