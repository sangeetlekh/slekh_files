(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
'use strict';

mejs.i18n.en['mejs.time-jump-forward'] = ['Jump forward 1 second', 'Jump forward %1 seconds'];

Object.assign(mejs.MepDefaults, {
	jumpForwardInterval: 10,

	jumpForwardText: null
});

Object.assign(MediaElementPlayer.prototype, {
	buildjumpforward: function buildjumpforward(player, controls, layers, media) {

		var t = this,
		    defaultTitle = mejs.i18n.t('mejs.time-jump-forward', t.options.jumpForwardInterval),
		    forwardTitle = mejs.Utils.isString(t.options.jumpForwardText) ? t.options.jumpForwardText.replace('%1', t.options.jumpForwardInterval) : defaultTitle,
		    button = document.createElement('div');

		button.className = t.options.classPrefix + 'button ' + t.options.classPrefix + 'jump-forward-button';
		button.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + forwardTitle + '" aria-label="' + forwardTitle + '" tabindex="0">' + t.options.jumpForwardInterval + '</button>';

		t.addControlElement(button, 'jumpforward');

		button.addEventListener('click', function () {
			var duration = !isNaN(media.duration) ? media.duration : t.options.jumpForwardInterval;
			if (duration) {
				var current = media.currentTime === Infinity ? 0 : media.currentTime;
				media.setCurrentTime(Math.min(current + t.options.jumpForwardInterval, duration));
				this.querySelector('button').blur();
			}
		});
	}
});

},{}]},{},[1]);

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
'use strict';

mejs.i18n.en['mejs.time-skip-back'] = ['Skip back 1 second', 'Skip back %1 seconds'];

Object.assign(mejs.MepDefaults, {
	skipBackInterval: 10,

	skipBackText: null
});

Object.assign(MediaElementPlayer.prototype, {
	buildskipback: function buildskipback(player, controls, layers, media) {
		var t = this,
		    defaultTitle = mejs.i18n.t('mejs.time-skip-back', t.options.skipBackInterval),
		    skipTitle = mejs.Utils.isString(t.options.skipBackText) ? t.options.skipBackText.replace('%1', t.options.skipBackInterval) : defaultTitle,
		    button = document.createElement('div');

		button.className = t.options.classPrefix + 'button ' + t.options.classPrefix + 'skip-back-button';
		button.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + skipTitle + '" aria-label="' + skipTitle + '" tabindex="0">' + t.options.skipBackInterval + '</button>';

		t.addControlElement(button, 'skipback');

		button.addEventListener('click', function () {
			var duration = !isNaN(media.duration) ? media.duration : t.options.skipBackInterval;
			if (duration) {
				var current = media.currentTime === Infinity ? 0 : media.currentTime;
				media.setCurrentTime(Math.max(current - t.options.skipBackInterval, 0));
				this.querySelector('button').blur();
			}
		});
	}
});

},{}]},{},[1]);

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
'use strict';

mejs.i18n.en['mejs.loop'] = 'Toggle Loop';

Object.assign(mejs.MepDefaults, {
	loopText: null
});

Object.assign(MediaElementPlayer.prototype, {
	buildloop: function buildloop(player) {
		var t = this,
		    loopTitle = mejs.Utils.isString(t.options.loopText) ? t.options.loopText : mejs.i18n.t('mejs.loop'),
		    loop = document.createElement('div');

		loop.className = t.options.classPrefix + 'button ' + t.options.classPrefix + 'loop-button ' + (player.options.loop ? t.options.classPrefix + 'loop-on' : t.options.classPrefix + 'loop-off');
		loop.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + loopTitle + '" aria-label="' + loopTitle + '" tabindex="0"></button>';

		t.addControlElement(loop, 'loop');

		loop.addEventListener('click', function () {
			player.options.loop = !player.options.loop;
			if (player.options.loop) {
				mejs.Utils.removeClass(loop, t.options.classPrefix + 'loop-off');
				mejs.Utils.addClass(loop, t.options.classPrefix + 'loop-on');
			} else {
				mejs.Utils.removeClass(loop, t.options.classPrefix + 'loop-on');
				mejs.Utils.addClass(loop, t.options.classPrefix + 'loop-off');
			}
		});
	}
});

},{}]},{},[1]);