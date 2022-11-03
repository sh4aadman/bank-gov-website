document.getElementById('login-button').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if (email === 'admin' && password === 'admin') {
        window.location.href = 'transactions.html';
    }
    else {
        alert('Invalid User!');
    }
})