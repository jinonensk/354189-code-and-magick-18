'use strict';

(function () {
  var CONST = window.CONST;
  var backend = window.backend;
  var utils = window.utils;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var addWizardsToPage = function (wizards) {
    var wizardsIndexes = utils.getRandomIndexFromArray(CONST.WIZARDS_QUANTITY, wizards);
    for (var i = 0; i < wizardsIndexes.length; i++) {
      fragment.appendChild(renderWizard(wizards[wizardsIndexes[i]]));
    }
    similarListElement.appendChild(fragment);
  };

  backend.load(addWizardsToPage);
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
