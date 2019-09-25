'use strict';
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

var FONT_STYLE = '16px PT Mono';
var FONT_BASELINE = 'middle';

var GISTOGRAM = {
  HEIGHT: 150,
  COLUMN_WIDTH: 50,
  INNER_GAP: 15,
  TEXT_HEIGHT: 20,
  CULUMN_MARGIN: 50,
  MAIN_PLAYER: 'Вы',
  MAIN_COLOR: 'rgba(255, 0, 0, 1)',
};

var renderModal = function (ctx, x, y, color) {
  ctx.beginPath();
  ctx.moveTo(x, END_MODAL.START_Y);
  ctx.lineTo(x + END_MODAL.WIDTH / 2, y + END_MODAL.INWARD_SHIFT);
  ctx.lineTo(x + END_MODAL.WIDTH, y);
  ctx.lineTo(x + END_MODAL.WIDTH - END_MODAL.INWARD_SHIFT, y + END_MODAL.HEIGHT / 2);
  ctx.lineTo(x + END_MODAL.WIDTH, y + END_MODAL.HEIGHT);
  ctx.lineTo(x, y + END_MODAL.HEIGHT);
  ctx.lineTo(x + END_MODAL.INWARD_SHIFT, y + END_MODAL.HEIGHT / 2);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
};

var renderGistogramColumn = function (ctx, ratio, index, name, time) {
  var maxHeight = GISTOGRAM.HEIGHT - GISTOGRAM.TEXT_HEIGHT;
  var height = maxHeight * ratio;
  var columnX = END_MODAL.START_X + END_MODAL.INNER_GAP + (GISTOGRAM.COLUMN_WIDTH + GISTOGRAM.CULUMN_MARGIN) * index;
  var columnY = END_MODAL.START_Y + END_MODAL.HEIGHT - END_MODAL.INNER_GAP - height - GISTOGRAM.TEXT_HEIGHT;
  var otherPlayersColor = 'hsl(240,' + Math.floor(Math.random() * 100) + '%, 50%)';
  var color = name === GISTOGRAM.MAIN_PLAYER ? GISTOGRAM.MAIN_COLOR : otherPlayersColor;
  ctx.fillText(time, columnX, columnY - GISTOGRAM.INNER_GAP);
  ctx.fillStyle = color;
  ctx.fillRect(columnX, columnY, GISTOGRAM.COLUMN_WIDTH, height);
  ctx.fillStyle = END_MODAL.TEXT_COLOR;
  ctx.fillText(name, columnX, columnY + height + GISTOGRAM.INNER_GAP);
};

var getMaxElement = function (array) {
  var maxElement = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};

// eslint-disable-next-line
var renderStatistics = function (ctx, names, times) {
  var shadowX = END_MODAL.START_X + END_MODAL.SHADOW_OFFSET;
  var shadowY = END_MODAL.START_Y + END_MODAL.SHADOW_OFFSET;
  var maxElement = getMaxElement(times);

  renderModal(ctx, shadowX, shadowY, END_MODAL.SHADOW_COLOR);
  renderModal(ctx, END_MODAL.START_X, END_MODAL.START_Y, END_MODAL.BACKGORUND_COLOR);

  ctx.font = FONT_STYLE;
  ctx.textBaseline = FONT_BASELINE;
  ctx.fillStyle = END_MODAL.TEXT_COLOR;
  ctx.fillText('Ура вы победили!', END_MODAL.START_X + END_MODAL.INNER_GAP, END_MODAL.START_Y + END_MODAL.INNER_GAP);
  ctx.fillText('Список результатов:', END_MODAL.START_X + END_MODAL.INNER_GAP, 60);

  for (var i = 0; i < names.length; i++) {
    var rate = times[i] / maxElement;
    var roundedTime = Math.floor(times[i]);
    renderGistogramColumn(ctx, rate, i, names[i], roundedTime);
  }
};
