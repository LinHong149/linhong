const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = {
  'favicon.ico': [16, 32, 48],
  'apple-touch-icon.png': [180],
  'android-chrome-192x192.png': [192],
  'android-chrome-512x512.png': [512]
};

async function generateFavicons() {
  const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/favicon.svg'));

  for (const [filename, dimensions] of Object.entries(sizes)) {
    const outputPath = path.join(__dirname, '../public', filename);
    
    if (filename === 'favicon.ico') {
      // Generate ICO file
      const pngBuffers = await Promise.all(
        dimensions.map(size =>
          sharp(svgBuffer)
            .resize(size, size)
            .png()
            .toBuffer()
        )
      );
      
      // Combine PNGs into ICO
      const ico = require('sharp-ico');
      const icoBuffer = await ico.create(pngBuffers);
      fs.writeFileSync(outputPath, icoBuffer);
    } else {
      // Generate PNG files
      await sharp(svgBuffer)
        .resize(dimensions[0], dimensions[0])
        .png()
        .toFile(outputPath);
    }
    
    console.log(`Generated ${filename}`);
  }
}

generateFavicons().catch(console.error); 