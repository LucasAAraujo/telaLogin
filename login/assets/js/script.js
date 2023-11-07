const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {

    const form = document.getElementById('login_form');
    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        form.classList.remove('dark');
})

const inputField = document.getElementById('email');

inputField.addEventListener('input', function() {
    const icon = this.previousElementSibling;
    if (this.value !== '') {
        icon.classList.add('active');
    } else {
        icon.classList.remove('active');
    }
});