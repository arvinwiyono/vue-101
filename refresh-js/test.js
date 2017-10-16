describe("pow", function(){
	

	describe("raises x to power n", function(){

		before(() => alert('Testing started - before all tests'));
		after(() => alert('Testing finished - after all tests'));

		function makeTest(x){
			let expected = x * x * x;
			it(`${x} in the power 3 is ${expected}`, function(){
				assert.equal(pow(x, 3), expected);
			});
		}
		for (var i = 1; i < 6; i++) {
			makeTest(i);
		}
	});
});