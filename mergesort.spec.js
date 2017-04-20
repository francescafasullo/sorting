// describe('Bubble Sort', function(){
// 	it('handles an empty array', function(){
// 		expect( bubbleSort([]) ).toEqual( [] );
// 	});
// 	it('sorts an array of size 1', function(){
// 		expect( bubbleSort([3]) ).toEqual( [3] );
// 	});
// 	it('sorts an unsorted array', function(){
// 		expect( bubbleSort([3,7,2,1]) ).toEqual( [1,2,3,7] );
// 	})
// 	it('sorts an array with duplicate elements', function(){
// 		expect( bubbleSort([3,7,7,2,1]) ).toEqual( [1,2,3,7,7] );
// 	});
// 	it('returns an already-sorted array', function(){
// 		expect( bubbleSort([1,2,3,7,7]) ).toEqual( [1,2,3,7,7] );
// 	});
// 	it('random string', function(){
// 		spyOn(window, 'swap').and.callThrough();
// 		bubbleSort([3,7,2,1]);
// 		expect(swap.calls.count()).toEqual(5);
// 		console.log(swap.calls.count());	
// 		});
// });


describe('Split', function() {
	it('handles an empty array', function(){
 		expect( split([]) ).toEqual( [] );
 	});
	it('handles an array with one element', function(){
 		expect( split([8]) ).toEqual( [8] );
 	});
	it('handles an array with an even number of elements', function(){
 		expect( split([8, 7, 9, 10]) ).toEqual( [[8, 7], [9, 10]] );
 		});
	it('handles an array with an odd number of elements', function(){
 		expect( split([8, 7, 9, 10, 11]) ).toEqual( [[8, 7], [9, 10, 11]] );
 		});
});


describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1, 3, 5], [2, 10, 10])).toEqual([1, 2, 3, 5, 10, 10]);
  });
  it('is able to merge arrays of different sizes', function(){
    expect(merge([1, 3, 5, 19], [2, 10, 10])).toEqual( [1, 2, 3, 5, 10, 10, 19]);
  });
  it('can handle an empty array', function(){
    expect(merge([1, 3, 5], [])).toEqual( [1, 3, 5]);
  });
});

describe('Merge Sort', function(){
	it('is able to sort an unsorted array with an odd number of elements', function(){
    	expect(mergeSort([23, 5, 21, 14, 7, 1, 6, 7, 12])).toEqual([1, 5, 6, 7, 7, 12, 14, 21, 23]);
  	});
  	it('is able to sort an unsorted array with an even number of elements', function(){
    	expect(mergeSort([23, 5, 21, 14, 7, 1, 6, 7, 12, 8])).toEqual([1, 5, 6, 7, 7, 8, 12, 14, 21, 23]);
  	});
})