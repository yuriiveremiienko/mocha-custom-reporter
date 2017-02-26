# mocha-custom-reporter

To execute custom functions simply install package
```javascript
npm i mocha-custom-reporter --save
```
add as a reporter in 
```javascript
mochaOpts.reporter = 'mocha-custom-reporter'
```
and create global array **onFail** that contains custom functions to execute on every fail.

## Example:
```javascript
onPrepare: function () {

		global.onFail = [require('path_to_your_function'), anotherFail];
    
		function anotherFail(test, err) {
			console.log('\nTest failed - ' + test.title);
			console.log('Error:' + err + '\n');
		}
}
```
## Events supported: **onStart**, **onPending**, **onPass**, **onFail**, **onEnd**.
