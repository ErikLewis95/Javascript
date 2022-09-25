const tryPromise = new Promise((resolve, reject) =>{
    let isError = false;
    if(isError) reject("Error");
    else resolve("Success");
});
tryPromise
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
.finally(()=>console.log("finally done"))

