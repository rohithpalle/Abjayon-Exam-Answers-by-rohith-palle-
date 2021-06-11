function reverseArray(arr, start, end) {
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function leftRotate(arr, d, n) {
    if (d == 0) return;
    d = d % n;
  
    reverseArray(arr, 0, d - 1);
    reverseArray(arr, d, n - 1);
    reverseArray(arr, 0, n - 1);
}

function printArray(arr, size) {
    let output= '';
    
    for (var i = 0; i < size; i++) {
        let mainArray = arr[i] + " ";
        output = output + mainArray;
    }
    
    console.log(output);
}

var arr = [1, 2, 3, 4, 5,];
var n = 5;
var d = 2;
  
leftRotate(arr, d, n);
printArray(arr, n);