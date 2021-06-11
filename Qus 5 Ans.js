function getHighOnes(mat) {
    let max_count = [];
    let highCount = [];
    
    for (let m of mat){
    let lengArr = m.length;
    let count = 0;
    for (let row in mat){
        let everWord = m[row];
        if (everWord === 1){
            count = count + 1;
        }
    }
    if (count > Math.ceil(lengArr/2)) {
        max_count.push(count);
    }
    
    for (let maxC of max_count) {
        if (count === maxC) {
            highCount.push(count);
        }
    }
}
getValueIndex(mat, highCount);
}



function getValueIndex(mat, highCount) {
    let highCountLength = highCount.length;
    let theCount = highCountLength - 1;

    for (let k of mat) {
        let lengArr = k.length;
        let count = 0;
        for (let h in mat) { 
            let everWord = k[h];
            if (everWord === 1){
                count = count + 1;
            }
           if (count === highCount[theCount]){
               let val = mat.findIndex(function (arr) {
                   return arr === k; 
               });
               console.log(val);
           }
        }
   }
}


let mat1 = [ [0,1,1,1],
           [0,0,1,1],
           [1,1,1,1],
           [0,0,0,0] ]; 

let mat2 = [ [0,0,1,1],
           [0,1,1,1],
           [0,0,0,1],
           [0,0,0,0] ]; 


getHighOnes(mat1)
getHighOnes(mat2)