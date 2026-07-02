export function normalizeAnswer(value) {
  return String(value)
    .toLocaleLowerCase('en-US')
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, ' ');
}

export function isCorrectAnswer(input, acceptedAnswers) {
  const normalized = normalizeAnswer(input);
  return normalized.length > 0 && acceptedAnswers.some((answer) => normalizeAnswer(answer) === normalized);
}

export function shuffledIndices(length, random = Math.random) {
  const values = Array.from({ length }, (_, index) => index);
  for (let index = values.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [values[index], values[swapIndex]] = [values[swapIndex], values[index]];
  }
  return values;
}

export function progressiveRiddleOrder(riddles, random = Math.random) {
  const difficulties = [...new Set(riddles.map(({ difficulty }) => difficulty))].sort((a, b) => a - b);
  return difficulties.flatMap((difficulty) => {
    const bucket = riddles
      .map((riddle, index) => ({ riddle, index }))
      .filter(({ riddle }) => riddle.difficulty === difficulty)
      .map(({ index }) => index);
    for (let index = bucket.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(random() * (index + 1));
      [bucket[index], bucket[swapIndex]] = [bucket[swapIndex], bucket[index]];
    }
    return bucket;
  });
}

export function nextHighScore(currentHighScore, completedStreak) {
  return Math.max(currentHighScore, completedStreak);
}
