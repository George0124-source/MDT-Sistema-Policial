<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Acceso Central</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body class="login-body">
    <div class="login-container">
        <h2>ACCESO CENTRAL</h2>
        <form id="loginForm">
            <input type="text" id="badge" placeholder="PLACA" required>
            <input type="password" id="password" placeholder="CONTRASEÑA" required>
            <button type="submit" class="btn-login">ENTRAR</button>
        </form>
        <p id="errorMsg" style="color:red; display:none;">Error de credenciales.</p>
        <div style="margin-top:20px; border-top:1px solid #444; padding-top:10px;">
            <button onclick="window.location.href='publico.html'" style="background:none; border:none; color:#aaa; cursor:pointer; text-decoration:underline;">
                Ir a Sede Ciudadanos (DNI)
            </button>
        </div>
    </div>
    <script src="config.js"></script>
    <script>
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const badge = document.getElementById('badge').value;
            const pass = document.getElementById('password').value;
            const user = AGENTES.find(u => u.placa === badge && u.pass === pass);
            if(user) {
                sessionStorage.setItem('oficial', JSON.stringify(user));
                window.location.href = 'menu.html';
            } else {
                document.getElementById('errorMsg').style.display = 'block';
            }
        });
    </script>
</body>
</html>
