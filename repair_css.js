const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public', 'styles.css');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the corrupted string
content = content.replace("content: 'Ã¢â€”â€¹';", "content: '\\\\2022';");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully repaired CSS bullet points');
