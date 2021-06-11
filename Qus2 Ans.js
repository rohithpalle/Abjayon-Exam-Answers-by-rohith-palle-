function findMajority(arr, n){
    let maxCount = 0;
    let index = -1;
     
    for(let i = 0; i < n; i++){
        let count = 0;
        for(let j = 0; j < n; j++){
            if (arr[i] == arr[j])
                count++;
        }
        
        if (count > maxCount){
            maxCount = count;
            index = i;
        }
    }
    
    if (maxCount > n / 2){
        console.log(arr[index]);
    }else{
        console.log("No Majority Element");
    }    
}
 

let arr1 = [3, 3, 4, 2, 4, 4, 2, 4, 4];
let arr2 = [3, 3, 4, 2, 4, 4, 2, 4];

let n1 = arr1.length;
let n2 = arr2.length; 

findMajority(arr1, n1);
findMajority(arr2, n2);