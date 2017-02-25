/**
 * Created by Yurii_Veremiienko on 2/25/2017.
 */
'use strict';

var mocha = require('mocha');

module.exports = CustomReporter;

function CustomReporter(runner) {
	mocha.reporters.Base.call(this, runner);


	runner.on('start', function (test) {
		if (global.onStart) {
			global.onStart.forEach(function (action) {
				action(test);
			});
		}
	});

	runner.on('pending', function (test) {
		if (global.onPending) {
			global.onPending.forEach(function (action) {
				action(test);
			});
		}
	});

	runner.on('pass', function (test) {
		if (global.onPass) {
			global.onPass.forEach(function (action) {
				action(test);
			});
		}
	});

	runner.on('fail', function (test) {
		if (global.onFail) {
			global.onFail.forEach(function (action) {
				action(test);
			});
		}
	});

	runner.on('end', function (test) {
		if (global.onEnd) {
			global.onEnd.forEach(function (action) {
				action(test);
			});
		}
	});
}
