const form = document.getElementById("form-cadastro");
const nome = document.getElementById("nome");
const infracoes = document.getElementById('infra');

function nameValidate(nome) {
    const arrayName = nome.split(' ');
    return arrayName.length >= 2;
}

function verificaInfracoes(infracoes) {
    if (infracoes <= 2) {
        return 'Valido';
    } else {
        return 'Inválido';
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const placaVeiculo = document.getElementById('placa');
    const classeVeiculo = document.getElementById('escolha');
    const infracaoStatus = verificaInfracoes(infracoes.value);
    const msgSucesso = `Veiculo da classe <b>${classeVeiculo.value}</b>, placa: <b>${placaVeiculo.value}</b>, registrado em nome de: <b>${nome.value}</b>. Infrações: <b>${infracaoStatus}</b>`;

    const formValido = nameValidate(nome.value);
    if (formValido) {
        document.querySelector('.msg-sucsses').innerHTML = msgSucesso;
        document.querySelector('.msg-sucsses').style.display = 'block';
        document.querySelector('.error-msg').style.display = 'none';

        placaVeiculo.value = '';
        classeVeiculo.value = '';
        infracoes.value = '';
        nome.value = '';
    } else {
        document.querySelector('.error-msg').style.display = 'block';
        nome.style.border = '1px solid red';
    }
});

nome.addEventListener('keyup', function (e) {
    const formValido = nameValidate(e.target.value);
    if (!formValido) {
        nome.classList.add('error');
        document.querySelector('.error-msg').style.display = 'block';
    } else {
        nome.classList.remove('error');
        document.querySelector('.error-msg').style.display = 'none';
    }
});
