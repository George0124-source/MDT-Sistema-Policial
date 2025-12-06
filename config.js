// --- CONFIGURACIÓN DEL SISTEMA (config.js) ---

// 1. WEBHOOKS DE DISCORD (Crea 3 webhooks en tu servidor y pega las URL aquí)
const WEBHOOK_ARRESTOS = "https://discord.com/api/webhooks/1446935969252245548/C0MdQ5xMWaqJlphLQBMgFoo2tnEm2ZQC3Q2laN2wgPZbZO6zEAtxl6_OYRopjJDxHV6Y";
const WEBHOOK_MULTAS = "https://discord.com/api/webhooks/1446935881712668805/DF6rSKlziNCTecQaG1KQUNXu8L5U6FvHVikUZoiLAxfpCGXnqlYuase-wWVdy9nDFwEt";
const WEBHOOK_DENUNCIAS = "https://discord.com/api/webhooks/1446935508176474132/W2kxhcmiNTHkGKXe4pRV69dLUT50U9-xl7hDO2Er1jTFezLcS4Y3Y9MuxRy9H22tlDiP";

// 2. LISTA DE AGENTES AUTORIZADOS
const AGENTES = [
    { placa: "CNP-001", pass: "admin", rango: "Comisario" },
    { placa: "GC-055", pass: "1234", rango: "Agente" },
    // Añade más agentes copiando la línea de arriba
];