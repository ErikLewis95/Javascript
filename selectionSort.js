function selectionSort(arr){
    let min;
    for (let i=0;i<arr.length;i++){
        //index of the smallest element to be the ith element.
        min =i ;
        //cek throuh the rest of the array for a lasser element
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min])min = j;
        }
        //compare the indexes and swap
        if (min !== i) [arr[i],arr[min]]= [arr[min],arr[i]];
    }
    return arr;
}
console.log(selectionSort([29,72,98,13,87,66,52,51,36]))