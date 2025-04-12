const questions = {
  yes: [
    "What's your favorite memory of us?",
    "When did you realize you loved me?",
    "What would our dream day together look like?",
    "Will you keep loving me forever?"
  ],
  no: [
    "Oh no! Why not? 😢",
    "Is this a joke? Be honest.",
    "Do you secretly love me anyway?",
    "Should I write a sad song now?"
  ]
};

let path = '';
let index = 0;

function handleAnswer(answer) {
  if (!path) {
    path = answer;
    index = 0;
    showNextQuestion();
  } else {
    index++;
    if (index < questions[path].length) {
      document.getElementById('question-text').textContent = questions[path][index];
    } else {
      showFinalScreen();
    }
  }
}

function showNextQuestion() {
  document.getElementById('question-text').textContent = questions[path][index];
}

function showFinalScreen() {
  document.getElementById('question-box').classList.add('hidden');
  document.getElementById('final-screen').classList.remove('hidden');
}
