const KEYS = [
  // 1 row
  {
    rus: {
      caseDown: 'ё',
      caseUp: 'Ё',
      caseCaps: 'Ё',
    },
    eng: {
      caseDown: '`',
      caseUp: '~',
      caseCaps: '`',
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
    },
    eng: {
      caseDown: '1',
      caseUp: '!',
      caseCaps: '1',
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
    },
    eng: {
      caseDown: '2',
      caseUp: '@',
      caseCaps: '2',
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
    },
    eng: {
      caseDown: '3',
      caseUp: '#',
      caseCaps: '3',
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
    },
    eng: {
      caseDown: '4',
      caseUp: '$',
      caseCaps: '4',
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
    },
    eng: {
      caseDown: '5',
      caseUp: '%',
      caseCaps: '5',
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
    },
    eng: {
      caseDown: '6',
      caseUp: '^',
      caseCaps: '6',
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
    },
    eng: {
      caseDown: '7',
      caseUp: '&',
      caseCaps: '7',
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
    },
    eng: {
      caseDown: '8',
      caseUp: '*',
      caseCaps: '8',
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
    },
    eng: {
      caseDown: '9',
      caseUp: '(',
      caseCaps: '9',
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
    },
    eng: {
      caseDown: '0',
      caseUp: ')',
      caseCaps: '0',
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
    },
    eng: {
      caseDown: '-',
      caseUp: '_',
      caseCaps: '-',
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
    },
    eng: {
      caseDown: '=',
      caseUp: '+',
      caseCaps: '=',
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
    },
    eng: {
      caseDown: 'Backspace',
      caseUp: 'Backspace',
      caseCaps: 'Backspace',
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
      caseCaps: 'Tab',
    },
    eng: {
      caseDown: 'Tab',
      caseUp: 'Tab',
      caseCaps: 'Tab',
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
    },
    eng: {
      caseDown: 'q',
      caseUp: 'Q',
      caseCaps: 'Q',
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
    },
    eng: {
      caseDown: 'w',
      caseUp: 'W',
      caseCaps: 'W',
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
    },
    eng: {
      caseDown: 'e',
      caseUp: 'E',
      caseCaps: 'E',
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
    },
    eng: {
      caseDown: 'r',
      caseUp: 'R',
      caseCaps: 'R',
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
    },
    eng: {
      caseDown: 't',
      caseUp: 'T',
      caseCaps: 'T',
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
    },
    eng: {
      caseDown: 'y',
      caseUp: 'Y',
      caseCaps: 'Y',
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
    },
    eng: {
      caseDown: 'u',
      caseUp: 'U',
      caseCaps: 'U',
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
    },
    eng: {
      caseDown: 'i',
      caseUp: 'I',
      caseCaps: 'I',
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
    },
    eng: {
      caseDown: 'o',
      caseUp: 'O',
      caseCaps: 'O',
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
    },
    eng: {
      caseDown: 'p',
      caseUp: 'P',
      caseCaps: 'P',
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
    },
    eng: {
      caseDown: '[',
      caseUp: '{',
      caseCaps: '[',
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
    },
    eng: {
      caseDown: ']',
      caseUp: '}',
      caseCaps: ']',
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
    },
    eng: {
      caseDown: '\\',
      caseUp: '|',
      caseCaps: '\\',
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
    },
    eng: {
      caseDown: 'Del',
      caseUp: 'Del',
      caseCaps: 'Del',
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
      caseCaps: 'CapsLock',
    },
    eng: {
      caseDown: 'CapsLock',
      caseUp: 'CapsLock',
      caseCaps: 'CapsLock',
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
    },
    eng: {
      caseDown: 'a',
      caseUp: 'A',
      caseCaps: 'A',
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
    },
    eng: {
      caseDown: 's',
      caseUp: 'S',
      caseCaps: 'S',
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
    },
    eng: {
      caseDown: 'd',
      caseUp: 'D',
      caseCaps: 'D',
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
    },
    eng: {
      caseDown: 'f',
      caseUp: 'F',
      caseCaps: 'F',
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
    },
    eng: {
      caseDown: 'g',
      caseUp: 'G',
      caseCaps: 'G',
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
    },
    eng: {
      caseDown: 'h',
      caseUp: 'H',
      caseCaps: 'H',
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
    },
    eng: {
      caseDown: 'j',
      caseUp: 'J',
      caseCaps: 'J',
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
    },
    eng: {
      caseDown: 'k',
      caseUp: 'K',
      caseCaps: 'K',
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
    },
    eng: {
      caseDown: 'l',
      caseUp: 'L',
      caseCaps: 'L',
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
    },
    eng: {
      caseDown: ';',
      caseUp: ':',
      caseCaps: ';',
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
    },
    eng: {
      caseDown: '\'',
      caseUp: '"',
      caseCaps: '\'',
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
    },
    eng: {
      caseDown: 'Enter',
      caseUp: 'Enter',
      caseCaps: 'Enter',
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
      caseCaps: 'Shift',
    },
    eng: {
      caseDown: 'Shift',
      caseUp: 'Shift',
      caseCaps: 'Shift',
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
    },
    eng: {
      caseDown: 'z',
      caseUp: 'Z',
      caseCaps: 'Z',
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
    },
    eng: {
      caseDown: 'x',
      caseUp: 'X',
      caseCaps: 'X',
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
    },
    eng: {
      caseDown: 'c',
      caseUp: 'C',
      caseCaps: 'C',
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
    },
    eng: {
      caseDown: 'v',
      caseUp: 'V',
      caseCaps: 'V',
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
    },
    eng: {
      caseDown: 'b',
      caseUp: 'B',
      caseCaps: 'B',
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
    },
    eng: {
      caseDown: 'n',
      caseUp: 'N',
      caseCaps: 'N',
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
    },
    eng: {
      caseDown: 'm',
      caseUp: 'M',
      caseCaps: 'M',
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
    },
    eng: {
      caseDown: ',',
      caseUp: '<',
      caseCaps: ',',
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
    },
    eng: {
      caseDown: '.',
      caseUp: '>',
      caseCaps: '.',
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
    },
    eng: {
      caseDown: '/',
      caseUp: '?',
      caseCaps: '/',
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
    },
    eng: {
      caseDown: '&#8593;',
      caseUp: '&#8593;',
      caseCaps: '&#8593;',
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
    },
    eng: {
      caseDown: 'Shift',
      caseUp: 'Shift',
      caseCaps: 'Shift',
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
      caseCaps: 'Ctrl',
    },
    eng: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
      caseCaps: 'Ctrl',
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
    },
    eng: {
      caseDown: 'Win',
      caseUp: 'Win',
      caseCaps: 'Win',
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
    },
    eng: {
      caseDown: 'Alt',
      caseUp: 'Alt',
      caseCaps: 'Alt',
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
    },
    eng: {
      caseDown: '',
      caseUp: '',
      caseCaps: '',
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
    },
    eng: {
      caseDown: 'Alt',
      caseUp: 'Alt',
      caseCaps: 'Alt',
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
    },
    eng: {
      caseDown: '&#8592;',
      caseUp: '&#8592;',
      caseCaps: '&#8592;',
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
    },
    eng: {
      caseDown: '&#8595;',
      caseUp: '&#8595;',
      caseCaps: '&#8595;',
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
    },
    eng: {
      caseDown: '&#8594;',
      caseUp: '&#8594;',
      caseCaps: '&#8594;',
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
    },
    eng: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
      caseCaps: 'Ctrl',
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
  btn_eng: '.keyboard__btn-eng',
  btn_rus: '.keyboard__btn-rus',
  btn_item: '.keyboard__btn-item',
  btn_item_down: '.keyboard__btn-item--down',
  btn_item_up: '.keyboard__btn-item--up',
  btn_item_caps: '.keyboard__btn-item--caps',
};

const KEY_LS = 'lang_keyboard';

const CLASSES = {
  app: 'app',
  keyboard: 'keyboard',
  animated: 'animated',
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

    this.lang = localStorage.getItem(KEY_LS);

    if (this.lang) {
      this.setRusLang();
    }

    document.addEventListener('keydown', this.keyDownHandler.bind(this));
    document.addEventListener('keyup', this.keyUpHandler.bind(this));
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

  keyUpHandler(e) {
    e.preventDefault();

    const { code } = e;

    const el = this.keyboard.querySelector(`[data-code="${code}"]`);

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      this.toggleShift(el);
    }

    if (el && code !== 'CapsLock') {
      Keyboard.removeAnimatedClass(el);
    }
  }

  keyDownHandler(e) {
    e.preventDefault();

    const { code, repeat } = e;

    const el = this.keyboard.querySelector(`[data-code="${code}"]`);

    if (code === 'CapsLock') {
      if (!repeat) {
        this.toggleCaps(el);
      }
    }

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      if (!repeat) {
        this.toggleShift(el);
      }
    }

    if ((code === 'AltLeft' && (e.ctrlKey || e.metaKey)) || (code === 'ControlLeft' && e.altKey)) {
      if (!repeat) {
        this.checkLangKeyboard();
      }
    }

    if (el && code !== 'CapsLock') {
      if (!repeat) {
        Keyboard.addAnimatedClass(el);
      }
    }
  }

  toggleAttrHidden(selector) {
    const itemsWithoutHiddenAttr = [...this.btnItems].filter((item) => !item.hasAttribute('hidden'));

    Keyboard.setAttrHidden(itemsWithoutHiddenAttr);

    Keyboard.removeAttrHidden(this.keyboard.querySelectorAll(selector));
  }

  toggleCaps(el) {
    if (!el.classList.contains(CLASSES.animated)) {
      Keyboard.addAnimatedClass(el);

      this.toggleAttrHidden(SELECTORS.btn_item_caps);
    } else {
      Keyboard.removeAnimatedClass(el);

      this.toggleAttrHidden(SELECTORS.btn_item_down);
    }
  }

  toggleShift(el) {
    if (!el.classList.contains(CLASSES.animated)) {
      this.toggleAttrHidden(SELECTORS.btn_item_up);
    } else {
      this.toggleAttrHidden(SELECTORS.btn_item_down);
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
