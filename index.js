document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const badge = document.getElementById('badge').value;
            const pass = document.getElementById('password').value;
            const oficial = AGENTES.find(u => u.placa === badge && u.pass === pass);

            if (oficial) {
                sessionStorage.setItem('oficialLogueado', JSON.stringify(oficial));
                window.location.href = 'menu.html';
            } else {
                document.getElementById('errorMsg').style.display = 'block';
            }
        });
    }
});
