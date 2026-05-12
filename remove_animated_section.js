import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/<AnimatedSection/g, '<section');
  content = content.replace(/<\/AnimatedSection>/g, '</section>');
  fs.writeFileSync(filePath, content, 'utf-8');
}

const dir = './src/components';
const files = fs.readdirSync(dir);
for (const file of files) {
  if (file.endsWith('.jsx')) {
    processFile(path.join(dir, file));
  }
}
