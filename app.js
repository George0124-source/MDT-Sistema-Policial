// =========================================================
// 1. BASE DE DATOS DEL CÓDIGO PENAL (LEYES COMPLETAS)
// =========================================================

const codigoPenal = [
    // --- TÍTULO I: CORRUPCIÓN ---
    { id: "1.1", titulo: "Mal uso del Código Penal", multa: 10000, meses: 1 },
    { id: "1.2", titulo: "Corrupto en el Cuerpo de Seguridad", multa: 20000, meses: 24 }, // 2 años
    { id: "1.3", titulo: "Corrupto dentro del Cuerpo de Juez", multa: 30000, meses: 36 }, // 3 años
    { id: "1.4", titulo: "Corrupto dentro del Cuerpo de Abogado", multa: 25000, meses: 36 },
    { id: "1.5", titulo: "Arresto sin motivo", multa: 15000, meses: 12 },

    // --- TÍTULO II: AGRESIONES Y HOMICIDIOS ---
    { id: "2.1", titulo: "Agresión hacia un civil", multa: 1000, meses: 1 },
    { id: "2.2", titulo: "Agresión hacia un Funcionario Público", multa: 1500, meses: 3 },
    { id: "2.3", titulo: "Homicidio hacia un civil", multa: 10000, meses: 60 }, // 5 años
    { id: "2.4", titulo: "Homicidio hacia un Funcionario Público", multa: 65000, meses: 240 }, // 20 años
    { id: "2.5", titulo: "Varios homicidios civiles (Por cada uno)", multa: 15000, meses: 180 }, // 15 años
    { id: "2.6", titulo: "Varios homicidios Funcionarios (Por cada uno)", multa: 20000, meses: 240 }, // 20 años
    { id: "2.7", titulo: "Tortura", multa: 5000, meses: 12 },
    { id: "2.8", titulo: "Amenaza con arma de fuego (Civil)", multa: 7000, meses: 3 },
    { id: "2.9", titulo: "Amenaza con arma blanca (Civil)", multa: 5000, meses: 2 },
    { id: "2.10", titulo: "Amenaza con arma de fuego (Funcionario)", multa: 10000, meses: 5 },
    { id: "2.11", titulo: "Amenaza con arma blanca (Funcionario)", multa: 8500, meses: 2 },
    { id: "2.12", titulo: "Amenaza verbal (Civil)", multa: 500, meses: 0.25 }, // 1 semana
    { id: "2.13", titulo: "Amenaza verbal (Funcionario)", multa: 5000, meses: 0.5 }, // 2 semanas
    { id: "2.14", titulo: "Intento de agresión a un civil", multa: 500, meses: 0.25 },
    { id: "2.15", titulo: "Intento de secuestro a un civil", multa: 16000, meses: 12 },
    { id: "2.16", titulo: "Secuestro a un civil", multa: 20000, meses: 36 },
    { id: "2.17", titulo: "Intento agresión a Funcionario", multa: 10000, meses: 1 },
    { id: "2.18", titulo: "Intento secuestro a Funcionario", multa: 20000, meses: 17 }, // 1 año y 5 meses
    { id: "2.19", titulo: "Secuestro a un Funcionario", multa: 30000, meses: 60 },
    { id: "2.20", titulo: "Intento homicidio a Funcionario", multa: 50000, meses: 60 },
    { id: "2.21", titulo: "Tortura Grave", multa: 15000, meses: 60 },
    { id: "2.22", titulo: "Alteración del orden público", multa: 1000, meses: 0 },
    { id: "2.23", titulo: "Racismo", multa: 3000, meses: 0 },
    { id: "2.24", titulo: "Faltas de respeto a civil", multa: 500, meses: 0 },
    { id: "2.25", titulo: "Faltas de respeto a Funcionario", multa: 1000, meses: 0 },
    { id: "2.31", titulo: "Circular sin camiseta", multa: 100, meses: 0 },
    { id: "2.32", titulo: "Acoso sexual", multa: 3000, meses: 24 },
    { id: "2.33", titulo: "Negarse a identificarse", multa: 1000, meses: 0.25 },
    { id: "2.34", titulo: "Obstrucción a la justicia", multa: 1000, meses: 0 },
    { id: "2.35", titulo: "Llevar máscara sin motivo", multa: 500, meses: 0 },
    { id: "2.36", titulo: "Manifestación ilegal", multa: 10000, meses: 0 },
    { id: "2.37", titulo: "Acoso o intimidación", multa: 1300, meses: 0 },
    { id: "2.38", titulo: "Incitación al odio/violencia", multa: 2000, meses: 0 },
    { id: "2.39", titulo: "Delito de Estafa", multa: 3000, meses: 0 },
    { id: "2.40", titulo: "No llevar documentación", multa: 5000, meses: 0 },
    { id: "2.41", titulo: "Vacilar a cuerpos de la ley", multa: 1000, meses: 0 },
    { id: "2.42", titulo: "Desorden público", multa: 800, meses: 0 },
    { id: "2.43", titulo: "Robo secreto de estado", multa: 0, meses: 999 }, // Perpetua
    { id: "2.44", titulo: "Atentado a la autoridad", multa: 10000, meses: 60 },
    { id: "2.45", titulo: "Intento rebelión / Golpe Estado", multa: 100000, meses: 999 }, // Permanente
    { id: "2.46", titulo: "Atentado Terrorista", multa: 500000, meses: 999 }, // Perpetua
    { id: "2.47", titulo: "Fraude electoral", multa: 50000, meses: 36 },
    { id: "2.48", titulo: "Impago de multas (+100k)", multa: 0, meses: 999 },

    // --- ROBOS Y ASALTOS ---
    { id: "2.49", titulo: "Robo con intimidación a civil", multa: 3500, meses: 3 },
    { id: "2.50", titulo: "Robo con violencia a civil", multa: 4500, meses: 6 },
    { id: "2.51", titulo: "Robo Menor (Gasolinera/ATM)", multa: 15000, meses: 36 },
    { id: "2.52", titulo: "Robo Medio (Armería/Tool/Casa)", multa: 40000, meses: 180 },
    { id: "2.53", titulo: "Robo Joyería", multa: 100000, meses: 600 }, // 50 años
    { id: "2.54", titulo: "Robo Mayor (Banco)", multa: 500000, meses: 999 }, // Perpetua
    { id: "2.55", titulo: "Allanamiento propiedad privada", multa: 5500, meses: 36 },

    // --- TÍTULO III: TRÁFICO (Sección 1) ---
    { id: "3.1.1", titulo: "Exceso velocidad (+40km/h)", multa: 100, meses: 0 },
    { id: "3.1.2", titulo: "Exceso velocidad (+60km/h)", multa: 200, meses: 0 },
    { id: "3.1.3", titulo: "Exceso velocidad (+80km/h)", multa: 400, meses: 0 },
    { id: "3.1.4", titulo: "Exceso velocidad (+100km/h)", multa: 500, meses: 1 },
    { id: "3.1.5", titulo: "Exceso velocidad (+120km/h)", multa: 600, meses: 1 },
    { id: "3.1.6", titulo: "Conducción temeraria", multa: 500, meses: 0 },
    { id: "3.1.7", titulo: "Conductor en mal estado", multa: 1000, meses: 0 },
    { id: "3.1.8", titulo: "Accidente sin heridos", multa: 3000, meses: 0 },
    { id: "3.1.9", titulo: "Accidente con heridos", multa: 5000, meses: 0 },
    { id: "3.1.10", titulo: "Provocar accidente grave", multa: 10000, meses: 0.25 },
    { id: "3.1.11", titulo: "Sin cinturón abrochado", multa: 200, meses: 0 },
    { id: "3.1.12", titulo: "Estacionar lugar no permitido", multa: 200, meses: 0 },
    { id: "3.1.13", titulo: "Estacionar indebidamente", multa: 100, meses: 0 },
    { id: "3.1.14", titulo: "Ignorar señales tráfico", multa: 500, meses: 0 },
    { id: "3.1.15", titulo: "Saltarse semáforo rojo", multa: 200, meses: 0 },
    { id: "3.1.16", titulo: "Uso excesivo claxon", multa: 150, meses: 0 },
    { id: "3.1.17", titulo: "Giro indebido", multa: 150, meses: 0 },
    { id: "3.1.18", titulo: "Circular sentido contrario", multa: 200, meses: 0 },
    { id: "3.1.19", titulo: "No ceder paso emergencias", multa: 1000, meses: 0 },
    { id: "3.1.20", titulo: "Adelantamiento indebido", multa: 300, meses: 0 },
    { id: "3.1.21", titulo: "Circular marcha atrás", multa: 500, meses: 0 },
    { id: "3.1.22", titulo: "Saltarse control de tráfico", multa: 3000, meses: 5 },
    { id: "3.1.23", titulo: "Vehículo malas condiciones", multa: 200, meses: 0 },
    { id: "3.1.24", titulo: "Conducir bajo drogas/alcohol", multa: 1000, meses: 1 },
    { id: "3.1.25", titulo: "Negarse prueba alcohol/drogas", multa: 2000, meses: 2 },
    { id: "3.1.26", titulo: "No colocar faros de noche", multa: 100, meses: 0 },
    { id: "3.1.27", titulo: "Sin intermitentes al girar", multa: 50, meses: 0 },
    { id: "3.1.28", titulo: "Sin intermitentes al aparcar", multa: 100, meses: 0 },
    { id: "3.1.29", titulo: "Vehículo pesado en puente", multa: 1000, meses: 0 },
    { id: "3.1.30", titulo: "Negarse inspección vehículo", multa: 1000, meses: 0 },
    { id: "3.1.31", titulo: "Modificaciones ilegales", multa: 500, meses: 0 },
    { id: "3.1.32", titulo: "Tractor por vía pública", multa: 500, meses: 0 },
    { id: "3.1.33", titulo: "Iniciar persecución", multa: 1000, meses: 12 },

    // --- TÍTULO III: CARNETS (Sección 2) ---
    { id: "3.2.1", titulo: "Conducir sin Carnet", multa: 5000, meses: 5 },
    { id: "3.2.2", titulo: "Conducir sin Carnet encima", multa: 500, meses: 0 },
    { id: "3.2.3", titulo: "Conducir sin Carnet Tipo B", multa: 1000, meses: 1 },
    { id: "3.2.4", titulo: "Conducir sin Carnet Tipo C1", multa: 5000, meses: 12 },
    { id: "3.2.5", titulo: "Conducir sin Carnet Tipo C", multa: 8000, meses: 12 },
    { id: "3.2.6", titulo: "Conducir sin Carnet Tipo CE", multa: 10000, meses: 12 },

    // --- TÍTULO III: CARRERAS (Sección 3) ---
    { id: "3.3.1", titulo: "Organizar carrera ilegal", multa: 10000, meses: 36 },
    { id: "3.3.2", titulo: "Herido en carrera ilegal", multa: 10000, meses: 60 },
    { id: "3.3.3", titulo: "Homicidio en carrera ilegal", multa: 20000, meses: 120 },
    { id: "3.3.4", titulo: "Participar en carrera ilegal", multa: 5000, meses: 0 },

    // --- TÍTULO IV: VENTA DE ARMAS (Sección 1) ---
    { id: "4.1.1", titulo: "Venta ilegal navaja", multa: 300, meses: 0 },
    { id: "4.1.2", titulo: "Venta ilegal Beretta M9", multa: 12000, meses: 1 },
    { id: "4.1.3", titulo: "Venta ilegal Colt M1911", multa: 12500, meses: 1 },
    { id: "4.1.4", titulo: "Venta ilegal Remington 870", multa: 15000, meses: 3 },
    { id: "4.1.5", titulo: "Venta ilegal AK-47", multa: 55000, meses: 12 },
    { id: "4.1.6", titulo: "Venta ilegal Colt TEC-9", multa: 26500, meses: 1 },
    { id: "4.1.7", titulo: "Venta ilegal Skorpion", multa: 4500, meses: 1 },
    { id: "4.1.8", titulo: "Venta ilegal PPSH-41", multa: 31500, meses: 1 },
    { id: "4.1.9", titulo: "Venta ilegal Desert Eagle", multa: 18000, meses: 2 },
    { id: "4.1.10", titulo: "Venta ilegal Kriss Vector", multa: 29500, meses: 1 },
    { id: "4.1.11", titulo: "Venta ilegal Python Colt", multa: 24500, meses: 2 },
    { id: "4.1.12", titulo: "Venta ilegal LMT L129A1", multa: 18500, meses: 2 },
    { id: "4.1.13", titulo: "Venta ilegal Remington MSR", multa: 48000, meses: 4 },
    { id: "4.1.14", titulo: "Venta ilegal M249", multa: 55000, meses: 9 },
    { id: "4.1.15", titulo: "Venta ilegal M14", multa: 20000, meses: 2 },

    // --- TÍTULO IV: USO DE ARMAS (Sección 2) ---
    { id: "4.2.1", titulo: "Portar Beretta M9 (sin lic)", multa: 5000, meses: 0 },
    { id: "4.2.2", titulo: "Portar Colt M1911 (sin lic)", multa: 5500, meses: 0 },
    { id: "4.2.3", titulo: "Portar Kriss Vector (sin lic)", multa: 17000, meses: 0 },
    { id: "4.2.4", titulo: "Portar AK-47", multa: 49000, meses: 24 },
    { id: "4.2.5", titulo: "Portar M249", multa: 53000, meses: 36 },
    { id: "4.2.6", titulo: "Portar Desert Eagle", multa: 17000, meses: 12 },
    { id: "4.2.7", titulo: "Portar Remington MSR", multa: 30000, meses: 24 },
    { id: "4.2.8", titulo: "Portar TEC-9", multa: 19000, meses: 36 },
    { id: "4.2.9", titulo: "Portar Python Colt (sin lic)", multa: 9000, meses: 0 },
    { id: "4.2.10", titulo: "Portar M14 (sin lic)", multa: 14500, meses: 0 },
    { id: "4.2.11", titulo: "Portar Remington 870 (sin lic)", multa: 14000, meses: 0 },
    { id: "4.2.13", titulo: "Portar LMT L129A1 (sin lic)", multa: 15000, meses: 0 },
    { id: "4.2.14", titulo: "Portar Skorpion (sin lic)", multa: 12000, meses: 0 },
    { id: "4.2.15", titulo: "Portar PPSH-41 (sin lic)", multa: 20000, meses: 0 },

    // --- TÍTULO V: CONTRA ADMINISTRACIÓN ---
    { id: "5.1", titulo: "Desacato a la ley", multa: 500, meses: 0 },
    { id: "5.2", titulo: "Resistirse al arresto", multa: 300, meses: 0 },
    { id: "5.4", titulo: "Falso testimonio", multa: 1000, meses: 0 },

    // --- TÍTULO VI: ALERTAS DEFCON ---
    { id: "6.1.2", titulo: "Salir en DEFCON roja con arma", multa: 10000, meses: 0 },
    { id: "6.1.3", titulo: "Salir en DEFCON antiterrorista", multa: 20000, meses: 1 },

    // --- TÍTULO VII: CIBERNÉTICOS ---
    { id: "7.1", titulo: "Ciber amenazas de muerte", multa: 3000, meses: 1 },
    { id: "7.2", titulo: "Sexting ilegal", multa: 2500, meses: 12 },
    { id: "7.3", titulo: "Enviar img sin consentimiento", multa: 3000, meses: 0 },
    { id: "7.4", titulo: "Ciberbullying", multa: 1500, meses: 0 },
    { id: "7.5", titulo: "Acoso Cibernético", multa: 3000, meses: 0 },

    // --- TÍTULO IX: PROTECCIÓN DATOS ---
    { id: "9.1", titulo: "Grabar policía sin permiso", multa: 2500, meses: 0 }
];

// =========================================================
// 2. LÓGICA DE LA CALCULADORA Y EL SISTEMA
// =========================================================

let selected = [];

// Inicialización cuando carga la página
document.addEventListener('DOMContentLoaded', () => {
    
    // Verificar si estamos en la página del sistema (sistema.html)
    // Si no existe el elemento 'list', es que estamos en otra página, así que paramos.
    const listDiv = document.getElementById('list');
    if(!listDiv) return; 

    // 1. Renderizar la lista completa al inicio
    renderList(codigoPenal);

    // 2. Activar el buscador
    const searchInput = document.getElementById('search');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            // Filtramos por título o por ID
            const filtered = codigoPenal.filter(x => 
                x.titulo.toLowerCase().includes(val) || 
                x.id.includes(val)
            );
            renderList(filtered);
        });
    }
});

// Función para pintar la lista de leyes en la izquierda
function renderList(arr) {
    const listDiv = document.getElementById('list');
    listDiv.innerHTML = "";
    
    arr.forEach(art => {
        // Calcular texto de tiempo bonito
        let tiempoTexto = "";
        if (art.meses >= 999) tiempoTexto = "PERPETUA";
        else if (art.meses >= 12) {
            const anios = Math.floor(art.meses / 12);
            const resto = art.meses % 12;
            tiempoTexto = anios + " Años" + (resto > 0 ? " " + resto + "m" : "");
        } else if (art.meses > 0) {
            tiempoTexto = art.meses < 1 ? "Días/Sems" : art.meses + " Meses";
        }

        const d = document.createElement('div');
        d.className = 'article-item';
        d.innerHTML = `
            <div>
                <strong style="color:var(--accent)">[${art.id}]</strong> ${art.titulo}
                <div style="font-size:11px; color:#888;">${tiempoTexto}</div>
            </div>
            <div class="price-tag">${art.multa.toLocaleString()}€</div>
        `;
        d.onclick = () => add(art);
        listDiv.appendChild(d);
    });
}

// Añadir ley al carrito
function add(art) {
    selected.push(art);
    update();
}

// Borrar todo
function clearAll() { 
    selected = []; 
    document.getElementById('detName').value = "";
    document.getElementById('detDiscord').value = "";
    document.getElementById('detDetails').value = "";
    update(); 
}

// Quitar una ley específica
function del(index) {
    selected.splice(index, 1);
    update();
}

// Actualizar el resumen derecho (Totales)
function update() {
    const sumDiv = document.getElementById('summ');
    sumDiv.innerHTML = "";
    
    let totalMulta = 0;
    let totalMeses = 0;

    if(selected.length === 0) {
        sumDiv.innerHTML = "<p style='color:#666; text-align:center; margin-top:20px;'>Ningún cargo seleccionado.</p>";
    }

    selected.forEach((s, i) => {
        totalMulta += s.multa;
        totalMeses += s.meses;
        
        sumDiv.innerHTML += `
            <div class="summary-item">
                <span>[${s.id}] ${s.titulo}</span>
                <span onclick="del(${i})" style="color:var(--danger); cursor:pointer; font-weight:bold;">✕</span>
            </div>`;
    });

    // Actualizar Textos Totales
    document.getElementById('tFine').innerText = totalMulta.toLocaleString() + "€";
    
    let textoTiempo = "0m";
    if (totalMeses >= 900) textoTiempo = "PERPETUA";
    else if (totalMeses >= 12) {
        const a = Math.floor(totalMeses / 12);
        const m = totalMeses % 12;
        textoTiempo = `${a} Años` + (m > 0 ? ` y ${m} Meses` : "");
    } else {
        textoTiempo = totalMeses + " Meses";
    }
    document.getElementById('tJail').innerText = textoTiempo;
}

// Copiar al portapapeles
function copy() {
    if(selected.length === 0) return alert("Selecciona cargos.");
    const name = document.getElementById('detName').value || "Desconocido";
    const details = document.getElementById('detDetails').value;

    let text = `**INFORME POLICIAL**\n👤 **Detenido:** ${name}\n\n`;
    selected.forEach(s => text += `• [${s.id}] ${s.titulo} (${s.multa}€)\n`);
    text += `\n💰 **TOTAL:** ${document.getElementById('tFine').innerText}`;
    text += `\n⚖️ **PENAL:** ${document.getElementById('tJail').innerText}`;
    if(details) text += `\n📝 **Detalles:** ${details}`;

    navigator.clipboard.writeText(text);
    alert("Copiado!");
}

// Enviar a Discord (Webhook)
function send(type) {
    const name = document.getElementById('detName').value;
    const disc = document.getElementById('detDiscord').value;
    const details = document.getElementById('detDetails').value;

    if(!name) return alert("Falta el nombre del detenido.");
    if(selected.length === 0) return alert("Faltan cargos.");
    
    // Seleccionar URL según botón
    let url = "";
    let color = 0;
    let title = "";

    if(type === 'multa') { 
        url = WEBHOOK_MULTAS; 
        color = 15844367; // Amarillo
        title = "📜 BOLETÍN DE DENUNCIA";
    }
    if(type === 'arresto') { 
        url = WEBHOOK_ARRESTOS; 
        color = 15105570; // Naranja
        title = "🚔 INFORME DE ARRESTO";
    }
    if(type === 'denuncia') { 
        url = WEBHOOK_DENUNCIAS; 
        color = 10181046; // Morado
        title = "⚖️ DENUNCIA JUZGADO";
    }

    if(!url || url.includes("PEGA_")) return alert("Error: Webhook no configurada en config.js");

    // Obtener oficial de la sesión
    const user = JSON.parse(sessionStorage.getItem('oficialLogueado')) || { rango: "Agente", placa: "Desc.", discordId: "" };
    
    // Formatear descripción de cargos
    let desc = selected.map(s => {
        let t = s.meses > 0 ? (s.meses >= 12 ? (s.meses/12).toFixed(1)+"a" : s.meses+"m") : "0m";
        if(s.meses >= 900) t = "Perp.";
        return `• **[${s.id}] ${s.titulo}**\n   └ ${s.multa}€ | ${t}`;
    }).join("\n");

    // Formatear menciones (Pings)
    let oficialStr = `${user.rango} ${user.placa}`;
    if(user.discordId) oficialStr += ` <@${user.discordId}>`;

    let detStr = `**${name}**`;
    if(disc) detStr += ` <@${disc}>`;

    const embed = {
        title: title,
        color: color,
        fields: [
            { name: "👮 Oficial", value: oficialStr, inline: true },
            { name: "👤 Ciudadano", value: detStr, inline: true },
            { name: "📋 Cargos", value: desc },
            { name: "💵 Total Multa", value: document.getElementById('tFine').innerText, inline: true },
            { name: "⛓️ Total Pena", value: document.getElementById('tJail').innerText, inline: true }
        ],
        footer: { text: "Sistema MDT Nacional" },
        timestamp: new Date()
    };

    if(details) embed.fields.push({ name: "📝 Detalles", value: details });

    fetch(url, { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ embeds: [embed] }) 
    })
    .then(res => {
        if(res.ok) {
            alert("✅ Informe enviado correctamente.");
            clearAll();
        } else {
            alert("❌ Error al enviar a Discord.");
        }
    });
}
