const form = document.querySelector('.form1');
const message = document.querySelector('.message');
const usernamePattern = /^[a-z]{6,10}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;


    if (usernamePattern.test(username)) {
        message.textContent = 'Başarılı';
    } else {
        message.textContent = 'Başarısız';
    }
});

form.username.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'succes');
    }
    else { form.username.setAttribute('class', 'error'); }

})