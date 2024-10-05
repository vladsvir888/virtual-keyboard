const KEYS = [
  {
    rus: {
      caseDown: 'ё',
      caseUp: 'Ё',
      caseCaps: 'Ё',
      caseShiftCaps: 'ё',
    },
    eng: {
      caseDown: '`',
      caseUp: '~',
      caseCaps: '`',
      caseShiftCaps: '~',
    },
    data: {
      code: 'Backquote',
    },
  },
  {
    rus: {
      caseDown: '1',
      caseUp: '!',
      caseCaps: '1',
      caseShiftCaps: '!',
    },
    eng: {
      caseDown: '1',
      caseUp: '!',
      caseCaps: '1',
      caseShiftCaps: '!',
    },
    data: {
      code: 'Digit1',
    },
  },
  {
    rus: {
      caseDown: '2',
      caseUp: '"',
      caseCaps: '2',
      caseShiftCaps: '"',
    },
    eng: {
      caseDown: '2',
      caseUp: '@',
      caseCaps: '2',
      caseShiftCaps: '@',
    },
    data: {
      code: 'Digit2',
    },
  },
  {
    rus: {
      caseDown: '3',
      caseUp: '№',
      caseCaps: '3',
      caseShiftCaps: '№',
    },
    eng: {
      caseDown: '3',
      caseUp: '#',
      caseCaps: '3',
      caseShiftCaps: '#',
    },
    data: {
      code: 'Digit3',
    },
  },
  {
    rus: {
      caseDown: '4',
      caseUp: ';',
      caseCaps: '4',
      caseShiftCaps: ';',
    },
    eng: {
      caseDown: '4',
      caseUp: '$',
      caseCaps: '4',
      caseShiftCaps: '$',
    },
    data: {
      code: 'Digit4',
    },
  },
  {
    rus: {
      caseDown: '5',
      caseUp: '%',
      caseCaps: '5',
      caseShiftCaps: '%',
    },
    eng: {
      caseDown: '5',
      caseUp: '%',
      caseCaps: '5',
      caseShiftCaps: '%',
    },
    data: {
      code: 'Digit5',
    },
  },
  {
    rus: {
      caseDown: '6',
      caseUp: ':',
      caseCaps: '6',
      caseShiftCaps: ':',
    },
    eng: {
      caseDown: '6',
      caseUp: '^',
      caseCaps: '6',
      caseShiftCaps: '^',
    },
    data: {
      code: 'Digit6',
    },
  },
  {
    rus: {
      caseDown: '7',
      caseUp: '?',
      caseCaps: '7',
      caseShiftCaps: '?',
    },
    eng: {
      caseDown: '7',
      caseUp: '&',
      caseCaps: '7',
      caseShiftCaps: '&',
    },
    data: {
      code: 'Digit7',
    },
  },
  {
    rus: {
      caseDown: '8',
      caseUp: '*',
      caseCaps: '8',
      caseShiftCaps: '*',
    },
    eng: {
      caseDown: '8',
      caseUp: '*',
      caseCaps: '8',
      caseShiftCaps: '*',
    },
    data: {
      code: 'Digit8',
    },
  },
  {
    rus: {
      caseDown: '9',
      caseUp: '(',
      caseCaps: '9',
      caseShiftCaps: '(',
    },
    eng: {
      caseDown: '9',
      caseUp: '(',
      caseCaps: '9',
      caseShiftCaps: '(',
    },
    data: {
      code: 'Digit9',
    },
  },
  {
    rus: {
      caseDown: '0',
      caseUp: ')',
      caseCaps: '0',
      caseShiftCaps: ')',
    },
    eng: {
      caseDown: '0',
      caseUp: ')',
      caseCaps: '0',
      caseShiftCaps: ')',
    },
    data: {
      code: 'Digit0',
    },
  },
  {
    rus: {
      caseDown: '-',
      caseUp: '_',
      caseCaps: '-',
      caseShiftCaps: '_',
    },
    eng: {
      caseDown: '-',
      caseUp: '_',
      caseCaps: '-',
      caseShiftCaps: '_',
    },
    data: {
      code: 'Minus',
    },
  },
  {
    rus: {
      caseDown: '=',
      caseUp: '+',
      caseCaps: '=',
      caseShiftCaps: '+',
    },
    eng: {
      caseDown: '=',
      caseUp: '+',
      caseCaps: '=',
      caseShiftCaps: '+',
    },
    data: {
      code: 'Equal',
    },
  },
  {
    className: 'col-2',
    rus: {
      caseDown: 'Backspace',
      caseUp: 'Backspace',
      caseCaps: 'Backspace',
      caseShiftCaps: 'Backspace',
    },
    eng: {
      caseDown: 'Backspace',
      caseUp: 'Backspace',
      caseCaps: 'Backspace',
      caseShiftCaps: 'Backspace',
    },
    data: {
      code: 'Backspace',
    },
  },

  {
    rus: {
      caseDown: 'Tab',
      caseUp: 'Tab',
      caseCaps: 'Tab',
      caseShiftCaps: 'Tab',
    },
    eng: {
      caseDown: 'Tab',
      caseUp: 'Tab',
      caseCaps: 'Tab',
      caseShiftCaps: 'Tab',
    },
    data: {
      code: 'Tab',
    },
  },
  {
    rus: {
      caseDown: 'й',
      caseUp: 'Й',
      caseCaps: 'Й',
      caseShiftCaps: 'й',
    },
    eng: {
      caseDown: 'q',
      caseUp: 'Q',
      caseCaps: 'Q',
      caseShiftCaps: 'q',
    },
    data: {
      code: 'KeyQ',
    },
  },
  {
    rus: {
      caseDown: 'ц',
      caseUp: 'Ц',
      caseCaps: 'Ц',
      caseShiftCaps: 'ц',
    },
    eng: {
      caseDown: 'w',
      caseUp: 'W',
      caseCaps: 'W',
      caseShiftCaps: 'w',
    },
    data: {
      code: 'KeyW',
    },
  },
  {
    rus: {
      caseDown: 'у',
      caseUp: 'У',
      caseCaps: 'У',
      caseShiftCaps: 'у',
    },
    eng: {
      caseDown: 'e',
      caseUp: 'E',
      caseCaps: 'E',
      caseShiftCaps: 'e',
    },
    data: {
      code: 'KeyE',
    },
  },
  {
    rus: {
      caseDown: 'к',
      caseUp: 'К',
      caseCaps: 'К',
      caseShiftCaps: 'к',
    },
    eng: {
      caseDown: 'r',
      caseUp: 'R',
      caseCaps: 'R',
      caseShiftCaps: 'r',
    },
    data: {
      code: 'KeyR',
    },
  },
  {
    rus: {
      caseDown: 'е',
      caseUp: 'Е',
      caseCaps: 'Е',
      caseShiftCaps: 'е',
    },
    eng: {
      caseDown: 't',
      caseUp: 'T',
      caseCaps: 'T',
      caseShiftCaps: 't',
    },
    data: {
      code: 'KeyT',
    },
  },
  {
    rus: {
      caseDown: 'н',
      caseUp: 'Н',
      caseCaps: 'Н',
      caseShiftCaps: 'н',
    },
    eng: {
      caseDown: 'y',
      caseUp: 'Y',
      caseCaps: 'Y',
      caseShiftCaps: 'y',
    },
    data: {
      code: 'KeyY',
    },
  },
  {
    rus: {
      caseDown: 'г',
      caseUp: 'Г',
      caseCaps: 'Г',
      caseShiftCaps: 'г',
    },
    eng: {
      caseDown: 'u',
      caseUp: 'U',
      caseCaps: 'U',
      caseShiftCaps: 'u',
    },
    data: {
      code: 'KeyU',
    },
  },
  {
    rus: {
      caseDown: 'ш',
      caseUp: 'Ш',
      caseCaps: 'Ш',
      caseShiftCaps: 'ш',
    },
    eng: {
      caseDown: 'i',
      caseUp: 'I',
      caseCaps: 'I',
      caseShiftCaps: 'i',
    },
    data: {
      code: 'KeyI',
    },
  },
  {
    rus: {
      caseDown: 'щ',
      caseUp: 'Щ',
      caseCaps: 'Щ',
      caseShiftCaps: 'щ',
    },
    eng: {
      caseDown: 'o',
      caseUp: 'O',
      caseCaps: 'O',
      caseShiftCaps: 'o',
    },
    data: {
      code: 'KeyO',
    },
  },
  {
    rus: {
      caseDown: 'з',
      caseUp: 'З',
      caseCaps: 'З',
      caseShiftCaps: 'з',
    },
    eng: {
      caseDown: 'p',
      caseUp: 'P',
      caseCaps: 'P',
      caseShiftCaps: 'p',
    },
    data: {
      code: 'KeyP',
    },
  },
  {
    rus: {
      caseDown: 'х',
      caseUp: 'Х',
      caseCaps: 'Х',
      caseShiftCaps: 'х',
    },
    eng: {
      caseDown: '[',
      caseUp: '{',
      caseCaps: '[',
      caseShiftCaps: '{',
    },
    data: {
      code: 'BracketLeft',
    },
  },
  {
    rus: {
      caseDown: 'ъ',
      caseUp: 'Ъ',
      caseCaps: 'Ъ',
      caseShiftCaps: 'ъ',
    },
    eng: {
      caseDown: ']',
      caseUp: '}',
      caseCaps: ']',
      caseShiftCaps: '}',
    },
    data: {
      code: 'BracketRight',
    },
  },
  {
    rus: {
      caseDown: '\\',
      caseUp: '/',
      caseCaps: '\\',
      caseShiftCaps: '/',
    },
    eng: {
      caseDown: '\\',
      caseUp: '|',
      caseCaps: '\\',
      caseShiftCaps: '|',
    },
    data: {
      code: 'Backslash',
    },
  },
  {
    rus: {
      caseDown: 'Del',
      caseUp: 'Del',
      caseCaps: 'Del',
      caseShiftCaps: 'Del',
    },
    eng: {
      caseDown: 'Del',
      caseUp: 'Del',
      caseCaps: 'Del',
      caseShiftCaps: 'Del',
    },
    data: {
      code: 'Delete',
    },
  },

  {
    className: 'col-2',
    rus: {
      caseDown: 'CapsLock',
      caseUp: 'CapsLock',
      caseCaps: 'CapsLock',
      caseShiftCaps: 'CapsLock',
    },
    eng: {
      caseDown: 'CapsLock',
      caseUp: 'CapsLock',
      caseCaps: 'CapsLock',
      caseShiftCaps: 'CapsLock',
    },
    data: {
      code: 'CapsLock',
    },
  },
  {
    rus: {
      caseDown: 'ф',
      caseUp: 'Ф',
      caseCaps: 'Ф',
      caseShiftCaps: 'ф',
    },
    eng: {
      caseDown: 'a',
      caseUp: 'A',
      caseCaps: 'A',
      caseShiftCaps: 'a',
    },
    data: {
      code: 'KeyA',
    },
  },
  {
    rus: {
      caseDown: 'ы',
      caseUp: 'Ы',
      caseCaps: 'Ы',
      caseShiftCaps: 'ы',
    },
    eng: {
      caseDown: 's',
      caseUp: 'S',
      caseCaps: 'S',
      caseShiftCaps: 's',
    },
    data: {
      code: 'KeyS',
    },
  },
  {
    rus: {
      caseDown: 'в',
      caseUp: 'В',
      caseCaps: 'В',
      caseShiftCaps: 'в',
    },
    eng: {
      caseDown: 'd',
      caseUp: 'D',
      caseCaps: 'D',
      caseShiftCaps: 'd',
    },
    data: {
      code: 'KeyD',
    },
  },
  {
    rus: {
      caseDown: 'а',
      caseUp: 'А',
      caseCaps: 'А',
      caseShiftCaps: 'а',
    },
    eng: {
      caseDown: 'f',
      caseUp: 'F',
      caseCaps: 'F',
      caseShiftCaps: 'f',
    },
    data: {
      code: 'KeyF',
    },
  },
  {
    rus: {
      caseDown: 'п',
      caseUp: 'П',
      caseCaps: 'П',
      caseShiftCaps: 'п',
    },
    eng: {
      caseDown: 'g',
      caseUp: 'G',
      caseCaps: 'G',
      caseShiftCaps: 'g',
    },
    data: {
      code: 'KeyG',
    },
  },
  {
    rus: {
      caseDown: 'р',
      caseUp: 'Р',
      caseCaps: 'Р',
      caseShiftCaps: 'р',
    },
    eng: {
      caseDown: 'h',
      caseUp: 'H',
      caseCaps: 'H',
      caseShiftCaps: 'h',
    },
    data: {
      code: 'KeyH',
    },
  },
  {
    rus: {
      caseDown: 'о',
      caseUp: 'О',
      caseCaps: 'О',
      caseShiftCaps: 'о',
    },
    eng: {
      caseDown: 'j',
      caseUp: 'J',
      caseCaps: 'J',
      caseShiftCaps: 'j',
    },
    data: {
      code: 'KeyJ',
    },
  },
  {
    rus: {
      caseDown: 'л',
      caseUp: 'Л',
      caseCaps: 'Л',
      caseShiftCaps: 'л',
    },
    eng: {
      caseDown: 'k',
      caseUp: 'K',
      caseCaps: 'K',
      caseShiftCaps: 'k',
    },
    data: {
      code: 'KeyK',
    },
  },
  {
    rus: {
      caseDown: 'д',
      caseUp: 'Д',
      caseCaps: 'Д',
      caseShiftCaps: 'д',
    },
    eng: {
      caseDown: 'l',
      caseUp: 'L',
      caseCaps: 'L',
      caseShiftCaps: 'l',
    },
    data: {
      code: 'KeyL',
    },
  },
  {
    rus: {
      caseDown: 'ж',
      caseUp: 'Ж',
      caseCaps: 'Ж',
      caseShiftCaps: 'ж',
    },
    eng: {
      caseDown: ';',
      caseUp: ':',
      caseCaps: ';',
      caseShiftCaps: ':',
    },
    data: {
      code: 'Semicolon',
    },
  },
  {
    rus: {
      caseDown: 'э',
      caseUp: 'Э',
      caseCaps: 'Э',
      caseShiftCaps: 'э',
    },
    eng: {
      caseDown: '\'',
      caseUp: '"',
      caseCaps: '\'',
      caseShiftCaps: '"',
    },
    data: {
      code: 'Quote',
    },
  },
  {
    className: 'col-2',
    rus: {
      caseDown: 'Enter',
      caseUp: 'Enter',
      caseCaps: 'Enter',
      caseShiftCaps: 'Enter',
    },
    eng: {
      caseDown: 'Enter',
      caseUp: 'Enter',
      caseCaps: 'Enter',
      caseShiftCaps: 'Enter',
    },
    data: {
      code: 'Enter',
    },
  },

  {
    className: 'col-2',
    rus: {
      caseDown: 'Shift',
      caseUp: 'Shift',
      caseCaps: 'Shift',
      caseShiftCaps: 'Shift',
    },
    eng: {
      caseDown: 'Shift',
      caseUp: 'Shift',
      caseCaps: 'Shift',
      caseShiftCaps: 'Shift',
    },
    data: {
      code: 'ShiftLeft',
    },
  },
  {
    rus: {
      caseDown: 'я',
      caseUp: 'Я',
      caseCaps: 'Я',
      caseShiftCaps: 'я',
    },
    eng: {
      caseDown: 'z',
      caseUp: 'Z',
      caseCaps: 'Z',
      caseShiftCaps: 'z',
    },
    data: {
      code: 'KeyZ',
    },
  },
  {
    rus: {
      caseDown: 'ч',
      caseUp: 'Ч',
      caseCaps: 'Ч',
      caseShiftCaps: 'ч',
    },
    eng: {
      caseDown: 'x',
      caseUp: 'X',
      caseCaps: 'X',
      caseShiftCaps: 'x',
    },
    data: {
      code: 'KeyX',
    },
  },
  {
    rus: {
      caseDown: 'с',
      caseUp: 'С',
      caseCaps: 'С',
      caseShiftCaps: 'с',
    },
    eng: {
      caseDown: 'c',
      caseUp: 'C',
      caseCaps: 'C',
      caseShiftCaps: 'c',
    },
    data: {
      code: 'KeyC',
    },
  },
  {
    rus: {
      caseDown: 'м',
      caseUp: 'М',
      caseCaps: 'М',
      caseShiftCaps: 'м',
    },
    eng: {
      caseDown: 'v',
      caseUp: 'V',
      caseCaps: 'V',
      caseShiftCaps: 'v',
    },
    data: {
      code: 'KeyV',
    },
  },
  {
    rus: {
      caseDown: 'и',
      caseUp: 'И',
      caseCaps: 'И',
      caseShiftCaps: 'и',
    },
    eng: {
      caseDown: 'b',
      caseUp: 'B',
      caseCaps: 'B',
      caseShiftCaps: 'b',
    },
    data: {
      code: 'KeyB',
    },
  },
  {
    rus: {
      caseDown: 'т',
      caseUp: 'Т',
      caseCaps: 'Т',
      caseShiftCaps: 'т',
    },
    eng: {
      caseDown: 'n',
      caseUp: 'N',
      caseCaps: 'N',
      caseShiftCaps: 'n',
    },
    data: {
      code: 'KeyN',
    },
  },
  {
    rus: {
      caseDown: 'ь',
      caseUp: 'Ь',
      caseCaps: 'Ь',
      caseShiftCaps: 'ь',
    },
    eng: {
      caseDown: 'm',
      caseUp: 'M',
      caseCaps: 'M',
      caseShiftCaps: 'm',
    },
    data: {
      code: 'KeyM',
    },
  },
  {
    rus: {
      caseDown: 'б',
      caseUp: 'Б',
      caseCaps: 'Б',
      caseShiftCaps: 'б',
    },
    eng: {
      caseDown: ',',
      caseUp: '<',
      caseCaps: ',',
      caseShiftCaps: '<',
    },
    data: {
      code: 'Comma',
    },
  },
  {
    rus: {
      caseDown: 'ю',
      caseUp: 'Ю',
      caseCaps: 'Ю',
      caseShiftCaps: 'ю',
    },
    eng: {
      caseDown: '.',
      caseUp: '>',
      caseCaps: '.',
      caseShiftCaps: '>',
    },
    data: {
      code: 'Period',
    },
  },
  {
    rus: {
      caseDown: '.',
      caseUp: ',',
      caseCaps: '.',
      caseShiftCaps: ',',
    },
    eng: {
      caseDown: '/',
      caseUp: '?',
      caseCaps: '/',
      caseShiftCaps: '?',
    },
    data: {
      code: 'Slash',
    },
  },
  {
    rus: {
      caseDown: '&#8593;',
      caseUp: '&#8593;',
      caseCaps: '&#8593;',
      caseShiftCaps: '&#8593;',
    },
    eng: {
      caseDown: '&#8593;',
      caseUp: '&#8593;',
      caseCaps: '&#8593;',
      caseShiftCaps: '&#8593;',
    },
    data: {
      code: 'ArrowUp',
    },
  },
  {
    className: 'col-2',
    rus: {
      caseDown: 'Shift',
      caseUp: 'Shift',
      caseCaps: 'Shift',
      caseShiftCaps: 'Shift',
    },
    eng: {
      caseDown: 'Shift',
      caseUp: 'Shift',
      caseCaps: 'Shift',
      caseShiftCaps: 'Shift',
    },
    data: {
      code: 'ShiftRight',
    },
  },

  {
    className: 'col-2',
    rus: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
      caseCaps: 'Ctrl',
      caseShiftCaps: 'Ctrl',
    },
    eng: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
      caseCaps: 'Ctrl',
      caseShiftCaps: 'Ctrl',
    },
    data: {
      code: 'ControlLeft',
    },
  },
  {
    rus: {
      caseDown: 'Win',
      caseUp: 'Win',
      caseCaps: 'Win',
      caseShiftCaps: 'Win',
    },
    eng: {
      caseDown: 'Win',
      caseUp: 'Win',
      caseCaps: 'Win',
      caseShiftCaps: 'Win',
    },
    data: {
      code: 'MetaLeft',
    },
  },
  {
    rus: {
      caseDown: 'Alt',
      caseUp: 'Alt',
      caseCaps: 'Alt',
      caseShiftCaps: 'Alt',
    },
    eng: {
      caseDown: 'Alt',
      caseUp: 'Alt',
      caseCaps: 'Alt',
      caseShiftCaps: 'Alt',
    },
    data: {
      code: 'AltLeft',
    },
  },
  {
    className: 'col-6',
    rus: {
      caseDown: '',
      caseUp: '',
      caseCaps: '',
      caseShiftCaps: '',
    },
    eng: {
      caseDown: '',
      caseUp: '',
      caseCaps: '',
      caseShiftCaps: '',
    },
    data: {
      code: 'Space',
    },
  },
  {
    rus: {
      caseDown: 'Alt',
      caseUp: 'Alt',
      caseCaps: 'Alt',
      caseShiftCaps: 'Alt',
    },
    eng: {
      caseDown: 'Alt',
      caseUp: 'Alt',
      caseCaps: 'Alt',
      caseShiftCaps: 'Alt',
    },
    data: {
      code: 'AltRight',
    },
  },
  {
    rus: {
      caseDown: '&#8592;',
      caseUp: '&#8592;',
      caseCaps: '&#8592;',
      caseShiftCaps: '&#8592;',
    },
    eng: {
      caseDown: '&#8592;',
      caseUp: '&#8592;',
      caseCaps: '&#8592;',
      caseShiftCaps: '&#8592;',
    },
    data: {
      code: 'ArrowLeft',
    },
  },
  {
    rus: {
      caseDown: '&#8595;',
      caseUp: '&#8595;',
      caseCaps: '&#8595;',
      caseShiftCaps: '&#8595;',
    },
    eng: {
      caseDown: '&#8595;',
      caseUp: '&#8595;',
      caseCaps: '&#8595;',
      caseShiftCaps: '&#8595;',
    },
    data: {
      code: 'ArrowDown',
    },
  },
  {
    rus: {
      caseDown: '&#8594;',
      caseUp: '&#8594;',
      caseCaps: '&#8594;',
      caseShiftCaps: '&#8594;',
    },
    eng: {
      caseDown: '&#8594;',
      caseUp: '&#8594;',
      caseCaps: '&#8594;',
      caseShiftCaps: '&#8594;',
    },
    data: {
      code: 'ArrowRight',
    },
  },
  {
    rus: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
      caseCaps: 'Ctrl',
      caseShiftCaps: 'Ctrl',
    },
    eng: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
      caseCaps: 'Ctrl',
      caseShiftCaps: 'Ctrl',
    },
    data: {
      code: 'ControlRight',
    },
  },
];

const TITLE_TEXT = 'Виртуальная клавиатура';
const INFO_TEXT = `
  Клавиатура создана в операционной системе Windows
  <br>
  <br>
  Для переключения языка комбинация: <b>левыe ctrl + alt</b>
`;

const SELECTORS = {
  btn: '.keyboard__btn',
  btn_eng: '.keyboard__btn-eng',
  btn_rus: '.keyboard__btn-rus',
  btn_item: '.keyboard__btn-item',
  btn_item_down: '.keyboard__btn-item--down',
  btn_item_up: '.keyboard__btn-item--up',
  btn_item_caps: '.keyboard__btn-item--caps',
  btn_item_shift_caps: '.keyboard__btn-item--shift-caps',
};

const KEY_LS = 'lang_keyboard';

const CLASSES = {
  app: 'app',
  keyboard: 'keyboard',
  animated: 'animated',
  btn_item: 'keyboard__btn-item',
};

class Keyboard {
  init() {
    this.app = document.createElement('div');
    this.app.classList.add(CLASSES.app);

    this.title = document.createElement('h1');
    this.title.textContent = TITLE_TEXT;

    this.textarea = document.createElement('textarea');

    this.keyboard = document.createElement('div');
    this.keyboard.classList.add(CLASSES.keyboard);

    const str = KEYS.map((key) => (
      `
        <button
          class="keyboard__btn ${key.className ?? ''}"
          data-code="${key.data.code}"
        >
          <span class="keyboard__btn-eng">
            <span class="keyboard__btn-item keyboard__btn-item--down">
              ${key.eng.caseDown}
            </span>
            <span class="keyboard__btn-item keyboard__btn-item--up" hidden>
              ${key.eng.caseUp}
            </span>
            <span class="keyboard__btn-item keyboard__btn-item--caps" hidden>
              ${key.eng.caseCaps}
            </span>
            <span class="keyboard__btn-item keyboard__btn-item--shift-caps" hidden>
              ${key.eng.caseShiftCaps}
            </span>
          </span>
          <span class="keyboard__btn-rus" hidden>
            <span class="keyboard__btn-item keyboard__btn-item--down">
              ${key.rus.caseDown}
            </span>
            <span class="keyboard__btn-item keyboard__btn-item--up" hidden>
              ${key.rus.caseUp}
            </span>
            <span class="keyboard__btn-item keyboard__btn-item--caps" hidden>
              ${key.rus.caseCaps}
            </span>
            <span class="keyboard__btn-item keyboard__btn-item--shift-caps" hidden>
              ${key.rus.caseShiftCaps}
            </span>
          </span>
        </button>
      `
    )).join('');

    this.keyboard.innerHTML = str;

    this.text = document.createElement('p');
    this.text.innerHTML = INFO_TEXT;

    document.body.append(this.app);
    this.app.append(this.title, this.textarea, this.keyboard, this.text);

    this.btnsEng = this.keyboard.querySelectorAll(SELECTORS.btn_eng);
    this.btnsRus = this.keyboard.querySelectorAll(SELECTORS.btn_rus);
    this.btnItems = this.keyboard.querySelectorAll(SELECTORS.btn_item);
    this.capsLock = this.keyboard.querySelector('[data-code="CapsLock"]');
    this.shiftLeft = this.keyboard.querySelector('[data-code="ShiftLeft"]');
    this.shiftRight = this.keyboard.querySelector('[data-code="ShiftRight"]');

    this.lang = localStorage.getItem(KEY_LS);

    if (this.lang) {
      this.setRusLang();
    }

    document.addEventListener('keydown', this.keyDownHandler.bind(this));
    document.addEventListener('keyup', this.keyUpHandler.bind(this));
    document.addEventListener('mousedown', this.mouseDownHandler.bind(this));
    document.addEventListener('mouseup', this.mouseUpHandler.bind(this));
  }

  static addAnimatedClass(el) {
    el.classList.add(CLASSES.animated);
  }

  static removeAnimatedClass(el) {
    el.classList.remove(CLASSES.animated);
  }

  static setAttrHidden(items) {
    items.forEach((item) => {
      item.setAttribute('hidden', true);
    });
  }

  static removeAttrHidden(items) {
    items.forEach((item) => {
      item.removeAttribute('hidden');
    });
  }

  outputResult(code, domEl, textDomEl, repeat) {
    switch (code) {
      case 'Backspace': {
        const startPosSelection = this.textarea.selectionStart;
        const arr = this.textarea.value.split('');

        if (startPosSelection !== 0) {
          arr.splice(startPosSelection - 1, 1);

          this.textarea.value = arr.join('');

          this.textarea.setSelectionRange(startPosSelection - 1, startPosSelection - 1);
        }

        break;
      }
      case 'Enter': {
        const startPosSelection = this.textarea.selectionStart;
        const arr = this.textarea.value.split('');

        arr.splice(startPosSelection, 0, '\n');

        this.textarea.value = arr.join('');

        if (startPosSelection + 1 !== this.textarea.value.length) {
          this.textarea.setSelectionRange(startPosSelection + 1, startPosSelection + 1);
        }

        break;
      }
      case 'Tab': {
        const startPosSelection = this.textarea.selectionStart;
        const arr = this.textarea.value.split('');

        arr.splice(startPosSelection, 0, '\t');

        this.textarea.value = arr.join('');

        if (startPosSelection + 1 !== this.textarea.value.length) {
          this.textarea.setSelectionRange(startPosSelection + 1, startPosSelection + 1);
        }

        break;
      }
      case 'Space': {
        const startPosSelection = this.textarea.selectionStart;
        const arr = this.textarea.value.split('');

        arr.splice(startPosSelection, 0, ' ');

        this.textarea.value = arr.join('');

        if (startPosSelection + 1 !== this.textarea.value.length) {
          this.textarea.setSelectionRange(startPosSelection + 1, startPosSelection + 1);
        }

        break;
      }
      case 'CapsLock':
        if (!repeat) {
          this.toggleCaps(domEl);
        }

        break;
      case 'ShiftLeft':
        if (!repeat) {
          this.toggleShift(domEl);
        }

        break;
      case 'ShiftRight':
        if (!repeat) {
          this.toggleShift(domEl);
        }

        break;
      case 'ControlLeft':
        break;
      case 'ControlRight':
        break;
      case 'MetaLeft':
        break;
      case 'AltLeft':
        break;
      case 'AltRight':
        break;
      case 'Delete': {
        const startPosSelection = this.textarea.selectionStart;
        const arr = this.textarea.value.split('');

        arr.splice(startPosSelection, 1);

        this.textarea.value = arr.join('');

        this.textarea.setSelectionRange(startPosSelection, startPosSelection);

        break;
      }
      default: {
        const startPosSelection = this.textarea.selectionStart;
        const arr = this.textarea.value.split('');

        arr.splice(startPosSelection, 0, textDomEl);

        this.textarea.value = arr.join('');

        if (startPosSelection + 1 !== this.textarea.value.length) {
          this.textarea.setSelectionRange(startPosSelection + 1, startPosSelection + 1);
        }
      }
    }
  }

  keyUpHandler(e) {
    e.preventDefault();

    const { code } = e;

    const el = this.keyboard.querySelector(`[data-code="${code}"]`);

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      this.toggleShift(el);
    }

    if (
      el
      && code !== 'CapsLock'
      && code !== 'ShiftLeft'
      && code !== 'ShiftRight'
    ) {
      Keyboard.removeAnimatedClass(el);
    }

    this.textarea.focus();
  }

  keyDownHandler(e) {
    e.preventDefault();

    const {
      code,
      repeat,
      ctrlKey,
      metaKey,
      altKey,
    } = e;

    const el = this.keyboard.querySelector(`[data-code="${code}"]`);

    if (!el) return;

    const elText = el.innerText;

    if ((code === 'AltLeft' && (ctrlKey || metaKey)) || (code === 'ControlLeft' && altKey)) {
      if (!repeat) {
        this.checkLangKeyboard();
      }
    }

    if (
      el
      && code !== 'CapsLock'
      && code !== 'ShiftLeft'
      && code !== 'ShiftRight'
    ) {
      if (!repeat) {
        Keyboard.addAnimatedClass(el);
      }
    }

    this.outputResult(code, el, elText, repeat);
  }

  mouseUpHandler(e) {
    const { target } = e;

    if (!target.classList.contains(CLASSES.btn_item)) return;

    const parent = target.closest(SELECTORS.btn);

    const { code } = parent.dataset;

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      this.toggleShift(parent);
    }

    this.textarea.focus();
  }

  mouseDownHandler(e) {
    const { target } = e;

    if (!target.classList.contains(CLASSES.btn_item)) return;

    const text = target.innerText;

    const el = target.closest(SELECTORS.btn);

    const { code } = el.dataset;

    this.outputResult(code, el, text);
  }

  toggleAttrHidden(selector) {
    const itemsNotHidden = [...this.btnItems].filter((item) => !item.hasAttribute('hidden'));

    Keyboard.setAttrHidden(itemsNotHidden);

    Keyboard.removeAttrHidden(this.keyboard.querySelectorAll(selector));
  }

  toggleCaps(el) {
    if (!this.shiftLeft.classList.contains(CLASSES.animated)) {
      if (!el.classList.contains(CLASSES.animated)) {
        Keyboard.addAnimatedClass(el);

        this.toggleAttrHidden(SELECTORS.btn_item_caps);
      } else {
        Keyboard.removeAnimatedClass(el);

        this.toggleAttrHidden(SELECTORS.btn_item_down);
      }

      return;
    }

    if (!el.classList.contains(CLASSES.animated)) {
      Keyboard.addAnimatedClass(el);

      this.toggleAttrHidden(SELECTORS.btn_item_shift_caps);
    } else {
      Keyboard.removeAnimatedClass(el);

      this.toggleAttrHidden(SELECTORS.btn_item_up);
    }
  }

  toggleShift(el) {
    if (!this.capsLock.classList.contains(CLASSES.animated)) {
      if (!el.classList.contains(CLASSES.animated)) {
        Keyboard.addAnimatedClass(el);

        this.toggleAttrHidden(SELECTORS.btn_item_up);
      } else {
        Keyboard.removeAnimatedClass(el);

        this.toggleAttrHidden(SELECTORS.btn_item_down);
      }

      return;
    }

    if (!el.classList.contains(CLASSES.animated)) {
      Keyboard.addAnimatedClass(el);

      this.toggleAttrHidden(SELECTORS.btn_item_shift_caps);
    } else {
      Keyboard.removeAnimatedClass(el);

      this.toggleAttrHidden(SELECTORS.btn_item_caps);
    }
  }

  checkLangKeyboard() {
    if (!this.lang) {
      this.setRusLang();
    } else {
      this.setEngLang();
    }
  }

  setRusLang() {
    localStorage.setItem(KEY_LS, 'rus');

    this.lang = 'rus';

    Keyboard.setAttrHidden(this.btnsEng);
    Keyboard.removeAttrHidden(this.btnsRus);
  }

  setEngLang() {
    localStorage.removeItem(KEY_LS);

    this.lang = null;

    Keyboard.setAttrHidden(this.btnsRus);
    Keyboard.removeAttrHidden(this.btnsEng);
  }
}

new Keyboard().init();
