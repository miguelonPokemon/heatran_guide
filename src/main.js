import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const getSpriteUrls = (slug) => ({
    anim: `https://img.pokemondb.net/sprites/black-white/anim/normal/${slug}.gif`,
    static: `https://img.pokemondb.net/sprites/black-white/normal/${slug}.png`
});

window.handleSpriteError = function(img) {
    if (img.dataset.fallbackTried === 'true') {
        img.style.display = 'none';
        return;
    }
    img.dataset.fallbackTried = 'true';
    if (img.dataset.fallback) {
        img.src = img.dataset.fallback;
    }
};

function createSpriteMarkup(slug, label, sizeClasses = 'w-14 h-14 sm:w-16 sm:h-16') {
    if (!slug) return '';
    const { anim, static: fallback } = getSpriteUrls(slug);
    return `
        <img
            src="${anim}"
            data-fallback="${fallback}"
            alt="${label}"
            title="${label}"
            class="poke-sprite ${sizeClasses} shrink-0"
            loading="lazy"
            onerror="window.handleSpriteError(this)"
        >
    `;
}

const HEATRAN_GUIDE = {
    pokepastes: [
        {
            player: 'Player 1',
            role: 'Set Oficial Pokepaste',
            url: 'https://pokepast.es/5754a3fda8df6676',
            badgeClass: 'bg-heatran-500/15 text-heatran-600 dark:text-heatran-400 border-heatran-500/30'
        },
        {
            player: 'Player 2',
            role: 'Set Oficial Pokepaste',
            url: 'https://pokepast.es/8b8a01714edd820b',
            badgeClass: 'bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/30'
        },
        {
            player: 'Player 3',
            role: 'Set Oficial Pokepaste',
            url: 'https://pokepast.es/4df3eb129b4368e5',
            badgeClass: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30'
        },
        {
            player: 'Player 4',
            role: 'Set Oficial Pokepaste',
            url: 'https://pokepast.es/f6c1a04a03ad1bd9',
            badgeClass: 'bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 border-yellow-500/30'
        }
    ],

    turns: [
        {
            turn: 1,
            p1: { pokemon: 'Weavile', slug: 'weavile', move: 'Ladrón', type: 'dark' },
            p2: { pokemon: 'Medicham', slug: 'medicham', move: 'A bocajarro / Patada baja', type: 'fighting' },
            p3: { pokemon: 'Medicham', slug: 'medicham', move: 'A bocajarro / Patada baja', type: 'fighting' },
            p4: { pokemon: 'Medicham', slug: 'medicham', move: 'A bocajarro / Patada baja', type: 'fighting' }
        },
        {
            turn: 2,
            p1: { pokemon: 'Heracross', slug: 'heracross', move: 'A bocajarro', type: 'fighting' },
            p2: { pokemon: 'Heracross', slug: 'heracross', move: 'A bocajarro', type: 'fighting' },
            p3: { pokemon: 'Heracross', slug: 'heracross', move: 'A bocajarro', type: 'fighting' },
            p4: { pokemon: 'Heracross', slug: 'heracross', move: 'A bocajarro', type: 'fighting' }
        },
        {
            turn: 3,
            p1: { pokemon: 'Espeon', slug: 'espeon', move: 'Poder oculto (tierra)', type: 'psychic' },
            p2: { pokemon: 'Espeon', slug: 'espeon', move: 'Poder oculto (tierra)', type: 'psychic' },
            p3: { pokemon: 'Xatu', slug: 'xatu', move: 'Despejar', type: 'flying' },
            p4: { pokemon: 'Xatu', slug: 'xatu', move: 'Despejar', type: 'flying' }
        },
        {
            turn: 4,
            p1: { pokemon: 'Rotom-Wash', slug: 'rotom-wash', move: 'Pantalla luz', type: 'electric' },
            p2: { pokemon: 'Kingdra', slug: 'kingdra', move: 'Hidrobomba', type: 'water' },
            p3: { pokemon: 'Flygon', slug: 'flygon', move: 'Tierra viva', type: 'ground' },
            p4: { pokemon: 'Pelipper', slug: 'pelipper', move: 'Hidrochorro', type: 'water' }
        },
        {
            turn: 5,
            p1: { pokemon: 'Politoed', slug: 'politoed', move: 'Hidrobomba', type: 'water' },
            p2: { pokemon: 'Kingdra', slug: 'kingdra', move: 'Hidrobomba', type: 'water' },
            p3: { pokemon: 'Flygon', slug: 'flygon', move: 'Salmuera', type: 'ground' },
            p4: { pokemon: 'Flygon', slug: 'flygon', move: 'Salmuera', type: 'ground' }
        },
        {
            turn: 6,
            p1: { pokemon: 'Kingdra', slug: 'kingdra', move: 'Tierra viva', type: 'water' },
            p2: { pokemon: 'Kingdra', slug: 'kingdra', move: 'Tierra viva', type: 'water' },
            p3: { pokemon: 'Flygon', slug: 'flygon', move: 'Salmuera', type: 'ground' },
            p4: { pokemon: 'Flygon', slug: 'flygon', move: 'Salmuera', type: 'ground' }
        },
        {
            turn: 7,
            p1: { pokemon: 'Kingdra', slug: 'kingdra', move: 'Llanto falso', type: 'water' },
            p2: { pokemon: 'Whimsicott', slug: 'whimsicott', move: 'Tierra viva', type: 'grass' },
            p3: { pokemon: 'Politoed', slug: 'politoed', move: 'Meteorobola', type: 'water' },
            p4: { pokemon: 'Kingdra', slug: 'kingdra', move: 'Salmuera', type: 'water' }
        },
        {
            turn: 8,
            p1: { pokemon: 'Kingdra', slug: 'kingdra', move: 'Salmuera', type: 'water' },
            p2: { pokemon: 'Politoed', slug: 'politoed', move: 'Meteorobola', type: 'water' },
            p3: { pokemon: 'Kingdra', slug: 'kingdra', move: 'Salmuera', type: 'water' },
            p4: { pokemon: 'Kingdra', slug: 'kingdra', move: 'Salmuera', type: 'water' }
        },
        {
            turn: 9,
            p1: { pokemon: 'Kingdra', slug: 'kingdra', move: 'Salmuera', type: 'water' },
            p2: { pokemon: 'KO', slug: '', move: 'KO (Sin Pokémon)', type: 'defeated', isKo: true },
            p3: { pokemon: 'Kingdra', slug: 'kingdra', move: 'Salmuera', type: 'water' },
            p4: { pokemon: 'Kingdra', slug: 'kingdra', move: 'Salmuera', type: 'water' }
        }
    ]
};

const TYPE_PILL_CLASSES = {
    fighting: 'bg-orange-500/12 text-orange-600 dark:text-orange-400 border-orange-500/30',
    ground: 'bg-amber-600/12 text-amber-700 dark:text-amber-400 border-amber-600/30',
    flying: 'bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
    psychic: 'bg-fuchsia-500/12 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/30',
    water: 'bg-sky-500/12 text-sky-600 dark:text-sky-400 border-sky-500/30',
    dark: 'bg-zinc-700/15 text-zinc-700 dark:text-zinc-300 border-zinc-500/35',
    electric: 'bg-amber-500/12 text-amber-600 dark:text-amber-400 border-amber-500/30',
    grass: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    defeated: 'bg-red-500/15 text-red-400 border-red-500/30',
    default: 'bg-heatran-500/12 text-heatran-600 dark:text-heatran-400 border-heatran-500/30'
};

function renderPokepasteSection() {
    const grid = document.getElementById('pokepaste-grid');
    if (!grid) return;
    grid.innerHTML = HEATRAN_GUIDE.pokepastes.map(paste => `
        <div class="card-surface rounded-2xl p-5 flex flex-col justify-between hover:border-heatran-500/60">
            <div class="space-y-3">
                <div class="flex items-center justify-between gap-2">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-extrabold border ${paste.badgeClass}">
                        ${paste.player}
                    </span>
                    <span class="text-[11px] font-mono font-medium" style="color: var(--text-muted);">
                        ${paste.role}
                    </span>
                </div>
                <div class="px-3 py-2 rounded-xl elevated-surface font-mono text-xs truncate" style="color: var(--text-secondary);">
                    ${paste.url}
                </div>
            </div>

            <div class="flex items-center gap-2 mt-4">
                <a
                    href="${paste.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 py-2.5 px-3 rounded-xl bg-heatran-600 hover:bg-heatran-700 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                    <i class="fa-solid fa-arrow-up-right-from-square text-[11px]"></i>
                    <span>Abrir Pokepaste</span>
                </a>
                <button
                    type="button"
                    class="copy-btn p-2.5 rounded-xl elevated-surface hover:border-heatran-500 transition-colors cursor-pointer"
                    style="color: var(--text-secondary);"
                    title="Copiar URL"
                    data-url="${paste.url}"
                    data-player="${paste.player}"
                >
                    <i class="fa-regular fa-copy"></i>
                </button>
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            copyText(btn.dataset.url, `Enlace de ${btn.dataset.player} copiado`);
        });
    });
}

let activeFilter = 'all';

function renderTurnsTable() {
    const tbody = document.getElementById('turns-tbody');
    if (!tbody) return;
    const completedTurns = JSON.parse(localStorage.getItem('heatran_done_turns') || '[]');

    const renderActionCell = (action, playerNum) => {
        if (!action) {
            return `
                <td class="py-4 px-5 border-r transition-opacity" data-col="${playerNum}" style="border-color: var(--border-color);">
                    <div class="flex items-center justify-center text-xs font-mono" style="color: var(--text-muted);">
                        &mdash;
                    </div>
                </td>
            `;
        }

        if (action.isKo) {
            return `
                <td class="py-4 px-5 border-r transition-opacity" data-col="${playerNum}" style="border-color: var(--border-color);">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 font-extrabold font-mono text-base shrink-0 shadow-inner">
                            KO
                        </div>
                        <div class="flex flex-col gap-1.5 min-w-0">
                            <span class="text-xs font-mono font-semibold uppercase tracking-wide text-red-400">
                                Sin Pokémon
                            </span>
                            <span class="move-pill inline-flex items-center px-3 py-1 rounded-xl text-sm font-bold border w-fit bg-red-500/15 text-red-400 border-red-500/30">
                                KO
                            </span>
                        </div>
                    </div>
                </td>
            `;
        }

        const pillStyle = TYPE_PILL_CLASSES[action.type] || TYPE_PILL_CLASSES.default;

        return `
            <td class="py-4 px-5 border-r transition-opacity" data-col="${playerNum}" style="border-color: var(--border-color);">
                <div class="flex items-center gap-4">
                    <div class="sprite-stage shadow-sm" title="${action.pokemon}">
                        ${createSpriteMarkup(action.slug, action.pokemon)}
                    </div>
                    <div class="flex flex-col gap-1.5 min-w-0">
                        <span class="text-xs font-mono font-semibold uppercase tracking-wide" style="color: var(--text-muted);">
                            ${action.pokemon}
                        </span>
                        <span class="move-pill inline-flex items-center px-3 py-1 rounded-xl text-sm font-bold border w-fit ${pillStyle}">
                            ${action.move}
                        </span>
                    </div>
                </div>
            </td>
        `;
    };

    const rowsHtml = HEATRAN_GUIDE.turns.map(row => {
        const isDone = completedTurns.includes(row.turn);

        return `
            <tr class="hover:bg-heatran-500/[0.03] transition-colors ${isDone ? 'turn-done' : ''}" data-turn="${row.turn}">
                <td class="py-4 px-4 text-center border-r font-mono select-none" style="border-color: var(--border-color);">
                    <label class="inline-flex flex-col items-center justify-center gap-1.5 cursor-pointer group" title="Marcar Turno ${row.turn}">
                        <input
                            type="checkbox"
                            class="turn-checkbox sr-only"
                            data-turn="${row.turn}"
                            ${isDone ? 'checked' : ''}
                        >
                        <span class="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm border transition-all ${
                            isDone
                                ? 'bg-heatran-600 text-white border-heatran-500 shadow-sm'
                                : 'bg-heatran-500/12 text-heatran-600 dark:text-heatran-400 border-heatran-500/25 group-hover:bg-heatran-600 group-hover:text-white'
                        }">
                            ${isDone ? '<i class="fa-solid fa-check text-xs"></i>' : `T${row.turn}`}
                        </span>
                        <span class="text-[10px] font-semibold" style="color: var(--text-muted);">
                            ${isDone ? 'Listo' : 'Pendiente'}
                        </span>
                    </label>
                </td>
                ${renderActionCell(row.p1, 1)}
                ${renderActionCell(row.p2, 2)}
                ${renderActionCell(row.p3, 3)}
                ${renderActionCell(row.p4, 4)}
            </tr>
        `;
    }).join('');

    const finishRowHtml = `
        <tr class="bg-gradient-to-r from-heatran-500/15 via-orange-500/15 to-amber-500/15 border-t-2" style="border-color: var(--accent);">
            <td colspan="5" class="py-5 px-6 text-center">
                <div class="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-2xl bg-heatran-600 text-white font-mono text-base sm:text-lg font-extrabold tracking-[0.25em] uppercase shadow-md">
                    <i class="fa-solid fa-trophy text-amber-300"></i>
                    <span>FIN</span>
                    <i class="fa-solid fa-trophy text-amber-300"></i>
                </div>
            </td>
        </tr>
    `;

    tbody.innerHTML = rowsHtml + finishRowHtml;

    tbody.querySelectorAll('.turn-checkbox').forEach(chk => {
        chk.addEventListener('change', (e) => {
            const turnNum = parseInt(e.target.dataset.turn, 10);
            toggleTurnDone(turnNum);
        });
    });

    applyColumnFilter(activeFilter);
}

function applyColumnFilter(filterVal) {
    activeFilter = filterVal;

    document.querySelectorAll('#player-filter-group .filter-btn').forEach(btn => {
        const selected = btn.dataset.filter === filterVal;
        if (selected) {
            btn.className = 'filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-heatran-600 text-white shadow-sm transition-all cursor-pointer';
            btn.style.color = '';
        } else {
            btn.className = 'filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-heatran-500/10 transition-all cursor-pointer';
            btn.style.color = 'var(--text-secondary)';
        }
    });

    document.querySelectorAll('#raid-turns-table [data-col]').forEach(cell => {
        const colId = cell.dataset.col;
        cell.classList.remove('col-dimmed', 'col-focused');
        if (filterVal !== 'all') {
            if (colId === filterVal) {
                cell.classList.add('col-focused');
            } else {
                cell.classList.add('col-dimmed');
            }
        }
    });
}

function toggleTurnDone(turnNum) {
    const stored = JSON.parse(localStorage.getItem('heatran_done_turns') || '[]');
    const idx = stored.indexOf(turnNum);
    if (idx > -1) {
        stored.splice(idx, 1);
    } else {
        stored.push(turnNum);
    }
    localStorage.setItem('heatran_done_turns', JSON.stringify(stored));
    renderTurnsTable();
}

function triggerToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const el = document.createElement('div');
    el.className = 'pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-xl shadow-xl text-xs font-bold bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 border border-heatran-500/40 transition-all duration-300 translate-y-3 opacity-0';
    el.innerHTML = `<i class="fa-solid fa-circle-check text-heatran-500"></i> <span>${message}</span>`;
    container.appendChild(el);

    requestAnimationFrame(() => el.classList.remove('translate-y-3', 'opacity-0'));
    setTimeout(() => {
        el.classList.add('translate-y-3', 'opacity-0');
        setTimeout(() => el.remove(), 300);
    }, 2500);
}

function copyText(text, feedbackMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            triggerToast(feedbackMsg);
        }).catch(() => {
            fallbackCopy(text, feedbackMsg);
        });
    } else {
        fallbackCopy(text, feedbackMsg);
    }
}

function fallbackCopy(text, feedbackMsg) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
        document.execCommand('copy');
        triggerToast(feedbackMsg);
    } catch (e) {
        triggerToast('No se pudo copiar');
    }
    document.body.removeChild(textarea);
}

function setupTheme() {
    const root = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-text');
    if (!toggleBtn) return;

    const setTheme = (mode) => {
        root.setAttribute('data-theme', mode);
        localStorage.setItem('heatran_ui_theme', mode);
        if (mode === 'dark') {
            icon.className = 'fa-solid fa-sun text-amber-400 text-sm';
            if (label) label.textContent = 'Modo Claro';
        } else {
            icon.className = 'fa-solid fa-moon text-heatran-600 text-sm';
            if (label) label.textContent = 'Modo Oscuro';
        }
    };

    const saved = localStorage.getItem('heatran_ui_theme') || 'dark';
    setTheme(saved);

    toggleBtn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(next);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupTheme();
    renderPokepasteSection();
    renderTurnsTable();

    document.querySelectorAll('#player-filter-group .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => applyColumnFilter(btn.dataset.filter));
    });

    const resetBtn = document.getElementById('reset-progress-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            localStorage.removeItem('heatran_done_turns');
            renderTurnsTable();
            triggerToast('Progreso reiniciado');
        });
    }
});
