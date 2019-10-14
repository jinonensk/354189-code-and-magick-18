'use strict';
(function () {
  window.utils = {
    getRandomValue: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomColor: function (array) {
      return array[window.utils.getRandomValue(0, array.length - 1)];
    },
  };
})();

