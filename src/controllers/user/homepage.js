const { join } = require('path');

const homePageC = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'homepage.html'));
  // res.send('fffffffffffffff');
};

module.exports = homePageC;
