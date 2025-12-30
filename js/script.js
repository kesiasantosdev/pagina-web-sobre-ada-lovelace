document.getElementById('botao-enviar').onclick = function validaFormulario() {


if(document.getElementById('nome-da-usuaria').value != '' && document.getElementById('email-da-usuaria').value && document.getElementById('telefone-da-usuaria').value != '') {
    alert('Prontinho! você receberá as novidades por email.');
} else {
    alert('Por favor, preencha os campos nome, email e telefone!');
}
}