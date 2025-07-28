import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// 图片文件路径
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
    
    console.log(`压缩 ${inputPath}...`);
    
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(inputPath)
        .jpeg({ quality: 70, progressive: true })
        .toFile(outputPath);
    } else if (ext === '.png') {
      await sharp(inputPath)
        .png({ quality: 70, compressionLevel: 9 })
        .toFile(outputPath);
    }
    
    // 获取文件大小
    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
    
    console.log(`${inputPath}: ${(originalSize/1024/1024).toFixed(2)}MB -> ${(compressedSize/1024/1024).toFixed(2)}MB (减少 ${reduction}%)`);
    
    // 如果压缩效果明显，替换原文件
    if (compressedSize < originalSize * 0.9) {
      fs.renameSync(outputPath, inputPath);
      console.log(`已替换原文件: ${inputPath}`);
    } else {
      fs.unlinkSync(outputPath);
      console.log(`压缩效果不明显，保留原文件: ${inputPath}`);
    }
    
  } catch (error) {
    console.error(`压缩 ${inputPath} 失败:`, error.message);
  }
}

async function compressAllImages() {
  console.log('开始压缩图片...');
  
  for (const imagePath of imagePaths) {
    if (fs.existsSync(imagePath)) {
      await compressImage(imagePath);
    } else {
      console.log(`文件不存在: ${imagePath}`);
    }
  }
  
  console.log('图片压缩完成!');
}

compressAllImages();