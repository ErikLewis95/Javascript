function LinearSearch(arr,x)
{
    let i;
    for(i=0;i<arr.length;i++){
        if (arr[i]=x){
            return i;
        }
    }
    return -i;
}
console.log(LinearSearch([2,20,10,3],20));

//binary search
function binarySearch(arr, l, r, x){
    if (r>=l){
        let mid = l +Math.floor((r-l)/2);
        //if the element is present at the middle itself
        if (arr[mid]== x) return mid;
        //if element is smaller than mid, then
        //it can only be present in left subarray
        if (arr[mid]>x)
        return binarySearch(arr, l, mid-1,x);
        return binarySearch(arr,mid+1,r,x);
    }
    return -1;
}
let arr=[2,3,4,10,40];
let x =10;
console.log(binarySearch(arr, 0, arr.length-1,x))