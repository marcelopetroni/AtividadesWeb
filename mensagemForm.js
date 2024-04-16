document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector(".input")
    const armazenarValores = document.querySelector('.form-container')
    const nome = document.querySelector('.nome')
    const email = document.querySelector('.email')
    const mensagem = document.querySelector('.mensagem')

    armazenarValores.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(nome.value);
        console.log(email.value);
        console.log(mensagem.value);
    
        form.value = ''
        exibir()
    });

});
