const fs = require('fs');
const filePath = 'c:/Users/herre/Desktop/Proyectos Polo/Página web Pacha Khuyay/frontend/src/App.jsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Find the Fauna section
const faunaMatch = content.match(/(\s*\{\/\* Fauna Section \*\/}[\s\S]*?<\/section>)/);
if (!faunaMatch) {
    console.error('Fauna section not found');
    process.exit(1);
}

let faunaContent = faunaMatch[1];

// Remove fauna section from its current position
content = content.replace(faunaContent, '');

// Find the insertion point (after que-es section)
const queEsMatch = content.match(/(<section id=\"que-es\".*?<\/section>)/s);
if (!queEsMatch) {
    console.error('Que-es section not found');
    process.exit(1);
}

const queEsFull = queEsMatch[1];

// Change background classes to alternate properly
faunaContent = faunaContent.replace('<section id=\"fauna\" className=\"bg-white\">', '<section id=\"fauna\" className=\"bg-light\">');

// Insert fauna after que-es
content = content.replace(queEsFull, queEsFull + '\n' + faunaContent);

// Alternate backgrounds
content = content.replace('<section id=\"simbolismo\" className=\"bg-light\">', '<section id=\"simbolismo\" className=\"bg-white\">');
content = content.replace('<section id=\"experiencia\">', '<section id=\"experiencia\" className=\"bg-light\">');
content = content.replace('<section id=\"geoglifos\" className=\"bg-light\">', '<section id=\"geoglifos\" className=\"bg-white\">');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Success');
