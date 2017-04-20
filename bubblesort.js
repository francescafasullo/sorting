function bubbleSort(arr){
	var changed;
	while(true){
		changed = false;
		arr.forEach(function(element, index, arr){
			if(index != arr.length - 1){
				if(element > arr[index + 1]){
					changed = true;
					swap(arr, index, index+1);
			}
		}
	})
	if(changed === false){
		break;
	}	
}
	return arr;
}

//we want the while loop to stop when array is sorted
//while loop will run indefinitely until break is reached

function swap(arr, index1, index2){
	var temp = arr[index2];
	arr[index2] = arr[index1];
	arr[index1] = temp;
}
