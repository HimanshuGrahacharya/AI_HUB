const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public', 'styles.css');
const content = fs.readFileSync(filePath, 'utf8');

// Simple deduplication based on exact block matches
const blocks = content.split('}');
const uniqueBlocks = new Set();
const result = [];

blocks.forEach(block => {
  const trimmed = block.trim();
  if (trimmed) {
    if (!uniqueBlocks.has(trimmed)) {
      uniqueBlocks.add(trimmed);
      result.push(trimmed + '}');
    }
  }
});

fs.writeFileSync(filePath, result.join('\n\n'), 'utf8');
console.log('Deduplication complete.');
