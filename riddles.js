const firstNames = [
  'Ada', 'Bea', 'Cleo', 'Dara', 'Eli', 'Finn', 'Gia', 'Hugo', 'Iris', 'Jules',
  'Kai', 'Lena', 'Milo', 'Nora', 'Owen', 'Pia', 'Quinn', 'Remy', 'Sage', 'Theo',
  'Uma', 'Vera', 'Wren', 'Xena', 'Yara', 'Zane', 'Arlo', 'Bryn', 'Cora', 'Drew'
];

const surnames = [
  'Ash', 'Birch', 'Cloud', 'Dawn', 'Elm', 'Frost', 'Glen', 'Hart', 'Ivory', 'Jade',
  'Knoll', 'Lake', 'Moss', 'North', 'Oak', 'Pine', 'Quill', 'Reed', 'Stone', 'Thorn',
  'Vale', 'West', 'Young', 'Bloom', 'Crane', 'Field', 'Gray', 'Hope', 'Lane', 'Moon'
];

const places = ['the gallery', 'the garden', 'the library', 'the observatory', 'the workshop'];

const lateralRiddles = [
  ['What has many keys but opens no locks?', ['a piano', 'piano']],
  ['What becomes wetter the more it dries?', ['a towel', 'towel']],
  ['What has a face and two hands but no arms or legs?', ['a clock', 'clock']],
  ['What can travel around the world while staying in one corner?', ['a stamp', 'stamp']],
  ['What has a neck but no head?', ['a bottle', 'bottle']],
  ['What has one eye but cannot see?', ['a needle', 'needle']],
  ['What has words but never speaks?', ['a book', 'book']],
  ['What runs but never walks and has a bed but never sleeps?', ['a river', 'river']],
  ['What has branches but no fruit, trunk, or leaves?', ['a bank', 'bank']],
  ['What can fill a room but takes up no space?', ['light', 'a light']],
  ['What is full of holes but still holds water?', ['a sponge', 'sponge']],
  ['What can you catch but never throw?', ['a cold', 'cold']],
  ['What goes up but never comes down?', ['your age', 'age']],
  ['What has a thumb and four fingers but is not alive?', ['a glove', 'glove']],
  ['What kind of coat is best put on wet?', ['a coat of paint', 'paint']],
  ['What has a head and a tail but no body?', ['a coin', 'coin']],
  ['What building has the most stories?', ['a library', 'library']],
  ['What begins with an E, ends with an E, and contains one letter?', ['an envelope', 'envelope']],
  ['What belongs to you but other people use it more?', ['your name', 'name']],
  ['What can be broken without being touched?', ['a promise', 'promise']],
  ['What has teeth but cannot bite?', ['a comb', 'comb']],
  ['What gets larger the more you take away?', ['a hole', 'hole']],
  ['What can be heard and caught but never seen?', ['a sound', 'sound']],
  ['What has cities but no houses, forests but no trees, and water but no fish?', ['a map', 'map']],
  ['What comes down but never goes up?', ['rain', 'the rain']],
  ['What has an end but no beginning, a home but no family, and a space without a room?', ['a keyboard', 'keyboard']],
  ['What is always in front of you but cannot be seen?', ['the future', 'future']],
  ['What can speak without a mouth and answer without ears?', ['an echo', 'echo']],
  ['What has four wheels and flies?', ['a garbage truck', 'garbage truck']],
  ['What disappears as soon as you say its name?', ['silence', 'the silence']]
];

const oddOneOut = [
  [['oak', 'pine', 'cedar', 'rose'], 'rose'],
  [['violin', 'cello', 'harp', 'trumpet'], 'trumpet'],
  [['ruby', 'emerald', 'sapphire', 'copper'], 'copper'],
  [['whisper', 'shout', 'sing', 'listen'], 'listen'],
  [['north', 'east', 'west', 'upstream'], 'upstream'],
  [['sparrow', 'robin', 'eagle', 'bat'], 'bat'],
  [['circle', 'triangle', 'square', 'spiral'], 'spiral'],
  [['silk', 'wool', 'cotton', 'paper'], 'paper'],
  [['dawn', 'noon', 'dusk', 'winter'], 'winter'],
  [['hammer', 'saw', 'chisel', 'ladder'], 'ladder'],
  [['mercury', 'venus', 'mars', 'moon'], 'moon'],
  [['novel', 'poem', 'essay', 'palette'], 'palette']
];

const analogies = [
  ['Bird is to nest as bee is to what?', ['hive', 'a hive']],
  ['Page is to book as leaf is to what?', ['tree', 'a tree']],
  ['Puppy is to dog as kitten is to what?', ['cat', 'a cat']],
  ['Artist is to brush as writer is to what?', ['pen', 'a pen', 'pencil', 'a pencil']],
  ['Glove is to hand as shoe is to what?', ['foot', 'a foot']],
  ['Roof is to house as lid is to what?', ['container', 'a container', 'box', 'a box']],
  ['Fish is to school as wolf is to what?', ['pack', 'a pack']],
  ['Key is to lock as password is to what?', ['account', 'an account', 'access']],
  ['Compass is to direction as clock is to what?', ['time']],
  ['Thermometer is to temperature as ruler is to what?', ['length', 'distance']],
  ['Author is to novel as composer is to what?', ['music', 'a song', 'song']],
  ['Seed is to plant as idea is to what?', ['invention', 'a creation', 'creation']]
];

const mysteries = [
  ['A woman walks through heavy rain without an umbrella or hat, yet not one hair gets wet. Why?', ['she is bald', 'bald']],
  ['A man shaves many times each day but still has a beard. Who is he?', ['a barber', 'barber']],
  ['A driver goes the wrong way down a one-way street, passes police, and is not stopped. Why?', ['he is walking', 'walking', 'the driver is walking']],
  ['Two people play five games of chess. Each wins the same number, with no draws. How?', ['they played different opponents', 'different opponents']],
  ['A woman opens a door, screams, and then calmly closes it. She is not in danger. Where is she?', ['on a movie set', 'a movie set', 'theater', 'a theater']],
  ['A man pushes his car to a hotel and immediately knows he is ruined. What is happening?', ['he is playing monopoly', 'monopoly', 'playing monopoly']],
  ['A person is found in a locked room beside a puddle of water. No one else entered. What melted?', ['an ice cube', 'ice', 'ice cube']],
  ['A woman looks at a photograph and says she has no siblings, but the person’s father is her father’s son. Who is pictured?', ['her son', 'son']],
  ['A boat is full of people, yet there is not a single person aboard. Why?', ['everyone is married', 'they are all married', 'all are married']],
  ['A person falls from a tall ladder and is unharmed. Why?', ['they fell from the bottom rung', 'bottom rung', 'the lowest rung']],
  ['A house has every wall facing south. A bear walks past. What color is it?', ['white', 'a white bear', 'white bear']],
  ['A woman turns off a light before sleeping and hundreds of people are affected. What was her job?', ['lighthouse keeper', 'a lighthouse keeper']]
];

const person = (value) => `${firstNames[value % firstNames.length]} ${surnames[Math.floor(value / firstNames.length) % surnames.length]}`;

function rotate(values, amount) {
  const offset = amount % values.length;
  return [...values.slice(offset), ...values.slice(0, offset)];
}

function orderingRiddle(difficulty, seed) {
  const size = Math.min(3 + Math.floor((difficulty - 1) / 2), 7);
  const people = Array.from({ length: size }, (_, index) => person(seed * 11 + difficulty * 37 + index * 7));
  const order = rotate(people, seed + difficulty);
  if (seed % 2 === 0) order.reverse();
  const clues = order.slice(0, -1).map((name, index) => `${name} arrived before ${order[index + 1]}.`);
  const askFirst = seed % 2 === 1;
  return {
    id: `order-${difficulty}-${seed}`,
    difficulty,
    question: `${clues.join(' ')} Who arrived ${askFirst ? 'first' : 'last'}?`,
    answers: [askFirst ? order[0] : order.at(-1)]
  };
}

function truthRiddle(difficulty, seed) {
  const speaker = person(seed * 13 + difficulty * 41);
  const other = person(seed * 17 + difficulty * 43 + 5);
  const object = ['the brass key', 'the blue map', 'the sealed letter', 'the silver compass'][seed % 4];
  const speakerTruthful = seed % 2 === 0;
  const statement = speakerTruthful
    ? `${speaker} says, “${other} does not have ${object}.”`
    : `${speaker} says, “${other} has ${object}.”`;
  return {
    id: `truth-${difficulty}-${seed}`,
    difficulty,
    question: `${speaker} always tells the ${speakerTruthful ? 'truth' : 'truth, while every statement below has been deliberately reversed by a scribe. The original claim reads'}: ${statement} Does ${other} have ${object}?`,
    answers: ['no', 'nope', 'they do not', `${other} does not`]
  };
}

function syllogismRiddle(difficulty, seed) {
  const subjects = ['ravens', 'lanterns', 'cedars', 'mirrors', 'whistles', 'badgers', 'violets', 'sailors'];
  const middle = ['quiet things', 'weathered things', 'hidden things', 'patient things', 'silver things'];
  const quality = ['are treasured', 'are remembered', 'are protected', 'are mysterious', 'are watched'];
  const subject = subjects[(seed + difficulty) % subjects.length];
  const group = middle[(seed * 2 + difficulty) % middle.length];
  const result = quality[(seed * 3 + difficulty) % quality.length];
  return {
    id: `syllogism-${difficulty}-${seed}`,
    difficulty,
    question: `Every ${subject} belongs among ${group}. Everything among ${group} ${result}. Must every ${subject.slice(0, -1)} ${result.replace('are ', 'be ')}?`,
    answers: ['yes', 'it must', 'yes it must']
  };
}

function exclusionRiddle(difficulty, seed) {
  const names = Array.from({ length: Math.min(3 + Math.floor(difficulty / 3), 6) }, (_, index) => person(seed * 19 + difficulty * 23 + index * 9));
  const location = places[(seed + difficulty) % places.length];
  const answer = names[(seed + difficulty) % names.length];
  const ruledOut = names.filter((name) => name !== answer);
  return {
    id: `exclude-${difficulty}-${seed}`,
    difficulty,
    question: `${names.join(', ')} were the only people who could have visited ${location}. ${ruledOut.map((name) => `${name} did not visit`).join('. ')}. Who visited?`,
    answers: [answer]
  };
}

function lateralRiddle(difficulty, seed) {
  const [question, answers] = lateralRiddles[(seed * 3 + difficulty) % lateralRiddles.length];
  const asker = person(seed * 29 + difficulty * 31);
  return {
    id: `lateral-${difficulty}-${seed}`,
    difficulty,
    question: `${asker} left this riddle on a note: “${question}”`,
    answers
  };
}

function oddOneOutRiddle(difficulty, seed) {
  const [items, answer] = oddOneOut[(seed * 5 + difficulty) % oddOneOut.length];
  const shifted = rotate(items, seed + difficulty);
  const asker = person(seed * 31 + difficulty * 47);
  return {
    id: `odd-${difficulty}-${seed}`,
    difficulty,
    question: `${asker} asks: one does not belong with the others—${shifted.join(', ')}. Which one is the odd one out?`,
    answers: [answer]
  };
}

function analogyRiddle(difficulty, seed) {
  const [question, answers] = analogies[(seed * 7 + difficulty) % analogies.length];
  return {
    id: `analogy-${difficulty}-${seed}`,
    difficulty,
    question,
    answers
  };
}

function mysteryRiddle(difficulty, seed) {
  const [question, answers] = mysteries[(seed * 11 + difficulty) % mysteries.length];
  const setting = places[(seed * 3 + difficulty) % places.length];
  return {
    id: `mystery-${difficulty}-${seed}`,
    difficulty,
    question: `A mystery from ${setting}: ${question}`,
    answers
  };
}

function createRiddle(index) {
  const difficulty = Math.floor(index / 150) + 1;
  const seed = (index % 150) + 1;
  const family = (seed + difficulty) % 8;
  if (family === 0) return orderingRiddle(difficulty, seed);
  if (family === 1) return exclusionRiddle(difficulty, seed);
  if (family === 2) return syllogismRiddle(difficulty, seed);
  if (family === 3) return truthRiddle(difficulty, seed);
  if (family === 4) return lateralRiddle(difficulty, seed);
  if (family === 5) return oddOneOutRiddle(difficulty, seed);
  if (family === 6) return analogyRiddle(difficulty, seed);
  return mysteryRiddle(difficulty, seed);
}

export const RIDDLE_COUNT = 1500;
export const riddles = Object.freeze(
  Array.from({ length: RIDDLE_COUNT }, (_, index) => Object.freeze(createRiddle(index)))
);
