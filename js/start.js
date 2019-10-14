'use strict';
(function () {
  var CONST = window.CONST;

  var renderModal = function (ctx, x, y, color) {
    ctx.beginPath();
    ctx.moveTo(x, CONST.END_MODAL.START_Y);
    ctx.lineTo(x + CONST.END_MODAL.WIDTH / 2, y + CONST.END_MODAL.INWARD_SHIFT);
    ctx.lineTo(x + CONST.END_MODAL.WIDTH, y);
    ctx.lineTo(x + CONST.END_MODAL.WIDTH - CONST.END_MODAL.INWARD_SHIFT, y + CONST.END_MODAL.HEIGHT / 2);
    ctx.lineTo(x + CONST.END_MODAL.WIDTH, y + CONST.END_MODAL.HEIGHT);
    ctx.lineTo(x, y + CONST.END_MODAL.HEIGHT);
    ctx.lineTo(x + CONST.END_MODAL.INWARD_SHIFT, y + CONST.END_MODAL.HEIGHT / 2);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
  };

  var renderRectangle = function (ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  var renderText = function (ctx, text, x, y, color) {
    ctx.font = CONST.FONT_STYLE;
    ctx.textBaseline = CONST.FONT_BASELINE;
    ctx.fillStyle = color || CONST.END_MODAL.TEXT_COLOR;
    ctx.fillText(text, x, y);
  };

  var renderGistogramColumn = function (ctx, ratio, index, name, time) {
    var maxHeight = CONST.GISTOGRAM.HEIGHT - CONST.GISTOGRAM.TEXT_HEIGHT;
    var height = maxHeight * ratio;
    var columnX = CONST.END_MODAL.START_X + CONST.END_MODAL.INNER_GAP + (CONST.GISTOGRAM.COLUMN_WIDTH + CONST.GISTOGRAM.CULUMN_MARGIN) * index;
    var columnY = CONST.END_MODAL.START_Y + CONST.END_MODAL.HEIGHT - CONST.END_MODAL.INNER_GAP - height - CONST.GISTOGRAM.TEXT_HEIGHT;
    var otherPlayersColor = 'hsl(240,' + Math.floor(Math.random() * 100) + '%, 50%)';
    var color = name === CONST.GISTOGRAM.MAIN_PLAYER ? CONST.GISTOGRAM.MAIN_COLOR : otherPlayersColor;

    renderText(ctx, time, columnX, columnY - CONST.GISTOGRAM.INNER_GAP);
    renderRectangle(ctx, columnX, columnY, CONST.GISTOGRAM.COLUMN_WIDTH, height, color);
    renderText(ctx, name, columnX, columnY + height + CONST.GISTOGRAM.INNER_GAP);
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
  window.renderStatistics = function (ctx, names, times) {
    var shadowX = CONST.END_MODAL.START_X + CONST.END_MODAL.SHADOW_OFFSET;
    var shadowY = CONST.END_MODAL.START_Y + CONST.END_MODAL.SHADOW_OFFSET;
    var maxElement = getMaxElement(times);

    renderModal(ctx, shadowX, shadowY, CONST.END_MODAL.SHADOW_COLOR);
    renderModal(ctx, CONST.END_MODAL.START_X, CONST.END_MODAL.START_Y, CONST.END_MODAL.BACKGORUND_COLOR);

    renderText(ctx, 'Ура вы победили!', CONST.END_MODAL.START_X + CONST.END_MODAL.INNER_GAP, CONST.END_MODAL.START_Y + CONST.END_MODAL.INNER_GAP);
    renderText(ctx, 'Список результатов:', CONST.END_MODAL.START_X + CONST.END_MODAL.INNER_GAP, 60);

    for (var i = 0; i < names.length; i++) {
      var rate = times[i] / maxElement;
      var roundedTime = Math.floor(times[i]);
      renderGistogramColumn(ctx, rate, i, names[i], roundedTime);
    }
  };
})();

