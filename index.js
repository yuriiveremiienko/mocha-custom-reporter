/**
 * Created by Yurii_Veremiienko on 2/25/2017.
 */
'use strict';

var mocha = require('mocha');

module.exports = CustomReporter;

function CustomReporter(runner) {
	mocha.reporters.Base.call(this, runner);

	runner.on('start', function () {
		if (global.customReporter.onStart) {
			global.customReporter.onStart.forEach(function (action) {
				action();
			});
		}
	});

	runner.on('pending', function () {
		if (global.customReporter.onPending) {
			global.customReporter.onPending.forEach(function (action) {
				action();
			});
		}
	});

	runner.on('pass', function () {
		if (global.customReporter.onPass) {
			global.customReporter.onPass.forEach(function (action) {
				action();
			});
		}
	});

	runner.on('fail', function () {
		if (global.customReporter.onFail) {
			global.customReporter.onFail.forEach(function (action) {
				action();
			});
		}
	});

	runner.on('end', function () {
		if (global.customReporter.onEnd) {
			global.customReporter.onEnd.forEach(function (action) {
				action();
			});
		}
	});
}
