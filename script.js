import { PALAVRAS_RUINS } from './palavrasRuins.js';

const botao = document.querySelector('#botao-palavrachave');
const resultado = document.querySelector('#resultado-palavrachave');

botao.addEventListener('click', () => {
  const texto = document.querySelector('#entrada-de-texto').value;

  const palavras = texto
    .toLowerCase()
    .split(/[^a-zA-ZÀ-ÿ]+/)
    .filter(p => p.length > 2 && !PALAVRAS_RUINS.has(p));

  const unicas = [...new Set(palavras)];

  resultado.textContent = unicas.length > 0
    ? `🔹 Palavras boas encontradas:\n${unicas.join(', ')}`
    : "⚠️ Nenhuma palavra válida encontrada.";

  resultado.classList.add('show');
});

