function myFunc(n) { 
    let hasil=[0,1];

    for (let i=2; i<=n;i++) {
        hasil.push(hasil[i-1]+hasil[2-1]);
    }
    return hasil.join(", ");
   }
  
     console.log(myFunc(10));//0,1,1,2,3,5,8
 