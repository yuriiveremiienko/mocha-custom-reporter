/**
 * Created by Yurii_Veremiienko on 2/25/2017.
 */
var mocha = require('mocha');
module.exports = CustomReporter;

function CustomReporter(runner) {
	mocha.reporters.Base.call(this, runner);

	runner.on('start', function () {
		console.log('runner on start');
	});

	runner.on('pending', function () {
		console.log('runner on pending');
	});

	runner.on('pass', function () {
		console.log('runner on pass');
	});

	runner.on('fail', function () {
		console.log('runner on fail');
	});

	runner.on('end', function () {
		console.log('runner on end');
	});
}
