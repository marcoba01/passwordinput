function showHide() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('toggle');
    

    if (passwordInput.type === 'password') {
        toggleButton.classList.add('hide');
        passwordInput.type = 'text' ;
        passwordInput.style.backgroundColor = 'white';
    } else {
        passwordInput.type = 'password';
        toggleButton.classList.remove('hide');
        passwordInput.style.backgroundColor = 'transparent';
    }
}
