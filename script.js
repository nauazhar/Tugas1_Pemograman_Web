// script.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simpan data registrasi ke localStorage
    const formData = new FormData(this);
    localStorage.setItem('nama', formData.get('nama'));
    localStorage.setItem('email', formData.get('email'));

    // Redirect ke halaman e-ticket
    window.location.href = 'ticket.html';
});
