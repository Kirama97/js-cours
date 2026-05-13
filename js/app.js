// ─── Variables Globales ──────────────────────────────────
let moduleActif = null;

// ─── Initialisation ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderModules();
  renderProgression();
  initPlayground();
  
  // Raccourcis clavier pour l'éditeur (Tabulation)
  const editor = document.getElementById('code-editor');
  editor.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      // Insérer 2 espaces
      this.value = this.value.substring(0, start) + "  " + this.value.substring(end);
      this.selectionStart = this.selectionEnd = start + 2;
    }
  });

  // Sauvegarde automatique du Playground
  editor.addEventListener('input', () => {
    localStorage.setItem('playground-code', editor.value);
  });
});

// ─── Render module cards ─────────────────────────────────
function renderModules() {
  const grid = document.getElementById('modules-grid');
  grid.innerHTML = modules.map(m => `
    <article class="module-card bg-[#16213E] rounded-xl border border-white/10 p-5 cursor-pointer focus-visible:outline-none"
             tabindex="0"
             role="button"
             aria-label="Ouvrir le module ${m.titre}"
             onclick="ouvrirModule('${m.id}')"
             onkeypress="if(event.key === 'Enter') ouvrirModule('${m.id}')">
      <div class="flex items-start justify-between mb-3">
        <span class="text-3xl" aria-hidden="true">${m.emoji}</span>
        <span class="text-xs font-mono text-[#F7DF1E]/60">Module ${m.id}</span>
      </div>
      <h3 class="font-bold text-sm mb-2">${m.titre}</h3>
      <span class="inline-block text-[10px] font-medium px-2 py-0.5 rounded border ${niveauCouleur[m.niveau]} mb-3">
        ${m.niveau}
      </span>
      <div class="flex items-center justify-between text-xs text-gray-500">
        <span>${m.lecons.length} leçons</span>
        <span>${m.exercices.length} exercices</span>
      </div>
    </article>
  `).join('');
}

// ─── Open module detail ──────────────────────────────────
function ouvrirModule(id) {
  const m = modules.find(x => x.id === id);
  if (!m) return;

  moduleActif = m;

  document.getElementById('detail-badge').textContent = `Module ${m.id}`;
  document.getElementById('detail-title').textContent = `${m.emoji} ${m.titre}`;
  document.getElementById('detail-description').textContent = m.description;

  // Leçons
  const indexLecons = m.lecons.map((l, i) => `
    <div class="flex items-center gap-3 p-2 bg-[#0F3460]/50 rounded-lg mb-2">
      <span class="w-5 h-5 rounded-full bg-[#F7DF1E]/10 text-[#F7DF1E] text-[10px] flex items-center justify-center font-mono flex-shrink-0" aria-hidden="true">${i+1}</span>
      <span class="text-xs font-semibold text-gray-300">${l}</span>
    </div>
  `).join('');
  
  document.getElementById('detail-lecons').innerHTML = `
    <div class="mb-6">
      <h4 class="text-xs text-gray-500 uppercase tracking-wider mb-3">Sommaire</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">${indexLecons}</div>
    </div>
    <div class="border-t border-white/10 pt-6">
      <h4 class="text-xs text-gray-500 uppercase tracking-wider mb-4">Contenu du cours</h4>
      <div class="lecon-content">
        ${m.contenuLecon || "<p class='italic text-gray-400'>Le contenu n'est pas encore disponible.</p>"}
      </div>
    </div>
  `;

  // Exercices
  document.getElementById('detail-exercices').innerHTML = m.exercices.map((e, i) => `
    <div class="flex flex-col gap-3 p-4 bg-[#0F3460]/30 rounded-lg border border-white/5">
      <div class="flex items-start gap-3">
        <input type="checkbox" id="ex-${id}-${i}"
               class="w-4 h-4 mt-1 accent-[#F7DF1E] cursor-pointer focus-visible:outline-none"
               onchange="sauvegarderProgression()"
               aria-label="Marquer l'exercice ${e.titre} comme terminé" />
        <div class="flex-1 min-w-0">
          <label for="ex-${id}-${i}" class="text-sm cursor-pointer font-bold text-[#F7DF1E] block mb-2">${e.titre}</label>
          <div class="text-xs text-green-300 bg-[#0d1117] p-3 rounded border border-[#30363d] font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">${e.enonceFull || "Pas d'énoncé disponible."}</div>
        </div>
      </div>
      <div class="flex gap-2 pl-7 mt-1">
        <button onclick="chargerExercice(${i})" class="text-xs bg-[#F7DF1E] text-[#1A1A2E] hover:bg-yellow-300 px-4 py-2 rounded transition-colors flex items-center gap-2 font-semibold shadow-sm focus-visible:outline-none">
          <span aria-hidden="true">▶</span> Charger l'exercice
        </button>
      </div>
    </div>
  `).join('');

  // Restore checkbox states
  m.exercices.forEach((_, i) => {
    const cb = document.getElementById(`ex-${id}-${i}`);
    if (cb) cb.checked = (localStorage.getItem(`ex-${id}-${i}`) === 'true');
  });

  // Concepts
  document.getElementById('detail-concepts').innerHTML = m.concepts.map(c => `
    <span class="text-xs font-mono bg-[#F7DF1E]/10 text-[#F7DF1E] border border-[#F7DF1E]/20 px-2 py-1 rounded">${c}</span>
  `).join('');

  // Show & scroll
  const detail = document.getElementById('module-detail');
  detail.classList.remove('hidden');
  detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  // Set focus on close button for accessibility
  document.getElementById('btn-close-detail').focus();

  // Reset tabs
  switchTab('lecons', document.querySelector('.tab-btn'));
  marquerModuleVu(id);
}

function fermerDetail() {
  document.getElementById('module-detail').classList.add('hidden');
}

function switchTab(tab, btn) {
  ['lecons','exercices','concepts'].forEach(t => {
    document.getElementById('tab-' + t).classList.add('hidden');
    document.getElementById('tab-' + t).setAttribute('aria-hidden', 'true');
  });
  document.getElementById('tab-' + tab).classList.remove('hidden');
  document.getElementById('tab-' + tab).setAttribute('aria-hidden', 'false');

  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active', 'text-[#1A1A2E]');
    b.setAttribute('aria-selected', 'false');
  });
  
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }
}

// ─── Progression ────────────────────────────────────────
function marquerModuleVu(id) {
  const vu = JSON.parse(localStorage.getItem('modules-vus') || '[]');
  if (!vu.includes(id)) {
    vu.push(id);
    localStorage.setItem('modules-vus', JSON.stringify(vu));
  }
  renderProgression();
}

function sauvegarderProgression() {
  if (!moduleActif) return;
  moduleActif.exercices.forEach((_, i) => {
    const cb = document.getElementById(`ex-${moduleActif.id}-${i}`);
    if (cb) localStorage.setItem(`ex-${moduleActif.id}-${i}`, cb.checked);
  });
}

function renderProgression() {
  const vu = JSON.parse(localStorage.getItem('modules-vus') || '[]');
  const pct = Math.round((vu.length / modules.length) * 100);

  document.getElementById('progress-text').textContent = `${vu.length} / ${modules.length}`;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-bar').setAttribute('aria-valuenow', pct);

  document.getElementById('progress-modules').innerHTML = modules.map(m => `
    <div class="flex items-center gap-2 p-2 rounded-lg ${vu.includes(m.id) ? 'bg-[#F7DF1E]/10 border border-[#F7DF1E]/20' : 'bg-[#0F3460]/30'}">
      <span class="${vu.includes(m.id) ? 'text-[#F7DF1E]' : 'text-gray-600'} text-lg" aria-hidden="true">${m.emoji}</span>
      <div class="min-w-0">
        <p class="text-xs font-medium truncate">${m.titre}</p>
        <p class="text-[10px] ${vu.includes(m.id) ? 'text-[#F7DF1E]/70' : 'text-gray-600'}">${vu.includes(m.id) ? '✓ Vu' : 'Non commencé'}</p>
      </div>
    </div>
  `).join('');
}

// ─── Playground ─────────────────────────────────────────

function initPlayground() {
  const savedCode = localStorage.getItem('playground-code');
  if (savedCode) {
    document.getElementById('code-editor').value = savedCode;
  }
}

function chargerSnippet(nom) {
  document.getElementById('code-editor').value = snippets[nom];
  localStorage.setItem('playground-code', snippets[nom]);
  
  // Scroller vers le playground
  document.getElementById('playground').scrollIntoView({ behavior: 'smooth' });
}

function chargerExercice(index) {
  if (!moduleActif) return;
  const exo = moduleActif.exercices[index];
  
  const codeExo = `// ==========================================
// EXERCICE : ${exo.titre}
// MODULE   : ${moduleActif.titre}
// ==========================================

${exo.codeInit}`;

  document.getElementById('code-editor').value = codeExo;
  localStorage.setItem('playground-code', codeExo);
  
  // Feedback visuel et scroll
  document.getElementById('playground').scrollIntoView({ behavior: 'smooth' });
}

function effacerCode() {
  document.getElementById('code-editor').value = '';
  localStorage.removeItem('playground-code');
  effacerConsole();
}

function effacerConsole() {
  document.getElementById('console-output').innerHTML =
    '<span class="text-gray-600">// Résultats...</span>';
}

function executerCode() {
  const code = document.getElementById('code-editor').value;
  const output = document.getElementById('console-output');
  output.innerHTML = '';

  const logs = [];
  const origLog = console.log;
  const origError = console.error;

  console.log = (...args) => {
    logs.push({ type: 'log', msg: args.map(formatVal).join(' ') });
    origLog(...args);
  };
  console.error = (...args) => {
    logs.push({ type: 'error', msg: args.map(formatVal).join(' ') });
    origError(...args);
  };

  try {
    // Note: Utiliser eval() pose un risque de sécurité dans une vraie application web en production.
    // Cependant, pour un outil d'apprentissage local/purement client, c'est acceptable.
    eval(code);
    setTimeout(() => {
      renderLogs(output, logs);
      console.log = origLog;
      console.error = origError;
    }, 50);
  } catch (e) {
    console.log = origLog;
    console.error = origError;
    logs.push({ type: 'error', msg: '❌ ' + e.message });
    renderLogs(output, logs);
  }
}

function formatVal(v) {
  if (v === null) return 'null';
  if (v === undefined) return 'undefined';
  if (Array.isArray(v)) return JSON.stringify(v);
  if (typeof v === 'object') return JSON.stringify(v, null, 2);
  return String(v);
}

function renderLogs(output, logs) {
  if (logs.length === 0) {
    output.innerHTML = '<span class="text-gray-500">// Aucune sortie</span>';
    return;
  }
  output.innerHTML = logs.map(l => `
    <div class="${l.type === 'error' ? 'text-red-400' : 'text-green-300'} mb-1">
      <span class="text-gray-600 select-none mr-2">›</span>${escapeHtml(l.msg)}
    </div>
  `).join('');
  
  // Auto-scroll vers le bas de la console
  output.scrollTop = output.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
