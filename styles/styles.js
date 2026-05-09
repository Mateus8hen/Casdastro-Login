const loginSection = document.getElementById('login');
const cadastroSection = document.getElementById('cadastro');

function destacar(selecionado, outro) {
    selecionado.classList.remove('desfocado');
    selecionado.classList.add('foco');
    
    outro.classList.add('desfocado');
    outro.classList.remove('foco');
}


loginSection.addEventListener('click', () => {
    destacar(loginSection, cadastroSection);
});

cadastroSection.addEventListener('click', () => {
    destacar(cadastroSection, loginSection);
});

document.getElementById('entrarLogin').onclick = () => {
    alert('Tentando logar...');
};