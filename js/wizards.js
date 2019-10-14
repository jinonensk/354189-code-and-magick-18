'use strict';

(function () {
  var CONST = window.CONST;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  var makeWizard = function () {
    var fullName = CONST.FIRST_NAMES[window.utils.getRandomValue(0, CONST.FIRST_NAMES.length - 1)] + ' ' + CONST.LAST_NAMES[window.utils.getRandomValue(0, CONST.LAST_NAMES.length - 1)];
    var wizard = {
      name: fullName,
      coatColor: CONST.COAT_COLORS[window.utils.getRandomValue(0, CONST.COAT_COLORS.length - 1)],
      eyesColor: CONST.EYES_COLORS[window.utils.getRandomValue(0, CONST.EYES_COLORS.length - 1)],
    };
    return wizard;
  };

  var makeWizardsArray = function () {
    var wizards = [];
    for (var i = 0; i < CONST.WIZARDS_QUANTITY; i++) {
      var newWizard = makeWizard();
      wizards.push(newWizard);
    }
    return wizards;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var addWizardsToPage = function () {
    var wizards = makeWizardsArray();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };
  addWizardsToPage();
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
