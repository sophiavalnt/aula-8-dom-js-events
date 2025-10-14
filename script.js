const nomeInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const mensagemInput = document.querySelector('#mensagem');
const botao = document.querySelector('.btn-enviar');


botao.addEventListener('click', (e)=>{
    e.preventDefault();
    let mensagemPronta = new mensagem (nomeInput.value, emailInput.value, mensagemInput.value); 
    mensagem.enviar(mensagemPronta);
});
