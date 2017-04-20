describe('Bubble Sort', function(){
	it('handles an empty array', function(){
		expect( bubbleSort([]) ).toEqual( [] );
	});
	it('sorts an array of size 1', function(){
		expect( bubbleSort([3]) ).toEqual( [3] );
	});
	it('sorts an unsorted array', function(){
		expect( bubbleSort([3,7,2,1]) ).toEqual( [1,2,3,7] );
	})
	it('sorts an array with duplicate elements', function(){
		expect( bubbleSort([3,7,7,2,1]) ).toEqual( [1,2,3,7,7] );
	});
	it('returns an already-sorted array', function(){
		expect( bubbleSort([1,2,3,7,7]) ).toEqual( [1,2,3,7,7] );
	});
	it('random string', function(){
		spyOn(window, 'swap').and.callThrough();
		bubbleSort([3,7,2,1]);
		expect(swap.calls.count()).toEqual(5);
		console.log(swap.calls.count());	
		});
});

