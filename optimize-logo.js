const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, 'public/mp_logo.png');
const tempPath = path.join(__dirname, 'public/mp_logo_new.png');

(async () => {
  try {
    const image = await Jimp.read(logoPath);
    await image
      .resize({ w: 480, h: Jimp.AUTO })
      .quality(90)
      .write(tempPath);
    
    fs.renameSync(tempPath, logoPath);
    console.log('Logo optimized successfully!');
  } catch (err) {
    console.error('Error:', err);
  }
})();
