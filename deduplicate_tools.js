const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'public', 'script.ts');
if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

const startTag = 'const aiTools: AITool[] = [';
const startIndex = content.indexOf(startTag);

if (startIndex === -1) {
    console.error('aiTools array not found');
    process.exit(1);
}

// Extract the array content by counting brackets
let braceCount = 0;
let endIndex = -1;
let inArray = false;

for (let i = startIndex + startTag.length - 1; i < content.length; i++) {
    if (content[i] === '[') {
        braceCount++;
        inArray = true;
    } else if (content[i] === ']') {
        braceCount--;
        if (inArray && braceCount === 0) {
            endIndex = i;
            break;
        }
    }
}

if (endIndex === -1) {
    console.error('Could not find end of aiTools array');
    process.exit(1);
}

const arrayContent = content.substring(startIndex + startTag.length, endIndex);

// Using a regex to find all objects in the array. 
// Objects look like { ... }
const objectBlocks = [];
let currentObject = '';
let objBraceCount = 0;

for (let i = 0; i < arrayContent.length; i++) {
    const char = arrayContent[i];
    if (char === '{') {
        objBraceCount++;
    }
    
    if (objBraceCount > 0) {
        currentObject += char;
    }
    
    if (char === '}') {
        objBraceCount--;
        if (objBraceCount === 0) {
            objectBlocks.push(currentObject.trim());
            currentObject = '';
        }
    }
}

console.log(`Initial tools count: ${objectBlocks.length}`);

const uniqueTools = [];
const seenIds = new Set();
let dupes = 0;

objectBlocks.forEach(block => {
    // Try to extract the ID. It's usually "id": "something"
    const match = block.match(/"id":\s*"([^"]+)"/);
    if (match) {
        const id = match[1];
        if (!seenIds.has(id)) {
            seenIds.add(id);
            uniqueTools.push(block);
        } else {
            dupes++;
        }
    } else {
        // If no ID found, keep it just in case
        uniqueTools.push(block);
    }
});

console.log(`Found ${dupes} duplicates.`);

if (dupes > 0) {
    const newArrayContent = '\n  ' + uniqueTools.join(',\n  ') + '\n';
    const newFileContent = content.substring(0, startIndex + startTag.length) + newArrayContent + content.substring(endIndex);
    fs.writeFileSync(filePath, newFileContent, 'utf8');
    console.log(`Successfully removed ${dupes} duplicates from aiTools.`);
} else {
    console.log('No duplicates found in aiTools.');
}
