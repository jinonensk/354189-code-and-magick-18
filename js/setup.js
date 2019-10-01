'use strict';
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_QUANTITY = 4;

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

userDialog.classList.remove('hidden');

var getRandomValue = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var makeWizard = function () {
  var firstNameIndex = getRandomValue(0, FIRST_NAMES.length);
  var lastNameIndex = getRandomValue(0, LAST_NAMES.length);
  var coatColorsIndex = getRandomValue(0, COAT_COLORS.length);
  var eyesColorsIndex = getRandomValue(0, EYES_COLORS.length);
  var fullName = FIRST_NAMES[firstNameIndex] + ' ' + LAST_NAMES[lastNameIndex];
  var wizard = {
    name: fullName,
    coatColor: COAT_COLORS[coatColorsIndex].replace(/\s+/g, ''),
    eyesColor: EYES_COLORS[eyesColorsIndex],
  };
  return wizard;
};

var makeWizardsArray = function () {
  var wizards = [];
  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
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

userDialog.querySelector('.setup-similar').classList.remove('hidden');
