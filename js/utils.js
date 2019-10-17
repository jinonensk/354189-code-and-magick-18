'use strict';
(function () {
  window.utils = {
    getRandomValue: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomColor: function (array) {
      return array[window.utils.getRandomValue(0, array.length - 1)];
    },
    getRandomIndexFromArray: function (quantity, array) {
      var result = [];
      while (result.length < quantity) {
        var randomIndex = window.utils.getRandomValue(0, array.length - 1);
        if (result.indexOf(randomIndex === -1)) {
          result.push(randomIndex);
        }
      }
      return result;
    },
    errorHandler: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';
      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    },
  };
})();

