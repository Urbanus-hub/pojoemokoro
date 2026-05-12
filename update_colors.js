import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/gold-gradient/g, 'bg-primary');
  content = content.replace(/bg-gold\/20/g, 'bg-primary/10');
  content = content.replace(/bg-gold-light/g, 'bg-primary-light');
  content = content.replace(/bg-gold-dark/g, 'bg-primary-dark');
  content = content.replace(/bg-gold/g, 'bg-primary');
  
  content = content.replace(/text-gold-light/g, 'text-primary-light');
  content = content.replace(/text-gold-dark/g, 'text-primary-dark');
  content = content.replace(/text-gold/g, 'text-primary');

  content = content.replace(/border-gold/g, 'border-primary');
  content = content.replace(/border-gold-light/g, 'border-primary-light');
  content = content.replace(/border-gold-dark/g, 'border-primary-dark');
  
  content = content.replace(/from-gold/g, 'from-primary');
  content = content.replace(/to-gold/g, 'to-primary');
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir('./src');
