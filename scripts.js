document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simulación de verificación de usuario
    if (username === 'user' && password === 'password123') {
        alert('Login successful!');
        // Aquí podrías redirigir a otra página o realizar otras acciones
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});
