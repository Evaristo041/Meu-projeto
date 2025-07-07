import { PALAVRAS_RUINS } from './palavrasRuins.js';

const botao = document.querySelector('#botao-palavrachave');
const resultado = document.querySelector('#resultado-palavrachave');

botao.addEventListener('click', () => {
  const texto = document.querySelector('#entrada-de-texto').value;
  const palavras = texto
    .toLowerCase()
    .split(/[^a-zA-ZÀ-ÿ]+/)
    .filter(p => p.length > 2 && !PALAVRAS_RUINS.has(p));

  const frequencias = {};
  for (const palavra of palavras) {
    frequencias[palavra] = (frequencias[palavra] || 0) + 1;
  }

 
  const top10 = Object.entries(frequencias)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([palavra]) => palavra);

  resultado.textContent = `🔹 Top 10 Palavras:\n${top10.join(', ')}`;
  resultado.classList.add('show');
});


