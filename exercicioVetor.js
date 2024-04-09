document.addEventListener('DOMContentLoaded', function () {
    const global = [];
    const armazenarValores = document.querySelector('.forms-container');
    const campo = document.querySelector('.input');
    const exibicao = document.querySelector('.output-container');

    armazenarValores.addEventListener('submit', function (e) {
        e.preventDefault();
        global.push(campo.value);
        campo.value = ''
        console.log(global);
        exibir()
    });

    const exibir = () => {
        exibicao.innerHTML = '';
        
        for (let i = 0; i < global.length; i++) {

            const values = document.createElement('div');
            values.innerText = global[i];
            exibicao.appendChild(values);
        }
    }
});
