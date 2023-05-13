const botaoAlterarTema = document.getElementById('botao-alterar-tema');
const corpo = document.body;
const cartoesPokemon = document.querySelectorAll('.cartao-pokemon');

botaoAlterarTema.addEventListener('click', () => {
    corpo.classList.toggle('modo-escuro');
    cartoesPokemon.forEach(cartao => cartao.classList.toggle('modo-escuro'));
});
