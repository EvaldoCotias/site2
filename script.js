const perguntas = [
  {
    pergunta: "Qual técnica indígena de plantio ajuda a preservar o solo?",
    opcoes: ["Agricultura de corte e queima", "Monocultura", "Hidroponia", "Rodeio"],
    correta: "Agricultura de corte e queima"
  },
  {
    pergunta: "Qual era um alimento sagrado para muitos povos indígenas?",
    opcoes: ["Trigo", "Milho", "Arroz", "Batata inglesa"],
    correta: "Milho"
  },
  {
    pergunta: "Qual prato típico da cultura africana é feito com feijão-fradinho?",
    opcoes: ["Moqueca", "Acarajé", "Farofa", "Feijoada"],
    correta: "Acarajé"
  },
  {
    pergunta: "O que representa a pintura corporal indígena?",
    opcoes: ["Vaidade", "Clima", "Espiritualidade e identidade", "Moda"],
    correta: "Espiritualidade e identidade"
  },
  {
    pergunta: "Quem fundou os quilombos no Brasil?",
    opcoes: ["Portugueses", "Africanos escravizados", "Europeus", "Italianos"],
    correta: "Africanos escravizados"
  },
  {
    pergunta: "Qual dança de origem africana também é uma luta?",
    opcoes: ["Samba", "Capoeira", "Forró", "Carimbó"],
    correta: "Capoeira"
  },
  {
    pergunta: "Qual planta é usada em rituais espirituais indígenas?",
    opcoes: ["Alecrim", "Ayahuasca", "Cana-de-açúcar", "Eucalipto"],
    correta: "Ayahuasca"
  },
  {
    pergunta: "Qual desses alimentos tem origem africana?",
    opcoes: ["Tapioca", "Feijoada", "Macaxeira", "Pamonha"],
    correta: "Feijoada"
  },
  {
    pergunta: "O que são os quilombos?",
    opcoes: ["Sítios indígenas", "Comunidades livres formadas por escravizados fugidos", "Tribos urbanas", "Religiões antigas"],
    correta: "Comunidades livres formadas por escravizados fugidos"
  },
  {
    pergunta: "Qual dos itens era comum em cerimônias dos povos ancestrais?",
    opcoes: ["Tambor", "Violão", "Gaita", "Piano"],
    correta: "Tambor"
  }
];

const fundos = [
  "images/fundo1.jpg",
  "images/fundo2.jpg",
  "images/fundo3.jpg",
  "images/fundo4.jpg"
];

let indice = 0;
let pontuacao = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

function mudarFundo() {
  const imagemAleatoria = fundos[Math.floor(Math.random() * fundos.length)];
  document.body.style.backgroundImage = `url(${imagemAleatoria})`;
}

function mostrarPergunta() {
  mudarFundo();
  const atual = perguntas[indice];
  questionContainer.textContent = atual.pergunta;
  optionsContainer.innerHTML = "";

  atual.opcoes.forEach(opcao => {
    const btn = document.createElement("div");
    btn.textContent = opcao;
    btn.classList.add("option");
    btn.addEventListener("click", () => verificarResposta(btn, atual.correta));
    optionsContainer.appendChild(btn);
  });

  nextBtn.classList.add("hidden");
}

function verificarResposta(botaoSelecionado, respostaCorreta) {
  const opcoes = document.querySelectorAll(".option");
  opcoes.forEach(opcao => {
    opcao.classList.add(opcao.textContent === respostaCorreta ? "correct" : "wrong");
    opcao.style.pointerEvents = "none";
  });

  if (botaoSelecionado.textContent === respostaCorreta) {
    pontuacao += 1;
    scoreDisplay.textContent = `Pontuação: ${pontuacao}`;
  }

  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  indice++;
  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    questionContainer.textContent = "🏁 Fim do jogo!";
    optionsContainer.innerHTML = `<p>Sua pontuação final foi: <strong>${pontuacao}</strong></p>`;
    nextBtn.classList.add("hidden");
  }
});

mostrarPergunta();
