// --- CONFIGURACIÓN DEL SISTEMA (config.js) ---

// 1. WEBHOOKS DE DISCORD (Crea 3 webhooks en tu servidor y pega las URL aquí)
const WEBHOOK_ARRESTOS = "https://discord.com/api/webhooks/1446935969252245548/C0MdQ5xMWaqJlphLQBMgFoo2tnEm2ZQC3Q2laN2wgPZbZO6zEAtxl6_OYRopjJDxHV6Y";
const WEBHOOK_MULTAS = "https://discord.com/api/webhooks/1446935881712668805/DF6rSKlziNCTecQaG1KQUNXu8L5U6FvHVikUZoiLAxfpCGXnqlYuase-wWVdy9nDFwEt";
const WEBHOOK_DENUNCIAS = "https://discord.com/api/webhooks/1446935508176474132/W2kxhcmiNTHkGKXe4pRV69dLUT50U9-xl7hDO2Er1jTFezLcS4Y3Y9MuxRy9H22tlDiP";


// NUEVA: WEBHOOK PARA RECLAMACIONES DE DNI (Canal Staff)
// Crea la webhook en el canal 1446679844267098195 y pega la URL abajo:
const WEBHOOK_STAFF = "https://discord.com/api/webhooks/1446993873975906344/lmlMulhCxZyQ5qxKZt5mkZhcX957jcx0XJoiLF_dNY4IzRz1FTxxF7ZpHrmMIe9GGepX"; 

// 2. LISTA DE AGENTES AUTORIZADOS
// Importante: En 'discordId', pon el ID numérico del usuario.
const AGENTES = [
    { placa: "CF-001", pass: "Jorge0124", rango: "Co-Fundador", discordId: "803332911926739005" },
    { placa: "FN-001", pass: "Alex0124", rango: "Fundador", discordId: "739425840214835270" },
];



