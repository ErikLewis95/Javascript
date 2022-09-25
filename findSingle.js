function findSingle(ar, ar_size)
    {
        // Do XOR of all elements and return
        let res = ar[0];
        for (let i = 1; i < ar_size; i++)
            res = res ^ ar[i];
 
        return res;
    }
 
// Driver code 
        let ar = [1,2,1,2,5];
        let n = ar.length;
        console.log("Element occurring once is "
            + findSingle(ar, n));