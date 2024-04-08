document.addEventListener('DOMContentLoaded', function () {
    const global = [];
    const armazenarValores = document.querySelector('.forms-container');
    const campo = document.querySelector('.input');

    armazenarValores.addEventListener('submit', function (e) {
        e.preventDefault();
        global.push(campo.value);
        campo.value = ''
        console.log(global);
    });
});
