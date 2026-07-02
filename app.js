import { riddles, RIDDLE_COUNT } from './riddles.js';
import { isCorrectAnswer, nextHighScore, progressiveRiddleOrder } from './game-engine.js';

const HIGH_SCORE_KEY = 'riddles-high-score';
const TRANSITION_MS = 180;

const elements = {
  game: document.querySelector('#game'),
  counter: document.querySelector('#counter'),
  highScore: document.querySelector('#high-score'),
  stage: document.querySelector('#riddle-stage'),
  riddle: document.querySelector('#riddle'),
  form: document.querySelector('#answer-form'),
  input: document.querySelector('#answer'),
  submit: document.querySelector('#submit'),
  status: document.querySelector('#status'),
  victory: document.querySelector('#victory'),
  victoryWords: document.querySelector('#victory-words')
};

let highScore = readHighScore();
let order = [];
let solved = 0;
let transitioning = false;

function readHighScore() {
  try {
    const value = Number.parseInt(localStorage.getItem(HIGH_SCORE_KEY) ?? '0', 10);
    return Number.isFinite(value) && value >= 0 ? Math.min(value, RIDDLE_COUNT) : 0;
  } catch {
    return 0;
  }
}

function saveHighScore() {
  try { localStorage.setItem(HIGH_SCORE_KEY, String(highScore)); } catch { /* Storage may be unavailable. */ }
}

function currentRiddle() { return riddles[order[solved]]; }

function updateScoreboard() {
  elements.counter.textContent = `Riddle Count: ${solved + 1}`;
  elements.highScore.textContent = String(highScore);
}

function renderRiddle() {
  elements.riddle.textContent = currentRiddle().question;
  elements.input.value = '';
  updateScoreboard();
}

function startRun() {
  order = progressiveRiddleOrder(riddles);
  solved = 0;
  renderRiddle();
}

function setTransitioning(value) {
  transitioning = value;
  elements.input.disabled = value;
  elements.submit.disabled = value;
  elements.stage.classList.toggle('is-changing', value);
}

function transitionToNext(message) {
  setTransitioning(true);
  elements.status.textContent = message;
  window.setTimeout(() => {
    renderRiddle();
    setTransitioning(false);
    elements.input.focus({ preventScroll: true });
  }, TRANSITION_MS);
}

function showVictory() {
  highScore = RIDDLE_COUNT;
  saveHighScore();
  elements.game.hidden = true;
  elements.victoryWords.replaceChildren(
    ...Array.from({ length: 24 }, () => {
      const word = document.createElement('span');
      word.className = 'victory__word';
      word.textContent = 'YOU WIN!';
      return word;
    })
  );
  elements.victory.hidden = false;
  elements.status.textContent = 'You win! You answered all 1,500 riddles correctly.';
}

function handleCorrectAnswer() {
  solved += 1;
  if (solved === RIDDLE_COUNT) {
    showVictory();
    return;
  }
  transitionToNext(`Correct. Riddle ${solved + 1}.`);
}

function handleIncorrectAnswer() {
  highScore = nextHighScore(highScore, solved);
  saveHighScore();
  order = progressiveRiddleOrder(riddles);
  solved = 0;
  transitionToNext('Incorrect. A new run has started at riddle 1.');
}

elements.form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (transitioning) return;
  const answer = elements.input.value;
  if (!answer.trim()) {
    elements.status.textContent = 'Enter an answer before submitting.';
    elements.input.focus();
    return;
  }
  if (isCorrectAnswer(answer, currentRiddle().answers)) handleCorrectAnswer();
  else handleIncorrectAnswer();
});

elements.highScore.textContent = String(highScore);
startRun();
