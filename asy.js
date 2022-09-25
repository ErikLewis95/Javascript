function calculator(a,b, callback){
    callback(a+b);
}
function displayer(something){
    console.log(something);
}
calculator(5,5, displayer)


setTimeout(message,3000);

function message(){
    console.log("Asynchrounus is easy!");
}