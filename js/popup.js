'use strict';
(function () {
  var CONST = window.CONST;

  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = document.querySelector('[name=\'coat-color\']');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = document.querySelector('[name=\'eyes-color\']');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = document.querySelector('[name=\'fireball-color\']');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === CONST.ESC_KEYCODE && !evt.target.classList.contains('setup-user-name')) {
      closePopup();
    }
  };

  var openPopup = function () {
    userDialog.style.top = CONST.POPUP_INITIAL_COORDINATE.TOP;
    userDialog.style.left = CONST.POPUP_INITIAL_COORDINATE.LEFT;
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === CONST.ENTER_KEYCODE) {
      openPopup();
    }
  });

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === CONST.ENTER_KEYCODE) {
      closePopup();
    }
  });

  wizardCoat.addEventListener('click', function () {
    var color = window.utils.getRandomColor(CONST.COAT_COLORS);
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var color = window.utils.getRandomColor(CONST.EYES_COLORS);
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
  });

  wizardFireball.addEventListener('click', function () {
    var color = window.utils.getRandomColor(CONST.FIREBALL_COLORS);
    wizardFireball.style.backgroundColor = color;
    wizardFireballInput.value = color;
  });

  var dialogHandler = userDialog.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
