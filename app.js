// ==========================================
// 1. DATOS DEL CÓDIGO PENAL
// ==========================================

// Pega aquí abajo la variable 'const codigoPenal = [...]' que te di en el mensaje anterior.
// Si ya la tienes en otro sitio, asegúrate de que se llame 'codigoPenal'.

// --- EJEMPLO (BORRA ESTO Y PEGA LA LISTA COMPLETA) ---
const codigoPenal = [
    // Pega todo el array gigante aquí
    // ...
    // CAP I: TRÁFICO
    { header: true, titulo: "🚗 TRÁFICO" },
    { id: "1.1", titulo: "Uso excesivo del claxon", multa: 100, meses: 0 },
    // ... (etc)
];
// -----------------------------------------------------


// ==========================================
// 2. LÓGICA DE LA INTERFAZ
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializar contadores
    document.getElementById('totalArticulos').innerText = codigoPenal.filter(x => !x.header).length;
    renderTable(codigoPenal);
    populateChapters();

    // Filtro de búsqueda
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        const filtered = codigoPenal.filter(x => {
            if(x.header) return true; // Mantener cabeceras
            return x.titulo.toLowerCase().includes(val) || x.id.includes(val);
        });
        renderTable(filtered);
    });

    // Filtro de Capítulos
    document.getElementById('chapterSelect').addEventListener('change', (e) => {
        const cap = e.target.value;
        if(cap === 'all') {
            renderTable(codigoPenal);
        } else {
            // Lógica simple para filtrar por bloque (mejorable si definimos capítulos en data)
            // Por ahora recargamos todo
            renderTable(codigoPenal); 
        }
    });
});

// Función para cambiar de pantalla (Menú <-> Penal)
window.switchScreen = function(screenId) {
    // Ocultar todas
    document.getElementById('home-screen').classList.add('hidden-screen');
    document.getElementById('home-screen').classList.remove('active-screen');
    
    document.getElementById('penal-screen').classList.add('hidden-screen');
    document.getElementById('penal-screen').classList.remove('active-screen');

    // Mostrar la elegida
    const screen = document.getElementById(screenId);
    screen.classList.remove('hidden-screen');
    screen.classList.add('active-screen');
}

// Botón de Servicio (Toggle visual)
window.toggleService = function() {
    const btn = document.getElementById('statusBtn');
    const txt = document.getElementById('statusText');
    
    if(btn.classList.contains('off-duty')) {
        btn.classList.remove('off-duty');
        btn.classList.add('on-duty');
        btn.innerHTML = '<i class="fas fa-id-badge"></i> EN SERVICIO';
    } else {
        btn.classList.remove('on-duty');
        btn.classList.add('off-duty');
        btn.innerHTML = '<i class="fas fa-user-clock"></i> FUERA DE SERVICIO';
    }
}

// Renderizar la Tabla
function renderTable(data) {
    const tbody = document.getElementById('penalTableBody');
    tbody.innerHTML = '';
    let count = 0;

    data.forEach(item => {
        if(item.header) {
            // Es un título de sección
            const row = document.createElement('div');
            row.className = 'section-divider';
            row.innerText = item.titulo;
            tbody.appendChild(row);
        } else {
            // Es un artículo
            count++;
            const row = document.createElement('div');
            row.className = 'table-row';
            
            // Texto de sanción (Meses / Perpetua)
            let sancionTxt = "Solo Multa";
            if(item.meses > 0) sancionTxt = `${item.meses} Meses de Prisión`;
            if(item.meses >= 900) sancionTxt = "CADENA PERPETUA (CK)";

            row.innerHTML = `
                <div class="row-art">Art. ${item.id}</div>
                <div class="row-inf">${item.titulo}</div>
                <div class="row-mul">${item.multa.toLocaleString()}€</div>
                <div class="row-san">${sancionTxt}</div>
                <div class="row-act">
                    <button class="btn-add" onclick="alert('Añadido: ${item.id}')">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            `;
            tbody.appendChild(row);
        }
    });

    // Actualizar contador
    document.getElementById('totalFiltrados').innerText = count;
}

// Llenar el select de capítulos (Opcional)
function populateChapters() {
    const select = document.getElementById('chapterSelect');
    const headers = codigoPenal.filter(x => x.header);
    headers.forEach((h, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.innerText = h.titulo.split(':')[0] || h.titulo; // Coger solo el inicio
        select.appendChild(opt);
    });
}
