


function split(wholeArray) {

  if (wholeArray.length < 2) return wholeArray;

  var halfLength = wholeArray.length/2

  // if (halfLength % 2 !== 0) {
  // 	halfLength = Math.floor(halfLength);
  // 	halfLength += 1
  // }

  var firstHalf = wholeArray.slice(0, halfLength);
  var secondHalf = wholeArray.slice(halfLength);

  return [firstHalf, secondHalf];
}


function merge(arr1, arr2) {
	var resultsArr = [];
	if(!arr1.length){
		return arr2;
	}
	if(!arr2.length){
		return arr1;
	}
	while(arr1.length && arr2.length){
		if(arr1[0] > arr2[0]){
			var lesserArr = arr2;
			var greaterArr = arr1;
		}
		else {
			var lesserArr = arr1;
			var greaterArr = arr2;
		}
		resultsArr.push(lesserArr.shift());	
	}
	if(arr1.length){
		resultsArr = resultsArr.concat(arr1);
	}
	else{
		resultsArr = resultsArr.concat(arr2);

	}
	return resultsArr;
}

function mergeSort(arr){
	if(arr.length <= 1){
		return arr;
	}
	else {
		console.log('in the if statement');
		var splitArrs = split(arr);
		var sortedArr1 = mergeSort(splitArrs[0]);
		var sortedArr2 = mergeSort(splitArrs[1]);
		return merge(sortedArr1,sortedArr2);
	}
}