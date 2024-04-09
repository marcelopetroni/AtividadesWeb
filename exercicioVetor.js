document.addEventListener('DOMContentLoaded', function () {
    const global = [];
    const armazenarValores = document.querySelector('.forms-container');
    const campo = document.querySelector('.input');
    const exibicao = document.querySelector('.output');

    armazenarValores.addEventListener('submit', function (e) {
        e.preventDefault();
        global.push(campo.value);
        campo.value = ''
        console.log(global);
        exibir()
    });

    const exibir = () => {
        for (let index = 0; index < exibicao.length; index++) {
            exibicao.innerText = global[i];
        }
    }
});
