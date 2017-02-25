/**
 * Created by Yurii_Veremiienko on 2/25/2017.
 */
'use strict';

var mocha = require('mocha');

module.exports = CustomReporter;

function CustomReporter(runner) {
	mocha.reporters.Base.call(this, runner);

	runner.on('start', function () {
		if (global.onStart) {
			global.customReporter.forEach(function (action) {
				action();
			});
		}
	});

	runner.on('pending', function () {
		if (global.onPending) {
			global.onPending.forEach(function (action) {
				action();
			});
		}
	});

	runner.on('pass', function () {
		if (global.onPass) {
			global.onPass.forEach(function (action) {
				action();
			});
		}
	});

	runner.on('fail', function () {
		if (global.onFail) {
			global.onFail.forEach(function (action) {
				action();
			});
		}
	});

	runner.on('end', function () {
		if (global.onEnd) {
			global.onEnd.forEach(function (action) {
				action();
			});
		}
	});
}
