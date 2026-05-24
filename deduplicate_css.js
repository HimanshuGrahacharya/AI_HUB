const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public', 'styles.css');
if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');

/**
 * Splits CSS into top-level blocks by counting braces.
 * This correctly handles media queries containing nested rules.
 */
function splitTopLevelBlocks(css) {
    const blocks = [];
    let currentBlock = '';
    let braceCount = 0;
    
    for (let i = 0; i < css.length; i++) {
        const char = css[i];
        currentBlock += char;
        
        if (char === '{') {
            braceCount++;
        } else if (char === '}') {
            braceCount--;
            // When we return to level 0, it's the end of a top-level block
            if (braceCount === 0) {
                const trimmed = currentBlock.trim();
                if (trimmed) {
                    blocks.push(trimmed);
                }
                currentBlock = '';
            }
        }
    }
    
    // Catch any remaining content (usually just whitespace or comments at the end)
    const remaining = currentBlock.trim();
    if (remaining) {
        blocks.push(remaining);
    }
    
    return blocks;
}

console.log('Reading CSS file...');
const blocks = splitTopLevelBlocks(content);
console.log(`Analyzing ${blocks.length} blocks...`);

const uniqueBlocks = new Set();
const resultChunks = [];
let duplicates = 0;

blocks.forEach(block => {
    // Normalize block slightly to catch near-duplicates if needed?
    // For now, exact match of trimmed content is safest.
    if (!uniqueBlocks.has(block)) {
        uniqueBlocks.add(block);
        resultChunks.push(block);
    } else {
        duplicates++;
    }
});

if (duplicates > 0) {
    fs.writeFileSync(filePath, resultChunks.join('\n\n'), 'utf8');
    console.log(`Deduplication complete. Removed ${duplicates} duplicate blocks.`);
    console.log(`Reduced from ${blocks.length} to ${resultChunks.length} blocks.`);
} else {
    console.log('No duplicate blocks found.');
}

