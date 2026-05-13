const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, 'modules');
const dataJsPath = path.join(__dirname, 'js', 'data.js');

// On lit le fichier data.js existant
let dataContent = fs.readFileSync(dataJsPath, 'utf8');

// On doit récupérer le tableau modules actuel pour le modifier
// Pour faire simple, on va extraire la chaîne correspondante.
// Mais comme c'est du JS, on va évaluer la partie modules.
const matchModules = dataContent.match(/const modules = (\[[\s\S]*?\]);\s*const niveauCouleur/);
if (!matchModules) {
    console.error("Impossible de trouver le tableau modules dans data.js");
    process.exit(1);
}

let modules;
try {
    modules = eval(matchModules[1]);
} catch (e) {
    console.error("Erreur d'évaluation des modules:", e);
    process.exit(1);
}

// Fonction pour extraire le texte d'un fichier JS
function processFile(filename, moduleObj) {
    const filePath = path.join(modulesDir, filename);
    if (!fs.existsSync(filePath)) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Séparer la partie cours de la partie exercices
    const parts = content.split('// ============================================================\r\n//  EXERCICES\r\n// ============================================================');
    let partCours = parts[0] || content;
    let partExos = parts[1] || '';
    
    // Si format avec saut de ligne différent
    if (parts.length === 1) {
        const parts2 = content.split('// ============================================================\n//  EXERCICES\n// ============================================================');
        partCours = parts2[0] || content;
        partExos = parts2[1] || '';
    }

    // 1. Extraction des leçons
    // On cherche les blocs // ──── ... \n // LEÇON X : Titre \n // ──── ...
    const leconsRegex = /\/\/ ─+\r?\n\/\/  LEÇON \d+ :.*?\r?\n\/\/ ─+\r?\n([\s\S]*?)(?=\/\/ ─+\r?\n\/\/  LEÇON|$)/g;
    let leconHtml = '';
    let match;
    while ((match = leconsRegex.exec(partCours)) !== null) {
        let text = match[0];
        // Formater le texte :
        // on remplace les // par du texte normal ou on met en bloc de code
        text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        leconHtml += `<div class="mb-6"><pre><code class="language-js text-green-300 text-xs">` + text + `</code></pre></div>`;
    }
    moduleObj.contenuLecon = leconHtml;

    // 2. Extraction des exercices
    // On cherche les blocs /* ... EX X ── ... */
    const exoRegex = /\/\*([\s\S]*?)\*\//g;
    let exosMatches = [];
    while ((match = exoRegex.exec(partExos)) !== null) {
        exosMatches.push(match[1].trim());
    }
    
    // Assigner aux exercices du module
    moduleObj.exercices.forEach((exo, idx) => {
        if (exosMatches[idx]) {
            let enonce = exosMatches[idx]
                .replace(/\* EX \d+ ── /, '')
                .replace(/\n\s*\*/g, '\n')
                .trim();
            exo.enonceFull = enonce;
        } else {
            exo.enonceFull = exo.titre;
        }
    });
}

// Traiter chaque module
modules.forEach(m => {
    const filename = path.basename(m.fichier);
    processFile(filename, m);
});

// Réécrire data.js
const newModulesStr = JSON.stringify(modules, null, 2).replace(/"([^"]+)":/g, '$1:');
dataContent = dataContent.replace(matchModules[1], newModulesStr);

fs.writeFileSync(dataJsPath, dataContent, 'utf8');
console.log("Extraction terminée et data.js mis à jour !");
