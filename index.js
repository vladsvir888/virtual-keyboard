const KEYS = [
  // 1 row
  {
    rus: {
      caseDown: 'ё',
      caseUp: 'Ё',
    },
    eng: {
      caseDown: '`',
      caseUp: '`',
    },
    data: {
      code: 'Backquote',
    },
  },
  {
    rus: {
      caseDown: '1',
      caseUp: '1',
    },
    eng: {
      caseDown: '1',
      caseUp: '1',
    },
    data: {
      code: 'Digit1',
    },
  },
  {
    rus: {
      caseDown: '2',
      caseUp: '2',
    },
    eng: {
      caseDown: '2',
      caseUp: '2',
    },
    data: {
      code: 'Digit2',
    },
  },
  {
    rus: {
      caseDown: '3',
      caseUp: '3',
    },
    eng: {
      caseDown: '3',
      caseUp: '3',
    },
    data: {
      code: 'Digit3',
    },
  },
  {
    rus: {
      caseDown: '4',
      caseUp: '4',
    },
    eng: {
      caseDown: '4',
      caseUp: '4',
    },
    data: {
      code: 'Digit4',
    },
  },
  {
    rus: {
      caseDown: '5',
      caseUp: '5',
    },
    eng: {
      caseDown: '5',
      caseUp: '5',
    },
    data: {
      code: 'Digit5',
    },
  },
  {
    rus: {
      caseDown: '6',
      caseUp: '6',
    },
    eng: {
      caseDown: '6',
      caseUp: '6',
    },
    data: {
      code: 'Digit6',
    },
  },
  {
    rus: {
      caseDown: '7',
      caseUp: '7',
    },
    eng: {
      caseDown: '7',
      caseUp: '7',
    },
    data: {
      code: 'Digit7',
    },
  },
  {
    rus: {
      caseDown: '8',
      caseUp: '8',
    },
    eng: {
      caseDown: '8',
      caseUp: '8',
    },
    data: {
      code: 'Digit8',
    },
  },
  {
    rus: {
      caseDown: '9',
      caseUp: '9',
    },
    eng: {
      caseDown: '9',
      caseUp: '9',
    },
    data: {
      code: 'Digit9',
    },
  },
  {
    rus: {
      caseDown: '0',
      caseUp: '0',
    },
    eng: {
      caseDown: '0',
      caseUp: '0',
    },
    data: {
      code: 'Digit0',
    },
  },
  {
    rus: {
      caseDown: '-',
      caseUp: '-',
    },
    eng: {
      caseDown: '-',
      caseUp: '-',
    },
    data: {
      code: 'Minus',
    },
  },
  {
    rus: {
      caseDown: '=',
      caseUp: '=',
    },
    eng: {
      caseDown: '=',
      caseUp: '=',
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
    },
    eng: {
      caseDown: 'Backspace',
      caseUp: 'Backspace',
    },
    data: {
      code: 'Backspace',
    },
  },
  // 2 row
  {
    rus: {
      caseDown: 'Tab',
      caseUp: 'Tab',
    },
    eng: {
      caseDown: 'Tab',
      caseUp: 'Tab',
    },
    data: {
      code: 'Tab',
    },
  },
  {
    rus: {
      caseDown: 'й',
      caseUp: 'Й',
    },
    eng: {
      caseDown: 'q',
      caseUp: 'Q',
    },
    data: {
      code: 'KeyQ',
    },
  },
  {
    rus: {
      caseDown: 'ц',
      caseUp: 'Ц',
    },
    eng: {
      caseDown: 'w',
      caseUp: 'W',
    },
    data: {
      code: 'KeyW',
    },
  },
  {
    rus: {
      caseDown: 'у',
      caseUp: 'У',
    },
    eng: {
      caseDown: 'e',
      caseUp: 'E',
    },
    data: {
      code: 'KeyE',
    },
  },
  {
    rus: {
      caseDown: 'к',
      caseUp: 'К',
    },
    eng: {
      caseDown: 'r',
      caseUp: 'R',
    },
    data: {
      code: 'KeyR',
    },
  },
  {
    rus: {
      caseDown: 'е',
      caseUp: 'Е',
    },
    eng: {
      caseDown: 't',
      caseUp: 'T',
    },
    data: {
      code: 'KeyT',
    },
  },
  {
    rus: {
      caseDown: 'н',
      caseUp: 'Н',
    },
    eng: {
      caseDown: 'y',
      caseUp: 'Y',
    },
    data: {
      code: 'KeyY',
    },
  },
  {
    rus: {
      caseDown: 'г',
      caseUp: 'Г',
    },
    eng: {
      caseDown: 'u',
      caseUp: 'U',
    },
    data: {
      code: 'KeyU',
    },
  },
  {
    rus: {
      caseDown: 'ш',
      caseUp: 'Ш',
    },
    eng: {
      caseDown: 'i',
      caseUp: 'I',
    },
    data: {
      code: 'KeyI',
    },
  },
  {
    rus: {
      caseDown: 'щ',
      caseUp: 'Щ',
    },
    eng: {
      caseDown: 'o',
      caseUp: 'O',
    },
    data: {
      code: 'KeyO',
    },
  },
  {
    rus: {
      caseDown: 'з',
      caseUp: 'З',
    },
    eng: {
      caseDown: 'p',
      caseUp: 'P',
    },
    data: {
      code: 'KeyP',
    },
  },
  {
    rus: {
      caseDown: 'х',
      caseUp: 'Х',
    },
    eng: {
      caseDown: '[',
      caseUp: '[',
    },
    data: {
      code: 'BracketLeft',
    },
  },
  {
    rus: {
      caseDown: 'ъ',
      caseUp: 'Ъ',
    },
    eng: {
      caseDown: ']',
      caseUp: ']',
    },
    data: {
      code: 'BracketRight',
    },
  },
  {
    rus: {
      caseDown: '\\',
      caseUp: '\\',
    },
    eng: {
      caseDown: '\\',
      caseUp: '\\',
    },
    data: {
      code: 'Backslash',
    },
  },
  {
    rus: {
      caseDown: 'Del',
      caseUp: 'Del',
    },
    eng: {
      caseDown: 'Del',
      caseUp: 'Del',
    },
    data: {
      code: 'Delete',
    },
  },
  // 3 row
  {
    className: 'col-2',
    rus: {
      caseDown: 'CapsLock',
      caseUp: 'CapsLock',
    },
    eng: {
      caseDown: 'CapsLock',
      caseUp: 'CapsLock',
    },
    data: {
      code: 'CapsLock',
    },
  },
  {
    rus: {
      caseDown: 'ф',
      caseUp: 'Ф',
    },
    eng: {
      caseDown: 'a',
      caseUp: 'A',
    },
    data: {
      code: 'KeyA',
    },
  },
  {
    rus: {
      caseDown: 'ы',
      caseUp: 'Ы',
    },
    eng: {
      caseDown: 's',
      caseUp: 'S',
    },
    data: {
      code: 'KeyS',
    },
  },
  {
    rus: {
      caseDown: 'в',
      caseUp: 'В',
    },
    eng: {
      caseDown: 'd',
      caseUp: 'D',
    },
    data: {
      code: 'KeyD',
    },
  },
  {
    rus: {
      caseDown: 'а',
      caseUp: 'А',
    },
    eng: {
      caseDown: 'f',
      caseUp: 'F',
    },
    data: {
      code: 'KeyF',
    },
  },
  {
    rus: {
      caseDown: 'п',
      caseUp: 'П',
    },
    eng: {
      caseDown: 'g',
      caseUp: 'G',
    },
    data: {
      code: 'KeyG',
    },
  },
  {
    rus: {
      caseDown: 'р',
      caseUp: 'Р',
    },
    eng: {
      caseDown: 'h',
      caseUp: 'H',
    },
    data: {
      code: 'KeyH',
    },
  },
  {
    rus: {
      caseDown: 'о',
      caseUp: 'О',
    },
    eng: {
      caseDown: 'j',
      caseUp: 'J',
    },
    data: {
      code: 'KeyJ',
    },
  },
  {
    rus: {
      caseDown: 'л',
      caseUp: 'Л',
    },
    eng: {
      caseDown: 'k',
      caseUp: 'K',
    },
    data: {
      code: 'KeyK',
    },
  },
  {
    rus: {
      caseDown: 'д',
      caseUp: 'Д',
    },
    eng: {
      caseDown: 'l',
      caseUp: 'L',
    },
    data: {
      code: 'KeyL',
    },
  },
  {
    rus: {
      caseDown: 'ж',
      caseUp: 'Ж',
    },
    eng: {
      caseDown: ';',
      caseUp: ';',
    },
    data: {
      code: 'Semicolon',
    },
  },
  {
    rus: {
      caseDown: 'э',
      caseUp: 'Э',
    },
    eng: {
      caseDown: '\'',
      caseUp: '\'',
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
    },
    eng: {
      caseDown: 'Enter',
      caseUp: 'Enter',
    },
    data: {
      code: 'Enter',
    },
  },
  // 4 row
  {
    className: 'col-2',
    rus: {
      caseDown: 'Shift',
      caseUp: 'Shift',
    },
    eng: {
      caseDown: 'Shift',
      caseUp: 'Shift',
    },
    data: {
      code: 'ShiftLeft',
    },
  },
  {
    rus: {
      caseDown: 'я',
      caseUp: 'Я',
    },
    eng: {
      caseDown: 'z',
      caseUp: 'Z',
    },
    data: {
      code: 'KeyZ',
    },
  },
  {
    rus: {
      caseDown: 'ч',
      caseUp: 'Ч',
    },
    eng: {
      caseDown: 'x',
      caseUp: 'X',
    },
    data: {
      code: 'KeyX',
    },
  },
  {
    rus: {
      caseDown: 'с',
      caseUp: 'С',
    },
    eng: {
      caseDown: 'c',
      caseUp: 'C',
    },
    data: {
      code: 'KeyC',
    },
  },
  {
    rus: {
      caseDown: 'м',
      caseUp: 'М',
    },
    eng: {
      caseDown: 'v',
      caseUp: 'V',
    },
    data: {
      code: 'KeyV',
    },
  },
  {
    rus: {
      caseDown: 'и',
      caseUp: 'И',
    },
    eng: {
      caseDown: 'b',
      caseUp: 'B',
    },
    data: {
      code: 'KeyB',
    },
  },
  {
    rus: {
      caseDown: 'т',
      caseUp: 'Т',
    },
    eng: {
      caseDown: 'n',
      caseUp: 'N',
    },
    data: {
      code: 'KeyN',
    },
  },
  {
    rus: {
      caseDown: 'ь',
      caseUp: 'Ь',
    },
    eng: {
      caseDown: 'm',
      caseUp: 'M',
    },
    data: {
      code: 'KeyM',
    },
  },
  {
    rus: {
      caseDown: 'б',
      caseUp: 'Б',
    },
    eng: {
      caseDown: ',',
      caseUp: ',',
    },
    data: {
      code: 'Comma',
    },
  },
  {
    rus: {
      caseDown: 'ю',
      caseUp: 'Ю',
    },
    eng: {
      caseDown: '.',
      caseUp: '.',
    },
    data: {
      code: 'Period',
    },
  },
  {
    rus: {
      caseDown: '.',
      caseUp: '.',
    },
    eng: {
      caseDown: '/',
      caseUp: '/',
    },
    data: {
      code: 'Slash',
    },
  },
  {
    rus: {
      caseDown: '&#8593;',
      caseUp: '&#8593;',
    },
    eng: {
      caseDown: '&#8593;',
      caseUp: '&#8593;',
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
    },
    eng: {
      caseDown: 'Shift',
      caseUp: 'Shift',
    },
    data: {
      code: 'ShiftRight',
    },
  },
  // 5 row
  {
    className: 'col-2',
    rus: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
    },
    eng: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
    },
    data: {
      code: 'ControlLeft',
    },
  },
  {
    rus: {
      caseDown: 'Win',
      caseUp: 'Win',
    },
    eng: {
      caseDown: 'Win',
      caseUp: 'Win',
    },
    data: {
      code: 'MetaLeft',
    },
  },
  {
    rus: {
      caseDown: 'Alt',
      caseUp: 'Alt',
    },
    eng: {
      caseDown: 'Alt',
      caseUp: 'Alt',
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
    },
    eng: {
      caseDown: '',
      caseUp: '',
    },
    data: {
      code: 'Space',
    },
  },
  {
    rus: {
      caseDown: 'Alt',
      caseUp: 'Alt',
    },
    eng: {
      caseDown: 'Alt',
      caseUp: 'Alt',
    },
    data: {
      code: 'AltRight',
    },
  },
  {
    rus: {
      caseDown: '&#8592;',
      caseUp: '&#8592;',
    },
    eng: {
      caseDown: '&#8592;',
      caseUp: '&#8592;',
    },
    data: {
      code: 'ArrowLeft',
    },
  },
  {
    rus: {
      caseDown: '&#8595;',
      caseUp: '&#8595;',
    },
    eng: {
      caseDown: '&#8595;',
      caseUp: '&#8595;',
    },
    data: {
      code: 'ArrowDown',
    },
  },
  {
    rus: {
      caseDown: '&#8594;',
      caseUp: '&#8594;',
    },
    eng: {
      caseDown: '&#8594;',
      caseUp: '&#8594;',
    },
    data: {
      code: 'ArrowRight',
    },
  },
  {
    rus: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
    },
    eng: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
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

const ANIMATION_CONFIG = [
  {
    backgroundColor: '#2a2b32',
  },
  {
    backgroundColor: '#fc8b00',
  },
];

class Keyboard {
  init() {
    this.app = document.createElement('div');
    this.app.classList.add('app');

    this.title = document.createElement('h1');
    this.title.textContent = TITLE_TEXT;

    this.textarea = document.createElement('textarea');

    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');

    const str = KEYS.map((key) => (
      `
        <button 
          class="keyboard__btn ${key.className ?? ''}" 
          data-code="${key.data.code}"
        >
          <span class="keyboard__btn-eng">
            <span class="keyboard__btn-eng--base">
              ${key.eng.caseDown}
            </span>
            <span class="keyboard__btn-eng--caps" hidden>
              ${key.eng.caseUp}
            </span>
          </span>
          <span class="keyboard__btn-rus" hidden>
            <span class="keyboard__btn-rus--base">
              ${key.rus.caseDown}
            </span>
            <span class="keyboard__btn-rus--caps" hidden>
              ${key.rus.caseUp}
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

    document.addEventListener('keydown', this.keyDownHandler.bind(this));
  }

  keyDownHandler(e) {
    const { code } = e;

    const el = this.keyboard.querySelector(`[data-code="${code}"]`);

    el.animate(ANIMATION_CONFIG, {
      duration: 300,
    });
  }
}

new Keyboard().init();
