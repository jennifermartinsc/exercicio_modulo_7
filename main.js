const form = document.getElementById('form-comparativo');

function validarValor(campoA, campoB){
    return campoB > campoA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = parseFloat(document.getElementById('campo-a').value);
const campoB = parseFloat(document.getElementById('campo-b').value);

    formEValido = validarValor(campoA, campoB);
    const mensagemSucesso = "Tudo certo, inserção válida!"
    const mensagemErro = "Formulário inválido!"

    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.style.display = 'block';
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemSucesso.style.display = 'none';

        document.getElementById('campo-a').value = '';
        document.getElementById('campo-b').value = '';
    }
});