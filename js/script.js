// Lista de IDs dos personagens
const lista = ['cartaoyuji', 'cartaonobara', 'cartaomegumi', 'cartaopanda', 'cartaoinumaki', 'cartaomaki'];
let i = 0; // Índice inicial

function mudarpersonagem() {
  // Obtém o elemento atual e o próximo elemento
  let atual = document.getElementById(lista[i]);
  
  // Remove a classe 'selecionado' do elemento atual
  atual.classList.remove('selecionado');
  
  // Atualiza o índice
  i = (i + 1) % lista.length; // Vai para o próximo índice, retornando ao início se necessário
  
  // Obtém o próximo elemento
  let prox = document.getElementById(lista[i]);
  
  // Adiciona a classe 'selecionado' ao próximo elemento
  prox.classList.add('selecionado');
}

function voltarpersonagem() {
  // Obtém o elemento atual e o anterior elemento
  let atual = document.getElementById(lista[i]);
  
  // Remove a classe 'selecionado' do elemento atual
  atual.classList.remove('selecionado');
  
  // Atualiza o índice
  i = (i - 1 + lista.length) % lista.length; // Vai para o índice anterior, retornando ao final se necessário
  
  // Obtém o anterior elemento
  let prox = document.getElementById(lista[i]);
  
  // Adiciona a classe 'selecionado' ao elemento anterior
  prox.classList.add('selecionado');
}
