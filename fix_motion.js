import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove framer-motion imports
  content = content.replace(/import\s+\{\s*motion[^}]*\}\s+from\s+['"]framer-motion['"];\n?/g, '');
  
  // Remove variants imports if they exist
  content = content.replace(/import\s+AnimatedSection[A-Za-z0-9\s,{}]*\s+from\s+['"][^'"]*AnimatedSection['"];\n?/g, 'import AnimatedSection from "./AnimatedSection";\n');
  content = content.replace(/import\s+\{\s*itemVariants[^}]*\}\s+from\s+['"][^'"]*AnimatedSection['"];\n?/g, '');
  
  // Replace <motion.tag with <tag
  content = content.replace(/<motion\.([a-zA-Z0-9]+)/g, '<$1');
  
  // Replace </motion.tag> with </tag>
  content = content.replace(/<\/motion\.([a-zA-Z0-9]+)>/g, '</$1>');
  
  // Remove initial={...}, animate={...}, transition={...}, variants={...}, exit={...}, layout 
  // It's tricky to do with regex if there are nested braces, but let's try simple ones
  content = content.replace(/\s+(initial|animate|transition|variants|exit|whileHover|whileTap|viewport)=\{[^}]+\}/g, '');
  content = content.replace(/\s+layoutId=["'][^"']+["']/g, '');
  content = content.replace(/\s+layout\b/g, '');
  // sometimes multiple braces like transition={{ duration: ... }}
  content = content.replace(/\s+(initial|animate|transition|variants|exit|whileHover|whileTap|viewport)=\{\{[^}]+\}\}/g, '');

  // for AnimatePresence
  content = content.replace(/<AnimatePresence[^>]*>/g, '');
  content = content.replace(/<\/AnimatePresence>/g, '');

  fs.writeFileSync(filePath, content, 'utf-8');
}

const dir = './src/components';
const files = fs.readdirSync(dir);
for (const file of files) {
  if (file.endsWith('.jsx')) {
    processFile(path.join(dir, file));
  }
}
