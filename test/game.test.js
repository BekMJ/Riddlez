import test from 'node:test';
import assert from 'node:assert/strict';
import { riddles, RIDDLE_COUNT } from '../riddles.js';
import { isCorrectAnswer, nextHighScore, normalizeAnswer, progressiveRiddleOrder, shuffledIndices } from '../game-engine.js';

test('the local database contains exactly 1,500 unique valid riddles', () => {
  assert.equal(riddles.length, RIDDLE_COUNT);
  assert.equal(new Set(riddles.map(({ id }) => id)).size, RIDDLE_COUNT);
  assert.equal(new Set(riddles.map(({ question }) => question)).size, RIDDLE_COUNT);
  for (const riddle of riddles) {
    assert.ok(riddle.question.trim());
    assert.ok(riddle.answers.length > 0);
    assert.ok(riddle.answers.every((answer) => String(answer).trim()));
  }
});

test('answer matching ignores case, punctuation, and extra whitespace', () => {
  assert.equal(normalizeAnswer('  The   Echo!  '), 'the echo');
  assert.equal(isCorrectAnswer('  FOUR, ', ['4', 'four']), true);
  assert.equal(isCorrectAnswer('five', ['4', 'four']), false);
  assert.equal(isCorrectAnswer('   ', ['4']), false);
});

test('shuffle includes every riddle exactly once', () => {
  const order = shuffledIndices(RIDDLE_COUNT, () => 0.42);
  assert.equal(order.length, RIDDLE_COUNT);
  assert.equal(new Set(order).size, RIDDLE_COUNT);
  assert.deepEqual([...order].sort((a, b) => a - b), Array.from({ length: RIDDLE_COUNT }, (_, i) => i));
});

test('progressive order gets harder without repeating riddles', () => {
  const order = progressiveRiddleOrder(riddles, () => 0.42);
  assert.equal(new Set(order).size, RIDDLE_COUNT);
  const levels = order.map((index) => riddles[index].difficulty);
  assert.ok(levels.every((level, index) => index === 0 || level >= levels[index - 1]));
  assert.equal(levels[0], 1);
  assert.equal(levels.at(-1), 10);
});

test('high score only increases', () => {
  assert.equal(nextHighScore(12, 8), 12);
  assert.equal(nextHighScore(12, 19), 19);
});
