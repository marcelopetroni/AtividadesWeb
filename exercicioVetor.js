document.addEventListener('DOMContentLoaded', function () {
    const global = [];
    const historicoCores = []
    const armazenarValores = document.querySelector('.forms-container');
    const campo = document.querySelector('.input');
    const exibicao = document.querySelector('.output-container');
    const color = document.querySelector('.color-picker');

    armazenarValores.addEventListener('submit', function (e) {
        e.preventDefault();
        global.push(campo.value);
        historicoCores.push(color.value)
        campo.value = ''
        exibir()
    });

    const exibir = () => {
        exibicao.innerHTML = '';
        
        for (i = 0; i < global.length; i++) {

            const values = document.createElement('div');
            const numeracao = document.createElement('span')
            const texto = document.createTextNode(global[i])

            numeracao.innerText = (i + 1)
            numeracao.style.backgroundColor = historicoCores[i]

            values.appendChild(numeracao)
            values.appendChild(texto)

            exibicao.appendChild(values);
        }
    }
    
});
