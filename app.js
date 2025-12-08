// =========================================================
// 1. BASE DE DATOS DEL CÓDIGO PENAL (ACTUALIZADO AL ÚLTIMO BOLETÍN)
// =========================================================

const codigoPenal = [
    // --- CAPÍTULO I: SEGURIDAD VIAL ---
    { id: "1.0", titulo: "No tener DNI/NIE registrado", multa: 1500, meses: 0 },
    { id: "1.0.1", titulo: "No llevar DNI/NIE o Carnet", multa: 250, meses: 0 },
    { id: "1.0.2", titulo: "Conducción sin Carnet", multa: 1750, meses: 0 },
    { id: "1.0.3", titulo: "Conducción sin seguro activo", multa: 1750, meses: 0 },
    { id: "1.0.4", titulo: "Conducción con carnet caducado", multa: 1250, meses: 0 },
    { id: "1.0.5", titulo: "Conducción con seguro caducado", multa: 1250, meses: 0 },
    { id: "1.1", titulo: "Abuso del claxon", multa: 45, meses: 0 },
    { id: "1.2", titulo: "Pisar línea continua", multa: 65, meses: 0 },
    { id: "1.2.1", titulo: "Adelantamiento en línea continua", multa: 100, meses: 0 },
    { id: "1.2.2", titulo: "Giro indebido (Línea continua)", multa: 95, meses: 0 },
    { id: "1.3", titulo: "Circular en sentido contrario", multa: 150, meses: 0 },
    { id: "1.4", titulo: "Estacionamiento prohibido", multa: 50, meses: 0 },
    { id: "1.4.1", titulo: "Estacionamiento doble fila", multa: 75, meses: 0 },
    { id: "1.5", titulo: "Obstruir la circulación", multa: 175, meses: 0 },
    { id: "1.6", titulo: "Saltarse señal de parada", multa: 75, meses: 0 },
    { id: "1.7", titulo: "No ceder paso a emergencias", multa: 850, meses: 0 },
    { id: "1.8", titulo: "Marcha atrás peligrosa", multa: 125, meses: 0 },
    { id: "1.9", titulo: "Evadir control policial", multa: 600, meses: 0 }, // 24h
    { id: "1.9.1", titulo: "Fuga de control policial", multa: 1350, meses: 0 }, // 72h
    { id: "1.10", titulo: "Exceso velocidad (Urbana)", multa: 750, meses: 0 },
    { id: "1.10.1", titulo: "Exceso velocidad (Interurbana)", multa: 650, meses: 0 },
    { id: "1.10.2", titulo: "Exceso velocidad (Autovía)", multa: 500, meses: 0 },
    { id: "1.11", titulo: "Conducción con fallos", multa: 350, meses: 0 },
    { id: "1.12", titulo: "Sin luces de noche", multa: 150, meses: 0 },
    { id: "1.13", titulo: "Sin luces en túnel", multa: 75, meses: 0 },
    { id: "1.13.1", titulo: "Luces largas en túnel", multa: 25, meses: 0 },
    { id: "1.14", titulo: "Entrar zonas restringidas (Vehículo)", multa: 300, meses: 0 },
    { id: "1.15", titulo: "Conducción bajo estupefacientes", multa: 1500, meses: 3 },
    { id: "1.15.1", titulo: "Conducción bajo alcohol", multa: 1250, meses: 3 },
    { id: "1.16", titulo: "Siniestro (1 implicado)", multa: 0, meses: 0 }, // Solo retirada
    { id: "1.16.1", titulo: "Siniestro (2 implicados)", multa: 250, meses: 0 },
    { id: "1.16.2", titulo: "Siniestro múltiple", multa: 500, meses: 0 },
    { id: "1.17", titulo: "Provocar/Insultar al volante", multa: 950, meses: 0 },
    { id: "1.18", titulo: "Dañar mobiliario público (Coche)", multa: 1050, meses: 0 },
    { id: "1.18.1", titulo: "Dañar mobiliario privado (Coche)", multa: 1500, meses: 0 },
    { id: "1.19", titulo: "Intento atropello civil", multa: 1700, meses: 0 },
    { id: "1.19.1", titulo: "Intento atropello civil y fuga", multa: 7000, meses: 0 },
    { id: "1.20", titulo: "Intento atropello funcionario", multa: 2000, meses: 0 },
    { id: "1.20.1", titulo: "Intento atropello funcionario y fuga", multa: 10000, meses: 0 },
    { id: "1.21", titulo: "Atropello a civil", multa: 5000, meses: 0 },
    { id: "1.21.1", titulo: "Atropello civil y fuga", multa: 7500, meses: 12 },
    { id: "1.22", titulo: "Atropello a funcionario", multa: 7500, meses: 15 },
    { id: "1.22.1", titulo: "Atropello funcionario y fuga", multa: 10000, meses: 15 },
    { id: "1.23", titulo: "Crear carrera ilegal", multa: 50000, meses: 6 },
    { id: "1.23.1", titulo: "Participar carrera ilegal", multa: 25000, meses: 1 },
    { id: "1.24", titulo: "Sin cinturón de seguridad", multa: 500, meses: 0 },
    { id: "1.25", titulo: "Persona en maletero", multa: 2500, meses: 0 },
    { id: "1.26", titulo: "Iniciar persecución policial", multa: 7000, meses: 0 },
    { id: "1.27", titulo: "Iniciar persecución", multa: 2000, meses: 0 },
    { id: "1.28", titulo: "Tirar objetos ventanilla", multa: 750, meses: 0 },
    { id: "1.29", titulo: "Conducción sin matrícula", multa: 1000, meses: 0 },
    { id: "1.29.1", titulo: "Matrícula no registrada", multa: 250, meses: 0 },
    { id: "1.29.2", titulo: "Matrícula tapada/mal estado", multa: 750, meses: 0 },
    { id: "1.30", titulo: "Alterar taxímetro", multa: 1500, meses: 0 },
    { id: "1.31", titulo: "Niño sin supervisión en coche", multa: 3000, meses: 0 },
    { id: "1.32", titulo: "No usar intermitentes", multa: 200, meses: 0 },
    { id: "1.32.1", titulo: "Uso indebido intermitentes", multa: 600, meses: 0 },
    { id: "1.33", titulo: "Uso de móvil al volante", multa: 3500, meses: 0 },
    { id: "1.34", titulo: "Conducir siendo menor", multa: 650, meses: 0 },
    { id: "1.35", titulo: "No guardar distancia seguridad", multa: 450, meses: 0 },
    { id: "1.36", titulo: "Conducción temeraria", multa: 2000, meses: 0 },
    { id: "1.37", titulo: "Música demasiado alta", multa: 350, meses: 0 },
    { id: "1.38", titulo: "Posesión elementos ilícitos (Coche)", multa: 1500, meses: 0 },
    { id: "1.39", titulo: "Transporte inflamable inadecuado", multa: 650, meses: 0 },
    { id: "1.39.1", titulo: "Transporte inflamable sin permiso", multa: 1500, meses: 0 },
    { id: "1.40", titulo: "Uso indebido aeronave", multa: 15000, meses: 12 },

    // --- CAPÍTULO II: DELITOS SOBRE ROBOS ---
    { id: "2.0", titulo: "Hurto a civil", multa: 500, meses: 0 },
    { id: "2.0.1", titulo: "Hurto a civil (Arma blanca)", multa: 1000, meses: 24 },
    { id: "2.0.2", titulo: "Hurto a civil (Arma fuego)", multa: 1500, meses: 36 },
    { id: "2.1", titulo: "Hurto a funcionario", multa: 1000, meses: 0 },
    { id: "2.1.1", titulo: "Hurto a funcionario (Arma blanca)", multa: 1500, meses: 24 },
    { id: "2.1.2", titulo: "Hurto a funcionario (Arma fuego)", multa: 2500, meses: 36 },
    { id: "2.2", titulo: "Robo a civil", multa: 1000, meses: 0 },
    { id: "2.2.1", titulo: "Robo a civil (Arma blanca)", multa: 1500, meses: 24 },
    { id: "2.2.2", titulo: "Robo a civil (Arma fuego)", multa: 2000, meses: 36 },
    { id: "2.3", titulo: "Robo a funcionario", multa: 2000, meses: 0 },
    { id: "2.3.1", titulo: "Robo a funcionario (Arma blanca)", multa: 2500, meses: 24 },
    { id: "2.3.2", titulo: "Robo a funcionario (Arma fuego)", multa: 3500, meses: 36 },
    { id: "2.4", titulo: "Allanamiento de morada", multa: 2500, meses: 3 },
    { id: "2.4.1", titulo: "Allanamiento morada armada", multa: 3500, meses: 6 },
    { id: "2.5", titulo: "Robo a locales", multa: 5500, meses: 48 },
    { id: "2.5.1", titulo: "Robo a locales armado", multa: 6500, meses: 72 },
    { id: "2.6", titulo: "Robo Joyería", multa: 45000, meses: 180 }, // 15 años
    { id: "2.6.1", titulo: "Robo Joyería armado", multa: 50000, meses: 204 }, // 17 años
    { id: "2.7", titulo: "Robo Banco", multa: 250000, meses: 264 }, // 22 años
    { id: "2.7.1", titulo: "Robo Banco armado", multa: 500000, meses: 300 }, // 25 años
    { id: "2.8", titulo: "Robo a vehículo", multa: 2500, meses: 6 },
    { id: "2.8.1", titulo: "Robo a vehículo armado", multa: 5000, meses: 12 },
    { id: "2.9", titulo: "Apropiación cosa perdida (legal)", multa: 100, meses: 0 },
    { id: "2.9.1", titulo: "Apropiación cosa perdida (ilegal)", multa: 1000, meses: 0 }, // 24h
    { id: "2.10", titulo: "Robo edificio estatal", multa: 25000000, meses: 999 }, // Perpetua
    { id: "2.10.1", titulo: "Robo estatal armado", multa: 30000000, meses: 999 }, // Perpetua
    { id: "2.11", titulo: "Hurto uso público", multa: 500, meses: 0 },
    { id: "2.11.1", titulo: "Hurto uso público armado", multa: 750, meses: 0 },
    { id: "2.12", titulo: "Robo uso público", multa: 750, meses: 0 },
    { id: "2.12.1", titulo: "Robo uso público armado", multa: 900, meses: 0 },
    { id: "2.13", titulo: "Hurto uso privado", multa: 1000, meses: 0 },
    { id: "2.13.1", titulo: "Hurto uso privado armado", multa: 1250, meses: 0 },
    { id: "2.14", titulo: "Robo uso privado", multa: 750, meses: 0 },
    { id: "2.14.1", titulo: "Robo uso privado armado", multa: 900, meses: 0 },
    { id: "2.15", titulo: "Ocupación ilegal (<48h)", multa: 500, meses: 0 },

    // --- CAPÍTULO III: LIBERTAD E INTEGRIDAD ---
    { id: "3.0", titulo: "Insultos orientación sexual", multa: 1750, meses: 0 },
    { id: "3.1", titulo: "Insultos etnia/religión", multa: 1000, meses: 0 },
    { id: "3.2", titulo: "Violencia de género", multa: 450, meses: 3 },
    { id: "3.3", titulo: "Intento de agresión", multa: 650, meses: 0 }, // 24h
    { id: "3.4", titulo: "Agresión", multa: 750, meses: 0 }, // 72h
    { id: "3.5", titulo: "Agresión a funcionario", multa: 1000, meses: 0 }, // 48h (mínimo)
    { id: "3.6", titulo: "Alteración orden público", multa: 1450, meses: 0 }, // 48h
    { id: "3.7", titulo: "Acoso", multa: 2500, meses: 6 },
    { id: "3.8", titulo: "Intento violación", multa: 5000, meses: 12 },
    { id: "3.8.1", titulo: "Violación", multa: 15000, meses: 60 },
    { id: "3.9", titulo: "Suplantación identidad", multa: 1725, meses: 3 },
    { id: "3.9.1", titulo: "Suplantación para culpar", multa: 4750, meses: 12 },
    { id: "3.10", titulo: "Tráfico de personas", multa: 16000, meses: 24 },
    { id: "3.10.1", titulo: "Trata de blancas", multa: 38000, meses: 48 },
    { id: "3.11", titulo: "Maltrato", multa: 3275, meses: 0 }, // 72h
    { id: "3.12", titulo: "Intento agresión menor", multa: 1000, meses: 0 }, // 72h
    { id: "3.13", titulo: "Agresión menor", multa: 3500, meses: 15 },
    { id: "3.8-M", titulo: "Intento violación menor", multa: 15000, meses: 48 },
    { id: "3.8.1-M", titulo: "Violación menor", multa: 55000, meses: 84 },
    { id: "3.9-P", titulo: "Prostitución vía pública", multa: 3500, meses: 12 },
    { id: "3.9.1-P", titulo: "Prostitución local ilegal", multa: 8125, meses: 36 },
    { id: "3.10-D", titulo: "Disturbios vía pública", multa: 1000, meses: 0 }, // 72h
    { id: "3.10.1-D", titulo: "Disturbios propiedad privada", multa: 5000, meses: 2 },
    { id: "3.11-C", titulo: "Comercio ilegal objetos", multa: 1000, meses: 4 },
    { id: "3.12-A", titulo: "Intentar alentar delito", multa: 500, meses: 12 },
    { id: "3.12.1", titulo: "Alentar delito", multa: 1500, meses: 24 },
    { id: "3.13-V", titulo: "Conducta violenta", multa: 225, meses: 0 },
    { id: "3.14", titulo: "Creación organización peligrosa", multa: 250000, meses: 999 }, // Perpetua
    { id: "3.14.1", titulo: "Intento creación org. peligrosa", multa: 125000, meses: 144 }, // 12 años
    { id: "3.14.2", titulo: "Alentar creación org. peligrosa", multa: 85000, meses: 144 }, // 12 años
    { id: "3.14.3", titulo: "Pertenecer org. peligrosa", multa: 25000, meses: 264 }, // 22 años
    { id: "3.15", titulo: "Realizar manifestación ilegal", multa: 1250, meses: 0 }, // 72h
    { id: "3.15.1", titulo: "Participar manifestación ilegal", multa: 750, meses: 0 },
    { id: "3.16", titulo: "Exhibicionismo", multa: 850, meses: 0 },
    { id: "3.16.1", titulo: "Exhibicionismo propiedad privada", multa: 975, meses: 0 },
    { id: "3.17", titulo: "Enmascarado sin motivo", multa: 50, meses: 0 },
    { id: "3.17.1", titulo: "Enmascarado para delinquir", multa: 750, meses: 0 },
    { id: "3.18", titulo: "Suplantación funcionario", multa: 5675, meses: 3 },
    { id: "3.18.1", titulo: "Suplantación func. para culpar", multa: 15835, meses: 9 },
    { id: "3.19", titulo: "Insultos a funcionario", multa: 750, meses: 0 },
    { id: "3.19.1", titulo: "Insultos a civil", multa: 250, meses: 0 },
    { id: "3.20", titulo: "Contaminar zonas naturales", multa: 1500, meses: 2 }, // Servicios comunitarios
    { id: "3.21", titulo: "Entrar zonas restringidas", multa: 750, meses: 0 }, // 36h
    { id: "3.22", titulo: "Falsa alarma incendios", multa: 12750, meses: 0 },
    { id: "3.23", titulo: "Portar chaleco antibalas ilegal", multa: 1250, meses: 0 },

    // --- CAPÍTULO IV: ARMAS Y SALUD ---
    { id: "4.0", titulo: "Posesión arma ilegal", multa: 500, meses: 1 },
    { id: "4.0.1", titulo: "Posesión arma sin licencia", multa: 1350, meses: 3 }, // Retención 3 meses (asumo meses por contexto)
    { id: "4.1", titulo: "Uso indebido arma sin licencia", multa: 6500, meses: 12 },
    { id: "4.1.1", titulo: "Uso indebido arma", multa: 7500, meses: 15 },
    { id: "4.2", titulo: "Posesión armas contrabando", multa: 10000, meses: 36 },
    { id: "4.2.1", titulo: "Contrabando de armas", multa: 250575, meses: 60 },
    { id: "4.2.1.1", titulo: "Compra armas contrabando", multa: 4500, meses: 5 },
    { id: "4.3", titulo: "Iniciar tiroteo", multa: 55675, meses: 48 },
    { id: "4.4", titulo: "Iniciar disturbio con arma", multa: 1250, meses: 4 },
    { id: "4.5", titulo: "Posesión estupefacientes (Kg/L)", multa: 5000, meses: 24 },
    { id: "4.5.1", titulo: "Posesión estupefacientes contrabando", multa: 15000, meses: 84 },
    { id: "4.5.2", titulo: "Contrabando estupefacientes", multa: 50000, meses: 120 },
    { id: "4.5.3", titulo: "Compra estupefacientes", multa: 15000, meses: 24 },
    { id: "4.5.4", titulo: "Consumición estupefacientes", multa: 1500, meses: 12 },
    { id: "4.5.5", titulo: "Ir bajo efectos estupefacientes", multa: 1500, meses: 6 },
    { id: "4.6", titulo: "Alcohol vía pública", multa: 400, meses: 0 },
    { id: "4.6.1", titulo: "Alcohol menor edad", multa: 650, meses: 0 },
    { id: "4.6.2", titulo: "Bajo efectos alcohol vía pública", multa: 500, meses: 0 },

    // --- CAPÍTULO V: HOMICIDIOS Y SECUESTROS ---
    { id: "5.0", titulo: "Intento homicidio civil", multa: 25000, meses: 48 },
    { id: "5.0.1", titulo: "Intento homicidio civil (Blanca)", multa: 27500, meses: 48 },
    { id: "5.0.2", titulo: "Intento homicidio civil (Fuego sin lic)", multa: 50000, meses: 60 },
    { id: "5.0.3", titulo: "Intento homicidio civil (Fuego con lic)", multa: 52500, meses: 60 },
    { id: "5.1", titulo: "Intento homicidio funcionario", multa: 35000, meses: 60 },
    { id: "5.1.1", titulo: "Intento homicidio funcionario (Blanca)", multa: 37500, meses: 60 },
    { id: "5.1.2", titulo: "Intento homicidio funcionario (Fuego sin lic)", multa: 60000, meses: 72 },
    { id: "5.1.3", titulo: "Intento homicidio funcionario (Fuego con lic)", multa: 62500, meses: 72 },
    { id: "5.2", titulo: "Homicidio civil", multa: 75000, meses: 180 }, // 15 años
    { id: "5.2.1", titulo: "Homicidio civil (Blanca)", multa: 100000, meses: 204 }, // 17 años
    { id: "5.2.2", titulo: "Homicidio civil (Fuego sin lic)", multa: 100000, meses: 204 },
    { id: "5.2.3", titulo: "Homicidio civil (Fuego con lic)", multa: 100000, meses: 204 },
    { id: "5.3", titulo: "Intento homicidio animal", multa: 15000, meses: 20 },
    { id: "5.3.1", titulo: "Intento homicidio animal (Blanca)", multa: 15000, meses: 20 },
    { id: "5.3.2", titulo: "Intento homicidio animal (Fuego sin lic)", multa: 25000, meses: 12 },
    { id: "5.3.3", titulo: "Intento homicidio animal (Fuego con lic)", multa: 35000, meses: 24 },
    { id: "5.4", titulo: "Secuestro civil", multa: 3500, meses: 20 },
    { id: "5.4.1", titulo: "Secuestro civil (Blanca)", multa: 3750, meses: 36 },
    { id: "5.4.2", titulo: "Secuestro civil (Fuego sin lic)", multa: 4000, meses: 48 },
    { id: "5.4.3", titulo: "Secuestro civil (Fuego con lic)", multa: 4500, meses: 50 },
    { id: "5.5", titulo: "Secuestro menor", multa: 3700, meses: 36 },
    { id: "5.5.1", titulo: "Secuestro menor (Blanca)", multa: 4000, meses: 48 },
    { id: "5.5.2", titulo: "Secuestro menor (Fuego sin lic)", multa: 4300, meses: 60 },
    { id: "5.5.3", titulo: "Secuestro menor (Fuego con lic)", multa: 4800, meses: 60 },
    { id: "5.6", titulo: "Secuestro funcionario", multa: 7000, meses: 48 },
    { id: "5.6.1", titulo: "Secuestro funcionario (Blanca)", multa: 7250, meses: 60 },
    { id: "5.6.2", titulo: "Secuestro funcionario (Fuego sin lic)", multa: 7500, meses: 60 },
    { id: "5.6.3", titulo: "Secuestro funcionario (Fuego con lic)", multa: 8000, meses: 60 },
    { id: "5.7", titulo: "Secuestro coacción", multa: 5500, meses: 36 },
    { id: "5.7.1", titulo: "Secuestro coacción (Blanca)", multa: 5750, meses: 48 },
    { id: "5.7.2", titulo: "Secuestro coacción (Fuego sin lic)", multa: 6000, meses: 48 },
    { id: "5.7.3", titulo: "Secuestro coacción (Fuego con lic)", multa: 6500, meses: 48 },
    { id: "5.8", titulo: "Secuestro robo", multa: 5000, meses: 48 },
    { id: "5.8.1", titulo: "Secuestro robo (Blanca)", multa: 5250, meses: 60 },
    { id: "5.8.2", titulo: "Secuestro robo (Fuego sin lic)", multa: 5500, meses: 60 },
    { id: "5.8.3", titulo: "Secuestro robo (Fuego con lic)", multa: 6000, meses: 60 },
    { id: "5.9", titulo: "Amenaza condicional", multa: 10000, meses: 4 },
    { id: "5.10", titulo: "Amenaza incondicional", multa: 1000, meses: 4 },
    { id: "5.11", titulo: "Amenaza leve", multa: 1500, meses: 2 },
    { id: "5.12", titulo: "Extorsión persona", multa: 2000, meses: 4 },
    { id: "5.12.1", titulo: "Extorsión persona (Blanca)", multa: 2250, meses: 12 },
    { id: "5.12.2", titulo: "Extorsión persona (Fuego sin lic)", multa: 2500, meses: 15 },
    { id: "5.12.3", titulo: "Extorsión persona (Fuego con lic)", multa: 3000, meses: 24 },
    { id: "5.13", titulo: "Extorsión negocio", multa: 5200, meses: 6 },
    { id: "5.14", titulo: "Extorsión funcionario", multa: 5900, meses: 6 },
    { id: "5.14.1", titulo: "Extorsión funcionario (Blanca)", multa: 6150, meses: 12 },
    { id: "5.14.2", titulo: "Extorsión funcionario (Fuego sin lic)", multa: 6400, meses: 12 },
    { id: "5.14.3", titulo: "Extorsión funcionario (Fuego con lic)", multa: 6900, meses: 12 },
    { id: "5.15", titulo: "Extorsión Juez", multa: 18500, meses: 24 },
    { id: "5.15.1", titulo: "Extorsión Juez (Blanca)", multa: 18750, meses: 36 },
    { id: "5.15.2", titulo: "Extorsión Juez (Fuego sin lic)", multa: 19000, meses: 36 },
    { id: "5.15.3", titulo: "Extorsión Juez (Fuego con lic)", multa: 19500, meses: 48 },
    { id: "5.16", titulo: "Falso testimonio", multa: 6000, meses: 24 }, // Max 24
    { id: "5.17", titulo: "Manipulación doc. estado", multa: 2500, meses: 24 }, // Max 24

    // --- CAPÍTULO VI: CIBERNÉTICOS ---
    { id: "6.0", titulo: "Abuso menores cibernético", multa: 2000, meses: 6 },
    { id: "6.0.1", titulo: "Acoso menores cibernético", multa: 1000, meses: 7 },
    { id: "6.0.2", titulo: "Cyberbullying menores", multa: 3000, meses: 12 },
    { id: "6.0.3", titulo: "Pedofilia cibernética", multa: 1000, meses: 2 },
    { id: "6.0.4", titulo: "Manipulación menores ciber", multa: 2500, meses: 6 },
    { id: "6.1", titulo: "Acoso cibernético", multa: 500, meses: 1 },
    { id: "6.1.1", titulo: "Cyberbullying", multa: 750, meses: 2 },
    { id: "6.1.2", titulo: "Manipulación psicológica ciber", multa: 1000, meses: 3 },
    { id: "6.1.3", titulo: "Amenazas cibernéticas", multa: 2000, meses: 3 },
    { id: "6.1.4", titulo: "Publicación img. sin permiso", multa: 2000, meses: 3 },
    { id: "6.1.5", titulo: "Sexting", multa: 3000, meses: 3 },
    { id: "6.1.6", titulo: "Obligar enviar fotos", multa: 1000, meses: 3 },
    { id: "6.2", titulo: "Phishing", multa: 2000, meses: 3 },
    { id: "6.3", titulo: "Malware", multa: 1000, meses: 5 }
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
        sumDiv.innerHTML = "<p style='color:#666; text-align:center; margin-top:20px;'>Lista vacía.</p>";
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
    
    let textoJail = "0m";
    if (totalMeses >= 900) textoJail = "PERPETUA";
    else if (totalMeses >= 12) {
        const a = Math.floor(totalMeses / 12);
        const m = totalMeses % 12;
        textoJail = `${a} Años` + (m > 0 ? ` y ${m} Meses` : "");
    } else {
        textoJail = totalMeses + " Meses";
    }
    document.getElementById('tJail').innerText = textoJail;
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

