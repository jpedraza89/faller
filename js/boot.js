"use strict";

var Boot = function(game) {

};
Boot.prototype = {

	preload: function() {},
	create: function() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.state.start("Preload");
		this.game.canvas.id = 'game';
	}
};
