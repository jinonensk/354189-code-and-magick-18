'use strict';

(function () {
  var END_MODAL = {
    START_X: 100,
    START_Y: 10,
    WIDTH: 420,
    HEIGHT: 270,
    INWARD_SHIFT: 20,
    SHADOW_OFFSET: 10,
    INNER_GAP: 30,
    SHADOW_COLOR: 'rgba(0, 0, 0, 0.7)',
    BACKGORUND_COLOR: '#FFFFFF',
    TEXT_COLOR: 'rgb(0, 0, 0)',
  };
  var GISTOGRAM = {
    HEIGHT: 150,
    COLUMN_WIDTH: 50,
    INNER_GAP: 15,
    TEXT_HEIGHT: 20,
    CULUMN_MARGIN: 50,
    MAIN_PLAYER: 'Вы',
    MAIN_COLOR: 'rgba(255, 0, 0, 1)',
  };
  var FONT_STYLE = '16px PT Mono';
  var FONT_BASELINE = 'middle';
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var WIZARDS_QUANTITY = 4;
  var POPUP_INITIAL_COORDINATE = {
    TOP: '80px',
    LEFT: '50%',
  };
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var URL_UPLOAD = 'https://js.dump.academy/code-and-magick';
  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';
  var XHR_TIMEOUT = 1000 * 10; // 10 s
  var SUCCESS_SERVER_ANSWER = 200;

  window.CONST = {
    END_MODAL: END_MODAL,
    GISTOGRAM: GISTOGRAM,
    FONT_STYLE: FONT_STYLE,
    FONT_BASELINE: FONT_BASELINE,
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    WIZARDS_QUANTITY: WIZARDS_QUANTITY,
    POPUP_INITIAL_COORDINATE: POPUP_INITIAL_COORDINATE,
    FIREBALL_COLORS: FIREBALL_COLORS,
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    URL_UPLOAD: URL_UPLOAD,
    URL_LOAD: URL_LOAD,
    XHR_TIMEOUT: XHR_TIMEOUT,
    SUCCESS_SERVER_ANSWER: SUCCESS_SERVER_ANSWER,
  };
})();
