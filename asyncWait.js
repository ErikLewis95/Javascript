
// const tryPromise = new Promise((resolve, reject) =>{
//     let isError = false;
//     if(isError) reject("Error");
//     else resolve("Success");
// });
// const asynchAwait = () => {
//     console.log('satu');
//      tryPromise
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// .finally(()=>console.log("finally done"))
// console.log('dua')
// };
// asynchAwait();


//async Await
// const tryPromise = new Promise((resolve, reject) =>{
//     let isError = false;
//     if(isError) reject("Error");
//     else resolve("Success");
// });
// const asynchAwait = async () => {
//     console.log('satu');
//     await tryPromise
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// .finally(()=>console.log("finally done"))
// console.log('dua')
// };
// asynchAwait();


//tryAndcatch
// const tryPromise = new Promise((resolve, reject) =>{
//     let isError = false;
//     if(isError) reject("Error");
//     else resolve("Success");
// });
// const tryAndCatch = async () => {
// try{
// let result = await tryPromise;
// console.log(result);
// }catch(error){
//     console.log(error)
// }
// };
// tryAndCatch();


