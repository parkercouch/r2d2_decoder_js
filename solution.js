// This is the decoder table. No need to change it!
let decoderTable = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J',
  11: 'K',
  12: 'L',
  13: 'M',
  14: 'N',
  15: 'O',
  16: 'P',
  17: 'Q',
  18: 'R',
  19: 'S',
  20: 'T',
  21: 'U',
  22: 'V',
  23: 'W',
  24: 'X',
  25: 'Y',
  26: 'Z',
  'BOP': ' '
};

// These are the inputs that you have
const input1 = [[2, 6], [0, 5], [9, 3], [4, 8], [10, 5], 'BOP', [11, 12], [5, 10], [1, 17], [5, 7], [4, 0]];
const input2 = [[1, 8], 'BOP', [5, 7], [13, 2], [9, 13], [1, 4], 'BOP', [2, 1], [0, 1], [10, 10], [10, 9]];
const input3 = [[9, 16], [13, 2], [13, 8], 'BOP', [2, 1], [0, 1], [10, 4], 'BOP', [2, 2], [4, 11], 'BOP', [4, 9], [8, 7], [7, 11], [3, 2], 'BOP', [11, 9], [3, 5], [0, 1], [7, 7], 'BOP', [13, 12], [13, 2], [8, 13], 'BOP', [5, 6], [12, 2], [9, 6], [20, 3]];
const input4 = [[1, 0], 'BOP', [2, 1], [3, 5], [0, 1], [4, 9], [6, 10], [3, 6], [4, 11], [8, 6], 'BOP', [2, 7], [12, 7], 'BOP', [3, 1], [5, 0], [1, 5], [4, 5], [12, 2], [2, 3], [1, 3], 'BOP', [9, 5], [12, 3], [14, 6], 'BOP', [1, 1], [22, 3], 'BOP', [8, 12], [4, 4], [4, 1], [8, 1], [11, 7], 'BOP', [12, 11], [3, 6], [8, 6], [12, 7], 'BOP', [0, 2], [10, 11], [11, 9], 'BOP', [2, 0], [25, 0], 'BOP', [3, 5], [10, 5], [10, 13], 'BOP', [11, 9], [3, 5], [4, 1], [17, 8], 'BOP', [2, 1], [1, 0], [5, 9], 'BOP', [16, 2], [1, 4], [3, 0], [7, 8], [9, 13], [2, 3], [9, 9], 'BOP', [12, 11], [4, 4], [5, 0], [8, 6], 'BOP', [11, 9], [3, 5], [4, 1], [17, 8], 'BOP', [0, 6], [1, 0], [9, 3], [0, 12]];

const inputs = [input1, input2, input3, input4];

const combineBeepsBoops = function (input) {
  if (Array.isArray(input)) {
    return input.reduce((a, b) => a + b);
  }
  if (input === 'BOP') {
    return 'BOP';
  }
  return 0;
};

const decode = function (key) {
  return (function extractKey(i) { return (i in key) ? key[i] : 0; });
};

const decodeMessage = function (input, key) {
  return input
        .map(combineBeepsBoops)
        .map(decode(key))
        .join('');
};

inputs.forEach(i => console.log(decodeMessage(i, decoderTable)));
