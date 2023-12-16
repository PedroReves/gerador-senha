const gerarSenhaBtn = document.querySelector('.container__button-generate');
const copiarSenhaBtn = document.querySelector('.container__button-copy');
const senhaInput = document.querySelector('#senhaInput');

gerarSenhaBtn.addEventListener('click', gerarSenha);
copiarSenhaBtn.addEventListener('click', copiarSenha);

function gerarSenha() {
  const input = document.querySelector('.container__input');
  let password = '';
  const length = 16;
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*'

  for(let i = 0; i < length; i++) {
    const numeroAleatorio = Math.floor(Math.random() * chars.length + 1)
    password += chars[numeroAleatorio];
  }
  input.value = password
}

function copiarSenha() {
  senhaInput.select();
  document.execCommand("copy");
  senhaInput.blur();
}
