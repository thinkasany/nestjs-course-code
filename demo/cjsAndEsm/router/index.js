const Client = require('../dist/address'); 

module.exports = function (app) {
  app.get('/health',  (req, res) => {
    return res.json({ message: 'OK', data: `Time Is ${new Date().toString()}` });
  });

  app.get('/address', async (req, res) => {
    const text = req.query.text; // 从请求参数中获取需要处理的文本
    try {
      const data = await Client.main(text);
      console.log('data', data);
      res.status(200).json({ message: 'Successfully processed the request.', data });
    } catch (error) {
      // 处理错误
      res.status(500).json({ error: error.message });
    }
  });
};
