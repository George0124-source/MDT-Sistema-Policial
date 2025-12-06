document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const badge = document.getElementById('badge').value;
            const pass = document.getElementById('password').value;
            const user = AGENTES.find(u => u.placa === badge && u.pass === pass);
            if(user) {
                sessionStorage.setItem('oficialLogueado', JSON.stringify(user));
                window.location.href = 'menu.html';
            } else {
                document.getElementById('errorMsg').style.display = 'block';
            }
        });
    }
});
