import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Image file paths
const imagePaths = [
  './src/assets/1.png',
  './src/assets/2.png',
  './src/assets/3.png',
  './src/assets/4.png'
];

async function compressImage(inputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    const dir = path.dirname(inputPath);
    const name = path.basename(inputPath, ext);
    const outputPath = path.join(dir, `${name}_compressed${ext}`);
    
    console.log(`Compressing ${inputPath}...`);
    
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(inputPath)
        .jpeg({ quality: 70, progressive: true })
        .toFile(outputPath);
    } else if (ext === '.png') {
      await sharp(inputPath)
        .png({ quality: 70, compressionLevel: 9 })
        .toFile(outputPath);
    }
    
    // Get file sizes
    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
    
    console.log(`${inputPath}: ${(originalSize/1024/1024).toFixed(2)}MB -> ${(compressedSize/1024/1024).toFixed(2)}MB (reduced ${reduction}%)`);
    
    // Replace original file if compression is significant
    if (compressedSize < originalSize * 0.9) {
      fs.renameSync(outputPath, inputPath);
      console.log(`Original file replaced: ${inputPath}`);
    } else {
      fs.unlinkSync(outputPath);
      console.log(`Compression not significant, keeping original: ${inputPath}`);
    }
    
  } catch (error) {
    console.error(`Failed to compress ${inputPath}:`, error.message);
  }
}

async function compressAllImages() {
  console.log('Starting image compression...');
  
  for (const imagePath of imagePaths) {
    if (fs.existsSync(imagePath)) {
      await compressImage(imagePath);
    } else {
      console.log(`File not found: ${imagePath}`);
    }
  }
  
  console.log('Image compression completed!');
}

compressAllImages();