function fib() {
	var first = 0;
	var second = 0;
	var ans;
	function nacci() {
		if (second == 0) {
			console.log(1);
			second = 1
		} else {
			ans = first + second;
			first = second;
			second = ans;
			console.log(ans);
		}
	}
	return nacci;
}


var fibCounter = fib();


fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"